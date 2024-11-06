
import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

const verifyemail = () => {
  return (
    <LinearGradient // Use LinearGradient for the background
    colors={['#CA6955', '#CA6955', '#D26187']} // Set your gradient colors here
    style={styles.container}
  >

    <SafeAreaView style={styles.container}>
    <StatusBar
        animated={true}
        backgroundColor="#CA6955"
        // background: var(--Gradient-footer, linear-gradient(270deg, #CA6955 0%, #CF7067 45%, #D26187 100%))
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        hidden={false}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.column}>
            <View>

          <Image
            source={require('../../assets/images/MainLogo.png')} // Ensure this path is correct
            resizeMode="contain"
            style={styles.logo}
            />
            </View>

            <View>

          <Text style={styles.title}>Verify your email address</Text>
            </View>

            <View>

          <Text style={styles.description}>
            Please <Text style={styles.linkText}>click on the link</Text> that has just been sent to your <Text style={styles.linkText}>email</Text> to verify
            your email address and continue the registration process.
          </Text>
            </View>

          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#EB7B38", "#E26662", "#E15890"]}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Go to Homepage</Text>
          </LinearGradient>

        </View>
      </ScrollView>
    </SafeAreaView>
  </LinearGradient>
  );
}

export default verifyemail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  column: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 40,
    paddingHorizontal: 20,
    width: '90%', // Make the container almost full width
    alignItems: "center",
    height : "90%",
    justifyContent : "space-between"
  },
  logo: {
    height: 140,
    // marginBottom: 124,
  },
  title: {
    color: "#181818",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#757575",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 24,
  },
  linkText: {
    color: "#3498db", // Link color to match blue text in screenshot
    textDecorationLine: "underline",
  },
  button: {
    width: '80%', // Make the button span a large width
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
