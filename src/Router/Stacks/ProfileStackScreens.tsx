import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View } from "native-base"
import React from "react"
import ProfileScreen from "../Screens/ProfileScreen"

type ProfileStackParamList = {
	ProfileScreen: undefined
}

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>()

const ProfileStackScreens = () => {
	return (
		<ProfileStack.Navigator>
			<ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
		</ProfileStack.Navigator>
	)
}

export default ProfileStackScreens
