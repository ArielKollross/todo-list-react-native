import { StatusBar, StatusBarProps } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Home } from './src/screens/Home';
import { Header } from './src/components/Header';

const styles = StyleSheet.create({
    header: {
        height: 100
    }
})

export default function App() {
  return (
    <>
      <StatusBar
        style='light'
        translucent
      />
      <Header />
      <Home />
    </>
  );
}