import { Box, NativeBaseProvider, Text } from "native-base"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import TabBarNavigator from "./src/Router/TabBarNavigator"

export default function App() {
	const RootStack = createNativeStackNavigator()
	return (
		<NativeBaseProvider>
			<NavigationContainer>
				<RootStack.Navigator screenOptions={{ headerShown: false }}>
					<RootStack.Group>
						<RootStack.Screen name="TabBar" component={TabBarNavigator} />
					</RootStack.Group>
				</RootStack.Navigator>
			</NavigationContainer>
		</NativeBaseProvider>
	)
}
