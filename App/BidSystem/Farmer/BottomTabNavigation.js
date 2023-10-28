import { View, Text, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, FontAwesome } from '@expo/vector-icons';

// <<<<<<< IT21168222
// import signUp from '../../components/SignUp';
// import Home from '../../components/Home';
// import DisplayBids from './DisplayBids';
// =======
// import DisplayBids from './DisplayBids';
// import SignUp from '../../Authentication/SignUp';
// import Home from '../../Home';
// >>>>>>> main

const TabNavigation = () => {
    const TabNavs = createBottomTabNavigator();
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TabNavs.Navigator screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}>
                <TabNavs.Screen name="#1" component={Home} options={{ tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (<Ionicons name='ios-home' size={size} color={color} />) }} />
// <<<<<<< IT21168222
//                 <TabNavs.Screen name="#2" component={signUp} options={{ tabBarLabel: 'Forum', tabBarIcon: ({ color }) => (<Ionicons name="chatbubbles-sharp" size={24} color={color} />) }} />
//                 <TabNavs.Screen name="#3" component={DisplayBids} options={{ tabBarLabel: 'Bidding', tabBarIcon: ({ color }) => (<FontAwesome name="handshake-o" size={24} color={color} />) }} />
//                 <TabNavs.Screen name="##" component={signUp} options={{ tabBarLabel: 'Profile', tabBarIcon: ({ color }) => (<FontAwesome name="user" size={24} color={color} />) }} />
// =======
//                 <TabNavs.Screen name="#2" component={SignUp} options={{ tabBarLabel: 'Forum', tabBarIcon: ({ color }) => (<Ionicons name="chatbubbles-sharp" size={24} color={color} />) }} />
//                 <TabNavs.Screen name="#3" component={DisplayBids} options={{ tabBarLabel: 'Bidding', tabBarIcon: ({ color }) => (<FontAwesome name="handshake-o" size={24} color={color} />) }} />
//                 <TabNavs.Screen name="##" component={SignUp} options={{ tabBarLabel: 'Profile', tabBarIcon: ({ color }) => (<FontAwesome name="user" size={24} color={color} />) }} />
// >>>>>>> main
            </TabNavs.Navigator>
        </KeyboardAvoidingView>
    )
}

export default TabNavigation