import React, {Component} from 'react';


import login from './login';
import Inicio from './inicio';

class homecontainer extends Component{
    constructor (props){
        super(props);

        this.state ={
            vista: 'login',
            usuario:'',
        };
    }
    cambiarpantalla= (pantalla)=>{
        this.setState({
            vista: pantalla,    
            
        });

    };
     render(){
         const {vista,usuario} = this.state;
         
 
         if (vista =='login'){
             return(
                 <Login
                 cambiarpantalla = {this.cambiarpantalla}
                 onChangeText={(text) => this.setState({usuario:text})}
                 
                 />
             );
         }
         if (vista === 'Inicio'){
             return(
                 <Inicio
                 cambiarpantalla ={this.cambiarpantalla}
                 usuario={usuario}
                 />
             );

             }
     }
}

export default homecontainer;

