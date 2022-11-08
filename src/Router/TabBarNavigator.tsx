import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStackScreens from "./Stacks/HomeStackScreens"
import ProfilStackScreens from "./Stacks/ProfilStackScreens"

const Tab = createBottomTabNavigator()

const TabBarNavigator = () => {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen name="HomeStack" component={HomeStackScreens} />
			<Tab.Screen name="ProfilStack" component={ProfilStackScreens} />
		</Tab.Navigator>
	)
}

export default TabBarNavigator
