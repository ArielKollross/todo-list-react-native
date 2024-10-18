import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

export function StatusHeader({ tasks }) {
    const tasksDone = tasks.filter((item) => item.done);
    const countTasksDone = tasksDone.length;

    return (
        <View style={styles.header}>
            <View style={styles.createdTasks}>
                <Text style={styles.createdTasksTitle}>Criadas</Text>

                <View style={styles.countTasks}>
                    <Text style={styles.doneTasksText}>{tasks.length}</Text>
                </View>
            </View>

            <View style={styles.doneTasks}>
                <Text style={styles.doneTasksTitle}>Concluídas</Text>

                <View style={styles.countTasks}>
                    <Text style={styles.doneTasksText}>{countTasksDone}</Text>
                </View>
            </View>
        </View>
    );
}