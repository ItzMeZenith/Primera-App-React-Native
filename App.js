import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Button, StyleSheet, Text, View, ImageBackground, Alert } from 'react-native';

const imgExterna = {url: "https://media.istockphoto.com/id/536507269/es/foto/cielo-de-noche-con-estrellas-brillantes-y-nebulosa-azul.jpg?s=612x612&w=0&k=20&c=s_K7BtzFsyT7sBVMk_WLvLVuk10ycvhXsx6lgQYnta0="};

export default function App() {
  	return (
    	<View style={styles.container}>
      		<Text>Open up App.js to start working on your app!</Text>
			<Button title="+1" onPress={() => Alert.alert("Se ha presionado")}/>
      		<StatusBar style="auto" />
			<ImageBackground
				source = {imgExterna}
				resizeMode = "cover"
			/>
    	</View>
 	);
}

const styles = StyleSheet.create({
  	container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  	},
});
