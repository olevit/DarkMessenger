import React from 'react';
import {
  SafeAreaView,
  View
} from 'react-native';
import {
  Logo, ArrowLeft, LockIcon, StopIcon, ChatIcon, AppleIcon, GoogleIcon, LabelIcon, SearchIcon,
  NotebookIcon, ChatChatsIcon, EditeBoxIcon, SettingsIcon, UsersIcon, UserIcon, UserAddIcon,
  EditeIcon, CrossIcon, CloseIcon, UserCircle, CameraIcon, AttachmentIcon, MicrophoneIcon,UploadIcon
} from '../Assets/Svg';

export default function IconsTest() {
  return (
  <SafeAreaView style={{flex: 1}}>
     <View style={{ flex: 1, backgroundColor: 'black', gap: 20,flexDirection: 'row', flexWrap: 'wrap', padding: 32}}>
       <ArrowLeft/>
       <LockIcon/>
       <StopIcon/>
       <ChatIcon/>
       <View style={{backgroundColor:'white'}}><AppleIcon/></View>
       <GoogleIcon/>
       <LabelIcon/>
       <SearchIcon/>
       <NotebookIcon/>
       <ChatChatsIcon/>
       <EditeBoxIcon/>
       <SettingsIcon/>
       <UserIcon/>
       <UsersIcon/>
       <UserAddIcon/>
       <EditeIcon/>
       <CrossIcon/>
       <CloseIcon/>
       <UserCircle/>
       <CameraIcon/>
       <AttachmentIcon/>
       <MicrophoneIcon/>
       <UploadIcon/>
     </View>
  </SafeAreaView>
  );
}
