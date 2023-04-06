import {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView, Image} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Entypo, AntDesign, Feather} from '@expo/vector-icons';

import {Ingredients} from '../../components/ingredents'
import {Instructions} from '../../components/instructions'

export function Details({}) {
  const route = useRoute();
  const navigation = useNavigation();



  useLayoutEffect(() =>{
    navigation.setOptions({
      title: route.params?.data ? route.params?.data.name : "Detalhe da receita",
      headerRight: () => (
        <Pressable>
          <Entypo 
          name='heart'
          size={28}
          color="#ff4141"
        />
        </Pressable>
        
      )
    })
  }, [navigation, route.params?.data])

  return(
    <ScrollView contentContainerStyle={{ paddingBottom: 14 }} style={styles.container} showsVerticalScrollIndicator={false}>
      <Pressable>
        <View style={styles.playIcon}>
          <AntDesign name='playcircleo' size={48} color="#fafafa"/>
        </View>
        <Image 
          style={styles.cover} 
          source={{uri: route.params?.data.cover }}
        />
      </Pressable>

      <View style={styles.HeaderDetails}>
        <View>
          <Text style={styles.title}>{route.params?.data.name}</Text>
          <Text style={styles.subtitle}>ingrediente ({route.params?.data.total_ingredients})</Text>
        </View>
        <Pressable>
          <Feather name='share-2' size={24} color="#121212"/>
        </Pressable>
      </View>

      {
        route.params?.data.ingredients.map((item) => (
          <Ingredients 
            key={item.id}
            data={item}
          />
        ))
      }

      <View style={styles.instructionsArea}>
        <Text style={styles.instructionsText}>Modo de preparo</Text>
        <Feather name='arrow-down' size={24} color='#fff' />
      </View>

      { route.params?.data.instructions.map((item, index) => (
          <Instructions key={item.id} data={item} index={index}/>
        ))
      }

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: '#f3f9ff',
    paddingTop: 14,
    paddingEnd: 14,
    paddingStart: 14 
  },
  cover: {
    height: 200,
    borderRadius: 14,
    width: "100%"
  }, 
  playIcon:{
    position: 'absolute',
    zIndex: 9,
    top: 0,
    left:0,
    bottom:0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  HeaderDetails:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14
  },
  title:{
    fontSize: 19,
    marginTop: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4
  },
  subtitle:{
    marginBottom: 14,
    fontSize: 16

  },
  instructionsArea: {
    backgroundColor: '#4cbe6c',
    
    flexDirection: 'row',
    padding:8,
    borderRadius:4,
    marginBottom: 14,
  },
  instructionsText:{
    fontSize: 18,
    fontWeight: 500,
    color: '#fff',
    marginRight: 8
  }
});
