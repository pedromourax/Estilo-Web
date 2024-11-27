'use client';

import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <div suppressHydrationWarning>
      {children}
    </div>
  );
}