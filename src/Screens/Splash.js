import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
//import { Logo } from '../Assets/Images'
import { Images } from '../Assets/Images';
import { Logo } from '../Assets/Svg';

const Splash = ({ navigation }) => {

 //useEffect(() => {
     //if (!isLoading) {
      // navigation.navigate('Details')
     //}
  // }, [isLoading])*/}
  return (
    <View style={{flex:1, backgroundColor: 'black'}}>
      <View
        style={{
          ...styles.containerLogo,
          //marginTop: Dimensions.get('window').height / 852 * 235
          //marginTop: Dimensions.get('window').height / 852 * 287
          marginTop: (Dimensions.get('window').height - 390) * 0.621
        }}
      >
        <Image
          style={{height: 150, width: 150}}
          //source={require('../Assets/Images/logo.png')}
          //source={Logo}
          source={ Images.Logo }
        />
        {/*<Logo/>*/}
        <Text onPress={()=> navigation.navigate('OnBoardingWelcome')} style={{...styles.title, color:'#3EB489', marginTop: 15}}>No screenshots!</Text>
        <Text style={{...styles.title, textAlign: 'center', color:'#FFFFFF', marginTop: 135}}>
          {'Secured by screenshot\nproof technology.'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogo: {
   alignItems: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
  },
});

export default Splash;
