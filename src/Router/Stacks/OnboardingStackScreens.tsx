import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Box, Text, View } from "native-base"
import React from "react"
import RankingScreen from "../Screens/RankingScreen"
import WalletWordsScreen from "../Screens/WalletWordsScreen"
import Welcome2Screen from "../Screens/Welcome2Screen"
import WelcomeScreen from "../Screens/WelcomeScreen"

type OnboardingStackParamList = {
	WelcomeScreen: undefined
	Welcome2Screen: undefined
	WalletWords: undefined
	WalletConnexion: undefined
}

const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>()

const OnboardingStackScreens = () => {
	return (
		<OnboardingStack.Navigator>
			<OnboardingStack.Screen
				name="WelcomeScreen"
				component={WelcomeScreen}
				options={{
					header: () => <></>
				}}
			/>

			<OnboardingStack.Screen
				name="Welcome2Screen"
				component={Welcome2Screen}
				options={{
					header: () => <></>
				}}
			/>

			<OnboardingStack.Screen
				name="WalletWords"
				component={WalletWordsScreen}
				options={{
					header: () => <></>
				}}
			/>
		</OnboardingStack.Navigator>
	)
}

export default OnboardingStackScreens
