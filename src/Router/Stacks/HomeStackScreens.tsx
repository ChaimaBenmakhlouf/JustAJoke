import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View } from "native-base"
import React from "react"
import HomeScreen from "../Screens/HomeScreen"

type HomeStackParamList = {
	Home: undefined
}

const HomeStack = createNativeStackNavigator<HomeStackParamList>()

const HomeStackScreens = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home" component={HomeScreen} />
		</HomeStack.Navigator>
	)
}

export default HomeStackScreens
