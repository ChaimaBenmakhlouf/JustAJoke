import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View } from "native-base"
import React from "react"
import RankingScreen from "../Screens/RankingScreen"

type RankingStackParamList = {
	RankingScreen: undefined
}

const RankingStack = createNativeStackNavigator<RankingStackParamList>()

const RankingStackScreens = () => {
	return (
		<RankingStack.Navigator>
			<RankingStack.Screen name="RankingScreen" component={RankingScreen} />
		</RankingStack.Navigator>
	)
}

export default RankingStackScreens
