import { React,  useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, Button, Alert, Image, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker'; // Import the launchImageLibrary function
import { collection, addDoc } from "firebase/firestore";
import { db } from './Config';

function AddItem({ navigation }) {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [image, setImage] = useState(null);

  // Assuming this function is triggered by a button click or any other relevant action
const handleImageUpload = () => {
  launchImageLibrary({ mediaType: 'photo' }, (response) => {
    // Do something with the response, such as uploading the image to a server
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.errorCode) {
      console.log('ImagePicker Error: ', response.errorMessage);
    } else {
      // You might want to do something with the selected image here
      const source = { uri: response.uri };
      // ...further processing or uploading logic
    }
  });
};

  function validateInputs() {
    if (!itemName || !quantity || !price || !address || !contactNumber) {
      Alert.alert('Required', 'Please fill in all the fields');
      return false;
    }
    if (!isNaN(itemName)) {
      Alert.alert('Invalid Input', 'Item name should be a text');
      return false;
    }
    if (isNaN(quantity)) {
      Alert.alert('Invalid Input', 'Quantity should be a number');
      return false;
    }
    if (isNaN(price)) {
      Alert.alert('Invalid Input', 'Price should contain only numbers');
      return false;
    }
    if (address.length === 0) {
      Alert.alert('Invalid Input', 'Address should not be empty');
      return false;
    }
    if (!/^\d{10}$/.test(contactNumber)) {
      Alert.alert('Invalid Input', 'Please enter 10 digits for the contact number');
      return false;
    }
    return true;
  }

  function create() {
    if (validateInputs()) {
      // submit data
      addDoc(collection(db, "item"), {
        itemName: itemName,
        quantity: quantity,
        price: price,
        address: address,
        contactNumber: contactNumber,
      }).then(() => {
        // Data saved successfully
        console.log('data submitted');
        // Navigate to ViewItem screen after data submission
        navigation.navigate('FarmerListItem');
      }).catch((error) => {
        // The write failed...
        console.log(error);
      });
    }
  }

  return (
    <View style={styles.container}>
      <Text>ListProduct</Text>
      <StatusBar style="auto" />

      <TextInput
        value={itemName}
        onChangeText={(text) => setItemName(text)}
        placeholder="itemName"
        style={styles.textBoxes}
      />
      <TextInput
        value={quantity}
        onChangeText={(text) => setQuantity(text)}
        placeholder="quantity"
        style={styles.textBoxes}
      />
      <TextInput
        value={price}
        onChangeText={(text) => setPrice(text)}
        placeholder="price"
        style={styles.textBoxes}
      />
      <TextInput
        value={address}
        onChangeText={(text) => setAddress(text)}
        placeholder="address"
        style={styles.textBoxes}
      />
      <TextInput
        value={contactNumber}
        onChangeText={(text) => setContactNumber(text)}
        placeholder="contactNumber"
        style={styles.textBoxes}
      />

      {/* Image Upload */}
      <TouchableOpacity style={styles.imageUploadContainer} onPress={handleImageUpload}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.uploadText}>Upload Image</Text>
        )}
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <Button onPress={create} title="Submit" />  
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
  textBoxes: {
    width: '90%',
    fontSize: 18,
    padding: 12,
    borderColor: 'gray',
    borderWidth: 0.2,
    borderRadius: 10,
    marginBottom: 10,
  },
  imageUploadContainer: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
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
  uploadText: {
    fontSize: 18,
    color: 'black',
  },
});

export default AddItem;



// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import {TextInput} from 'react-native-web';
// import {useState} from 'react/cjs/react.development';
// import {collection, doc, setDoc, addDoc } from "firebase/firestore";
// import {db} from './components/config';

// function AddItem({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Screen 1</Text>
//       <Button
//         title="Go to Screen 2"
//         onPress={() => navigation.navigate('ViewItem')}
//       />
//     </View>
//   );
// }

// export default function App() {
//     const [itemName, setItemName] = useState('');
//     const [quantity, setQuantity] = useState('');
//     const [price, setPrice] = useState('');
//     const [address, setAddress] = useState('');
//     const [contactNumber, setContactNumber] = useState('');


//     function create(){

//         //submit data
//         addDoc(collection(db, "item"), {
//             itemName: itemName,
//             quantity: quantity,
//             price: price,
//             address: address,
//             contactNumber: contactNumber,
//           }).then(()=>{
//             //Data saved successfully
//             console.log('data submitted');
//           }).catch((error)=>{
//             //The write failed...
//             console.log(error);
//           });;

//     }

//   return (
//     <View style={styles.container}>
//       <Text>ListProduct</Text>
//       <StatusBar style="auto" />

//       <TextInput value={itemName} onChangeText={(itemName)=>{setItemName(itemName)}} placeholder="itemName" style={styles.textBoxes}></TextInput>
//       <TextInput value={quantity} onChangeText={(quantity)=>{setQuantity(quantity)}} placeholder="quantity" style={styles.textBoxes}></TextInput>
//       <TextInput value={price} onChangeText={(price)=>{setPrice(price)}} placeholder="price" style={styles.textBoxes}></TextInput>
//       <TextInput value={address} onChangeText={(address)=>{setAddress(address)}} placeholder="address" style={styles.textBoxes}></TextInput>
//       <TextInput value={contactNumber} onChangeText={(contactNumber)=>{setContactNumber(contactNumber)}} placeholder="contactNumber" style={styles.textBoxes}></TextInput>

//       <button onClick={create}>Submit</button>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textBoxes: {
//     widith: '90%',
//     fontSize: 18,
//     padding: 12,
//     borderColor: 'gray',
//     borderWidith: 0.2,
//     borderRadius: 10
//   }
// });
