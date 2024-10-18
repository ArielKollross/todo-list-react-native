import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { StatusHeader } from './components/StatusHeader';
import { NoTaskBoard } from './components/NoTaskBoard';
import { TaskItem } from './components/TaskItem';

import { styles } from './styles'
import {  PlusCircle } from 'phosphor-react-native'

export function Home() {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');

    function handleCreateNewTask() {
        const newTask = {
            id: new Date().getTime(),
            name: taskName,
            done: false,
        }

        setTasks((state) => [...tasks, newTask]);

        setTaskName('');
    }

    function handleDeleteTask(taskId) {
        setTasks((state) => state.filter((item) => item.id !== taskId));
    }

    function handleToggleTaskDone(taskId) {
        setTasks((prevTasks) =>
          prevTasks.map((item) => (item.id === taskId ? { ...item, done: !item.done } : item))
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Adicionar uma tarefa'
                    value={taskName}
                    onChangeText={setTaskName}
                    placeholderTextColor='#808080'
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleCreateNewTask}
                >
                    <PlusCircle size={24} color="#F2F2F2" />
                </TouchableOpacity>
            </View>

            <StatusHeader tasks={tasks} />

            {tasks.length === 0 && (
                <NoTaskBoard />
            )}

            <FlatList
                keyExtractor={item => item.id}
                data={tasks}
                renderItem={({item}) => (
                    <TaskItem
                        task={item}
                        onDeleteTask={handleDeleteTask}
                        onToggleTaskDone={handleToggleTaskDone}
                    />
                )}
            />
        </View>
    );
}