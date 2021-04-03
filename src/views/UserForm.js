
import React, { useContext, useState } from 'react';

import { Text, View, TextInput, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import UsersContext from '../context/UserContext';


// import { Container } from './styles';

export default ({route, navigation}) =>{
  const [user, setUser] = useState(route.params ? route.params: {})
  const {dispatch} = useContext(UsersContext)


  return (
    <>
    <View style={style.form}>
      <Text>Nome</Text>

      <TextInput
      style={style.input}
      onChangeText={name => setUser({...user, name})}
      placeholder="Informe o nome"
      value={user.name}
      />

    <Text>E-mail:</Text>

    <TextInput
    style={style.input}
    onChangeText={email => setUser({...user, email})}
    placeholder="Informe o e-mail"
    value={user.email}
    />
 
    <Text>Avatar:</Text>

    <TextInput
    style={style.input}
    onChangeText={avatar => setUser({...user, avatar})}
    placeholder="Informe o link para o avatar"
    value={user.avatarUrl}
    />
    <Button title="Salvar"
  
    onPress={()=>{
      dispatch({
        type: user.id ? 'updateUser' : 'createUser',
        payload: user
      })
      navigation.navigate('UserList')
    }}/>
  </View>
  </>
  )
}


const style = StyleSheet.create({
  form: {
    padding: 12,
  
  }, 
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    marginBottom: 10, padding: 10
  }
})