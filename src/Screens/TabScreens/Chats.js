import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
//import { FlatList } from "react-native-gesture-handler";
import { Images } from '../../Assets/Images';
import { SearchIcon, UsersIcon, UserIcon } from '../../Assets/Svg';

export default function Chats({ navigation }){
  const textWidth = Dimensions.get('window').width - 143;
  const focusedBg = (focused) => (focused ? '#3EB489': '#50555C');

  const ActiveChatsData = [
    {
      _id: "1",
      icon: <UsersIcon/>,
      title: 'WORK GROUP',
      text: 'Project details',
      focused: true,
    },
    {
      _id: "2",
      icon: <UserIcon/>,
      title: 'Mom’s birthday',
      text: 'Surprise birthday gift',
      focused: false
    },
    {
          _id: "3",
          icon: <UsersIcon/>,
          title: 'WORK GROUP',
          text: 'Project details',
          focused: true,
        },
        {
          _id: "4",
          icon: <UserIcon/>,
          title: 'Mom’s birthday',
          text: 'Surprise birthday gift',
          focused: false
        },
        {
              _id: "5",
              icon: <UsersIcon/>,
              title: 'WORK GROUP',
              text: 'Project details',
              focused: true,
            },
            {
              _id: "6",
              icon: <UserIcon/>,
              title: 'Mom’s birthday',
              text: 'Surprise birthday gift',
              focused: false
            },
            {
                  _id: "7",
                  icon: <UsersIcon/>,
                  title: 'WORK GROUP',
                  text: 'Project details',
                  focused: true,
                },
                {
                  _id: "8",
                  icon: <UserIcon/>,
                  title: 'Mom’s birthday',
                  text: 'Surprise birthday gift',
                  focused: false
                },
                {
                      _id: "9",
                      icon: <UsersIcon/>,
                      title: 'WORK GROUP',
                      text: 'Project details',
                      focused: true,
                    },
                    {
                      _id: "10",
                      icon: <UserIcon/>,
                      title: 'Mom’s birthday',
                      text: 'Surprise birthday gift',
                      focused: false
                    },
                    {
                          _id: "11",
                          icon: <UsersIcon/>,
                          title: 'WORK GROUP',
                          text: 'Project details',
                          focused: true,
                        },
                        {
                          _id: "12",
                          icon: <UserIcon/>,
                          title: 'Mom’s birthday',
                          text: 'Surprise birthday gift',
                          focused: false
                        },
  ];
  const itemChats = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 50,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: focusedBg(item.focused),
          backgroundColor: '#1E1E1E',
          alignItems: 'center',
          justifyContent:'space-between',
          marginVertical : 10,
          paddingRight: 15
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: 64, justifyContent: 'center', alignItems: 'center'}}>{item.icon}</View>
          <View>
            <Text style={{ width: textWidth, fontSize: 16, fontWeight: '500', color:'white' }} numberOfLines={1}>{item.title}</Text>
            <Text style={{ width: textWidth, fontSize: 10, fontWeight: '400', color: 'white'}} numberOfLines={1}>{item.text}</Text>
          </View>
        </View>

        <View style={{ height: 20, width: 20, borderRadius: 10, borderWidth:3, borderColor: focusedBg(item.focused), backgroundColor: focusedBg(item.focused)}}/>

      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={{flex: 1,backgroundColor: 'black'}}>
      <View style={{ width: '100%', padding: 15, alignItems: 'center'}}>
        <Text style={{ fontSize: 25, fontWeight: '600', color: '#3EB489', marginTop: 15}}>Chats</Text>
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
          <View style={{ width: 41, paddingLeft: 12, paddingRight: 5, justifyContent: 'center' }}>
            <SearchIcon/>
          </View>
            <TextInput
              style={{ flex: 1, color: 'white', fontSize: 16, fontWeight: '500'}}
              placeholder="Search"
              placeholderTextColor={'#6E6E6E'}
              returnKeyType='search'
             //value={searchPhrase}
             //onChangeText={(text) => setSearchPhrase(text)}
            // onSubmitEditing={()=> {
                 //props.navigation.navigate("Search",{searchText: searchPhrase});
                 //setSearchPhrase('');
            // }}
          />
        </View>
        <Text style={{ fontWeight: '400', fontSize: 13, color: 'white', marginLeft: 25, alignSelf: 'flex-start', marginTop: 20}}>
          Active chats
        </Text>
        <FlatList
          ref={(ref) => flatListRef = ref}
          showsVerticalScrollIndicator={false}
          data={ActiveChatsData}
          onContentSizeChange={() => flatListRef.scrollToEnd()}
          extraData={ActiveChatsData}
          renderItem={(item) => itemChats(item)}
          keyExtractor={e => e._id}
          style={{ width: '100%', marginTop: 10}}
        />
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


