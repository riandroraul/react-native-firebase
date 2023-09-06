import AsyncStorage from "@react-native-async-storage/async-storage";
import {useContext, useEffect, useState} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import {signOutGoogle} from "../Config/firebase/Google";
import {UserContext} from "../Context/User";

const GoogleUserProfile = ({navigation}) => {
  const [user, setUser] = useState({});
  const context = useContext(UserContext);

  // useEffect(() => {
  //   AsyncStorage.getItem("googleSignIn", (err, val) => {
  //     setUser(val);
  //   });
  // }, [user]);

  console.log("google user : ", user.name);
  return (
    <View style={styles.container}>
      {/* <Image source={{uri: `${user.picture}`}} style={styles.profileImage} /> */}
      <Text style={styles.displayName}>{context.userdata.name}</Text>
      <Text style={styles.email}>{context.userdata.email}</Text>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            signOutGoogle();
            navigation.navigate("Signup");
          }}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  displayName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: "gray",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "red", // Ganti warna sesuai preferensi Anda
  },
});

export default GoogleUserProfile;
