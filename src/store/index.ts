import AsyncStorage from '@react-native-async-storage/async-storage';
import type {GetState, SetState, StoreApi} from 'zustand';
import create from 'zustand';
import {persist} from 'zustand/middleware';

import type {ActiveTabState} from './createActiveTabSlice';
import createActiveTabSlice from './createActiveTabSlice';
import type {AuthState} from './createAuthSlice';
import {createAuthSlice} from './createAuthSlice';
import type {OnboardingState} from './createOnboardingSlice';
import {createOnboardingSlice} from './createOnboardingSlice';

interface IStore extends AuthState, OnboardingState, ActiveTabState {}

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
      ...createActiveTabSlice(
        set as unknown as SetState<ActiveTabState>,
        get as GetState<ActiveTabState>,
        api as unknown as StoreApi<ActiveTabState>,
      ),
    }),
    {
      name: 'app-storage',
      getStorage: () => AsyncStorage,
    },
  ),
);
