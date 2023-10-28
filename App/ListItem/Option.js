// ForumList.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Option = ({ navigation }) => {
  const handleViewItemPress = () => {
    navigation.navigate('ConsumerDashboard');
  };

  const handleAddItemPress = () => {
    navigation.navigate('FramerDashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome!!!</Text>
      <View style={styles.buttonContainer}>
        <Button title="Consumer" onPress={handleViewItemPress} />  
      </View>

      <View style={styles.buttonContainer}>
      <Button title="Farmer" onPress={handleAddItemPress} />      
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 90,
    marginTop: 0,
   
  },
  buttonContainer: {
    backgroundColor: '#3AB918',
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 50,
    width: 140,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Option;