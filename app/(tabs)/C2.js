import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const LotusLearning = () => {
  const courses = [
    {
      title: 'Title of Course',
      author: 'Author Name',
      imageUri:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/0458f3c5f1789ab8ba5b088d820daba7a9b1b9e954cad62ddda1ee6c9f88ee72?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d',
    },
    {
      title: 'Title of Course',
      author: 'Author Name',
      imageUri:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/e86fa9ddcec1d7f4404a8210336f8514bb1ea304908f71b3860ebed75a7086dc?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d',
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        <SearchBar />
        <View style={styles.courseList}>
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </View>
      </ScrollView>
      <NavigationBar />
    </View>
  );
};

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0d01799ec11e6b0c3ba635a26356bfbf45c67b335499428f03587d349ae335d6?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d' }}
          style={styles.logo}
        />
        <Text style={styles.title}>Lotus Learning</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e012c9be37ffc8aef745d49ab6fe02361d8e5b92c0ef6a18ba8c558b77a95f9d?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d' }}
          style={styles.icon}
        />
        <Image
          resizeMode="contain"
          source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fadeed90b595dd690466f7eff45031ff46c5a964f99e50fc7918036db32eb426?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d' }}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <Image
        resizeMode="contain"
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1aa368a953b1cbe907dce0d71749a344cf9cfd906df5ec385c71a6c13d571763?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d' }}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="rgba(182, 182, 182, 1)"
        aria-label="Search courses"
      />
    </View>
  );
};

const CourseCard = ({ title, author, imageUri }) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        resizeMode="cover"
        source={{ uri: imageUri }}
        style={styles.courseImage}
      />
      <View style={styles.courseInfo}>
        <View>
          <Text style={styles.courseTitle}>{title}</Text>
          <Text style={styles.courseAuthor}>{author}</Text>
        </View>
        <Image
          resizeMode="contain"
          source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/726e19fa142c04d18d0babca3dfec0ce37022c0a69b02081448eeb95dcf2d170?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d' }}
          style={styles.playIcon}
        />
      </View>
    </View>
  );
};

const NavigationBar = () => {
  const navItems = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a76525bf9f1c39fd8f24688a99c2de6914531b071a86079b73c0d8e78045e773?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d', label: 'Profile' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/abc6be53c912900abab40220ecfb1a088ef2080186506d10cd980c69a4cfa612?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d', label: 'Open Courses' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/572cc1b5aeeb3c7e9a000650dff267942f55e3bbb87fcfaf9f06cb853651fb6b?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d', label: 'Courses' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/84fdb288910ae3065d5ce836df75b9a9962d94b2ec27a381faece2007223f3fe?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d', label: 'Games' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9f1fe60e52c311815785c581fae42621feb0739b5b496b4c72ca8c79a77fe912?placeholderIfAbsent=true&apiKey=fea318398af941d6ba1e4b90c241b17d', label: 'Search' },
  ];

  return (
    <View style={styles.navBar}>
      {navItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.navItem}>
          <Image
            resizeMode="contain"
            source={{ uri: item.icon }}
            style={styles.navIcon}
          />
          <Text style={styles.navLabel}>{item.label}</Text>
        </TouchableOpacity>
      ))}
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
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  courseList: {
    marginTop: 35,
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
    aspectRatio: 1.34,
  },
  title: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 18,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '500',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 19,
  },
  icon: {
    width: 27,
    aspectRatio: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 14,
    marginTop: 25,
  },
  searchIcon: {
    width: 17,
    aspectRatio: 1.06,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Poppins, sans-serif',
    fontSize: 14,
    color: 'rgba(40, 40, 40, 1)',
    fontWeight: '700',
  },
  cardContainer: {
    marginBottom: 20,
  },
  courseImage: {
    width: '100%',
    aspectRatio: 1.63,
    borderRadius: 8,
  },
  courseInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 13,
    paddingHorizontal: 22,
  },
  courseTitle: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 12,
    color: 'rgba(40, 40, 40, 1)',
    fontWeight: '700',
  },
  courseAuthor: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 11,
    color: 'rgba(40, 40, 40, 1)',
    fontWeight: '400',
  },
  playIcon: {
    width: 158,
    aspectRatio: 5.26,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 14,
    backgroundColor: '#CA6955',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    aspectRatio: 1,
    marginBottom: 4,
  },
  navLabel: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 10,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '400',
  },
});

export default LotusLearning;