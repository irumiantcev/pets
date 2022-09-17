import { FC } from 'react';
import { Image, View } from 'react-native';

export const Information: FC = () => {
    return (
        <View>
            <Image
                source={{
                    uri: 'https://i.pinimg.com/736x/db/5d/30/db5d30256add2118cb2dc75ee6bcbb86.jpg',
                }}
                style={{ width: '100%', height: 500 }}
                resizeMode="cover"
            />
        </View>
    );
};
