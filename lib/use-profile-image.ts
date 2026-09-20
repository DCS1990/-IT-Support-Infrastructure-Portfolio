'use client';

import { useSyncExternalStore } from 'react';
import { personalInfo } from '@/src/data/profile';

const STORAGE_KEY = 'chaminda_custom_avatar';

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('profile_image_updated', callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('profile_image_updated', callback);
    window.removeEventListener('storage', callback);
  };
}

function getSnapshot(): string {
  if (typeof window === 'undefined') return '';
  try {
    return localStorage.getItem(STORAGE_KEY) || '';
  } catch {
    return '';
  }
}

function getServerSnapshot(): string {
  return '';
}

export function useProfileImage() {
  const customImage = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const profileImage = customImage || personalInfo.profileImage;
  const isCustom = Boolean(customImage);

  const setCustomImage = (dataUrl: string) => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, dataUrl);
      window.dispatchEvent(new Event('profile_image_updated'));
    } catch {
      // ignore
    }
  };

  const resetImage = () => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.removeItem(STORAGE_KEY);
      window.dispatchEvent(new Event('profile_image_updated'));
    } catch {
      // ignore
    }
  };

  return {
    profileImage,
    isCustom,
    setCustomImage,
    resetImage,
  };
}
