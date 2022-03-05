import type {
  PushNotificationDeliveredObject,
  PushNotificationObject,
  PushNotificationPermissions,
  PushNotificationScheduledLocalObject,
  PushNotificationScheduleObject,
} from 'react-native-push-notification';
import PushNotification, {Importance} from 'react-native-push-notification';

import NotificationHandler from './NotificationHandler';

export default class NotifService {
  constructor(onRegister: any, onNotification: any) {
    this.lastId = 0;
    this.lastChannelCounter = 0;

    this.createDefaultChannels();

    NotificationHandler.attachRegister(onRegister);
    NotificationHandler.attachNotification(onNotification);

    // Clear badge number at start
    PushNotification.getApplicationIconBadgeNumber(function (number) {
      if (number > 0) {
        PushNotification.setApplicationIconBadgeNumber(0);
      }
    });

    PushNotification.getChannels(function (channels) {
      console.log(channels);
    });
  }

  createDefaultChannels() {
    PushNotification.createChannel(
      {
        channelId: 'default-channel-id', // (required)
        channelName: 'Default channel', // (required)
        channelDescription: 'A default channel', // (optional) default: undefined.
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      created =>
        console.log(`createChannel 'default-channel-id' returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
    PushNotification.createChannel(
      {
        channelId: 'sound-channel-id', // (required)
        channelName: 'Sound channel', // (required)
        channelDescription: 'A sound channel', // (optional) default: undefined.
        // soundName: 'sample.mp3', // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      created =>
        console.log(`createChannel 'sound-channel-id' returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }

  createOrUpdateChannel() {
    this.lastChannelCounter++;
    PushNotification.createChannel(
      {
        channelId: 'custom-channel-id', // (required)
        channelName: `Custom channel - Counter: ${this.lastChannelCounter}`, // (required)
        channelDescription: `A custom channel to categorise your custom notifications. Updated at: ${Date.now()}`, // (optional) default: undefined.
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }

  popInitialNotification() {
    PushNotification.popInitialNotification(notification =>
      console.log('InitialNotication:', notification),
    );
  }

  localNotif(notification: PushNotificationObject) {
    this.lastId++;
    PushNotification.localNotification({
      /* Android Only Properties */
      channelId: notification.soundName
        ? 'sound-channel-id'
        : 'default-channel-id',
      largeIcon: '', // (optional) default: "ic_launcher"
      smallIcon: '', // (optional) default: "ic_notification" with fallback for "ic_launcher"
      bigText: 'My big text that will be shown when notification is expanded', // (optional) default: "message" prop
      subText: 'This is a subText', // (optional) default: none
      color: 'red', // (optional) default: system default
      largeIconUrl: '',
      bigLargeIcon: '',
      ...notification,
    });
  }

  scheduleNotif(notification: PushNotificationScheduleObject) {
    this.lastId++;
    PushNotification.localNotificationSchedule({
      /* Android Only Properties */
      channelId: notification.soundName
        ? 'sound-channel-id'
        : 'default-channel-id',
      ticker: 'My Notification Ticker', // (optional)
      autoCancel: true, // (optional) default: true
      largeIcon: 'ic_launcher', // (optional) default: "ic_launcher"
      smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher"
      color: 'blue', // (optional) default: system default,

      ...notification,
    });
  }

  checkPermission(cbk: (permissions: PushNotificationPermissions) => void) {
    return PushNotification.checkPermissions(cbk);
  }

  requestPermissions() {
    return PushNotification.requestPermissions();
  }

  cancelNotif() {
    PushNotification.cancelLocalNotification(this.lastId);
  }

  cancelAll() {
    PushNotification.cancelAllLocalNotifications();
  }

  abandonPermissions() {
    PushNotification.abandonPermissions();
  }

  getScheduledLocalNotifications(
    callback: (notifications: PushNotificationScheduledLocalObject[]) => void,
  ) {
    PushNotification.getScheduledLocalNotifications(callback);
  }

  getDeliveredNotifications(
    callback: (notifications: PushNotificationDeliveredObject[]) => void,
  ) {
    PushNotification.getDeliveredNotifications(callback);
  }
}
