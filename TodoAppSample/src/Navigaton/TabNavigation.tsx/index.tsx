import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TodoListingScreen} from '../../Screens';
import {View, Alert, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {getScaledFont} from '../../HelperFuntions';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const AddButton = () => {
  return (
    <View style={styles.addButton}>
      <TouchableOpacity
        style={styles.fullSize}
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
        <Text style={styles.plus}>+</Text>
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

const styles = StyleSheet.create({
  addButton: {
    marginRight: 10,
    width: 50,
    aspectRatio: 1,
    height: undefined,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullSize: {
    width: '100%',
    height: '100%',
  },
  plus: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: getScaledFont(40),
  },
});
