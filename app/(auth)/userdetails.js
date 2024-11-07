// import React, { useState } from 'react';
// import { View, ScrollView, Image, Text, TextInput, StyleSheet, Alert } from "react-native";
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { LinearGradient } from 'expo-linear-gradient';
// import { Picker } from '@react-native-picker/picker';
// import { useGlobalContext } from '../../context/GlobalProvider';

// const UserDetails = () => {
//   const { email: globalEmail, pass: globalPass } = useGlobalContext();

//   const [userData, setUserData] = useState({
//     name: "",
//     email: globalEmail,
//     password: globalPass,
//     phoneNumber: "",
//     accountType: "",
//     country: "",
//     stateProvince: "",
//     school: ""
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (name, value) => {
//     setUserData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error when user modifies the input
//   };

//   const validateInputs = () => {
//     const newErrors = {};
//     const phoneRegex = /^[0-9]{10}$/;

//     if (!userData.name) {
//       newErrors.name = "Full name is required.";
//     }
//     if (!userData.phoneNumber) {
//       newErrors.phoneNumber = "Phone number is required.";
//     } else if (!phoneRegex.test(userData.phoneNumber)) {
//       newErrors.phoneNumber = "Phone number must be exactly 10 digits.";
//     }
//     if (!userData.country) {
//       newErrors.country = "Country is required.";
//     }
//     if (!userData.stateProvince) {
//       newErrors.stateProvince = "State/Province is required.";
//     }
//     if (!userData.accountType) {
//       newErrors.accountType = "Account type is required.";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0; // Return true if no errors
//   };

//   const handleSubmit = async () => {
//     if (!validateInputs()) {
//       return; // Stop submission if there are validation errors
//     }

//     try {
//       const headersList = {
//         "Accept": "*/*",
//         "User-Agent": "Thunder Client (https://www.thunderclient.com)",
//         "Content-Type": "application/json"
//       };

//       const gqlBody = {
//         query: `
//           mutation CreateUser($userInput: UserInput!) {
//             createUser(userInput: $userInput) {
//               _id
//               name
//               email
//               password
//               phoneNumber
//               accountType
//               country
//               stateProvince
//               school
//             }
//           }
//         `,
//         variables: {
//           userInput: userData
//         }
//       };

//       const bodyContent = JSON.stringify(gqlBody);

//       const response = await fetch("http://localhost:3000/graphql", {
//         method: "POST",
//         body: bodyContent,
//         headers: headersList
//       });

//       const data = await response.json();

//       if (response.ok) {
//         Alert.alert("Success", "Account created successfully!");
//         console.log("Response Data:", data);
//       } else {
//         throw new Error(data.errors[0]?.message || "Something went wrong");
//       }
//     } catch (error) {
//       Alert.alert("Error", error.message);
//       console.log("Error:", error);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollView}>
//         <View style={styles.profileContainer}>
//           <Image
//             source={require('../../assets/images/Mridul.png')}
//             resizeMode={"cover"}
//             style={styles.profileImage}
//           />
//           <Text style={styles.uploadText}>Upload Profile Photo</Text>
//         </View>

//         <Text style={styles.label}>Full Name*</Text>
//         <TextInput
//           style={styles.inputBox}
//           placeholder="Enter your full name"
//           placeholderTextColor="#757575"
//           value={userData.name}
//           onChangeText={(value) => handleChange("name", value)}
//         />
//         {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

//         <Text style={styles.label}>Phone Number*</Text>
//         <TextInput
//           style={styles.inputBox}
//           placeholder="Enter your phone number"
//           placeholderTextColor="#757575"
//           value={userData.phoneNumber}
//           onChangeText={(value) => handleChange("phoneNumber", value)}
//           keyboardType="numeric" // Restrict keyboard to digits
//         />
//         {errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}

//         <Text style={styles.label}>Country*</Text>
//         <TextInput
//           style={styles.inputBox}
//           placeholder="Enter your country"
//           placeholderTextColor="#757575"
//           value={userData.country}
//           onChangeText={(value) => handleChange("country", value)}
//         />
//         {errors.country && <Text style={styles.errorText}>{errors.country}</Text>}

//         <Text style={styles.label}>State/Province*</Text>
//         <TextInput
//           style={styles.inputBox}
//           placeholder="Enter your state/province"
//           placeholderTextColor="#757575"
//           value={userData.stateProvince}
//           onChangeText={(value) => handleChange("stateProvince", value)}
//         />
//         {errors.stateProvince && <Text style={styles.errorText}>{errors.stateProvince}</Text>}

//         <Text style={styles.label}>Type of Account*</Text>
//         <View style={styles.pickerContainer}>
//           <Picker
//             selectedValue={userData.accountType}
//             onValueChange={(value) => handleChange("accountType", value)}
//             style={styles.PickerBoxInput}
//             prompt="Choose account type"
//           >
//             <Picker.Item label="Choose account type" value="" color="#181818" />
//             <Picker.Item label="Learner" value="Learner" />
//             <Picker.Item label="Educator" value="Educator" />
//             <Picker.Item label="Admin" value="Admin" />
//           </Picker>
//         </View>
//         {errors.accountType && <Text style={styles.errorText}>{errors.accountType}</Text>}

//         <Text style={styles.label}>School (optional)</Text>
//         <TextInput
//           style={styles.inputBox}
//           placeholder="Enter school name"
//           placeholderTextColor="#757575"
//           value={userData.school}
//           onChangeText={(value) => handleChange("school", value)}
//         />

//         <LinearGradient
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 0 }}
//           colors={["#EB7B38", "#E26662", "#E15890"]}
//           style={styles.createAccountButton}
//         >
//           <Text style={styles.buttonText} onPress={handleSubmit}>Create account</Text>
//         </LinearGradient>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// export default UserDetails;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//   },
//   scrollView: {
//     alignItems: "center",
//     paddingVertical: 20,
//   },
//   profileContainer: {
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 10,
//   },
//   uploadText: {
//     color: "#757575",
//     fontSize: 14,
//   },
//   label: {
//     color: "#757575",
//     fontSize: 16,
//     alignSelf: "flex-start",
//     marginLeft: 25,
//     marginBottom: 8,
//     fontWeight: "900",
//   },
//   inputBox: {
//     height: 50,
//     backgroundColor: "#FFFFFF",
//     borderColor: "#34CC99",
//     borderRadius: 10,
//     borderWidth: 1,
//     marginBottom: 5, // Changed to 5 for spacing with error message
//     paddingHorizontal: 15,
//     width: '90%',
//     color: "#181818",
//   },
//   pickerContainer: {
//     width: '90%',
//     borderWidth: 1,
//     borderColor: "#34CC99",
//     borderRadius: 10,
//     overflow: 'hidden',
//     marginBottom: 5, // Changed to 5 for spacing with error message
//   },
//   PickerBoxInput: {
//     height: 50,
//     backgroundColor: "#FFFFFF",
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     width: '100%',
//     color: "#181818",
//   },
//   createAccountButton: {
//     width: '90%',
//     borderRadius: 50,
//     paddingVertical: 15,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 12,
//     alignSelf: 'flex-start',
//     marginLeft: 25,
//     marginBottom: 10,
//   },
// // });
// import React, { useState } from 'react';
// import {
//   View,
//   ScrollView,
//   Image,
//   Text,
//   TextInput,
//   StyleSheet,
//   Alert,
//   TouchableOpacity,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { LinearGradient } from 'expo-linear-gradient';
// import { Picker } from '@react-native-picker/picker';
// import { useGlobalContext } from '../../context/GlobalProvider';
// import { useNavigation } from '@react-navigation/native';

// const UserDetails = () => {
//   const { email: globalEmail, pass: globalPass } = useGlobalContext();
//   const navigation = useNavigation();

//   const [userData, setUserData] = useState({
//     name: '',
//     email: globalEmail,
//     password: globalPass,
//     phoneNumber: '',
//     accountType: '',
//     country: '',
//     stateProvince: '',
//     school: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (name, value) => {
//     setUserData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error when user modifies the input
//   };

//   const validateInputs = () => {
//     const newErrors = {};
//     const phoneRegex = /^[0-9]{10}$/;

//     if (!userData.name) {
//       newErrors.name = 'Full name is required.';
//     }
//     if (!userData.phoneNumber) {
//       newErrors.phoneNumber = 'Phone number is required.';
//     } else if (!phoneRegex.test(userData.phoneNumber)) {
//       newErrors.phoneNumber = 'Phone number must be exactly 10 digits.';
//     }
//     if (!userData.country) {
//       newErrors.country = 'Country is required.';
//     }
//     if (!userData.stateProvince) {
//       newErrors.stateProvince = 'State/Province is required.';
//     }
//     if (!userData.accountType) {
//       newErrors.accountType = 'Account type is required.';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0; // Return true if no errors
//   };

//   const handleSubmit = async () => {
//     if (!validateInputs()) {
//       return; // Stop submission if there are validation errors
//     }

//     try {
//       const headersList = {
//         Accept: '*/*',
//         'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
//         'Content-Type': 'application/json',
//       };

//       const gqlBody = {
//         query: `
//           mutation CreateUser($userInput: UserInput!) {
//             createUser(userInput: $userInput) {
//               _id
//               name
//               email
//               password
//               phoneNumber
//               accountType
//               country
//               stateProvince
//               school
//             }
//           }
//         `,
//         variables: {
//           userInput: userData,
//         },
//       };

//       const bodyContent = JSON.stringify(gqlBody);

//       const API_URL = 'http://192.168.2.112:3000/graphql';


//       const response = await fetch(`${API_URL}`, {
//         method: 'POST',
//         body: bodyContent,
//         headers: headersList,
//       });

//       const data = await response.json();

//       if (response.ok) {
//         Alert.alert('Success', 'Account created successfully!');
//         console.log('Response Data:', data);
//         navigation.navigate('verifyemail'); // Navigate to Verify Email page
//       } else {
//         throw new Error(data.errors[0]?.message || 'Something went wrong');
//       }
//     } catch (error) {
//       Alert.alert('Error', error.message);
//       console.log('Error:', error);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollView}>
//         <View style={styles.profileContainer}>
//           <Image
//             source={require('../../assets/images/Mridul.png')}
//             resizeMode={'cover'}
//             style={styles.profileImage}
//           />
//           <Text style={styles.uploadText}>Upload Profile Photo</Text>
//         </View>

//         <Text style={styles.label}>Full Name*</Text>
//         <TextInput
//           style={styles.inputBox}
//           placeholder="Enter your full name"
//           placeholderTextColor="#757575"
//           value={userData.name}
//           onChangeText={(value) => handleChange('name', value)}
//         />
//         {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

//         <Text style={styles.label}>Phone Number*</Text>
//         <TextInput
//           style={styles.inputBox}
//           placeholder="Enter your phone number"
//           placeholderTextColor="#757575"
//           value={userData.phoneNumber}
//           onChangeText={(value) => handleChange('phoneNumber', value)}
//           keyboardType="numeric" // Restrict keyboard to digits
//         />
//         {errors.phoneNumber && (
//           <Text style={styles.errorText}>{errors.phoneNumber}</Text>
//         )}

//         <Text style={styles.label}>Country*</Text>
//         <TextInput
//           style={styles.inputBox}
//           placeholder="Enter your country"
//           placeholderTextColor="#757575"
//           value={userData.country}
//           onChangeText={(value) => handleChange('country', value)}
//         />
//         {errors.country && (
//           <Text style={styles.errorText}>{errors.country}</Text>
//         )}

//         <Text style={styles.label}>State/Province*</Text>
//         <TextInput
//           style={styles.inputBox}
//           placeholder="Enter your state/province"
//           placeholderTextColor="#757575"
//           value={userData.stateProvince}
//           onChangeText={(value) => handleChange('stateProvince', value)}
//         />
//         {errors.stateProvince && (
//           <Text style={styles.errorText}>{errors.stateProvince}</Text>
//         )}

//         <Text style={styles.label}>Type of Account*</Text>
//         <View style={styles.pickerContainer}>
//           <Picker
//             selectedValue={userData.accountType}
//             onValueChange={(value) => handleChange('accountType', value)}
//             style={styles.PickerBoxInput}
//             prompt="Choose account type"
//           >
//             <Picker.Item label="Choose account type" value="" color="#181818" />
//             <Picker.Item label="Learner" value="Learner" />
//             <Picker.Item label="Educator" value="Educator" />
//             <Picker.Item label="Admin" value="Admin" />
//           </Picker>
//         </View>
//         {errors.accountType && (
//           <Text style={styles.errorText}>{errors.accountType}</Text>
//         )}

//         <Text style={styles.label}>School (optional)</Text>
//         <TextInput
//           style={styles.inputBox}
//           placeholder="Enter school name"
//           placeholderTextColor="#757575"
//           value={userData.school}
//           onChangeText={(value) => handleChange('school', value)}
//         />

//         <LinearGradient
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 0 }}
//           colors={['#EB7B38', '#E26662', '#E15890']}
//           style={styles.createAccountButton}
//         >
//           <TouchableOpacity
//             style={styles.buttonContainer}
//             onPress={handleSubmit}
//           >
//             <Text style={styles.buttonText}>Create Account</Text>
//           </TouchableOpacity>
//         </LinearGradient>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default UserDetails;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   scrollView: {
//     alignItems: 'center',
//     paddingVertical: 20,
//   },
//   profileContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 10,
//   },
//   uploadText: {
//     color: '#757575',
//     fontSize: 14,
//   },
//   label: {
//     color: '#757575',
//     fontSize: 16,
//     alignSelf: 'flex-start',
//     marginLeft: 25,
//     marginBottom: 8,
//     fontWeight: '900',
//   },
//   inputBox: {
//     height: 50,
//     backgroundColor: '#FFFFFF',
//     borderColor: '#34CC99',
//     borderRadius: 10,
//     borderWidth: 1,
//     marginBottom: 5, // Changed to 5 for spacing with error message
//     paddingHorizontal: 15,
//     width: '90%',
//     color: '#181818',
//   },
//   pickerContainer: {
//     width: '90%',
//     borderWidth: 1,
//     borderColor: '#34CC99',
//     borderRadius: 10,
//     overflow: 'hidden',
//     marginBottom: 5, // Changed to 5 for spacing with error message
//   },
//   PickerBoxInput: {
//     height: 50,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     width: '100%',
//     color: '#181818',
//   },
//   createAccountButton: {
//     width: '90%',
//     borderRadius: 50,
//     paddingVertical: 15,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '900',
//   },
//   errorText: {
//     alignSelf: 'flex-start',
//     marginLeft: 25,
//     color: 'red',
//     fontSize: 12,
//     marginBottom: 10,
//   },
// });
import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker';
import { useGlobalContext } from '../../context/GlobalProvider';
import { useNavigation } from '@react-navigation/native';

const UserDetails = () => {
  const { email: globalEmail, pass: globalPass } = useGlobalContext();
  const navigation = useNavigation();

  const [userData, setUserData] = useState({
    name: '',
    email: globalEmail,
    password: globalPass,
    phoneNumber: '',
    accountType: '',
    country: '',
    stateProvince: '',
    school: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setUserData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error when user modifies the input
  };

  const validateInputs = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/;

    if (!userData.name) {
      newErrors.name = 'Full name is required.';
    }
    if (!userData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required.';
    } else if (!phoneRegex.test(userData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be exactly 10 digits.';
    }
    if (!userData.country) {
      newErrors.country = 'Country is required.';
    }
    if (!userData.stateProvince) {
      newErrors.stateProvince = 'State/Province is required.';
    }
    if (!userData.accountType) {
      newErrors.accountType = 'Account type is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async () => {
    if (!validateInputs()) {
      return; // Stop submission if there are validation errors
    }

    try {
      const headersList = {
        Accept: '*/*',
        'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        'Content-Type': 'application/json',
      };

      const gqlBody = {
        query: `
          mutation CreateUser($userInput: UserInput!) {
            createUser(userInput: $userInput) {
              _id
              name
              email
              password
              phoneNumber
              accountType
              country
              stateProvince
              school
            }
          }
        `,
        variables: {
          userInput: userData,
        },
      };

      const bodyContent = JSON.stringify(gqlBody);

      const API_URL = 'https://a280-142-126-97-217.ngrok-free.app/graphql';

      const response = await fetch(`${API_URL}`, {
        method: 'POST',
        body: bodyContent,
        headers: headersList,
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'Account created successfully!');
        console.log('Response Data:', data);
        navigation.navigate('verifyemail'); // Navigate to Verify Email page
      } else {
        throw new Error(data.errors[0]?.message || 'Something went wrong');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
      console.log('Error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/images/Mridul.png')}
            resizeMode={'cover'}
            style={styles.profileImage}
          />
          <Text style={styles.uploadText}>Upload Profile Photo</Text>
        </View>

        <Text style={styles.label}>Full Name*</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your full name"
          placeholderTextColor="#757575"
          value={userData.name}
          onChangeText={(value) => handleChange('name', value)}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

        <Text style={styles.label}>Phone Number*</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your phone number"
          placeholderTextColor="#757575"
          value={userData.phoneNumber}
          onChangeText={(value) => handleChange('phoneNumber', value)}
          keyboardType="numeric" // Restrict keyboard to digits
        />
        {errors.phoneNumber && (
          <Text style={styles.errorText}>{errors.phoneNumber}</Text>
        )}

        <Text style={styles.label}>Country*</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your country"
          placeholderTextColor="#757575"
          value={userData.country}
          onChangeText={(value) => handleChange('country', value)}
        />
        {errors.country && (
          <Text style={styles.errorText}>{errors.country}</Text>
        )}

        <Text style={styles.label}>State/Province*</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your state/province"
          placeholderTextColor="#757575"
          value={userData.stateProvince}
          onChangeText={(value) => handleChange('stateProvince', value)}
        />
        {errors.stateProvince && (
          <Text style={styles.errorText}>{errors.stateProvince}</Text>
        )}

        <Text style={styles.label}>Type of Account*</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={userData.accountType}
            onValueChange={(value) => handleChange('accountType', value)}
            style={styles.PickerBoxInput}
            prompt="Choose account type"
          >
            <Picker.Item label="Choose account type" value="" color="#181818" />
            <Picker.Item label="Learner" value="Learner" />
            <Picker.Item label="Educator" value="Educator" />
            <Picker.Item label="Admin" value="Admin" />
          </Picker>
        </View>
        {errors.accountType && (
          <Text style={styles.errorText}>{errors.accountType}</Text>
        )}

        <Text style={styles.label}>School (optional)</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter school name"
          placeholderTextColor="#757575"
          value={userData.school}
          onChangeText={(value) => handleChange('school', value)}
        />

        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#EB7B38', '#E26662', '#E15890']}
          style={styles.createAccountButton}
        >
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  uploadText: {
    color: '#757575',
    fontSize: 14,
  },
  label: {
    color: '#757575',
    fontSize: 16,
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginBottom: 8,
    fontWeight: '900',
  },
  inputBox: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderColor: '#34CC99',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 5, // Changed to 5 for spacing with error message
    paddingHorizontal: 15,
    width: '90%',
    color: '#181818',
  },
  pickerContainer: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#34CC99',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 5, // Changed to 5 for spacing with error message
  },
  PickerBoxInput: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    width: '100%',
    color: '#181818',
  },
  createAccountButton: {
    width: '90%',
    borderRadius: 50,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },
  errorText: {
    alignSelf: 'flex-start',
    marginLeft: 25,
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});
