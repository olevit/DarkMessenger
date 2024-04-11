import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { Images } from '../../Assets/Images';
import { SearchIcon, UsersIcon, UserIcon, NotebookIcon, UserAddIcon } from '../../Assets/Svg';

export default function NewMessage({ navigation }){

  const textInputWidth = Dimensions.get('window').width - 85;
  const focusedBg = (focused) => (focused ? '#3EB489': '#50555C');
  const ChatData = [
    {
      _id: "1",
      text: 'Chat name'
    },
    {
      _id: "2",
      text: 'Subject',
    },
    {
      _id: "3",
      text: 'Add members',
    },
  ];

  const length = ChatData.length;

  const ItemChat = ({item}) => (
    <View style={{ width: '100%'  }}>
      <TextInput
        style={{
          color: 'white',
          fontSize: 13,
          fontWeight: '400',
          width: '100%',
          height: 42,
          paddingHorizontal: 25
        }}
        placeholder={item.text}
        placeholderTextColor={'white'}
      />
      {
        item._id != length &&
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              backgroundColor: 'black',
              height: 1
            }}
          />
      }
    </View>
  );


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{ width: '100%', padding: 15, alignItems: 'center'}}>
        <Text style={{ fontSize: 25, fontWeight: '600', color: '#3EB489', marginTop: 15}}>New Message</Text>
        <View
          style={{
            width:'100%',
            backgroundColor: '#1E1E1E',
            borderRadius: 10,
            alignItems:'center',
            height: 40,
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: 'black',
            marginTop: 45
          }}
        >
          <View style={{ width: 41, paddingLeft: 12, paddingRight: 5, justifyContent: 'center'}}>
            <SearchIcon/>
          </View>
          <TextInput
            style={{
              width: textInputWidth,
              color: 'white',
              fontSize: 16,
              fontWeight: '500',
              padding: 0
            }}
            placeholder="Search contacts"
            placeholderTextColor={'#6E6E6E'}
            returnKeyType='search'
          />
        </View>
        <View
          style={{
            width:'100%',
            backgroundColor: '#1E1E1E',
            borderRadius: 10,
            alignItems:'center',
            height: 40,
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: 'black',
            marginTop: 10
          }}
        >
          <View style={{ width: 41, paddingLeft: 12, paddingRight: 5, justifyContent: 'center'}}>
            <NotebookIcon/>
          </View>
          <TextInput
            style={{
              width: textInputWidth,
              color: 'white',
              fontSize: 16,
              fontWeight: '500',
              padding: 0
            }}
            placeholder="Find friends from contacts"
            placeholderTextColor={'#6E6E6E'}
            returnKeyType='search'
          />
        </View>
        <View
          style={{
            width: '100%',
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor: '#1E1E1E',
            borderRadius: 10,
            marginTop: 35
            }}
          >
            {
              ChatData.map((item) => <ItemChat key={item._id} item={item}/>)
            }
          </View>
        <TouchableOpacity style={{ marginTop: 35, alignItems: 'center', height: 40, width:'100%', paddingHorizontal: 25, flexDirection: 'row', justifyContent:'space-between', backgroundColor: '#1E1E1E', borderRadius: 10, borderWidth:1, borderColor:'black'}}>
          <Text style={{ fontSize: 13, fontWeight: '400', color: 'white'}}>Incognito mood</Text>
          <View style={{ height: 24, width: 24, borderColor: '#3EB489', borderWidth:3, borderRadius: 10 }}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 42,
            width:'100%',
            justifyContent:'center',
            alignItems: 'center',
            backgroundColor: '#3EB489',
            borderRadius: 10,
            marginTop: 100,
            borderColor:'black',
            borderWidth: 1
          }}
        >
          <Text style={{color:'white', fontWeight: '600', fontSize: 20}}>Start chat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 40,
            width:'100%',
            justifyContent:'center',
            alignItems: 'center',
            backgroundColor: '#1E1E1E',
            borderRadius: 10,
            marginTop: 15,
            borderColor:'black',
            borderWidth: 1,
            flexDirection:'row'
          }}
        >
          <UserAddIcon/>
          <Text style={{color:'#3EB489', fontWeight: '500', fontSize: 16, marginLeft: 7}}>Invite friend to chat </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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


