import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import PINCode from '@haskkor/react-native-pincode'


const PinCode = () => {
  return (
       <View style={{paddingHorizontal: 32, flex:1, backgroundColor: 'black', alignItems: 'center'}}>
         <Text style={{...styles.title, color:'#3EB489'}}>Create pin code</Text>
         <Text style={{...styles.text, color:'white', width: '100%', marginTop: 70}}>
           This will be your access key to chats and other app futures.
         </Text>
         <PINCode status={'choose'}
           colorCircleButtons={'transparent'}
           colorPassword={'rgba(255, 255, 255, 0.5)'}
           colorPasswordEmpty={'rgba(255, 255, 255, 0.2)'}
           stylePinCodeButtonNumber={'white'}
           stylePinCodeButtonNumberPressed={'rgba(255, 255, 255, 0.5)'}
           stylePinCodeCircle={{height: 14, width:14, borderRadius: 7, opacity: 1.0}}
           stylePinCodeTextButtonCircle={{fontWeight: '600', fontSize: 20}}
         />
       </View>
  );
}

const styles = StyleSheet.create({
  containerLogo: {
   justifyContent:'center',
   alignItems: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
  },
  text: {
    fontSize:16,
    fontWeight: '500'
  }
});

export default PinCode;
