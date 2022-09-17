import { FC } from 'react';
import { Image, View } from 'react-native';

export const Home: FC = () => {
    return (
        <View>
            <Image
                source={{
                    uri: 'https://www.rover.com/blog/wp-content/uploads/2020/10/Miss_Dog-Mom_Harvey_3-smaller.jpg',
                }}
                style={{ width: '100%', height: 500 }}
                resizeMode="cover"
            />
        </View>
    );
};
