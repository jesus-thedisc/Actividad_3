import{ Pressable, StyleSheet, Text, View} from "react-native";

export default function HomeScreen ({navigation}) {

    return (
        <view style={StyleSheet.container}>
            <Text style={styles.title}>App de Navegacion</Text>
            <Text style={styles.subtitle}>Datos Locales</Text>
           
            <Pressable style={styles.button}
            onPress={() => navigation.navigate('Items')}>
                    <Text style={styles.buttonText}>Ir Tasks</Text>
            </Pressable>

            <Pressable style={styles.button}
            onPress={()=> navigation.navigate('AddItem')}>
                        <Text style={styles.buttonText}>Agregar nueva Task</Text>
            </Pressable>
        </view>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f5f7fb',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    color: '#555',
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#2563eb',
    padding: 14,
    borderRadius: 8,
  },
  secondaryButtonText: {
    color: '#2563eb',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
