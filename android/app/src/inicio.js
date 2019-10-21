import React from 'react';

import {
    View,
    Text,
    Button,
    
} from 'react-native';

const Inicio = (props) => {
    const {
        cambiarpantalla,
        usuario,
    }=props;

    return(
        <View>
            <Text>Inicio</Text>
            <Text>{usuario}</Text>
            <Button
            title={'Back!'}
            onPress={
                ()=> {cambiarpantalla('login');}
            }
            />
        </View>
    );
};

export default Inicio;
