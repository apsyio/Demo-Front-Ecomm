import AsyncStorage from '@react-native-async-storage/async-storage';
import create, {GetState, SetState, StoreApi} from 'zustand';
import {persist} from 'zustand/middleware';

import {AuthState, createAuthSlice} from './createAuthSlice';
import {createOnboardingSlice, OnboardingState} from './createOnboardingSlice';

interface IStore extends AuthState, OnboardingState {}

/**
 * Make sure to enforce type for each slice
 */

export const useStore = create<IStore>(
  persist(
    (set, get, api) => ({
      ...createAuthSlice(
        set as unknown as SetState<AuthState>,
        get as GetState<AuthState>,
        api as unknown as StoreApi<AuthState>,
      ),
      ...createOnboardingSlice(
        set as unknown as SetState<OnboardingState>,
        get as GetState<OnboardingState>,
        api as unknown as StoreApi<OnboardingState>,
      ),
    }),
    {
      name: 'app-storage',
      getStorage: () => AsyncStorage,
    },
  ),
);
