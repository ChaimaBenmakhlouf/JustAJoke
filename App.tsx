import { Box, NativeBaseProvider, Text } from "native-base"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import TabBarNavigator from "./src/Router/TabBarNavigator"
import OnboardingStackScreens from "./src/Router/Stacks/OnboardingStackScreens"
import StateProvider from "./src/Context/StateContext"

export default function App() {
	// Import to use gradients in the app
	const LinearGradient = require("expo-linear-gradient").LinearGradient

	const config = {
		dependencies: {
			"linear-gradient": LinearGradient
		}
	}

	const RootStack = createNativeStackNavigator()
	return (
		<NativeBaseProvider config={config}>
			<StateProvider>
				<NavigationContainer>
					<RootStack.Navigator screenOptions={{ headerShown: false }}>
						<RootStack.Group>
							<RootStack.Screen name="OnboardingScreens" component={OnboardingStackScreens} />
							<RootStack.Screen name="TabBar" component={TabBarNavigator} />
						</RootStack.Group>
					</RootStack.Navigator>
				</NavigationContainer>
			</StateProvider>
		</NativeBaseProvider>
	)
}
