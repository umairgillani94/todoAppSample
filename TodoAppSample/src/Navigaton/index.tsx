import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabBarNavigation from './TabNavigation.tsx';

// const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabBarNavigation></TabBarNavigation>
      {/* <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainTabBar" component={TabBarNavigation} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default Navigation;
