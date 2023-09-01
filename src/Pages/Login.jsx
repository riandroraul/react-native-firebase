import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../Constants/color';
import TextinputComp2 from '../Components/TextinputComp2';
// import CheckBox from '@react-native-community/checkbox';

const Login = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{flex: 1, marginHorizontal: 22}}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginVertical: 12,
            color: COLORS.black,
          }}>
          Hey, Welcome back ..
        </Text>
        <Text style={{fontSize: 16, color: COLORS.black, marginBottom: 10}}>
          Hello again you have been missed!
        </Text>
        <TextinputComp2
          title="Email address"
          placeholder="Enter your email address"
          keyboardType="email-address"
        />
        <TextinputComp2
          title="Password"
          placeholder="Enter your password"
          password={true}
        />
        <View style={{flexDirection: 'row', marginVertical: 6}}>
          {/* <CheckBox
            style={{marginRight: 8}}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.primary : undefined}
          /> */}
          <Text>Remember Me</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 48,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 22,
            backgroundColor: COLORS.primary,
            marginTop: 18,
            marginBottom: 4,
          }}>
          <TouchableOpacity>
            <Text
              style={{
                color: COLORS.white,
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 18,
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
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
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => console.log('login with facebook')}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              height: 52,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 4,
              borderRadius: 10,
            }}>
            <Image
              source={require('../Assets/image/logo-fb.png')}
              style={{height: 36, width: 36, marginRight: 8}}
              resizeMode="contain"
            />
            <Text>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!request}
            onPress={() => promptAsync()}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              height: 52,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 4,
              borderRadius: 10,
            }}>
            <Image
              source={require('../Assets/image/logo-google.png')}
              style={{height: 36, width: 36, marginRight: 8}}
              resizeMode="contain"
            />
            <Text>Google</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 22,
          }}>
          <Text style={{fontSize: 16, color: COLORS.black, fontWeight: 'bold'}}>
            Don't have an account ?
          </Text>
          <Pressable onPress={() => navigation.navigate('Signup')}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginLeft: 6,
                color: COLORS.primary,
              }}>
              Register
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;