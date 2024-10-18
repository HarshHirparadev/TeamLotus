import React from 'react'
import { View, ScrollView, Image, Text, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

const userdetails = () => {
  return (
    <SafeAreaView style={styles.container}>




      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/images/Mridul.png')}
            resizeMode={"cover"}
            style={styles.profileImage}
          />
          <Text style={styles.uploadText}>Upload Profile Photo</Text>
        </View>

        <Text style={styles.label}>Full Name*</Text>
        <TextInput style={styles.inputBox} placeholder="Enter your full name" placeholderTextColor="#757575" />

        <Text style={styles.label}>Email*</Text>
        <TextInput style={styles.inputBox} placeholder="Enter your email" placeholderTextColor="#757575" />

        <Text style={styles.label}>Country*</Text>
        <TextInput style={styles.inputBox} placeholder="Enter your country" placeholderTextColor="#757575" />

        <Text style={styles.label}>State/Province*</Text>
        <TextInput style={styles.inputBox} placeholder="Enter your state/province" placeholderTextColor="#757575" />

        <Text style={styles.label}>Type of Account*</Text>
        <TextInput style={styles.inputBox} placeholder="Choose account type" placeholderTextColor="#757575" />

        <Text style={styles.label}>School (optional)</Text>
        <TextInput style={styles.inputBox} placeholder="Enter school name" placeholderTextColor="#757575" />

        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#EB7B38", "#E26662", "#E15890"]}
          style={styles.createAccountButton}
        >
          <Text style={styles.buttonText}>Create account</Text>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}

export default userdetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    alignItems: "center",
    paddingVertical: 20,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  uploadText: {
    color: "#757575",
    fontSize: 14,
  },
  label: {
    color: "#757575",
    fontSize: 16,
    alignSelf: "flex-start",
    marginLeft: 25,
    marginBottom: 8,
    fontWeight : "900"
  },
  inputBox: {
    height: 50,
    backgroundColor: "#FFFFFF",
    borderColor: "#34CC99",
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    width: '90%',
    color: "#181818",
  },
  createAccountButton: {
    width: '90%',
    borderRadius: 50,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
