import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Text from '@kaloraat/react-native-text';
import UserInput from "../components/auth/UserInput";
import SubmitButton from "../components/auth/SubmitButton";
import CircleLogo from "../components/auth/CircleLogo";

const Login = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);


    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor:'#ffe6f7' }}>

            <CircleLogo/>
            <Text title center>Log In</Text>

            <UserInput name="EMAIL" value={email} setValue={setEmail} autoCompleteType="email" />
            <UserInput name="PASSWORD" value={password} setValue={setPassword} secureText="password" secureTextEntry={true} />
        
        <SubmitButton title="Log In" />

            {/* <Text>{JSON.stringify({ name, email, password, confirmpassword }, null, 4)}</Text> */}

        </View>
    )
}

export default Login;
