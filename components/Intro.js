import React from "react"
import {View,Text,ImageBackground,Image,TouchableOpacity} from "react-native"

function Intro({navigation}){
  return (
    <View style={{flex: 1}}>
      <ImageBackground style={{width: "100%",height: '100%'}} source={require('../assets/img1.png')}>
      <View style={{marginTop: 57,marginLeft: 30}}>
        <Image style={{width: 57,height: 63}} source={require("../assets/icon.png")} />
      </View>
      <View style={{marginLeft: 30,flex: 1,justifyContent: "center"}}>
        <Text style={{color: "#FFF",fontSize: 38,textTransform: "uppercase"}}>LanceZ {"\n"}votre{"\n"}cArRière{"\n"}MAINTENANT!</Text>
      </View>
      <View style={{flex: .2,paddingHorizontal: 16,flexDirection: "row",justifyContent: "space-between"}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Login')}  style={{height: 57,width: "49%",backgroundColor: "#FFF",justifyContent: "center",alignItems: "center",borderRadius: 7}}>
          <Text style={{textTransform: "uppercase"}}>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Register')} style={{height: 57,width: "49%",backgroundColor: "transparent",justifyContent: "center",alignItems: "center",borderRadius: 7,borderWidth: 1,borderColor: "#FFF"}}>
          <Text style={{color: "#FFF",textTransform: "uppercase"}}>Inscription</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
      
    </View>
  )
}
export default Intro

