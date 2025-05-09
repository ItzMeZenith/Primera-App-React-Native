import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Button, StyleSheet, Text, View, ImageBackground } from 'react-native';

const imgExterna = {url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fes%2Ffotos%2Fnight-sky&psig=AOvVaw1Lt7r7-hbWruGfv3dgRsnE&ust=1746878493116000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCu8dOrlo0DFQAAAAAdAAAAABAE"};

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
