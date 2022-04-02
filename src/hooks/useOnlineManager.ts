import NetInfo from '@react-native-community/netinfo';
import {useEffect} from 'react';

export function useOnlineManager() {
  useEffect(() => {
    return NetInfo.addEventListener(state => {
      state.isConnected && Boolean(state.isInternetReachable);
    });
  }, []);
}
