import React from 'react';
import { NativeBaseProvider, extendTheme } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Iconos
import { Ionicons } from '@expo/vector-icons';
//Componentes Importados
import { home } from "./components/Home";
import { logs } from "./components/Logs"
import { config } from "./components/Config"
//Importancion de la conexión a firebase
import * as firebase from 'firebase/compat';
import { firebaseConfig } from './setup/firebase';


firebase.initializeApp(firebaseConfig);

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <Tab.Navigator
          screenOptions={{ headerTitleAlign: 'center' }}
        >
          <Tab.Screen name="Home" component={home} options={{
            title: 'PlantApp',
            headerStyle: {
              backgroundColor: '#3e8914ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: "white",
              fontSize: 25,

            },

            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }} />

          <Tab.Screen name="Logs" component={logs} options={{
            title: 'PlantApp',
            headerStyle: {
              backgroundColor: '#3e8914ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: "white",
              fontSize: 25,

            },

            tabBarLabel: 'Logs',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book" color={color} size={size} />
            ),
          }} />

          <Tab.Screen name="Config" component={config} options={{
            title: 'PlantApp',
            headerStyle: {
              backgroundColor: '#3e8914ff',

            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: "white",
              fontSize: 25,

            },

            tabBarLabel: 'Config',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" color={color} size={size} />
            ),
          }} />
        </Tab.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const theme = extendTheme({
  colors: {
    primary: {
      100: "#134611ff",
      200: "#3e8914ff",
      300: "#3da35dff",
      400: "#96e072ff",
      500: "#e8fccfff",
    },
  },
});
