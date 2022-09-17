import React, { Suspense } from 'react';
import { StatusBar } from 'react-native';
import { Navigation } from './src/navigation/Navigation';

export default function App() {
    return (
        <Suspense>
            <StatusBar animated={true} backgroundColor="#e08682" barStyle="light-content" />
            <Navigation />
        </Suspense>
    );
}
