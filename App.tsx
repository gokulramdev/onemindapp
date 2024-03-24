import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StackNav } from './src/Navigation';
import { initAxios } from './src/constants/axios';
import { useAtom } from 'jotai';
import { tokenAtom } from './src/store/tokenAtom';
import AsyncStorage from '@react-native-async-storage/async-storage';


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
        return jsonString
      }).catch((error: any) => {
        console.error('Error retrieving response: ', error);
      });
  }, [])

  initAxios()
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </QueryClientProvider>

  );
}



export default App;
