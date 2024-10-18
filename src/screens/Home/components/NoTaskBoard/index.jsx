import React from "react";
import { View, Text } from "react-native";
import { ClipboardText } from 'phosphor-react-native'
import { styles } from "./styles";

export function NoTaskBoard() {
    return (
        <View style={styles.container}>
            <ClipboardText style={styles.icon} size={72} color="#808080" />
            <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.subtitle}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}