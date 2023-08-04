import { create } from 'zustand';

import { createThemeSlice } from './themeSlice';
import { createUISlice } from './uiSlice';

import type { Store } from '../types/storeTypes';

export const useStore = create<Store>()((...a) => ({
  ...createThemeSlice(...a),
  ...createUISlice(...a),
}));

export const selectIsDrawerOpen = (state: Store) => state.isDrawerOpen;
export const selectLayout = (state: Store) => state.layout;

// const bears = useStore((state) => state.bears)
// const fishes = useStore((state) => state.fishes)
// const addBear = useStore((state) => state.addBear)
