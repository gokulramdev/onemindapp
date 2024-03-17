import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StackNav } from './src/Navigation';


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

  // splashScreen automatic close
  useEffect(() => { setTimeout(() => SplashScreen.hide(), 1000) }, [])


  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </QueryClientProvider>

  );
}



export default App;
