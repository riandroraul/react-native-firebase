import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {useEffect} from 'react';
import {LinearGradient} from 'react-native-linear-gradient';
import COLORS from '../Constants/color';
import {logo_smk_alamanah} from '../Assets/image';
import {StackActions} from '@react-navigation/native';

const Welcome = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('Signup'));
    }, 5000);
  }, []);
  return (
    <LinearGradient
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      colors={[COLORS.secondary, COLORS.primary]}>
      <StatusBar translucent={false} backgroundColor="#39B68D" />
      <View style={{}}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: logo_smk_alamanah,
            }}
          />
        </View>
      </View>
      <View style={{marginVertical: 10}}>
        <Text style={styles.text}>Perpustakaan</Text>
        <Text style={styles.text}>SMK AL-AMANAH</Text>
      </View>
      <ActivityIndicator size="large" color="#fff" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  text: {color: '#fff', textAlign: 'center', fontWeight: '900', fontSize: 30},
});

export default Welcome;
