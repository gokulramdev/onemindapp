import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StackNav } from './src/Navigation';
import { initAxios, setAuthToken } from './src/constants/axios';
import { useAtom } from 'jotai';
import { tokenAtom } from './src/store/tokenAtom';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';


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
  const [_, setToken] = useAtom(tokenAtom)


  // splashScreen automatic close
  useEffect(() => { setTimeout(() => SplashScreen.hide(), 1000) }, [])
  useEffect(() => {

    AsyncStorage.getItem('auth_token')
      .then((jsonString: any) => {
        setToken(jsonString)
        setAuthToken(jsonString)
        return jsonString
      }).catch((error: any) => {
        console.error('Error retrieving response: ', error);
      });
  }, [])

  initAxios()


  const toastConfig = {
    success: (props: any) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: 'pink', backgroundColor: "#EB5757" }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: '400'
        }}
      />
    ),
    error: (props: any) => (
      <ErrorToast
        {...props}
        style={{ borderLeftColor: '#EB5757', backgroundColor: "#EB5757" }}

        text1Style={{
          fontSize: 17
        }}
        text2Style={{
          fontSize: 15
        }}
      />
    ),
  };
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StackNav />
        <Toast />
        <Toast config={toastConfig} />

      </NavigationContainer>
    </QueryClientProvider>

  );
}



export default App;
