import {View, Text} from 'react-native';
import {useState} from 'react';
import COLORS from '../Constants/color';
import {TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

const TextinputComp2 = ({
  title,
  placeholder,
  keyboardType = 'default',
  password,
}) => {
  const [isShownPassword, setIsShownPassword] = useState(false);
  return (
    <View style={{marginBottom: 12}}>
      <Text style={{fontSize: 16, fontWeight: 400, marginVertical: 8}}>
        {title}
      </Text>
      <View
        style={{
          width: '100%',
          height: 48,
          borderColor: COLORS.black,
          borderWidth: 1,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: 22,
        }}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={COLORS.black}
          keyboardType={keyboardType}
          secureTextEntry={isShownPassword}
          style={{width: '100%'}}
        />
        {password ? (
          <TouchableOpacity
            style={{position: 'absolute', right: 12}}
            onPress={() => setIsShownPassword(!isShownPassword)}>
            <Ionicons
              name={isShownPassword ? 'eye-off' : 'eye'}
              size={24}
              color={COLORS.black}
            />
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>
    </View>
  );
};

export default TextinputComp2;
