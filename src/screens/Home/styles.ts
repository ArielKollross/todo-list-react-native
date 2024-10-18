import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        padding: 24,
        paddingTop: 0,
        paddingBottom: 32
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 42,
        marginTop: -26,
    },
    textInput: {
        flex: 1,
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 5,
        color: '#F2F2F2',
        padding: 16,
        fontSize: 16,
        marginRight: 12,
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
        color: '#808080',
    },
});