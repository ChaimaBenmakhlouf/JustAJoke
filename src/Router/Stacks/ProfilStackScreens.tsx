import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View } from "native-base"
import React from "react"
import ProfilScreen from "../Screens/ProfilScreen"

type ProfilStackParamList = {
	Profil: undefined
}

const HomeStack = createNativeStackNavigator<ProfilStackParamList>()

const ProfilStackScreens = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Profil" component={ProfilScreen} options={{headerShown: false}} />
		</HomeStack.Navigator>
		
	)
}

export default ProfilStackScreens
