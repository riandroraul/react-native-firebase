import {LoginManager} from "react-native-fbsdk-next";

export async function signInWithFacebook() {
  try {
    const result = await LoginManager.logInWithPermissions([
      "public_profile",
      "email",
      "user_friends",
    ]);
    console.log(10, result);
    if (result.isCancelled) {
      console.log("Login cancelled");
    } else {
      const grantedPermissions = result.grantedPermissions;
      console.log(
        "Login success with permissions: " + grantedPermissions.toString(),
      );
    }
  } catch (error) {
    console.log("Login fail with error: " + error);
  }
}
