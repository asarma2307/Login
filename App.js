import { StyleSheet, Text, View , Image, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      style={styles.logo}
      source={require('./assets/logo1.jpeg')}
      >
    </Image>
      <View style={styles.btn1}> 
      <Text>I am a practioner</Text>
    </View>
    <View style={styles.btn2}>
      <Text> I am a listener</Text>
    </View>
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
  logo:{
    width: 100,
    height: 100,
    marginBottom:40,

  },
  btn1:{
    backgroundColor: 'dodgerblue',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  btn2:{
    backgroundColor: 'orange',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  }
});
