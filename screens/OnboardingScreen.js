import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native'; 
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { setItem } from '../utils/asyncStorage';

const {width, height} = Dimensions.get("window")

const OnboardingScreen = () => {
    const navigation = useNavigation();

    const handleDone = () => {
      navigation.navigate("Home");
      setItem("onboarded", "1")
    }
    
    const doneButton = ({ ...props }) => {
       return(
        <TouchableOpacity style={styles.doneButton} {...props}>
            <Text>Done</Text>
        </TouchableOpacity>
    )}
    return (
    <View style={styles.container}>
          <Onboarding
                onDone={handleDone}
                onSkip={handleDone}
                DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#a78bfa",
            image: (
              <LottieView
                style={styles.lottie}
                source={require("../assets/animations/achieve.json")}
                autoPlay
                loop
              />
            ),
            title: "Akwaaba",
            subtitle: "We don't quit over here!",
          },
          {
            backgroundColor: "rgb(173,216,230)",
            image: (
              <LottieView
                style={styles.lottie}
                source={require("../assets/animations/boost.json")}
                autoPlay
                loop
              />
            ),
            title: "Tiredness is in the mind",
            subtitle: "All iz well",
          },
          {
            backgroundColor: "#fef3c7",
            image: (
              <LottieView
                style={styles.lottie}
                source={require("../assets/animations/work.json")}
                autoPlay
                loop
              />
            ),
            title: "Fight through the pain",
            subtitle: "It will feel good after it hurts",
          },
        ]}
      />
    </View>
  );
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "white"
    },
    lottie: {
        width: width*0.9,
        height: width
    },
    doneButton: {
        padding: 20,
    
    }
})