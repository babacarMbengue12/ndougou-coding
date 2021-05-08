import React from "react"
import {View,Image,TextInput,Text,TouchableOpacity} from "react-native"
import icon from "../assets/icon.png"
function Register({navigation}){
  return (
    <View style={{flex: 1,backgroundColor: "#E5E5E5"}}>
      <View style={{alignItems: "center",marginTop: 74}}>
         <Image style={{width: 57,height: 63,tintColor: "#11BD9E"}} source={icon} />
          <Text style={{fontSize: 30,fontWeight: "bold",marginTop: 50,marginBottom: 30}}>Connectez-vous</Text>

        
      </View>
       <View style={{padding: 30}}>
           <TextInput style={style} placeholder="Entrer votre numéro de téléphone" />
           <TouchableOpacity onPress={()=> null}  style={{height: 57,width: "100%",backgroundColor: "#11BD9E",justifyContent: "center",alignItems: "center",borderRadius: 7,marginTop: 18}}>
          <Text style={{color: "#FFF"}}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Login')}  style={{height: 57,width: "100%",backgroundColor: "transparent",justifyContent: "center",alignItems: "center",borderRadius: 7,marginTop: 18,borderWidth: 2,borderColor: "#11BD9E"}}>
          <Text style={{color: "#000"}}>Se connecter avec une adresse mail</Text>
        </TouchableOpacity>
       
         </View>

    </View>
  )
}

export default Register


const style = {
  height: 57,
  width: "100%",
  borderWidth: 1,
  borderColor: "#F1F1F1",
  borderRadius: 10,
  shadowORadius: 40,
  shadowOpacity: .5,
  shadowOffset: {width:2,height: 2},
  shadowColor: "#CCC",
  paddingHorizontal: 15,
  backgroundColor: "#FFF",
  justifyContent: "center",
  marginBottom: 20,
}