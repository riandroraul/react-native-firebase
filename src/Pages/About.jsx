import {View, Text} from 'react-native';
import {useContext, useEffect, useState} from 'react';
import {UserContext} from '../Context/User';
import AsyncStorage from '@react-native-async-storage/async-storage';

const About = () => {
  const [token, setToken] = useState('');
  const {name, age} = useContext(UserContext);

  const getToken = async () => {
    try {
      const data = await AsyncStorage.getItem('token');
      setToken(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  return (
    <View>
      <Text>
        Halo nama saya {name} umur saya {age}
        token saya {token}
      </Text>
    </View>
  );
};

export default About;
