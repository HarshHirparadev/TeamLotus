import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';

const Header = () => (
  <View style={styles.headerContainer}>
    <View style={styles.logoContainer}>
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d01799ec11e6b0c3ba635a26356bfbf45c67b335499428f03587d349ae335d6?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d" }}
        style={styles.logo}
        accessible={true}
        accessibilityLabel="Lotus Learning logo"
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Lotus Learning</Text>
      </View>
    </View>
    <View style={styles.iconContainer}>
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e012c9be37ffc8aef745d49ab6fe02361d8e5b92c0ef6a18ba8c558b77a95f9d?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d" }}
        style={styles.icon}
        accessible={true}
        accessibilityLabel="Notification icon"
      />
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/fadeed90b595dd690466f7eff45031ff46c5a964f99e50fc7918036db32eb426?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d" }}
        style={styles.icon}
        accessible={true}
        accessibilityLabel="Settings icon"
      />
    </View>
  </View>
);

const CourseDescription = () => (
  <View style={styles.descriptionContainer}>
    <View style={styles.titleContainer}>
      <Text style={styles.descriptionTitle}>Description of Course</Text>
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </Text>
    </View>
    <Image
      resizeMode="contain"
      source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/05ba1c06bb3854b5583baf4687adc04d9afa99eff313148092d3cb6d7cf0f535?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d" }}
      style={styles.descriptionImage}
      accessible={true}
      accessibilityLabel="Course illustration"
    />
  </View>
);

const NavigationItem = ({ icon, label }) => (
  <View style={styles.navItem}>
    <Image
      resizeMode="contain"
      source={{ uri: icon }}
      style={styles.navIcon}
      accessible={true}
      accessibilityLabel={`${label} icon`}
    />
    <View>
      <Text style={styles.navLabel}>{label}</Text>
    </View>
  </View>
);

const navigationItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a76525bf9f1c39fd8f24688a99c2de6914531b071a86079b73c0d8e78045e773?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d", label: "Profile" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/631d7888b476fd63de3c41c30438d4068583387bcd4c985f62ef9803272e3bc4?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d", label: "Open Courses" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aaf4efc902495a4143931f3f3bb684fe768f93c9a8073405bd642c425055147b?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d", label: "Courses" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7672b39c11fa65f242c5d5574dd1511b58e669827cae4a9bca738be44a6f486f?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d", label: "Games" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f1fe60e52c311815785c581fae42621feb0739b5b496b4c72ca8c79a77fe912?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d", label: "Search" },
];

const Navigation = () => (
  <View style={styles.navigationContainer}>
    <View style={styles.navItemsContainer}>
      {navigationItems.map((item, index) => (
        <NavigationItem key={index} icon={item.icon} label={item.label} />
      ))}
    </View>
  </View>
);

const LotusLearningApp = () => (
  <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.spacer} />
      <CourseDescription />
      <Navigation />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  mainContainer: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 480,
    width: '100%',
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'stretch',
  },
  headerContainer: {
    display: 'flex',
    width: '100%',
    paddingLeft: 19,
    paddingRight: 19,
    paddingTop: 19,
    paddingBottom: 12,
    alignItems: 'stretch',
    gap: 20,
    justifyContent: 'space-between',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'stretch',
    gap: 8,
    fontFamily: 'Poppins, sans-serif',
    fontSize: 18,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '500',
  },
  logo: {
    position: 'relative',
    display: 'flex',
    width: 39,
    flexShrink: 0,
    aspectRatio: 1.34,
  },
  titleContainer: {
    flexBasis: 'auto',
  },
  title: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 18,
    fontWeight: '500',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'stretch',
    gap: 19,
  },
  icon: {
    position: 'relative',
    display: 'flex',
    width: 27,
    flexShrink: 0,
    aspectRatio: 1.08,
  },
  spacer: {
    display: 'flex',
    minHeight: 190,
    width: '100%',
  },
  descriptionContainer: {
    display: 'flex',
    marginTop: 7,
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'column',
    fontFamily: 'Poppins, sans-serif',
    color: 'rgba(40, 40, 40, 1)',
    fontWeight: '400',
  },
  descriptionTitle: {
    fontSize: 13,
    fontWeight: '400',
    color: 'rgba(40, 40, 40, 1)',
  },
  textContainer: {
    fontSize: 11,
    marginTop: 34,
  },
  text: {
    fontSize: 11,
    fontWeight: '400',
    color: 'rgba(40, 40, 40, 1)',
  },
  descriptionImage: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    alignSelf: 'stretch',
    position: 'relative',
    display: 'flex',
    marginTop: 53,
    aspectRatio: 1.06,
  },
  navigationContainer: {
    display: 'flex',
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 14,
    paddingBottom: 14,
    gap: 20,
    justifyContent: 'space-between',
    backgroundColor: 'linear-gradient(270deg, #CA6955 0%, #CF7067 45%, #D26187 100%)',
  },
  navItemsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  navItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  navIcon: {
    alignSelf: 'center',
    position: 'relative',
    display: 'flex',
    width: 24,
    aspectRatio: 1.26,
  },
  navLabel: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 10,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default LotusLearningApp;