import {GoogleSignin} from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

export const signInWithGoogle = async () => {
  try {
    GoogleSignin.configure({
      offlineAccess: false,
      webClientId:
        "1050853742576-40dk38u5h4o4vrptrcq8s4e2vbv6e1k1.apps.googleusercontent.com",
      // scopes: ["profile", "email"],
    });
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices();
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    const authUser = await auth().signInWithCredential(googleCredential);
    const userInfo = GoogleSignin.signIn();
    console.log(21, authUser);

    return userInfo;
  } catch (error) {
    console.log(error);
  }
};

export const signOutGoogle = async () => {
  try {
    const revokeAccess = await GoogleSignin.revokeAccess();
    const logout = await GoogleSignin.signOut();
    console.log(revokeAccess);
    return logout;
  } catch (err) {
    console.log(err);
  }
};
