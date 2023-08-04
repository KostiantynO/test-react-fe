import type { ThemeState } from '../types/storeTypes';

export const createThemeSlice: ThemeState = set => ({
  layout: 'modern',

  setLayout: newLayout => {
    set(() => ({ layout: newLayout }));
  },
});
