import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './App/Navigations/BottomTabNavigation';
import BarterRequests from './App/BarterSystem/Publisher/RequestsMain';
import PostNewRequest from './App/BarterSystem/Publisher/PostNewRequest';
import Requests from './App/BarterSystem/Publisher/Requests';
import Offers from './App/BarterSystem/Publisher/Offers';
import BarterMain from './App/BarterSystem/Publisher/RequestsMain';
import BarterInbox from './App/BarterSystem/BarterInbox';
import SignIn from './App/Authentication/SignIn';
import SignUp from './App/Authentication/SignUp';
import FarmersHome from './App/FarmersHome';
import { useEffect, useState } from 'react';
import ChatScreen from './App/Screens/ChatScreen';
import BarterExchange from './App/BarterSystem/Viewer/BarterExchange';
import BarterAvailableOptions from './App/BarterSystem/Publisher/BarterAvailableOptions';

const Stack = createStackNavigator();

export default function App() {

  return (
    <View style={styles.container}>
      {/* <NavigationContainer>
        <TabNavigation />
      </NavigationContainer> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BTabNavigation" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="BTabNavigation" component={TabNavigation} />
          <Stack.Screen name="BarterRequests" component={BarterRequests} />
          <Stack.Screen name="BarterMain" component={BarterMain} />
          <Stack.Screen name="BarterInbox" component={BarterInbox} />
          <Stack.Screen name="Requests" component={Requests} />
          <Stack.Screen name="BarterAvailableOptions" component={BarterAvailableOptions} />
          <Stack.Screen name="PostNewRequest" component={PostNewRequest} />
          <Stack.Screen name="Offers" component={Offers} />

          <Stack.Screen name="FarmersHome" component={FarmersHome} />
          <Stack.Screen name="BarterExchange" component={BarterExchange} />

          <Stack.Screen name="ChatScreen" component={ChatScreen} />

          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
