import { View, Text, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Home from '../Home';
import BarterDash from '../BarterSystem/BarterDash';
import BarterMain from '../BarterSystem/Publisher/RequestsMain';
import PostNewRequest from '../BarterSystem/Publisher/PostNewRequest';
import BarterInbox from '../BarterSystem/BarterInbox';

const TabNavigation = () => {
    const TabNavs = createBottomTabNavigator();
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TabNavs.Navigator screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true, }}>
                <TabNavs.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (<Ionicons name='ios-home' size={size} color={color} />) }} />
                <TabNavs.Screen name="#" component={''} options={{ tabBarLabel: 'Forum', tabBarIcon: ({ color }) => (<Ionicons name="chatbubbles-sharp" size={24} color={color} />) }} />
                <TabNavs.Screen name="BarterView" component={BarterDash} options={{ tabBarLabel: 'Barter', tabBarIcon: ({ color }) => (<FontAwesome name="handshake-o" size={24} color={color} />) }} />
                <TabNavs.Screen name="##" component={''} options={{ tabBarLabel: 'Profile', tabBarIcon: ({ color }) => (<FontAwesome name="user" size={24} color={color} />) }} />
            </TabNavs.Navigator>
        </KeyboardAvoidingView>
    )
}

export default TabNavigation