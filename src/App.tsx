import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home'; // Ensure this path is correct
import Detail from './Screens/Detail'; // Ensure this path is correct
import Login from './Screens/Login';   // Ensure this path is correct

// Define stack navigation params
export type StackParamList = {
  Login: undefined;
  Home: undefined;
  Detail: { name: string; image: any; price: string }; // Parameter for Detail page
};

const Stack = createNativeStackNavigator<StackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Toko Salad Buah Sukabumi' }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ title: 'Detail Salad' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;