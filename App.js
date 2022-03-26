import React from 'react';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import LoginPage from './app/screens/LoginPage';


export default function App() {
  
  let[fontsLoaded]=useFonts({Poppins_400Regular, 
    'Poppins-Regular':require('./app/assets/fonts/Poppins-Regular.ttf')});
  if(!fontsLoaded){
    return <AppLoading />
  }
  return (
   <LoginPage></LoginPage>
  );
  }
  



