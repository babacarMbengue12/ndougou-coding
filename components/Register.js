import React from "react"
import {View,Image,TextInput,Text,TouchableOpacity,ScrollView} from "react-native"
import icon from "../assets/icon.png"
function Register({navigation}){
  return (
    <View style={{flex: 1,backgroundColor: "#E5E5E5"}}>
      <ScrollView>
        <View style={{alignItems: "center",marginTop: 74}}>
         <Image style={{width: 57,height: 63,tintColor: "#11BD9E"}} source={icon} />
          <Text style={{fontSize: 30,fontWeight: "bold",marginTop: 50,marginBottom: 30}}>Inscrivez-vous</Text>

        
      </View>
       <View style={{padding: 30}}>
           <TextInput style={style} placeholder="Prénom & Nom" />
           <TextInput style={style} placeholder="Adresse mail" />
           <TextInput style={style} placeholder="Mot de passe" />
           <TextInput style={style} placeholder="Confirmer votre mot de pâsse" />
           <TouchableOpacity onPress={()=> null}  style={{height: 57,width: "100%",backgroundColor: "#11BD9E",justifyContent: "center",alignItems: "center",borderRadius: 7,marginTop: 18}}>
          <Text style={{color: "#FFF"}}>S'inscrire</Text>
        </TouchableOpacity>
       
          <View style={{alignItems: "center",marginTop: 67}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
          <Text style={{fontSize: 18}}>Déjà inscrit ? {"  "}
              <Text style={{fontWeight: "bold"}}>
              Se connecter
              </Text>
          </Text>
        </TouchableOpacity>
        </View>
         </View>
      </ScrollView>

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