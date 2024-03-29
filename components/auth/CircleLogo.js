import React from "react";
import { View, Image} from "react-native";

const CircleLogo = () => (
    <View 
    style={{
        justifyContent:'center',
        alignItems:'center'
    }}
    > 
        <Image 
        source={require("../../assets/celestia.png")}
        style={{width:300, height:200, marginVertical:10}} />
    </View>
)

export default CircleLogo;