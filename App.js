import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import 'react-native-gesture-handler'; 

export default function App() {
  return (
    <NavigationContainer>
      <>
        <StatusBar style="light" />
        <Routes />
      </>
    </NavigationContainer>
  );
}
