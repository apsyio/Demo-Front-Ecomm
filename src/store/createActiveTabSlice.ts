import type {StateCreator} from 'zustand';

type ActiveTabType = 'Home' | 'Brands' | 'Feed' | 'Styles' | 'Inspo';

export type ActiveTabState = {
  activeTab: ActiveTabType;
  setActiveTab: (activeTab: ActiveTabType) => void;
};

export const createActiveTabSlice: StateCreator<ActiveTabState> = set => ({
  activeTab: 'Home',
  setActiveTab: (activeTab: ActiveTabType) => set({activeTab}),
});

export default createActiveTabSlice;
