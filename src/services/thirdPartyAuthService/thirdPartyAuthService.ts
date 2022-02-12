import firebaseAuthService from './firebaseAuthService';
import googleAuthService from './googleAuthService';

class ThirdPartyAuthService {
  loginWithGoogle = async () => {
    let email;
    try {
      firebaseAuthService.signOut();
      const {accessToken, fullResult: googleLoginResult} =
        await googleAuthService.signIn();

      email = googleLoginResult?.user?.email;
      if (!email) {
        throw new Error('Please accept the email permission');
      }

      if (accessToken) {
        const {idToken, user} = await firebaseAuthService.signInWithThirdParty(
          'google',
          accessToken,
          email,
        );

        if (!idToken || !user) {
          return {
            success: false,
            thirdPartyAccessToken: null,
            firebaseIdToken: null,
            firebaseUser: null,
          };
        }

        return {
          success: true,
          thirdPartyAccessToken: accessToken,
          firebaseIdToken: idToken,
          firebaseUser: user,
        };
      } else {
        return {
          success: false,
          thirdPartyAccessToken: null,
          firebaseIdToken: null,
          firebaseUser: null,
        };
      }
    } catch (error) {
      console.error(error);

      return {
        success: false,
        thirdPartyAccessToken: null,
        firebaseIdToken: null,
        firebaseUser: null,
      };
    }
  };
}

const thirdPartyAuthService = new ThirdPartyAuthService();
export default thirdPartyAuthService;
