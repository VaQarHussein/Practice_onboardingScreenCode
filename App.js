
import React from 'react';
import OnboardScreens from './OnboardScreens';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



function App(){

  return (
    <View style={styles.container}>
      <Text>HELLO WORLD</Text>
      <OnboardScreens/>
      <StatusBar style="auto"/>
    </View>
  );
}
export default App

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  }
})