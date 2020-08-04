import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Header from "./Header";


const Profile = () => {
    return (<View style={style.container}>
        <Header/>
    </View>)
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default Profile;
