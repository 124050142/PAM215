import { View, Text, StyleSheet, Button } from 'react-native'; 
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Profile({ navigation }) {
  const handleDetailsPress = () => {
    navigation.navigate('Detail'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconRow}> 
        <Ionicons name="person-outline" size={28} color="green" />
        <Text style={styles.title}>Perfil usuario</Text>
      </View>
      <View style={{ marginTop: 20 }}>
          <Button 
              title="Detalles de Usuario" 
              onPress={handleDetailsPress} 
              color="#007BFF"
          />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',     
    padding: 20,
  },
  iconRow: {
    flexDirection: 'column', 
    alignItems: 'center',
    marginBottom: 20, 
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'green',
  },
});