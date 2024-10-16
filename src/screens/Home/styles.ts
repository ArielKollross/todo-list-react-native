import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262626',
        padding: 24
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 46,
        marginBottom: 42
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 42,
        textAlign: 'center'
    },
    textInput: {
        flex: 1,
        height: 56,
        backgroundColor: '#FFF',
        borderRadius: 5,
        color: '#262626',
        padding: 16,
        fontSize: 16,
        marginRight: 12
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1E6F9F',
    },
    buttonText: {
        color: '#fff',
    },
    card: {
        padding: 20,
        backgroundColor: '#808080',
        height: 64,
        borderRadius: 8,
    },
    taskTitle: {
        color: '#fff',

    }
});