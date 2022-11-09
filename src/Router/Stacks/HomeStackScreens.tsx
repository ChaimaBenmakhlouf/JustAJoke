import { useNavigation } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Box, Center, Flex, HStack, Icon, Image, Pressable, Text } from "native-base"
import React from "react"
import { Dimensions } from "react-native"
import { Path, Rect } from "react-native-svg"
import HomeScreen from "../Screens/HomeScreen"
import NotificationsScreen from "../Screens/NotificationsScreen"

type HomeStackParamList = {
	HomeScreen: undefined
	NotificationsScreen: undefined
}

const HomeStack = createNativeStackNavigator<HomeStackParamList>()

const HomeStackScreens = () => {
	const dimensions = Dimensions.get("screen")
	const navigation = useNavigation()

	return (
		<HomeStack.Navigator>
			<HomeStack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					headerShadowVisible: false,
					headerTitle: () => (
						<Flex alignItems="center" justifyContent={"space-between"} flexDir="row" width={dimensions.width - 35}>
							<Box borderRadius={"full"} height="10" width="10" bg="#FF9839">
								<Center height="full">
									<Pressable onPress={() => navigation.navigate("NotificationsScreen")}>
										<Icon viewBox="0 0 24 24" size="xl">
											<Rect width="24" height="24" rx="12" fill="#FF9839" />
											<Path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M11.1 1.25C7.70442 1.25 5.07724 4.22603 5.49841 7.59536L5.57776 8.23021C5.69388 9.15916 5.35455 10.0871 4.66654 10.7219C3.24086 12.0375 2.84477 14.1315 3.69142 15.8769L3.79477 16.09C4.54088 17.6282 6.05582 18.6355 7.74702 18.7408L7.9353 19.0636C8.9481 20.7998 10.5261 21.75 12.1831 21.75C13.8402 21.75 15.4182 20.7998 16.431 19.0636L16.6222 18.7358C18.043 18.6236 19.3384 17.8514 20.1111 16.6373C21.2932 14.7799 20.9801 12.3432 19.3668 10.845L19.3229 10.8042C19.1263 10.6216 18.9563 10.4169 18.8151 10.1959C18.592 9.8469 18.1282 9.74484 17.7792 9.96793C17.4302 10.191 17.3281 10.6548 17.5512 11.0038C17.7602 11.3307 18.0116 11.6335 18.3022 11.9033L18.3461 11.9441C19.4289 12.9497 19.6391 14.5852 18.8456 15.832C18.2835 16.7152 17.3092 17.25 16.2623 17.25H16.1974C16.1946 17.2499 16.1917 17.2499 16.1889 17.2499C16.1827 17.2499 16.1765 17.2499 16.1703 17.25H8.19595C8.18695 17.2498 8.17793 17.2498 8.16891 17.25H8.04147C6.8079 17.25 5.68275 16.5452 5.14438 15.4353L5.04102 15.2223C4.48294 14.0718 4.74404 12.6915 5.68379 11.8243C6.72755 10.8611 7.24234 9.45345 7.06618 8.04416L6.98682 7.40931C6.67757 4.93526 8.60667 2.75 11.1 2.75H12.8029C13.9214 2.75 14.9242 3.18763 15.6655 3.8947C15.9652 4.18058 16.44 4.16934 16.7259 3.86959C17.0117 3.56985 17.0005 3.09511 16.7008 2.80923C15.6926 1.84774 14.3235 1.25 12.8029 1.25H11.1ZM12.1831 20.25C11.262 20.25 10.2792 19.7877 9.51988 18.75H14.8464C14.0871 19.7877 13.1043 20.25 12.1831 20.25Z"
												fill="white"
											/>
											<Path
												d="M19.1833 7C19.1833 8.10457 18.2878 9 17.1833 9C16.0787 9 15.1833 8.10457 15.1833 7C15.1833 5.89543 16.0787 5 17.1833 5C18.2878 5 19.1833 5.89543 19.1833 7Z"
												fill="white"
											/>
										</Icon>
									</Pressable>
								</Center>
							</Box>

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
				}}
			/>

			<HomeStack.Screen
				name="NotificationsScreen"
				component={NotificationsScreen}
				options={{
					title: "Mes notifications",
					headerTitleAlign: "center",
					headerTitle: (props) => {
						const titleSplit = props.children.split(" ")
						return (
							<HStack space="1">
								<Text fontWeight="bold" fontSize={"xl"}>
									{titleSplit[0]}
								</Text>
								<Text fontWeight="bold" fontSize={"xl"} color="#F95F5E">
									{titleSplit[1]}
								</Text>
							</HStack>
						)
					},
					headerBackVisible: false,
					headerLeft: () => (
						<Pressable onPress={navigation.goBack}>
							<Icon viewBox="0 0 29 29" size={29}>
								<Path
									d="M16.0708 10.6333L12.7952 13.675C12.2804 14.153 12.2804 14.9678 12.7952 15.4459L16.0708 18.4875M14.5 2.41667C7.82655 2.41667 2.41666 7.82656 2.41666 14.5C2.41666 21.1734 7.82655 26.5833 14.5 26.5833C21.1734 26.5833 26.5833 21.1734 26.5833 14.5C26.5833 7.82656 21.1734 2.41667 14.5 2.41667Z"
									stroke="#222222"
									strokeWidth="1.8125"
									strokeLinecap="round"
									fill="white"
								/>
							</Icon>
						</Pressable>
					)
				}}
			/>
		</HomeStack.Navigator>
	)
}

export default HomeStackScreens
