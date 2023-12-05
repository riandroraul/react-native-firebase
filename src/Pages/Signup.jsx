import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import {useState, useEffect, useContext} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import COLORS from "../Constants/color";
import TextinputComp2 from "../Components/TextinputComp2";
import {signInWithGoogle, signOutGoogle} from "../Config/firebase/Google";
import {signInWithFacebook} from "../Config/firebase/Facebook";
import {AccessToken, GraphRequest} from "react-native-fbsdk-next";
import axios from "axios";
import {StackActions} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {UserContext} from "../Context/User";
import PhoneSignIn from "../Components/PhoneSignIn";

const Signup = ({navigation}) => {
  const context = useContext(UserContext);
  const [onClick, setOnClick] = useState(false);
  const [data, setData] = useState({});
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function getUserFBCredential() {
    setOnClick(!onClick);
    const accessToken = await AccessToken.getCurrentAccessToken();
    console.log(accessToken);
    const {data: userdata} = await axios.get(
      "https://graph.facebook.com/v2.5/me?fields=id,first_name,last_name,picture&access_token=" +
        accessToken.accessToken,
    );
    setData(userdata);
    setOnClick(!onClick);
  }

  const onSignup = async() => {
    try {
      const response = await axios.post('https://api-books-app.cyclic.app/tambahUser', { nama: username, email, password})
      console.log(response.data);
    } catch (error) {
      console.log(error);  
    }
  }

  const onClickSignInGoogle = async () => {
    const result = await signInWithGoogle();
    console.log("result : ", result);
    setData(result);
    AsyncStorage.setItem("googleSignIn", result, (err, val) => {
      JSON.stringify(val);
    });
  };

  useEffect(() => {
  }, [data]);

  useEffect(() => {
  }, []);

  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView>
        <View style={{flex: 1, marginHorizontal: 22}}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 12,
              color: COLORS.black,
            }}>
            Create Account
          </Text>
          <Text style={{fontSize: 16, color: COLORS.black, marginBottom: 10}}>
            Connect with your friend today
          </Text>
          <TextinputComp2 onChangeValue={(val) => setUsername(val)} inputValue={username} title="Username" placeholder="Enter your name" />
          <TextinputComp2
            inputValue={email}
            onChangeValue={(val) => setEmail(val)}
            title="Email address"
            placeholder="Enter your email address"
            keyboardType="email-address"
          />
          <TextinputComp2
            onChangeValue={(val) => setPassword(val)}
            inputValue={password}
            title="Password"
            placeholder="Enter your password"
            password={true}
          />
          <View style={{flexDirection: "row", marginVertical: 6}}>
            {/* <CheckBox
              style={{marginRight: 8}}
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? COLORS.primary : undefined}
            /> */}
            <Text style={{marginTop: 6}}>
              I aggree to the term and conditions
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 48,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
              backgroundColor: COLORS.primary,
              marginTop: 18,
              marginBottom: 4,
            }}>
            <TouchableOpacity onPress={onSignup}>
              <Text
                style={{
                  color: COLORS.white,
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 18,
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 20,
            }}>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: COLORS.grey,
                marginHorizontal: 10,
              }}
            />
            <Text>Or Sign up With</Text>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: COLORS.grey,
                marginHorizontal: 10,
              }}
            />
          </View>
          <View style={{flexDirection: "row", justifyContent: "center"}}>
            <TouchableOpacity
              onPress={signInWithFacebook}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                height: 52,
                borderWidth: 1,
                borderColor: COLORS.grey,
                marginRight: 4,
                borderRadius: 10,
              }}>
              <Image
                source={require("../Assets/image/logo-fb.png")}
                style={{height: 36, width: 36, marginRight: 8}}
                resizeMode="contain"
              />
              <Text>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => signInWithGoogle(navigation, context.setUserdata)}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                height: 52,
                borderWidth: 1,
                borderColor: COLORS.grey,
                marginRight: 4,
                borderRadius: 10,
              }}>
              <Image
                source={require("../Assets/image/logo-google.png")}
                style={{height: 36, width: 36, marginRight: 8}}
                resizeMode="contain"
              />
              <Text>Google</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={signOutGoogle}>
              <Text>Sign Out Google</Text>
            </TouchableOpacity> */}
          </View>
          <View style={{flexDirection: "row", justifyContent: "center"}}>
            <TouchableOpacity
              onPress={() => navigation.navigate("PhoneSignIn")}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                height: 52,
                borderWidth: 1,
                borderColor: COLORS.grey,
                marginRight: 4,
                borderRadius: 10,
              }}>
              <Image
                source={require("../Assets/image/logo-google.png")}
                style={{height: 36, width: 36, marginRight: 8}}
                resizeMode="contain"
              />
              <Text>Phone Number</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 22,
            }}>
            <Text
              style={{fontSize: 16, color: COLORS.black, fontWeight: "bold"}}>
              Already have an account
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  marginLeft: 6,
                  color: COLORS.primary,
                }}>
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
