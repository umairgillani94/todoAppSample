import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TodoListingScreen} from '../../Screens';
import {View, Button, Alert, Text, TouchableOpacity} from 'react-native';
import {getScaledFont} from '../../HelperFuntions';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const AddButton = () => {
  return (
    <View
      style={{
        marginRight: '10%',
      }}>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('', 'This is a button!', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        }}>
        <Text style={{fontWeight: 'bold', fontSize: getScaledFont(40)}}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

function TabBarNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerRight: () => <AddButton />,
        headerTitle: '',
        headerTitleAlign: 'center',
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        headerStatusBarHeight: 0,
      }}>
      <Tab.Screen
        name="All Tasks"
        component={TodoListingScreen}
        options={{
          headerTitle: 'All Todo Items',
          tabBarIcon: ({focused, color, size}) => {
            return <Icon name="list" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Pending"
        component={TodoListingScreen}
        options={{
          headerTitle: 'Pending Todo Items',
          tabBarIcon: ({focused, color, size}) => {
            return <Icon name="hourglass-2" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Completed"
        component={TodoListingScreen}
        options={{
          headerTitle: 'Completed Todo Items',
          tabBarIcon: ({focused, color, size}) => {
            return <Icon name="check-square" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabBarNavigation;
