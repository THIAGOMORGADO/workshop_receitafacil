import {View, Text, TouchableOpacity, StyleSheet,
  Image,

} from 'react-native';

export function FoodsList({ data }) {
  return(
    <TouchableOpacity style={styles.container} activeOpacity={0.9}>
      <Image style={styles.cover} source={{uri: data.cover}}/>
      <Text>{data.name}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container:{
    marginBottom: 14,
  },
  cover: {
    width: '100%',
    height: 200,
    borderRadius: 14,
  }
})