import { useNavigation } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Box, Center, Flex, HStack, Icon, Image, Pressable, Text, View } from "native-base"
import React from "react"
import { Dimensions } from "react-native"
import { Rect, Path } from "react-native-svg"
import MyJokesScreen from "../Screens/MyJokesScreen"

type MyJokesStackParamList = {
	JokesScreen: undefined
}

const MyJokesStack = createNativeStackNavigator<MyJokesStackParamList>()

const MyJokesStackScreens = () => {
	const dimensions = Dimensions.get("screen")
	const navigation = useNavigation()
	return (
		<MyJokesStack.Navigator>
			<MyJokesStack.Screen
				name="JokesScreen"
				component={MyJokesScreen}
				options={{
					title: "Mes blagues postées",
					headerShadowVisible: false,
					headerTitle: (props) => {
						const titleSplit = props.children.split(" ")

						return (
							<Flex alignItems="center" justifyContent={"space-between"} flexDir="row" width={dimensions.width - 35} pt="3">
								<Text fontWeight={"bold"} maxW={150} fontSize={"xl"} color="black">
									{titleSplit[0]} <Text color="#F95F5E">{titleSplit[1]}</Text> {titleSplit[2]}
								</Text>

								<Box height="9" bg="black" borderRadius={"full"} px="4">
									<Center height="full">
										<HStack space="2" alignItems="center">
											<Image source={require("../../../assets/Eth.png")} alt="eth image" />
											<Text color="white" fontWeight="bold">
												761 ETH
											</Text>
										</HStack>
									</Center>
								</Box>
							</Flex>
						)
					}
				}}
			/>
		</MyJokesStack.Navigator>
	)
}

export default MyJokesStackScreens
