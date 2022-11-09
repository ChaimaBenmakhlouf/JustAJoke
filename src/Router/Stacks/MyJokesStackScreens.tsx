import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View } from "native-base"
import React from "react"
import MyJokesScreen from "../Screens/MyJokesScreen"

type MyJokesStackParamList = {
	JokesScreen: undefined
}

const MyJokesStack = createNativeStackNavigator<MyJokesStackParamList>()

const MyJokesStackScreens = () => {
	return (
		<MyJokesStack.Navigator>
			<MyJokesStack.Screen name="JokesScreen" component={MyJokesScreen} />
		</MyJokesStack.Navigator>
	)
}

export default MyJokesStackScreens
