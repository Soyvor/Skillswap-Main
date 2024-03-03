import React from 'react' ;
import {Text, Image, View, StyleSheet} from 'react-native';

const App = () => {
     return (
        <View style={styles.pageContainer}>
           <Image
             source={{
                uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'
             }}
             style={styles.image}
             />
          </View>

     );
};

const styles = StyleSheet.create({
  pageContainer: {
    justfyContent: 'center',
    alignitems: 'center',
    flex: 1,
   },
   image: {
     width: 250,
     height: 250
   }
});


export default App;