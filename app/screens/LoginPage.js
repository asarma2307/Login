import React from 'react';
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';



function LoginPage() {
 
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image
      style={styles.logo}
      source={require('../assets/logo1.jpeg')}
      >
    </Image>
    </View>
      <TouchableOpacity
      style={styles.practionerButton}
      onPress={this.onPress}
      >
       <Text style={styles.practionerText}> I am a practioner </Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.listenerButton}
      onPress={this.onPress}
      >
       <Text style={styles.listenerText}> I am a listener </Text>
      </TouchableOpacity>
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
  //imageContainer:{
      //flex:1,
      //alignItems:'center',
      //justifyContent:'center',
  //},
  logo:{
    width: 300,
    height: 300,
    marginBottom:60,

  },
  practionerButton:{
    backgroundColor: '#076ab0',
    width: 300,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle:'solid',
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#076ab0',
  },
  listenerButton:{
    backgroundColor: '#fff',
    width: 300,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle:'solid',
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#076ab0',
    marginTop: 20,
  },
  practionerText:{
      fontFamily:'Poppins-Regular',
      color:'#fff',
      fontWeight:'bold',
      fontSize:18,
  },
  listenerText:{
      fontFamily:'Poppins-Regular',
      color:'#076ab0',
      fontWeight:'bold',
      fontSize:18,
  }

});

export default LoginPage;
