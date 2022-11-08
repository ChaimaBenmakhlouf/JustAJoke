import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Box, Text, View } from "native-base"
import React from "react"
import RankingScreen from "../Screens/RankingScreen"

type RankingStackParamList = {
	RankingScreen: undefined
}

const RankingStack = createNativeStackNavigator<RankingStackParamList>()

const RankingStackScreens = () => {
	return (
		<RankingStack.Navigator>
			<RankingStack.Screen
				name="RankingScreen"
				component={RankingScreen}
				options={{
					title: "Classement",
					headerTitleAlign: "center",
					headerShadowVisible: false,
					headerStyle: {
						backgroundColor: "#F6F8FA"
					},
					headerTitle: (props) => (
						<Text fontWeight={"bold"} color="#FF9839" fontSize={"lg"} textAlign="center">
							{props.children}
						</Text>
					)
				}}
			/>
		</RankingStack.Navigator>
	)
}

export default RankingStackScreens
