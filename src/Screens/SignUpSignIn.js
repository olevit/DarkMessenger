import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
  Animated,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  Logo, ArrowLeft, LockIcon, StopIcon, ChatIcon, AppleIcon, GoogleIcon, LabelIcon, SearchIcon,
  NotebookIcon, ChatChatsIcon, EditeBoxIcon, SettingsIcon, UsersIcon, UserIcon, UserAddIcon,
  EditeIcon, CrossIcon, CloseIcon, UserCircle, CameraIcon, AttachmentIcon, MicrophoneIcon,UploadIcon
} from '../Assets/Svg';
import { Images } from  '../Assets/Images';

export default function SignUpSignIn ({navigation}) {

  return(
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <View
        style={{
          flex:1,
          backgroundColor: 'black',
          padding: 15,
          justifyContent:'space-between',
          alignItem: 'center',
          paddingBottom: 0
        }}
      >
        <View style={{ width: '100%', alignItems:'center' }}>
          <Text
            style={{
              color:'#3EB489',
              fontWeight: '600',
              fontSize: 39,
              marginTop: Dimensions.get('window').height / 852 * 40
            }}
          >Mesafe
          </Text>
          <Image
            source={Images.SecLogo}
            style={{
              width: 291,
              height: 268,
              marginTop: Dimensions.get('window').height < 737 ? 0 : Dimensions.get('window').height / 852 * 50
            }}
          />
        </View>
        <View style={{ width:'100%', alignItems:'center' }}>
          <TouchableOpacity style={{...styles.containerButton, backgroundColor:'white', flexDirection: 'row' }}>
            <AppleIcon/>
            <Text style={{color:'black', fontWeight: '500', fontSize: 16, marginLeft: 10}}>Sign in with Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.containerButton, backgroundColor:'white', flexDirection: 'row' }}>
            <GoogleIcon/>
            <Text style={{color:'black', fontWeight: '500', fontSize: 16, marginLeft: 10}}>Sign in with Google</Text>
          </TouchableOpacity>
          <View style={{ ...styles.containerButton, backgroundColor: 'black', height: 30 }}>
            <Text style={{color:'white', fontWeight: '500', fontSize: 16}}>or use email or phone number</Text>
          </View>
          <TouchableOpacity
            style={styles.containerButton}
            onPress={() => navigation.navigate('Subscription')}
          >
            <Text style={{color:'white', fontWeight: '500', fontSize: 16}}>Sign Up</Text>
          </TouchableOpacity>
          <View style={{ height: 25, marginTop: 15, justifyContent: 'center' }}>
            <Text style={{ width: '100%', color: 'white', fontSize: 16, fontWeight:'500' }}>Already have an account?
              <Text
               style={{ color: '#3EB489' }}
              >    Sign in
              </Text>
            </Text>
          </View>
        </View>
      </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerCenterAlign: {
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
  },
  containerRow: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 15,
  },
  containerText:{
    flex: 1,
    marginLeft: 20
  },
  containerButton:{
    height: 45,
    width:'100%',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#3EB489',
    borderRadius: 10,
    marginTop: 15,
  }
});
