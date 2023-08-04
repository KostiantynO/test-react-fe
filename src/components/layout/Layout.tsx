import { lazy, Suspense } from 'react';
import { selectLayout, useStore } from 'store';

const layouts = {
  standard: () => 'Standard layout not implemented yet',
  modern: lazy(() => import('./Modern')),
};

export const Layout = () => {
  const layout = useStore(selectLayout);
  const Element = layouts[layout];

  return (
    <Suspense fallback="">
      <Element />
    </Suspense>
  );
};
