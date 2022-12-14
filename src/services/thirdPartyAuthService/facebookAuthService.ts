import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
  Profile,
} from 'react-native-fbsdk-next';

class FacebookAuthService {
  signIn = async () => {
    try {
      const fbResult = await LoginManager.logInWithPermissions([
        'email',
        'public_profile',
      ]);

      if (
        fbResult &&
        !fbResult.isCancelled &&
        fbResult.declinedPermissions &&
        fbResult.declinedPermissions.includes('email')
      ) {
        throw new Error('Please accept the email permission');
      }
      if (fbResult.isCancelled) {
        throw new Error('Cancelled by user');
      }
      const data = await AccessToken.getCurrentAccessToken();
      if (!data || !data.accessToken) {
        throw new Error("Couldn't obtain access token");
      }
      const {accessToken} = data;
      const currentProfile = await this.getProfile(accessToken);

      return {
        accessToken,
        fullResult: {
          user: currentProfile,
          loginResult: fbResult,
        },
      };
    } catch (error) {
      throw error;
    }
  };

  signOut = () => {
    LoginManager.logOut();
  };

  getProfile = async (accessToken: string) => {
    const currentProfile = await Profile.getCurrentProfile();
    if (!currentProfile || !currentProfile.email) {
      const graphProfile = await this._fetchProfileWithGraph(accessToken);
      return graphProfile;
    } else {
      return currentProfile;
    }
  };

  _fetchProfileWithGraph = async (accessToken: any) => {
    return new Promise((resolve, reject) => {
      const infoRequest = new GraphRequest(
        '/me',
        {
          accessToken,
          parameters: {
            fields: {
              string: 'email,name,first_name,middle_name,last_name',
            },
          },
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        },
      );
      new GraphRequestManager().addRequest(infoRequest).start();
    });
  };
}

const facebookAuthService = new FacebookAuthService();
export default facebookAuthService;
