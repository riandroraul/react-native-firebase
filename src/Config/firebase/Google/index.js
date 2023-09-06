import {GoogleSignin} from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {StackActions} from "@react-navigation/native";

export const signInWithGoogle = async (navigation, setData) => {
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

    console.log(authUser.additionalUserInfo.profile);
    navigation.dispatch(StackActions.replace("GoogleUserProfile"));
    console.log(21, userInfo);
    setData(authUser.additionalUserInfo.profile);
    return userInfo;
  } catch (error) {
    console.log(error, error.code);
  }
};

export const signOutGoogle = async () => {
  try {
    const revokeAccess = await GoogleSignin.revokeAccess();
    const logout = await GoogleSignin.signOut();
    console.log(revokeAccess);
    console.log(logout);
    return logout;
  } catch (err) {
    console.log(err);
  }
};
