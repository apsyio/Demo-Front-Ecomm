import AsyncStorage from '@react-native-async-storage/async-storage';
import create, {StateCreator} from 'zustand';
import {persist, PersistOptions} from 'zustand/middleware';

export type OnboardingState = {
  isOnboardingViewed: boolean;
  setIsOnboardingViewed: (isOnboardingViewed: boolean) => void;
};

type OnboardingPersist = (
  config: StateCreator<OnboardingState>,
  options: PersistOptions<OnboardingState>,
) => StateCreator<OnboardingState>;

export const onboardingStore = create<OnboardingState>(
  (persist as OnboardingPersist)(
    set => ({
      isOnboardingViewed: false,

      setIsOnboardingViewed: (isOnboardingViewed: boolean) =>
        set({isOnboardingViewed}),
    }),
    {
      name: 'onboarding-storage',
      getStorage: () => AsyncStorage,
    },
  ),
);

export default onboardingStore;
