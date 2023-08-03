import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../utils/asyncStorage';

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleReset = async () => {
    await removeItem("onboardrd")
    navigation.navigate("Onboarding")
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        style={styles.lottie}
        source={require("../assets/animations/confetti.json")}
        autoPlay
        loop
          />
          <Text style={styles.text}>Home Page</Text>
          <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
              <Text>Reset</Text>
          </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  lottie: {
    width: width * 0.9,
    height: width,
    },
    text: {
        fontSize: width * 0.09,
        marginBottom: 20
        
    },
    resetButton: {
        backgroundColor: "rgb(173,216,230)",
        padding: 10,
        borderRadius: 10
    }
});
