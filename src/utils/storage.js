import AsyncStorage from '@react-native-async-storage/async-storage';


export async function getFavorite(key){
  const favorites = await AsyncStorage.getItem(key);
  return JSON.parse(favorites) || []
}

export async function saveFavorite(key, newItem){
  let myFavorites = await getFavorite(key);
  let hasItem = myFavorites.some(item => item.id === newItem.id);
  if(hasItem) {
    console.log("esse item esta salvo");
    return;
  }
  myFavorites.push(newItem);
  await AsyncStorage.setItem(key, JSON.stringify(myFavorites))
  
}

export async function removeFavorite(id){
  let receipe = await getFavorite("@appreceita");

  let myFavorites = receipe.filter(item => {
    return (item.id !== id)
  })
  await AsyncStorage.setItem("@appreceita", JSON.stringify(myFavorites));
  return myFavorites;
}

export async function isFavorite(receipe){
 let myReceipe = await getFavorite("@appreceita");
 const favorites = myReceipe.find(item => item.id === receipe.id);
 if(favorites ){
  return true;
 }
 return false;
}