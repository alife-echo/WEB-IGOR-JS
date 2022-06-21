import React from 'react'
import { Text, StyleSheet, View, Image, TextInput } from 'react-native'
const img = {
  uri: 'https://cdna.artstation.com/p/assets/images/images/000/093/900/large/hugo-deschamps-ac4-homageac1.jpg?1402013768&dl=1',
  width: 200,
  height: 200
}
export const Content_Page_One = () => {
  return (
    <View style={styles.view_Component}>
      <Text style={styles.texts}>Olá meu nome é alife</Text>
      <Text>Reginaldo rocha</Text>
      <Image source={img} />
      <Image source={img} />
      <Image source={img} />
      <Image source={img} />
      <Image source={img} />
      <Image source={img} />
      <Image source={img} />
      <Image source={img} />
      <Image source={img} />
      <Image source={img} />

      <TextInput
        style={styles.input_one}
        defaultValue="Insira alguns valores"
      />
    </View>
  )
}
const styles = StyleSheet.create({
  view_Component: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  input_one: {
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
    width: 300,
    borderRadius: 10,
    textAlign: 'center'
  }
})
//export default Content_Page_One
