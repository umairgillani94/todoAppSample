import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TodoListingScreen} from '../../Screens';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FilterType } from '../../Enums';

const Tab = createBottomTabNavigator();

function TabBarNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
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
        initialParams={{filter: FilterType.All}}
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
        initialParams={{filter: FilterType.Pending}}
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
        initialParams={{filter: FilterType.Completed}}
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
