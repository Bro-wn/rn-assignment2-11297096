import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.pen}>My name is <Text style={styles.pin}> Asare Kwaku Obeng</Text></Text>
    
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pen: {
      fontSize: 24,
  },
  pin: {
      fontSize: 24,
      fontWeight: 'bold',
  },
});
