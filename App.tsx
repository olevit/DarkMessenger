import 'react-native-gesture-handler';
import React from 'react';
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
  EditeIcon, CrossIcon, CloseIcon, UserCircle, CameraIcon, AttachmentIcon, MicrophoneIcon,UploadIcon,
  ChevronRight
} from './src/Assets/Svg';
import { Images } from  './src/Assets/Images';
//import { GestureHandlerRootView } from 'react-native-gesture-handler';
import OnBoardingWelcome from './src/Screens/OnBoardingWelcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Splash from './src/Screens/Splash';
import OnBoarding from './src/Screens/OnBoarding';
import SignUpSignIn from './src/Screens/SignUpSignIn';
import Subscription from './src/Screens/Subscription';
import Chats from './src/Screens/TabScreens/Chats';
import NewMessage from './src/Screens/TabScreens/NewMessage';
import Settings from './src/Screens/TabScreens/Settings';
import IconsTest from './src/Screens/IconsTest';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function App() {

const MainNavigator = () => {
  const insets = useSafeAreaInsets();
  const TabOptions = (label, iconWhite, iconBlack) => {
  return {
    headerShown: false,
    tabBarLabel:
      ({ focused }) => (
        focused ?
          <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>{label}</Text>
        : <Text style={{fontSize: 16, fontWeight: '500', color: 'white'}}>{label}</Text>
      ),
      headerShown: false,
    tabBarIcon:
      ({ focused }) => (
        focused ?
          iconBlack: iconWhite
      ),
  }
}

  const styleTabBar = {

    tabBarStyle: {
      paddingTop: 12,
      backgroundColor: '#3EB489',
      height: 91,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    }
  }
  return (
    <Tab.Navigator
      afeAreaInsets={{ bottom: insets.bottom }}
      //screenOptions={
        //insets.bottom ?
          //styleTabBar
        //: { tabBarStyle: { ...styleTabBar.tabBarStyle, paddingBottom: 22}}
     // }
      screenOptions={{
        tabBarStyle:[styleTabBar.tabBarStyle, !insets.bottom && { paddingBottom: 22 }]
      }}
    >
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={ TabOptions('Chats', <ChatChatsIcon/>,<ChatChatsIcon color = 'black'/>) }
      />
      <Tab.Screen
        name="NewMessage"
        component={NewMessage}
        options={ TabOptions('New message', <EditeBoxIcon/>,<EditeBoxIcon color = 'black'/>) }
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={ TabOptions('Settings', <SettingsIcon/>, <SettingsIcon color = 'black'/>) }
      />
    </Tab.Navigator>
  );
}
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation:'slide_from_right'}}>
        {/*<Stack.Screen name="Icon" component={IconsTest}/>*/}
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="OnBoardingWelcome" component = {OnBoardingWelcome}/>
        <Stack.Screen name='OnBoarding' component={OnBoarding}/>
        <Stack.Screen name='SignUpSignIn' component={SignUpSignIn}/>
        <Stack.Screen name='Subscription' component={Subscription}/>
        <Stack.Screen name='Main' component={MainNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
