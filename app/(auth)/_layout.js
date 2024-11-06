import { useRouter } from "expo-router";  // Import useRouter for redirection
import { StatusBar } from "expo-status-bar";
import { useGlobalContext } from "../../context/GlobalProvider";
import GlobalProvider from "../../context/GlobalProvider";
import { View } from "react-native";
import { Stack } from "expo-router";  // Ensure this is correctly imported

const AuthLayout = () => {
  const { loading, isLogged } = useGlobalContext();
  const router = useRouter();  // Initialize useRouter for navigation

  // If user is logged in and loading is complete, navigate to /explore
  if (!loading && isLogged) {
    router.push("/explore");  // Programmatically redirect
    return null;  // Don't render the screen while redirecting
  }

  return (
    <View style={{ flex: 1 }}>
      <GlobalProvider>
      <Stack>
        <Stack.Screen
          name="signin"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="signup"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      </GlobalProvider>
    </View>
  );
};

export default AuthLayout;
