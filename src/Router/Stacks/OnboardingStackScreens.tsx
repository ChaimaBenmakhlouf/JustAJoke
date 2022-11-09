import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Box, Text, View } from "native-base"
import React from "react"
import RankingScreen from "../Screens/RankingScreen"
import WelcomeScreen from "../Screens/WelcomeScreen"

type OnboardingStackParamList = {
	WelcomeScreen: undefined
	Welcome2: undefined
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
		</OnboardingStack.Navigator>
	)
}

export default OnboardingStackScreens
