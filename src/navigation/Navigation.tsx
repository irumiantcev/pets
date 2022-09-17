import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TypeRootStackParamList } from './types';
import { Home } from '../components/screens/home/Home';
import { Information } from '../components/screens/information/Information';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<TypeRootStackParamList>();

export const Navigation: FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Group
                    screenOptions={{
                        headerStyle: { backgroundColor: '#e08682' },
                        headerTintColor: '#fff',
                        tabBarStyle: { backgroundColor: '#e08682' },
                        tabBarInactiveTintColor: '#fff',
                        tabBarActiveTintColor: '#0300e0',
                    }}
                >
                    <Tab.Screen
                        name="Home"
                        component={Home}
                        options={{
                            tabBarLabel: 'List',
                            tabBarIcon: info => <Ionicons name="list" size={25} color={info.color} />,
                        }}
                    />

                    <Tab.Screen
                        name="Information"
                        component={Information}
                        options={{
                            tabBarIcon: info => <Ionicons name="information" size={25} color={info.color} />,
                        }}
                    />
                </Tab.Group>
            </Tab.Navigator>
        </NavigationContainer>
    );
};
