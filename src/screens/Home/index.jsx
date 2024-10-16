import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { styles } from './styles'

export function Home() {
    const [taks, setTasks] = useState(['task 1']);
    const [taskName, setTaskName] = useState('');
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    function handleCreateNewTask() {
        setTasks((state) => [...taks, taskName])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Todo App
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Adicionar uma tarefa'
                    value={taskName}
                    onChange={setTaskName}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleCreateNewTask}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={taks}
                renderItem={({item}) => (
                    <View style={styles.card}>
                          <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={styles.taskTitle}>{item}</Text>
                    </View>
                )}
                keyExtractor={item => item}
            />
        </View>
    );
}