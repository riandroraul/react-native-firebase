import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Signup from "./src/Pages/Signup";
import {UserProvider} from "./src/Context/User";
import Home from "./src/Pages/Home";
import About from "./src/Pages/About";
import Login from "./src/Pages/Login";
import Welcome from "./src/Pages/Welcome";
import GoogleUserProfile from "./src/Pages/GoogleUserProfile";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{title: "Login User", headerTitleAlign: "center"}}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{title: "Register User", headerTitleAlign: "center"}}
          />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="GoogleUserProfile"
            component={GoogleUserProfile}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default AppNavigator;
