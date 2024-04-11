import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  FlatList,
  TouchableOpacity,
  Switch
} from 'react-native';

import { Images } from '../../Assets/Images';
import { SearchIcon, UsersIcon, UserIcon, NotebookIcon, UserAddIcon, ChevronRight } from '../../Assets/Svg';

export default function Settings({ navigation }){

  const textInputWidth = Dimensions.get('window').width - 85;
  const focusedBg = (focused) => (focused ? '#3EB489': '#50555C');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);
  const SettingsData = [
    {
      _id: "1",
      text: 'Incognito mood '
    },
    {
      _id: "2",
      text: 'Notifications',
    },
    {
      _id: "3",
      text: 'Terms of Service',
    },
    {
      _id: "4",
      text: 'Privacy Policy ',
    },
    {
      _id: "5",
      text: 'Invite friends',
    },
  ];

  const length = SettingsData.length;

  const ItemSettings = ({item}) => (
    <View style={{ width: '100%'  }}>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 42,
          paddingHorizontal: 25,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Text style={{ color:'white', fontWeight: '500', fontSize: 16 }}>{item.text}</Text>
        {
          item._id != 2 && item._id != 5 && <ChevronRight/>
        }
        {
          item._id == 2 &&
            <Switch
              trackColor={{false: 'rgba(120, 120, 128, 0.16)', true: '#3EB489'}}
              thumbColor={'white'}
              ios_backgroundColor='rgba(120, 120, 128, 0.16)'
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
        }
      </TouchableOpacity>
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
        <Text style={{ fontSize: 25, fontWeight: '600', color: '#3EB489', marginTop: 15}}>Settings</Text>
        <TouchableOpacity
          style={{
            width:'100%',
            backgroundColor: '#1E1E1E',
            borderRadius: 10,
            justifyContent:'center',
            height: 40,
            borderWidth: 1,
            borderColor: 'black',
            marginTop: 45,
            paddingHorizontal: 25
          }}
        >
          <Text style={{ color:'white', fontWeight: '500', fontSize: 16}}>My Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 42,
            width:'100%',
            justifyContent:'center',
            alignItems: 'center',
            backgroundColor: '#3EB489',
            borderRadius: 10,
            marginVertical: 45,
            borderColor:'black',
            borderWidth: 1
          }}
        >
          <Text style={{ color:'white', fontWeight: '600', fontSize: 20 }}>Start chat</Text>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor: '#1E1E1E',
            borderRadius: 10,
            }}
          >
            {
              SettingsData.map((item) => <ItemSettings key={item._id} item={item}/>)
            }
          </View>

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


