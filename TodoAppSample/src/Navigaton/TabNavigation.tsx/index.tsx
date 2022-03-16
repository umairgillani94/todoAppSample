import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TodoListingScreen} from '../../Screens';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavAddButton} from '../../Components';

const Tab = createBottomTabNavigator();

function TabBarNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        // headerRight: () => <NavAddButton />,
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
