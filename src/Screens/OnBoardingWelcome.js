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
  TouchableHighlight,
  Button
} from 'react-native';
import {
  Logo, ArrowLeft, LockIcon, StopIcon, ChatIcon, AppleIcon, GoogleIcon, LabelIcon, SearchIcon,
  NotebookIcon, ChatChatsIcon, EditeBoxIcon, SettingsIcon, UsersIcon, UserIcon, UserAddIcon,
  EditeIcon, CrossIcon, CloseIcon, UserCircle, CameraIcon, AttachmentIcon, MicrophoneIcon,UploadIcon
} from '../Assets/Svg';
import { Images } from  '../Assets/Images';


export default function OnBoardingWelcome({navigation}){
  const [bg, setBg] = useState('green');
  const animated = new Animated.Value(1);

  const AdvantagesData = [
    {
      _id: '1',
      icon: <LockIcon/>,
      title:'End-to-End Encryption',
      text: 'Messages are secure and can only be read by recipients.'
    },
    {
      _id: '2',
      icon: <StopIcon/>,
      title:'Screenshot-Proof',
      text: 'Messages are secure by screenshot proof technology.'
    },
    {
      _id: '3',
      icon: <ChatIcon/>,
      title:'Complete Privacy',
      text: 'Read-Delete, mode for instant message deletion.'
    },
  ];

  const pressOn = () => {
     Animated.timing(animated, {
          toValue: 0.1,
          duration: 100,
          useNativeDriver: true,
        }).start();
  }

  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.4,
      duration: 150,
      useNativeDriver: true,
    }).start();

  };

  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };
  return (
  <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
    <View style={{ flex:1, backgroundColor: 'black', alignItems:'center', padding: 15, justifyContent:'space-between', paddingTop: 28}}>
      <View style= {{ width: '100%', alignItems:'center'}}>
        <Text style={{ color: 'white', ...styles.title}}>Welcome to
          <Text style={{color:'#3EB489'}}> Mesafe</Text>
        </Text>
        <Image source={ Images.LogoBig } style={{ width: 278, height: 178,  marginTop: 25 }}/>
        <View style={{ marginTop: Dimensions.get('window').height / 852 * 55, width:'100%', paddingHorizontal: 15 }}>
          {
            AdvantagesData.map((item) =>
              <View key={item._id} style={{flexDirection: 'row', width: '100%', paddingVertical: 3}}>
                <View style={{ paddingTop: 6}}>
                  {item.icon}
                </View>
                <View style={styles.containerText}>
                  <Text style={{ fontWeight: '600', fontSize: 20, color:'#3EB489' }}>
                    {item.title}
                  </Text>
                  <Text style={{ fontWeight: '400', fontSize: 13, color: 'white', width: '100%' }}>
                    {item.text}
                  </Text>
                </View>
              </View>
            )
          }
        </View>

      </View>
      <View style={{width: '100%',...styles.containerCenterAlign}}>
       <Text style={{ fontWeight: '400', color: 'white', fontSize: 10, width:'100%', textAlign: 'center'}}>
         Please read and agree to the APP Therms of Service and Privacy Policy, which includes information about how Mesafe uses your personal data.
       </Text>
       {/*<Pressable style={{ marginVertical: 25, width:'100%' }}
           onPressIn={fadeIn}
           onPressOut={fadeOut}
           onPress={()=> navigation.navigate('OnBoarding')}
           //onPress={()=> setBg('red')}
           //onPressIn={() => setBg('blue')}
           //onPressOut={( )=> setBg('grey')}
         >
         <Animated.View
            style={{ height: 45, width:'100%', opacity: animated, ...styles.containerCenterAlign, backgroundColor: '#3EB489', borderRadius: 10}}
         >
           <Text style={{color:'white', fontWeight: '500', fontSize: 16}}>Agree & Continue</Text>
         </Animated.View>
       </Pressable>*/}
       <TouchableOpacity
         style={{
           height: 45,
           width:'100%',
           ...styles.containerCenterAlign,
           backgroundColor: '#3EB489',
           borderRadius: 10,
           marginVertical: 25
         }}
         onPress={()=> navigation.navigate('OnBoarding')}
       >
         <Text style={{color:'white', fontWeight: '500', fontSize: 16}}>Agree & Continue</Text>
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
  }
});


