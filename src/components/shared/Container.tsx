import classNames from 'classnames';

import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => (
  <div
    className={classNames(
      'container max-w-[360px] desktop:max-w-[1440px] bg-red-600',
      className
    )}
  >
    {children}
  </div>
);
