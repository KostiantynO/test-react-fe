import type { UIState } from '../types/storeTypes';

export const createUISlice: UIState = set => ({
  isDrawerOpen: false,
  toggleDrawer: () => {
    set(state => ({ isDrawerOpen: !state.isDrawerOpen }));
  },
});
