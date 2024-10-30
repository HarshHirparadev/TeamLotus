import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

export const Footer = () => {
  return (
    <LinearGradient
      start={{ x: 1, y: 0 }} // Start from the right
      end={{ x: 0, y: 0 }} // End at the left
      colors={['#CA6955', '#CF7067', '#D26187']}
      style={styles.footerContainer}
    >
      <View style={styles.iconWrapper}>
        <Icon name="person-outline" size={24} color="white" />
        <Text style={styles.iconLabel}>Profile</Text>
      </View>
      <View style={styles.iconWrapper}>
        <Icon name="book-outline" size={24} color="white" />
        <Text style={styles.iconLabel}>Open Courses</Text>
      </View>
      <View style={styles.iconWrapper}>
        <Icon name="tablet-portrait-outline" size={24} color="white" />
        <Text style={styles.iconLabel}>Courses</Text>
      </View>
      <View style={styles.iconWrapper}>
        <Icon name="game-controller-outline" size={24} color="white" />
        <Text style={styles.iconLabel}>Games</Text>
      </View>
      <View style={styles.iconWrapper}>
        <Icon name="search-outline" size={24} color="white" />
        <Text style={styles.iconLabel}>Search</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around', // Space out icons evenly
    paddingVertical: 8, // Adjust vertical padding
    paddingHorizontal: 15, // Adjust horizontal padding
  },
  iconWrapper: {
    alignItems: 'center',
  },
  iconLabel: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 4, // Space between icon and label
  },
});
