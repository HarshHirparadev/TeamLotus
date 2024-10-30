import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LotusLearning = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            resizeMode="contain"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7485db2096da7fc2b3692af5f271f2273dcc2abf409fd329460760f80d8e73a8?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d" }}
            style={styles.logo}
            accessible={true}
            accessibilityLabel="Lotus Learning logo"
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Lotus Learning</Text>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity accessibilityRole="button" accessibilityLabel="Notifications">
            <Image
              resizeMode="contain"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/5058d616a6beba3dc75342aa29cd6b035c3d96c69a7f59f1e486dcd1515d02ad?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d" }}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity accessibilityRole="button" accessibilityLabel="Settings">
            <Image
              resizeMode="contain"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/dffca1273bc2f1dbf79bb4c2ba2e67ab9c0c8066e183d20d6869f2c06d032e2c?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d" }}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer} />
      <View style={styles.popularCoursesContainer}>
        <Text style={styles.popularCoursesTitle}>Popular Courses</Text>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/58788809a1d443684976342c352134525e1a5a4e1e9649d43ca8405a1d141c0c?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d" }}
          style={styles.popularCoursesImage}
          accessible={true}
          accessibilityLabel="Popular courses preview"
        />
      </View>
      <LinearGradient
        colors={['#CA6955', '#CF7067', '#D26187']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={styles.navigationBar}
      >
        {[
          { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a76525bf9f1c39fd8f24688a99c2de6914531b071a86079b73c0d8e78045e773?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d", label: "Profile" },
          { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c475584b766f01aa80e7a2931c042af6de6396c862f18a954d78cbbe58128dba?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d", label: "Open Courses" },
          { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/26b2b55409fd4d5ec15c93e27c0ed8af01b66edcce02ec2e86737ba6c04df22b?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d", label: "Courses" },
          { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/224d416f1f54ab8e851be30f8ccaa444f7f4980e2b3ea65f316e025c6bd5fdc1?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d", label: "Games" },
          { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f1fe60e52c311815785c581fae42621feb0739b5b496b4c72ca8c79a77fe912?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d", label: "Search" },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.navigationItem}
            accessibilityRole="button"
            accessibilityLabel={item.label}
          >
            <Image
              resizeMode="contain"
              source={{ uri: item.icon }}
              style={styles.navigationIcon}
            />
            <Text style={styles.navigationLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 480,
    width: '100%',
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 19,
    paddingTop: 19,
    paddingBottom: 12,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logo: {
    width: 39,
    aspectRatio: 1.3,
  },
  titleContainer: {
    flexBasis: 'auto',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#FFFFFF',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 19,
  },
  icon: {
    width: 27,
    aspectRatio: 1.04,
  },
  contentContainer: {
    minHeight: 361,
    width: '100%',
  },
  popularCoursesContainer: {
    alignItems: 'center',
  },
  popularCoursesTitle: {
    color: '#282828',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    marginTop: 20,
    marginLeft: 12,
  },
  popularCoursesImage: {
    width: '100%',
    maxWidth: 350,
    aspectRatio: 1.1,
    marginTop: 10,
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 14,
    marginTop: 10,
  },
  navigationItem: {
    alignItems: 'center',
  },
  navigationIcon: {
    width: 24,
    aspectRatio: 1.26,
  },
  navigationLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 4,
  },
});

export default LotusLearning;