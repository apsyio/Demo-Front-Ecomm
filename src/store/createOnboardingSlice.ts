import type {StateCreator} from 'zustand';

export type OnboardingState = {
  isOnboardingViewed: boolean;
  setIsOnboardingViewed: (isOnboardingViewed: boolean) => void;
};

export const createOnboardingSlice: StateCreator<OnboardingState> = set => ({
  isOnboardingViewed: false,

  setIsOnboardingViewed: (isOnboardingViewed: boolean) =>
    set({isOnboardingViewed}),
});

export default createOnboardingSlice;
