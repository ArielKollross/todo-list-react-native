import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 42,

        fontWeight: 'bold',
        fontSize: 14,

        borderBottomWidth: 1,
        borderBottomColor: '#262626',
        paddingBottom: 20,
    },
    createdTasks: {
       flexDirection: 'row',
       alignItems: 'center',
    },
    createdTasksTitle: {
        color: '#4EA8DE',
        fontWeight: 'bold',
        marginRight: 8,
    },
    createdTasksQuantityText: {
        color: '#D9D9D9',
        fontWeight: 'bold',
    },
    doneTasks: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    doneTasksTitle: {
        color: '#8284FA',
        fontWeight: 'bold',
        marginRight: 8,
    },
    countTasks: {
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: '#333333',
        borderRadius: 999,
        marginLeft: 8,
        width: 26,
    },
    doneTasksText: {
        color: '#D9D9D9',
        fontWeight: 'bold',
    }
});