/**
 * Robust CV Download Helper
 * Handles downloads across standard browsers, mobile devices, and sandboxed iframes.
 */
export async function downloadCvFile(): Promise<boolean> {
  const pdfUrl = '/assets/Chaminda-Sampath-CV.pdf';
  const apiUrl = '/api/cv';
  const filename = 'Chaminda-Sampath-CV.pdf';

  try {
    // 1. Try fetching via API route as a Blob
    const response = await fetch(apiUrl, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error(`Failed to fetch from API: ${response.status}`);
    }

    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const anchor = document.createElement('a');
    anchor.style.display = 'none';
    anchor.href = blobUrl;
    anchor.download = filename;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';

    document.body.appendChild(anchor);
    anchor.click();

    // Clean up
    setTimeout(() => {
      document.body.removeChild(anchor);
      window.URL.revokeObjectURL(blobUrl);
    }, 1000);

    return true;
  } catch (err) {
    console.warn('Blob download encountered an issue, falling back to direct navigation:', err);

    // Fallback: direct window.open or anchor click
    try {
      const fallbackAnchor = document.createElement('a');
      fallbackAnchor.href = pdfUrl;
      fallbackAnchor.download = filename;
      fallbackAnchor.target = '_blank';
      fallbackAnchor.rel = 'noopener noreferrer';
      document.body.appendChild(fallbackAnchor);
      fallbackAnchor.click();
      setTimeout(() => {
        document.body.removeChild(fallbackAnchor);
      }, 500);
      return true;
    } catch (fallbackErr) {
      console.error('All download methods failed, opening in new window:', fallbackErr);
      window.open(pdfUrl, '_blank');
      return false;
    }
  }
}
