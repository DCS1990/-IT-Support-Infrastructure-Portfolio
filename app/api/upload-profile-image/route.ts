import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || '';
    let buffer: Buffer;

    if (contentType.includes('application/json')) {
      const body = await req.json();
      const dataUrl = body.image || body.dataUrl;
      if (!dataUrl) {
        return NextResponse.json({ error: 'No image data provided' }, { status: 400 });
      }
      const matches = dataUrl.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
      if (matches && matches[2]) {
        buffer = Buffer.from(matches[2], 'base64');
      } else {
        buffer = Buffer.from(dataUrl, 'base64');
      }
    } else if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      const file = formData.get('file') as File | null;
      if (!file) {
        return NextResponse.json({ error: 'No file provided in form data' }, { status: 400 });
      }
      const arrayBuffer = await file.arrayBuffer();
      buffer = Buffer.from(arrayBuffer);
    } else {
      const arrayBuffer = await req.arrayBuffer();
      buffer = Buffer.from(arrayBuffer);
    }

    if (!buffer || buffer.length === 0) {
      return NextResponse.json({ error: 'Empty image buffer' }, { status: 400 });
    }

    // Maximum 5MB file size limit
    const MAX_SIZE = 5 * 1024 * 1024;
    if (buffer.length > MAX_SIZE) {
      return NextResponse.json({ error: 'Image size exceeds the 5MB limit.' }, { status: 413 });
    }

    // Optional admin token check if configured in environment
    const uploadSecret = process.env.ADMIN_UPLOAD_SECRET;
    if (uploadSecret) {
      const authHeader = req.headers.get('authorization') || req.headers.get('x-admin-secret');
      if (authHeader !== `Bearer ${uploadSecret}` && authHeader !== uploadSecret) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
    }

    // Target file path in public/assets/chaminda-profile.jpg
    const targetDir = path.join(process.cwd(), 'public', 'assets');
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const targetPath = path.join(targetDir, 'chaminda-profile.jpg');
    fs.writeFileSync(targetPath, buffer);

    return NextResponse.json({
      success: true,
      message: 'Profile image updated successfully',
      url: `/assets/chaminda-profile.jpg?v=${Date.now()}`
    });
  } catch (error: any) {
    console.error('Error saving profile image:', error);
    return NextResponse.json(
      { error: 'Failed to update profile image', details: error.message },
      { status: 500 }
    );
  }
}
