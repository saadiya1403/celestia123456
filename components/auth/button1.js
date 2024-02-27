import React from "react";
import Text from "@kaloraat/react-native-text";
import {TouchableOpacity} from "react-native";



const Button = () => (
<TouchableOpacity style={{
                backgroundColor:"pink",
                height:50,
                marginBottom: 20,
                justifyContent:"center",
                marginHorizontal:15,
                borderRadius:24
            }}>
                <Text bold medium center>
                    {title}
                </Text>
            </TouchableOpacity>

);

export default Button;