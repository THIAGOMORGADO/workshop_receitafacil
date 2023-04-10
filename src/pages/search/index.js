
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { useRoute } from '@react-navigation/native';

import {FoodsList} from '../../components/foodLIst'
import api from '../../services/api'

export function Search() {

  const route = useRoute();
  const [receipe, setReceipe] = useState([])
  useEffect(() =>{
    async function fetchReceipes(){
      const response = await api.get(`/foods?name_like=${route.params?.name}`)
      setReceipe(response.data)
    }


    fetchReceipes();
  }, [route.params?.name])
  return(
    <View style={styles.container}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={receipe}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <FoodsList data={item}/>}
        ListEmptyComponent={() => <Text style={styles.listText}>Nao encontramos o que esta  buscando !!</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f3f9ff',
    paddingStart: 14,
    paddingEnd: 14
  },
  listText:{
    fontSize:16
  }
});
