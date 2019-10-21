import React from 'react';

import {
    View,
    Text,
    Button,
    TextInput,
} from 'react-native';

const login =(props) =>{
    const {
        cambiarpantalla,
        onChangeText,
        usuario,
    }= props;

    return(
        <View>
            <Text>login </Text>
            <TextInput
            placeholder="Ingrese su nombre"
            defaultValue={usuario}
            onChangeText={onChangeText}
           
            />
            <Button
            title={'Pushme!'}
            onPress={() => {cambiarpantalla ('Inicio');}
        }
            />
        
        </View>
    );
};

export default login;