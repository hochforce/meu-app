import React, { useState } from 'react';
import { SafeAreaView, TextInput, Image, Text, TouchableOpacity, View, ScrollView, Alert } from 'react-native';
import style from './styles';
import ImageLogo from "../../assets/img-logo.png"
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = ()=>{
    if(email == "hugo@dev.com" && password == "1234"){
      Alert.alert("Seja bem vindo! ", "Seu login e senha estão corretos.")
    }else{
      Alert.alert("Ops! ", "Seu login e senha estão incorretos.")
    }
    // Alert.alert("Seja bem vindo ", email)
  }

  return (
    <ScrollView>
      <SafeAreaView style={style.container}>
        <Image style={style.image} source={ImageLogo} resizeMode="contain" />

        <View style={style.content}>
          <TextInput
            placeholder='E-mail'
            value={email}
            onChangeText={(text)=>setEmail(text)}
            style={style.input}
          />

          <TextInput
            placeholder='Senha'
            value={password}
            onChangeText={(text)=>setPassword(text)}
            secureTextEntry
            style={style.input} 
          />

          <TouchableOpacity style={style.button} onPress={()=> handleLogin()}>
            <Text style={style.textButton}>Entrar</Text>
          </TouchableOpacity>

          <Text style={style.text}>Esqueci minha senha</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};



export default Login;
