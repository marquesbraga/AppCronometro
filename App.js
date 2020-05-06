import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            numero: 0,
            botao: 'Start',
            ultimo: null
        }

        //variavel do timer do relogio
        this.timer = null;

        this.start = this.start.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    start(){

        if(this.timer != null){
            // aqui vai limpar o timer
            clearInterval(this.timer)
            this.timer = null;
            this.setState({botao: 'Continuar'})
        }else{
            //começa a girar o timer
            this.timer = setInterval(()=>{
                this.setState({numero: this.state.numero + 0.1})
            }, 100);
            this.setState({botao: 'Parar'})

        }   
    }

    limpar(){
        this.setState({
            ultimo: this.start.numero,
            numero: 0,
            botao: 'Start'              
        })
        clearInterval(this.timer)
        this.timer = null
    }


    render(){
        return(
            <View style={styles.container}>
                <Image
                    source={require('./src/cronometro.png')}
                    style={styles.cronometro}
                />
                <Text style={styles.time}>{this.state.numero.toFixed(2)}</Text>
                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.btn} onPress={this.start}>
                        <Text style={styles.btnTexto}>{this.state.botao}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={this.limpar}>
                        <Text style={styles.btnTexto}>Limpar</Text>
                    </TouchableOpacity>
                </View>
            
                <View style={styles.ultimo}>
                    <Text style={styles.txtUltimo}>
                        {this.state.ultimo > 0 ? 'Ultimo tempo: '+ this.state.ultimo.toFixed(2) : ''}
                    </Text>
                </View>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#00aeef'
    },
    time:{
        marginTop: -160,
        color:"#fff",
        fontSize:65,
        fontWeight:'bold'
    },
    btnArea:{
        flexDirection:'row',
        marginTop: 80,
        height: 40,
    },
    btn:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        height: 40,
        margin: 17,
        borderRadius:9,
    },
    btnTexto:{
        color:'#00aeef',
        fontSize: 20,
        fontWeight:'bold'
    },
    ultimo:{
        marginTop: 40,
       
    },
    txtUltimo:{
        fontSize: 25,
        fontStyle:'italic',
        color:'#FFF'
    }
})

export default App;