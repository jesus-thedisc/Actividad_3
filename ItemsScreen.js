import { FlatList, Pressable, StyleSheet, Text, View, ActivityIndicator} from "react-native";
import {getItems} from "../services/api";
import { useEffect, useState } from "react";



export default function ItemScreen({ navigation }){

const [items,setItems] = useState([]);
const [loading,setloaging] = useState(true);
const [error, setError] = useState('');

async function loadItems(){
    try{
            setloaging(true);
            setError('');
            const data = await getAllItems();
            setItems(data);
    }catch(err){
            setError(err.message);

    }finally{
            setloaging(false);
    }
}

    useEffect(()=>{
        loadItems();
    },[]);

    if(loading){
        return(
            <View>
                <ActivityIndicator style={style.center} size={"large"}/>
                <Text>Cargando datos</Text>
            </View>
        )
    }

    if(error){
        return(
            <View>
                <Text>Error al cargar los datos</Text>
                <Pressable style={styles.error} onPress={loadItems}>
                    <Text style={styles.message}>Cargar nuevamente</Text>
                </Pressable>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Listado </Text>
                <View style={styles.actions}>
                <Pressable style={styles.addButton} 
                onPress={(loadItems)=> navigation.navigate('AddItem')}>
                    <Text style={styles.addButtonText}>Nuevo</Text>
                </Pressable>
            </View>
            </View>
            <FlatList
                data={items}
                keyExtractor={(item)=> item.id}
                renderItem={ ({item}) =>(
                    <Pressable
                        style={styles.card}
                        onPress={()=> navigation.navigate('Detail',{item:item})}
                        >
                        <Text >{item.title}</Text>
                         <Text >{item.description}</Text>
                         </Pressable>
                )}
                ListEmptyComponent={<Text>No hay elementos para mostrar</Text>}
            />
           
        </View>
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#f5f7fb',
  },
  center: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f7fb',
  },
  header: {
    gap: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  addButton: {
    backgroundColor: '#16a34a',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  reloadButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  reloadButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardText: {
    color: '#555',
  },
  message: {
    marginTop: 12,
    color: '#555',
    textAlign: 'center',
  },
  error: {
    color: '#dc2626',
    textAlign: 'center',
    marginBottom: 12,
  },
});