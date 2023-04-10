import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {useIsFocused} from '@react-navigation/native'
import {getFavorite} from '../../utils/storage'

import {FoodsList} from '../../components/foodLIst'

export function Favorites() {
  
  const [receipe, setReceipe] = useState([])
  const isFocused = useIsFocused()

  useEffect(() => {
    let isActive = true;
    async function getReceipe(){
      const result = await getFavorite("@appreceita");
      if(isActive) {
        setReceipe(result)
      }
    }
    if(isActive) {
      getReceipe();
    }
    return () => {
      isActive = false
    }
  }, [isFocused])

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tela Home</Text>
      {
        receipe.length === 0 && (
          <Text>Voce nao tem nenhuma receita salva !!!</Text>
        )
      }
      <FlatList 
        showsVerticalScrollIndicator={false}
        style={{marginTop: 14}}
        data={receipe}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <FoodsList data={item}/>}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    flex:1,
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 36
  },
  title:{
    color: '#000',
    fontWeight: 'bold',
    fontSize: 24
  }
});
