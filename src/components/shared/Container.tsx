import type { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => (
  <div className="p-4">{children}</div>
);
