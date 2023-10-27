import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const MembershipSuccessScreen = ({ navigation }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.successMessage}>Membership Activated Successfully!</Text>
        <Text style={styles.congratsMessage}>Congratulations on your premium membership.</Text>
      </Animated.View>

      <TouchableOpacity
        style={styles.goToBiddingButton}
        onPress={() => {
          // Navigate to the bidding section or the appropriate screen
          navigation.navigate('BidsView');
        }}
      >
        <Text style={styles.buttonText}>Go to Bidding Section</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  successMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  congratsMessage: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },
  goToBiddingButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default MembershipSuccessScreen;