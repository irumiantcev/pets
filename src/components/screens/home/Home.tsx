import { FC } from 'react';
import {Image, ScrollView, Text, View} from 'react-native';

export const Home: FC = () => {
    return (
        <ScrollView>
            <Image
                source={{
                    uri: 'https://www.rover.com/blog/wp-content/uploads/2020/10/Miss_Dog-Mom_Harvey_3-smaller.jpg',
                }}
                style={{ width: '100%', height: 500 }}
                resizeMode="cover"
            />
            <Text>Home</Text>
            <Image
                source={{
                    uri: 'https://i.pinimg.com/736x/db/5d/30/db5d30256add2118cb2dc75ee6bcbb86.jpg',
                }}
                style={{ width: '100%', height: 500 }}
                resizeMode="cover"
            />
        </ScrollView>
    );
};
