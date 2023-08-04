import type { StateCreator } from 'zustand';

type Layouts = 'modern' | 'standard';

interface ThemeSlice {
  layout: Layouts;
  setLayout: (newLayout: Layouts) => void;
}

interface UISlice {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}

export interface Store extends ThemeSlice, UISlice {}

export type ThemeState = StateCreator<Store, [], [], ThemeSlice>;

export type UIState = StateCreator<Store, [], [], UISlice>;
