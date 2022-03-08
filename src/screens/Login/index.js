import React from 'react';
import { SafeAreaView, TextInput, Image, Text, TouchableOpacity, View } from 'react-native';
import style from './styles';
import ImageLogo from "../../assets/img-logo.png"
const Login = () => {
  return (
    <SafeAreaView style={style.container}>
      <Image style={style.image} source={ImageLogo} resizeMode="contain"/>

      <View style={style.content}>
        <TextInput placeholder='E-mail' style={style.input} />
        <TextInput placeholder='Senha' style={style.input}/>

        <TouchableOpacity style={style.button}>
          <Text style={style.textButton}>Entrar</Text>
        </TouchableOpacity>

        <Text style={style.text}>Esqueci minha senha</Text>
      </View>
    </SafeAreaView>
  );
};



export default Login;
