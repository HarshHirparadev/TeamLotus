import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Install LinearGradient: https://github.com/react-native-linear-gradient/react-native-linear-gradient
export default (props) => {
  const [activeTab, setActiveTab] = useState('inProgress');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={['#CA6955', '#CF7067', '#D26187']}
          style={styles.row}
        >
          <Image
            source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
            resizeMode={'stretch'}
            style={styles.image}
          />
          <Text style={styles.text}>{'Lotus Learning'}</Text>
          <View style={styles.box}></View>
          <View style={styles.column}>
            <Image
              source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
              resizeMode={'stretch'}
              style={styles.image2}
            />
            <Image
              source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
              resizeMode={'stretch'}
              style={styles.image3}
            />
          </View>
          <View style={styles.column2}>
            <Image
              source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
              resizeMode={'stretch'}
              style={styles.image4}
            />
            <Image
              source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
              resizeMode={'stretch'}
              style={styles.image4}
            />
            <Image
              source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
              resizeMode={'stretch'}
              style={styles.image5}
            />
          </View>
        </LinearGradient>
        <Text style={styles.text2}>{'Courses'}</Text>
        <View style={styles.row2}>
          <TouchableOpacity onPress={() => setActiveTab('inProgress')}>
            <Text
              style={[
                styles.text3,
                activeTab === 'inProgress' && styles.activeTab,
              ]}
            >
              {'In Progress'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('bookmarked')}>
            <Text
              style={[
                styles.text4,
                activeTab === 'bookmarked' && styles.activeTab,
              ]}
            >
              {'Bookmarked Courses'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        {activeTab === 'inProgress' ? (
          <View>
            <View style={styles.row3}>
              <Image
                source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
                resizeMode={'stretch'}
                style={styles.image6}
              />
              <View style={styles.column3}>
                <Text style={styles.text5}>{'Title of Course Name'}</Text>
                <Text style={styles.text6}>{'Art History'}</Text>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={['#EB7B38', '#E26662', '#E15890']}
                  style={styles.view}
                >
                  <Text style={styles.text7}>{'45% '}</Text>
                </LinearGradient>
              </View>
            </View>
            <View style={styles.row3}>
              <Image
                source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
                resizeMode={'stretch'}
                style={styles.image6}
              />
              <View style={styles.column3}>
                <Text style={styles.text5}>{'Title of Course Name'}</Text>
                <Text style={styles.text6}>{'Art History'}</Text>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={['#EB7B38', '#E26662', '#E15890']}
                  style={styles.view}
                >
                  <Text style={styles.text7}>{'45% '}</Text>
                </LinearGradient>
              </View>
            </View>
            <View style={styles.row3}>
              <Image
                source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
                resizeMode={'stretch'}
                style={styles.image6}
              />
              <View style={styles.column3}>
                <Text style={styles.text5}>{'Title of Course Name'}</Text>
                <Text style={styles.text6}>{'Art History'}</Text>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={['#EB7B38', '#E26662', '#E15890']}
                  style={styles.view}
                >
                  <Text style={styles.text7}>{'45% '}</Text>
                </LinearGradient>
              </View>
            </View>
            <View style={styles.row3}>
              <Image
                source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
                resizeMode={'stretch'}
                style={styles.image6}
              />
              <View style={styles.column3}>
                <Text style={styles.text5}>{'Title of Course Name'}</Text>
                <Text style={styles.text6}>{'Art History'}</Text>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={['#EB7B38', '#E26662', '#E15890']}
                  style={styles.view}
                >
                  <Text style={styles.text7}>{'45% '}</Text>
                </LinearGradient>
              </View>
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.courseInfoContainer}>
              <View style={styles.courseBox}></View>
              <Text style={styles.courseTitle}>{'Title of Course'}</Text>
              <Text style={styles.courseAuthor}>{'Author Name'}</Text>
              <Text style={styles.courseDescription}>
                {'Description of the game written here'}
              </Text>
              <View style={styles.ageSubjectRow}>
                <View style={styles.ageBox}>
                  <Text style={styles.ageSubjectText}>{'Age'}</Text>
                </View>
                <View style={styles.subjectBox}>
                  <Text style={styles.ageSubjectText}>{'Subject'}</Text>
                </View>
              </View>
            </View>
            <View style={styles.courseInfoContainer}>
              <View style={styles.courseBox}></View>
              <Text style={styles.courseTitle}>{'Title of Course'}</Text>
              <Text style={styles.courseAuthor}>{'Author Name'}</Text>
              <Text style={styles.courseDescription}>
                {'Description of the game written here'}
              </Text>
              <View style={styles.ageSubjectRow}>
                <View style={styles.ageBox}>
                  <Text style={styles.ageSubjectText}>{'Age'}</Text>
                </View>
                <View style={styles.subjectBox}>
                  <Text style={styles.ageSubjectText}>{'Subject'}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  activeTab: {
    color: '#EB7B38', // Active tab color
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  absoluteText: {
    position: 'absolute',
    bottom: -7,
    left: 3,
    color: '#FFFFFF',
    fontSize: 10,
  },
  absoluteView: {
    position: 'absolute',
    bottom: 2,
    left: -15,
    width: 390,
    height: 58,
    borderColor: '#5E27FD',
    borderWidth: 1,
    paddingHorizontal: 31,
  },
  box: {
    flex: 1,
    alignSelf: 'stretch',
  },
  box2: {
    width: 90,
    height: 2,
    backgroundColor: '#DA69AF',
    marginHorizontal: 16,
  },
  box3: {
    height: 1,
    backgroundColor: '#E2DEDE',
    marginBottom: 24,
    marginHorizontal: 16,
  },
  column: {
    width: 16,
    marginRight: 24,
  },
  column2: {
    width: 16,
  },
  column3: {
    width: 221,
  },
  image: {
    width: 39,
    height: 27,
    marginRight: 10,
  },
  image2: {
    height: 13,
    marginBottom: 1,
  },
  image3: {
    height: 4,
    marginHorizontal: 5,
  },
  image4: {
    height: 1,
    marginBottom: 5,
  },
  image5: {
    height: 1,
  },
  image6: {
    borderRadius: 8,
    width: 106,
    height: 89,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 22,
    paddingHorizontal: 16,
    marginBottom: 41,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginHorizontal: 17,
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#E2DEDE',
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
    marginBottom: 16,
    marginHorizontal: 15,
  },
  row4: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E2DEDE',
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
  },
  row5: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  text2: {
    color: '#000000',
    fontSize: 24,
    marginBottom: 25,
    marginLeft: 16,
  },
  text3: {
    color: '#DA69AF',
    fontSize: 16,
    marginRight: 34,
  },
  text4: {
    color: '#707070',
    fontSize: 16,
    flex: 1,
  },
  text5: {
    color: '#000000',
    fontSize: 18,
    marginBottom: 8,
  },
  text6: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 15,
  },
  text7: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  view: {
    width: 45,
    height: 29,
    alignItems: 'center',
    borderRadius: 4,
    paddingVertical: 8,
  },
  view2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  coursesHeading: {
    color: '#000000',
    fontSize: 24,
    marginBottom: 25,
    marginLeft: 16,
  },
  coursesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginHorizontal: 17,
  },
  inProgressText: {
    color: '#707070',
    fontSize: 16,
    marginRight: 37,
  },
  bookmarkedCoursesText: {
    color: '#DA69AF',
    fontSize: 16,
    flex: 1,
  },
  dividerLine: {
    width: 175,
    height: 2,
    backgroundColor: '#DA69AF',
    marginHorizontal: 77,
  },
  dividerLine2: {
    height: 1,
    backgroundColor: '#E2DEDE',
    marginBottom: 24,
    marginHorizontal: 16,
  },
  courseInfoContainer: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E2DEDE',
    borderRadius: 8,
    borderWidth: 1,
    paddingBottom: 16,
    paddingHorizontal: 8,
    marginBottom: 16,
    marginHorizontal: 15,
  },
  courseBox: {
    height: 122,
    backgroundColor: '#BCE0FD',
    borderColor: '#5E27FD',
    borderWidth: 1,
    marginBottom: 21,
  },
  courseTitle: {
    color: '#181818',
    fontSize: 16,
    marginBottom: 7,
  },
  courseAuthor: {
    color: '#181818',
    fontSize: 12,
    marginBottom: 5,
  },
  courseDescription: {
    color: '#707070',
    fontSize: 12,
    marginBottom: 11,
  },
  ageSubjectRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ageBox: {
    width: 56,
    alignItems: 'center',
    backgroundColor: '#34CC99',
    borderRadius: 20,
    paddingVertical: 8,
    marginRight: 16,
  },
  subjectBox: {
    width: 70,
    alignItems: 'center',
    backgroundColor: '#1DAF8E',
    borderRadius: 20,
    paddingVertical: 8,
  },
  ageSubjectText: {
    color: '#FFFFFF',
    fontSize: 10,
  },
});
