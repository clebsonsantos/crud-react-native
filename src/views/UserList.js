import React, { useContext } from 'react';


import { Alert, FlatList} from 'react-native'
import { ListItem, Avatar, Button, Icon} from 'react-native-elements';

import UsersContext from '../context/UserContext'


// import { Container } from './styles';

export default props =>{

  const {state, dispatch} = useContext(UsersContext)

  function confirmDeletion(user){
    Alert.alert('Excluir usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress(){
          dispatch({
            type: 'deleteUser',
            payload: user
          })
        }
      },
      {
        text: 'Não'
      }
    ])

  }


   function getUserItem({item: user}) {
     return (
       
             <ListItem 
            
              key={user.id}
              bottomDivider
              onPress={()=> props.navigation.navigate('UserForm', user)}
             >
    
               <Avatar source={{uri: user.avatarUrl}} />
    
               <ListItem.Content>
                 <ListItem.Title>{user.name}</ListItem.Title>
                 <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                
               </ListItem.Content>
               <Button
               onPress={()=> props.navigation.navigate('UserForm', user)}
               type="clear"
               
               icon={<Icon name="edit" size={25} color="orange"/>}/>
               <Button
                onPress={()=> confirmDeletion(user)}
                type="clear"
                icon={<Icon name="delete" size={25} color="red"/>}/>
              
    
             </ListItem>
      


     )
   }


      return (
        
          <FlatList
          keyExtractor={user => user.id.toString()}
          data={state.users}
          renderItem={getUserItem}
          
          />
        
      )

    
}