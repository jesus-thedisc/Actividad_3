import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Importaciones necesarias

import { userState } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ItemsScreen from './screens/ItemsScreen';
import DetailsScreen from './screens/DetailScreen';
import AddItemScreen from './screens/AddItemScreen';

const Stack = createNativeStackNavigator();
const initialItems =[
  {
    id: '1',
    title: 'Tarea 1',
    description: 'Crear app usando npx'
  },
  {
    id: '2',
    title: 'Tarea 2',
    description: 'Correr app usando npx expo start'
  }
]


export default function App() {
  const [items, setItems] = userState(initialItems);

  function addItem(newItem){
    setItems ([...items],{
      id: Date.now.toString,
      title: newItem.title,
      description: newItem.description
    });
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        

        <Stack.Screen name='Home'
        component={HomeScreen}
        options={{title: 'Home'}}/>

        <Stack.Screen name='Items'
        options={{title: 'Listado'}} 
        component={ItemsScreen}/>
      

        <Stack.Screen name = 'Detail'
        componet={DetailsScreen}
        options= {{title: 'Detalle'}}/>

        <Stack.Screen name='AddItem'
        options={{title: 'Nuevo Elemento'}}>
        { (props) => <AddItemScreen{...props} onAdditem={addItem}></AddItemScreen>}
        </Stack.Screen>


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
