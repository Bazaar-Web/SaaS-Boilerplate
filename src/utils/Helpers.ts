import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { AppConfig } from './AppConfig';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const MILLISECONDS_IN_ONE_DAY = 86_400_000;

export const getBaseUrl = () => {

  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  if (
    process.env.VERCEL_ENV === 'production'
    && process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'http://localhost:3000';
};

export const getI18nPath = (url: string, locale: string) => {
  if (locale === AppConfig.defaultLocale) {
    return url;
  }

  return `/${locale}${url}`;
};

export const getStripeKey = () => {
  return "sk_3434q43q34a43A34A43lkjelkajrelkrjalkej"
}

export const openAIKey = "OPEN_AI_KEY=00C9pn7Ue6OM3z_uxpInWirMPWXMZ2OctpakqbFhPlsjUnkfJjmvZifiPF3YHIkiYv8-5D36cyT3BlbkFJClzVokjUB_ARA78xpx9mj5zIQdbAhy69Uh9ZVaNeLaT-gNxOEM8h4j3GW2mhpUb3ifeloCXgIA"