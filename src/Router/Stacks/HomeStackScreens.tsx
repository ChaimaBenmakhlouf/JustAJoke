import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View } from "native-base"
import React from "react"
import HomeScreen from "../Screens/HomeScreen"

type HomeStackParamList = {
	HomeScreen: undefined
}

const HomeStack = createNativeStackNavigator<HomeStackParamList>()

const HomeStackScreens = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="HomeScreen" component={HomeScreen} />
		</HomeStack.Navigator>
	)
}

export default HomeStackScreens
