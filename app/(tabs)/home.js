import React from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Top Navigation */}

        <View style={styles.navbar}>
          <View style={styles.navbarContainer}>
            <Image
              source={require("../../assets/images/Mainwhitelogo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
            
            <Text style={styles.navTitle}>Lotus Learning</Text>
          </View>

          <TouchableOpacity style={styles.menuButton}>
            {/* <Svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
  <path d="M0.214355 2.94118C0.214355 1.31681 1.53117 0 3.15553 0H22.1456C23.77 0 25.0868 1.31681 25.0868 2.94118C25.0868 4.56554 23.77 5.88235 22.1456 5.88235H3.15553C1.53117 5.88235 0.214355 4.56554 0.214355 2.94118Z" fill="white"/>
  <path d="M0.214355 12.5C0.214355 10.8756 1.53117 9.55884 3.15553 9.55884H22.1456C23.77 9.55884 25.0868 10.8756 25.0868 12.5C25.0868 14.1244 23.77 15.4412 22.1456 15.4412H3.15553C1.53117 15.4412 0.214355 14.1244 0.214355 12.5Z" fill="white"/>
  <path d="M0.214355 22.0588C0.214355 20.4345 1.53117 19.1176 3.15553 19.1176H22.1456C23.77 19.1176 25.0868 20.4345 25.0868 22.0588C25.0868 23.6832 23.77 25 22.1456 25H3.15553C1.53117 25 0.214355 23.6832 0.214355 22.0588Z" fill="white"/>
</Svg>   */}



<Image
              source={require("../../assets/images/Hamburger.png")}
              style={styles.hamburger}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search" style={styles.searchInput} />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>

        {/* Welcome Message */}
        <Text style={styles.welcomeText}>Welcome Back, XXX!</Text>

        {/* Carousel */}
        <ScrollView
          horizontal
          style={styles.carousel}
          showsHorizontalScrollIndicator={false}
        >
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            style={styles.carouselImage}
          />
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            style={styles.carouselImage}
          />
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            style={styles.carouselImage}
          />
        </ScrollView>

        {/* Course Cards */}
        <Text style={styles.sectionTitle}>Continue Learning</Text>
        <ScrollView
          horizontal
          style={styles.courseScroll}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.courseCard}>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              style={styles.courseImage}
            />
            <Text style={styles.courseTitle}>Title of Course Name</Text>
            <Text style={styles.courseSubtitle}>Art History</Text>
            <View style={styles.progressContainer}>
              <Text style={styles.progressText}>45%</Text>
            </View>
            <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.continueButtonText}>Continue Lesson</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.courseCard}>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              style={styles.courseImage}
            />
            <Text style={styles.courseTitle}>Title of Course Name</Text>
            <Text style={styles.courseSubtitle}>Calculus</Text>
            <View style={styles.progressContainer}>
              <Text style={styles.progressText}>55%</Text>
            </View>
            <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.continueButtonText}>Continue Lesson</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    paddingBottom: 20,
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#E15890",
  },
  logo: {
    width: 40,
    height: 40,
  },
  hamburger : {
    width: 20,
    height: 20,
    objectFit  : "contain"
  },
  navbarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  navTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  menuButton: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 18,
  },
  menuDot: {
    width: 4,
    height: 4,
    backgroundColor: "white",
    borderRadius: 2,
    marginVertical: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#F3F3F3",
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingHorizontal: 15,
    borderColor: "#34CC99",
    borderWidth: 1,
  },
  searchButton: {
    backgroundColor: "#34CC99",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginLeft: 10,
  },
  searchButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#A569B7",
    textAlign: "center",
    marginVertical: 20,
  },
  carousel: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  carouselImage: {
    width: 250,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#181818",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  courseScroll: {
    paddingHorizontal: 20,
  },
  courseCard: {
    width: 200,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "#34CC99",
    borderWidth: 1,
    padding: 10,
    marginRight: 15,
  },
  courseImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  courseSubtitle: {
    fontSize: 14,
    color: "#707070",
    marginBottom: 5,
  },
  progressContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#34CC99",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  progressText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  continueButton: {
    backgroundColor: "#34CC99",
    borderRadius: 20,
    paddingVertical: 5,
    alignItems: "center",
  },
  continueButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});
