import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <MaterialIcons color={color} size={20} name="home" />
                    ,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons 
                            color={color}
                            size={20}
                            name="settings" />
                    ),
                }}
            />
        </Tabs>
    )
}