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
  FlatList,
} from 'react-native';
import {
  Logo, ArrowLeft, LockIcon, StopIcon, ChatIcon, AppleIcon, GoogleIcon, LabelIcon, SearchIcon,
  NotebookIcon, ChatChatsIcon, EditeBoxIcon, SettingsIcon, UsersIcon, UserIcon, UserAddIcon,
  EditeIcon, CrossIcon, CloseIcon, UserCircle, CameraIcon, AttachmentIcon, MicrophoneIcon,UploadIcon
} from '../Assets/Svg';
import { Images } from  '../Assets/Images';


export default function OnBoarding({navigation}){

  const [pageId, setPageId] = useState(1)
  const windowWidth = Dimensions.get('window').width;

  const pageData = [
    {
      _id: "1",
      image: Images.Screenshot1,
      title: 'Private End-to-End Encryption',
      description: 'Confident messages, can be read only by recipients, secured under pin code.',
    },
    {
      _id: "2",
      image: Images.Screenshot2,
      title: 'Screenshot proof',
      description: 'Screenshot safe messages, secured by proof technology. Try to take a screenshot!',
    },
    {
      _id: "3",
      image: Images.Screenshot3,
      title: 'Complete privacy',
      description: 'Multiple member chats for work and private conversation.'
    }
  ];

  const onNextPressed = () => {
    setPageId(pageId + 1);
    flatListRef.scrollToIndex({ index: pageId, animated: true });
  };

  const itemPage = ({item}) => {
    return (
      <View
        style={{
          width: Dimensions.get('window').width,
          paddingTop: item._id == 2 ? 0 : Dimensions.get('window').height / 852 * 28,
          paddingHorizontal: 45,
          height: '100%'
        }}
      >
        <Image
          source={item.image}
          style={{
            width: Dimensions.get('window').width / 393 * 274,
            height:
              item._id == 2
              ?
              (Dimensions.get('window').height / 852 * 444)
              :
              (Dimensions.get('window').height / 852 * 416),
            alignSelf: 'center'
          }}
          resizeMode='contain'
        />
        <Text style={{ ...styles.itemText, fontWeight: '600' , fontSize: 25, marginTop: 16 }}>
          {item.title}
        </Text>
        <Text style={{ ...styles.itemText, fontWeight: '500' , fontSize: 16 }}>
          {item.description}
        </Text>
      </View>
    )
  }


  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <View style={{ flex:1, backgroundColor: 'black', justifyContent:'space-between', paddingBottom: 15}}>
        <FlatList
          ref={(ref) => flatListRef = ref}
          showsHorizontalScrollIndicator={false}
          data={pageData}
          extraData={pageId}//need for check change data
          renderItem={(item) => itemPage(item)}
          keyExtractor={e => e._id}
          style={{ flex:1 }}
          horizontal/>
        <View style={{width:'100%', paddingHorizontal: 15, ...styles.containerCenterAlign}}>
          <TouchableOpacity
            onPress={pageId === pageData.length ? () => navigation.navigate('SignUpSignIn') : onNextPressed}
            style={{
              height: 45,
              width:'100%',
              ...styles.containerCenterAlign,
              backgroundColor: '#3EB489',
              borderRadius: 10,
              marginVertical: 25}}>
            <Text style={{color:'white', fontWeight: '500', fontSize: 16}}>Continue</Text>
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


