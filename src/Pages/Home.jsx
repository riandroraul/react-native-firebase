import {View, Text, StyleSheet} from 'react-native';
import {useContext} from 'react';
import {UserContext} from '../Context/User';

const Home = () => {
  const {userdata, token} = useContext(UserContext);
  console.log(userdata);
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25}}>
        {/* Halo nama saya {name} umur saya {age}{" "} */}
        Halo nama saya {userdata.nama}, email saya {userdata.email}, dengan role
        id = {userdata.role} Token saya {token}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
    backgroundColor: 'white', // Set your preferred background color
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  viewSearch: {
    width: 200,
    height: 150,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightskyblue',
    alignItems: 'center',
    padding: 5,
    marginBottom: 4,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 25,
    fontFamily: 'sans-serif',
  },
});

export default Home;
