import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList,TouchableOpacity, StyleSheet } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './Config';

function Compare({ navigation }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'item'));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setItems(data);
    };
    fetchItems();
  }, []);

  const renderItems = ({ item }) => (
    <View style={styles.item}>
      <Text>Item Name: {item.itemName}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <Text>Price: {item.price}</Text>
      <Text>Address: {item.address}</Text>
      <Text>Contact Number: {item.contactNumber}</Text>
      <TouchableOpacity
        style={styles.viewButton}
        onPress={() => navigation.navigate('CompareTwo', { item })}
      >
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ITEM LIST</Text>
      <FlatList
        data={items}
        renderItem={renderItems}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* <Button title="Back" onPress={() => navigation.goBack()} /> */}
      
        

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    marginBottom: 20,
  },
  viewButton: {
    backgroundColor: '#3AB918',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: 100,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  item: {
    marginBottom: 20,
    borderWidth: 1, // border width
    borderColor: '#000', // border color
    padding: 10, // padding around the item
    borderRadius: 5, // border radius
    
  },
  cancelButton: {
    backgroundColor: 'red', // or any other color you prefer
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});


export default Compare;



