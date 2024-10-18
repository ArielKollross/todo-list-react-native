import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        padding: 12,
        paddingRight: 8,
        backgroundColor: '#262626',
        height: 64,
        borderRadius: 8,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',

        color: '#F2F2F2',
        fontSize: 14,

        marginBottom: 8
    },
    checkbox: {
        flexShrink: 0,
        borderRadius: 999,
        borderBlockColor: '#4EA8DE',
        height: 17,
        width: 17,

        marginRight: 8
    },
    taskTitle: {
        flex: 1,
        flexGrow: 3,
        color: '#F2F2F2',
    },
    taskTitleDone: {
        flex: 1,
        flexGrow: 4,
        color: '#808080',
        textDecorationLine: 'line-through',
    },
    trashIcon: {
        flexGrow: 0,
    }
});