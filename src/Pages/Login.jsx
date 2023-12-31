import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import axios from "axios";
import {useEffect, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import COLORS from "../Constants/color";
import TextinputComp2 from "../Components/TextinputComp2";
// import CheckBox from "@react-native-community/checkbox";
import {signInWithGoogle} from "../Config/firebase/Google";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({navigation}) => {
  // useEffect(() => {
  //   AsyncStorage.getItem("googleSignIn", (err, val) => {
  //     console.log("getItem : ", val);
  //   });
  // }, []);

  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = async() => {
    const response = await axios.post('https://api-books-app.cyclic.app/login', {email, password})
    console.log(response.data);
  }
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
            Hey, Welcome back ..
          </Text>
          <Text style={{fontSize: 16, color: COLORS.black, marginBottom: 10}}>
            Hello again you have been missed!
          </Text>
          <TextinputComp2
            inputValue={email}
            onChangeValue={(val) => setEmail(val)}
            title="Email address"
            placeholder="Enter your email address"
            keyboardType="email-address"
          />
          <TextinputComp2
            inputValue={password}
            onChangeValue={(val) => setPassword(val)}
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
            <Text style={{marginTop: 6}}>Remember Me</Text>
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
            <TouchableOpacity onPress={onLogin}>
              <Text
                style={{
                  color: COLORS.white,
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 18,
                }}>
                Login
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
            <Text>Or Login With</Text>
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
              onPress={() => console.log("login with facebook")}
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
              // disabled={!request}
              onPress={signInWithGoogle}
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
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 22,
            }}>
            <Text
              style={{fontSize: 16, color: COLORS.black, fontWeight: "bold"}}>
              Don't have an account ?
            </Text>
            <Pressable onPress={() => navigation.navigate("Signup")}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  marginLeft: 6,
                  color: COLORS.primary,
                }}>
                Register
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
