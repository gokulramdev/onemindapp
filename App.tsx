import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  Login, Signup, ForgotPassword, NewPassword,
} from "./src/screens";
import { DrawerContent, AppTabNav } from "./src/Navigation"
import SplashScreen from 'react-native-splash-screen';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const queryClient =
  new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, staleTime: 0, networkMode: "always", retry: false,
      },
      mutations: { networkMode: "always", retry: false }
    }
  })


const App = () => {
  useEffect(() => { setTimeout(() => SplashScreen.hide(), 1000) }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Signup} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="newpassword" component={NewPassword} />
          <Stack.Screen
            name="Main"
            component={() => (
              <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} screenOptions={{ headerShown: false }}>
                <Drawer.Screen name="HomeTabs" component={AppTabNav} />
              </Drawer.Navigator>
            )}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>

  );
}



export default App;
