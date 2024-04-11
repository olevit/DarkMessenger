import React, {useState, useEffect} from 'react';
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
  TouchableHighlight,
  FlatList,
} from 'react-native';
import {
  Logo, ArrowLeft, LockIcon, StopIcon, ChatIcon, AppleIcon, GoogleIcon, LabelIcon, SearchIcon,
  NotebookIcon, ChatChatsIcon, EditeBoxIcon, SettingsIcon, UsersIcon, UserIcon, UserAddIcon,
  EditeIcon, CrossIcon, CloseIcon, UserCircle, CameraIcon, AttachmentIcon, MicrophoneIcon,UploadIcon
} from '../Assets/Svg';
import { Images } from  '../Assets/Images';


export default function Subscription({navigation}){

  const AdvantagesData = [
    {
      _id: '1',
      text: 'Unlimited messages.'
    },
    {
      _id: '2',
      text: 'Send photos, video, files.'
    },
    {
     _id: '3',
      text: 'Create user nicknames.'
    },
    {
     _id: '4',
     text: 'Incognito mode.'
    }
  ];

  const ContainersData = [
    {
      _id: '1',
      text:'€7.95 / Monthly',
    },
    {
     _id: '2',
     text:'€37.95 / Yearly',
    }
  ];



  return (
  <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
    <View style={{ flex:1, backgroundColor: 'black', justifyContent:'space-between', padding: 15}}>
      <View style={{ width: '100%', paddingHorizontal: 15}}>
        <View style={{ flexDirection: 'row', width: '100%', justifyContent:'space-between' }}>
          <Text style={{ color:'white', fontWeight: '500', fontSize: 16 }}>Restore</Text>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems:'center' }}>
            <CloseIcon/>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            alignSelf:'center',
            color: '#3EB489',
            fontSize: 25,
            fontWeight: '600',
            marginTop: Dimensions.get('window').height / 852 * 40
          }}
        >
          Messafe Plus
        </Text>
        <View
          style={{
            width: '100%',
            paddingHorizontal: 15,
            marginTop: Dimensions.get('window').height / 852 * 45
          }}
        >
          {
            AdvantagesData.map((item) =>
              <View key={item._id} style={{flexDirection: 'row', width:'100%', alignItems:'center', marginVertical: 11}}>
                <LabelIcon/>
                <Text style={{ color: 'white', fontWeight: '500', fontSize: 16, marginLeft: 15 }}>{item.text}</Text>
              </View>
            )
          }
        </View>
      </View>
      <View style={{width: '100%', paddingHorizontal: 15 }}>
        {
          ContainersData.map((item) =>
            <View
              style={{
                width: '100%',
                borderRadius: 15,
                borderWidth: 3,
                borderColor: '#3EB489',
                height: 77,
                marginVertical: 11,
                ...styles.containerCenterAlign,
                paddingHorizontal: 25,
              }}
              key={item._id}
            >
              <View style={{ flexDirection: 'row', justifyContent:'space-between', width: '100%', alignItems:'center' }}>
                <View>
                  <Text style={{ fontSize: 20, fontWeight: '600', color: 'white' }}>
                    Messafe Plus
                  </Text>
                  <Text style={{ fontWeight:'500', fontSize: 16, color: 'white', marginTop: 6 }}>
                    {item.text}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 10,
                    borderWidth: 3,
                    borderColor: '#3EB489',
                    //backgroundColor: '#3EB489',
                    ...styles.containerCenterAlign,
                  }}
                />
              </View>
            </View>
          )
        }
      </View>
      <View style={{ width:'100%', ...styles.containerCenterAlign}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Splash')}
          style={{
            height: 45,
            width:'100%',
            ...styles.containerCenterAlign,
            backgroundColor: '#3EB489',
            borderRadius: 10,
            marginBottom: 25
          }}
          onPress={() => navigation.navigate('Main') }
        >
          <Text style={{color:'white', fontWeight: '500', fontSize: 16}}>Purchase</Text>
        </TouchableOpacity>
      </View>
    </View>
   </SafeAreaView>
  );
}

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
  itemText:{
    color: 'white',
    width: '100%',
    marginTop: 20,
    height: 60
  }
});


