import type {AuthStackParamList} from './AuthStack';
import type {BrandsStackParamList} from './BrandsStack';
import type {FeedStackParamList} from './FeedStack';
import type {HomeStackParamList} from './HomeStack';
import type {InspoStackParamList} from './InspoStack';
import type {MainStackParamList} from './MainStack';
import type {StylesStackParamList} from './StylesStack';

export type RootStackParamList = AuthStackParamList &
  MainStackParamList &
  HomeStackParamList &
  BrandsStackParamList &
  FeedStackParamList &
  StylesStackParamList &
  InspoStackParamList;

declare global {
  // Specifying this type is important if you heavily use useNavigation, Link etc. in your app since it'll ensure type-safety.
  // READ MORE: https://reactnavigation.org/docs/typescript/#specifying-default-types-for-usenavigation-link-ref-etc

  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}
