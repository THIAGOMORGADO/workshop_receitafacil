
import {View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity}from 'react-native';
import { Logo } from '../../components/logo';
import {Ionicons} from '@expo/vector-icons';
import { useState } from 'react';

export function Home() {
  const [inputValue, setInputValues] = useState("");

  function handleSearch() {
    console.log(inputValue);
  }

  return(
    <SafeAreaView style={styles.container}>
     <Logo />
     <Text styles={styles.title}>Encontre a Receita.</Text>
     <Text styles={styles.title}>O que combina com vc</Text>

     <View
      style={styles.form}
     >
      <TextInput 
        style={styles.input}
        placeholder='Digite o nome da comida'
        value={inputValue}
        onChangeText={(text) => setInputValues(text)}
        keyboardAppearance='dark'
        keyboardType='name-phone-pad'
       
        
        />
      <TouchableOpacity onPress={handleSearch}>
        <Ionicons name='search' size={28} color='#4cbe6c'/>
      </TouchableOpacity>
     </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
   flex: 1,
   backgroundColor: '#f3f9ff',
   paddingTop:36,
   paddingStart: 14,
   paddingEnd: 14
  }, 
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  form: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#cecece',
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    width: '90%',
    height: 54,
    maxWidth: '90%',
  }
});
