import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LotusLearning = () => {
  const benefitsData = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/20d04f42401f8693c10d7db75dfb2d0af73cdf5be9084bcd5211cc3cd63f11f9?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d", text: "Learn to express yourself clearly and concisely." },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f3600d6461988b7b801f94d893646503269bb61a8f93e5476471b4e47dd525e?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d", text: "Avoid redundancies in your writing." },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f3600d6461988b7b801f94d893646503269bb61a8f93e5476471b4e47dd525e?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d", text: "Keep your reader's attention by writing more directly." }
  ];

  const navItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a76525bf9f1c39fd8f24688a99c2de6914531b071a86079b73c0d8e78045e773?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d", label: "Profile" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fd92ce1b7284096bfe7338da63d1ffe8eeec67c9c0da0078fbf401969bb9efd?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d", label: "Open Courses" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3dcae6af5b97f93a0c2f7c548894e646dc80e6b46017e8ae4831bbbcb2033838?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d", label: "Courses" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/df40551020cef10522bfca015f715737d2d9b8c8febff1b1210c12d5b0563ee1?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d", label: "Games" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f1fe60e52c311815785c581fae42621feb0739b5b496b4c72ca8c79a77fe912?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d", label: "Search" }
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image
              resizeMode="contain"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d01799ec11e6b0c3ba635a26356bfbf45c67b335499428f03587d349ae335d6?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d" }}
              style={styles.logo}
              accessible={true}
              accessibilityLabel="Lotus Learning logo"
            />
            <Text style={styles.title}>Lotus Learning</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity accessibilityLabel="Notifications">
              <Image
                resizeMode="contain"
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e012c9be37ffc8aef745d49ab6fe02361d8e5b92c0ef6a18ba8c558b77a95f9d?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d" }}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity accessibilityLabel="Settings">
              <Image
                resizeMode="contain"
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/fadeed90b595dd690466f7eff45031ff46c5a964f99e50fc7918036db32eb426?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d" }}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.content}>
          <Image
            resizeMode="contain"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/709ab37e7985a4d4b7a996813f9c50cbdd6e27f3ae5b630ddff5fc51c6e2b7ea?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d" }}
            style={styles.mainImage}
            accessible={true}
            accessibilityLabel="Main illustration"
          />
          <Text style={styles.benefitsTitle}>BENEFITS</Text>
          {benefitsData.map((benefit, index) => (
            <View key={index} style={styles.benefitItem}>
              <Image
                resizeMode="contain"
                source={{ uri: benefit.icon }}
                style={styles.benefitIcon}
                accessible={true}
                accessibilityLabel={`Benefit icon ${index + 1}`}
              />
              <Text style={styles.benefitText}>{benefit.text}</Text>
            </View>
          ))}
          <TouchableOpacity
            style={styles.startButton}
            accessibilityLabel="Start learning"
            accessibilityRole="button"
          >
            <Text style={styles.startButtonText}>START</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <LinearGradient
        colors={['#CA6955', '#CF7067', '#D26187']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={styles.navigationBar}
      >
        {navItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.navItem}
            accessibilityLabel={item.label}
            accessibilityRole="button"
          >
            <Image
              resizeMode="contain"
              source={{ uri: item.icon }}
              style={styles.navIcon}
            />
            <Text style={styles.navLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
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
  },
  logo: {
    width: 39,
    aspectRatio: 1.34,
    marginRight: 8,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#000000',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 27,
    aspectRatio: 1,
    marginLeft: 19,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 14,
  },
  mainImage: {
    width: '100%',
    aspectRatio: 0.99,
  },
  benefitsTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#34CC99',
    marginTop: 28,
    marginBottom: 27,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  benefitIcon: {
    width: 31,
    aspectRatio: 1.03,
    marginRight: 30,
  },
  benefitText: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#757575',
  },
  startButton: {
    backgroundColor: '#34CC99',
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 54,
    marginBottom: 34,
  },
  startButtonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 14,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    aspectRatio: 1,
  },
  navLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#FFFFFF',
    marginTop: 4,
  },
});

export default LotusLearning;