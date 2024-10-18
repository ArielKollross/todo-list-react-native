import React from 'react'
import { View, Image, Text } from 'react-native'

import { styles } from './styles'

export function Header() {
    return (
        <View style={styles.container}>
            <Image source={require('./Logo.png')} />
            <Text>Todo App</Text>
        </View>
    )
}