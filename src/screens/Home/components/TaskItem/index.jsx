import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { Trash } from 'phosphor-react-native';
import CheckBox from 'expo-checkbox';

export function TaskItem({ task, onDeleteTask, onToggleTaskDone }) {
    return (
        <View style={styles.card}>
            <CheckBox
                style={styles.checkbox}
                value={task.done}
                onValueChange={() => onToggleTaskDone(task.id)}
                color={task.done ? '#5E60CE' : '#4EA8DE'}
            />

            <Text
                style={ task.done
                    ? styles.taskTitleDone
                    : styles.taskTitle
                }
            >
                {task.name}
            </Text>

            <Trash
                style={styles.trashIcon}
                size={24}
                color="#808080"
                onPress={() => onDeleteTask(task.id)}
            />
        </View>
    );
}