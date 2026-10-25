'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

/**
 * Ensures that whenever the website is opened or refreshed on any sub-page/tab
 * (e.g. /calculators, /faqs, /contacts, etc.), it immediately redirects to the
 * Home page ('/') so the visitor always lands and starts from the Home page.
 */
export default function HomeRedirectOnLanding() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname !== '/') {
      router.replace('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
