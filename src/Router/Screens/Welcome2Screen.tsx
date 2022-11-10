import { useNavigation } from "@react-navigation/native"
import { Box, Center, Flex, HStack, Text, VStack, Button, Image, Icon, Pressable } from "native-base"
import React from "react"
import { Dimensions } from "react-native"
import { Path } from "react-native-svg"

const Welcome2Screen = () => {
	const height = Dimensions.get("screen").height
	const navigation = useNavigation()

	return (
		<Flex safeArea justifyContent={"space-between"} height={height - 60}>
			<Box>
				<Center pt="6">
					<HStack space="2">
						<Box height="1" width="7" bg="#F95F5E" />
						<Box height="1" width="7" bg="#F95F5E" />
						<Box height="1" width="7" bg="#F95F5E" opacity="0.4" />
					</HStack>
				</Center>

				<Pressable onPress={navigation.goBack} px="4" pt="6">
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

				<Center>
					<Image source={require("../../../assets/onboarding2.png")} alt="onboarding first image" />
				</Center>

				<Center pt="8">
					<Text fontSize={"xl"} fontWeight="bold" px="16" textAlign={"center"}>
						Découvre les blagues des autres<Text color="#F95F5E"> Jokers ! 🤡</Text>
					</Text>
				</Center>

				<Center pt="10" px="8">
					<VStack space="6">
						<Text fontSize={"md"} textAlign="center">
							Lis les <Text fontWeight="bold">meilleures</Text> blagues du moment ou celles qui te sont recommandées.
						</Text>

						<Text fontSize={"md"} textAlign="center">
							Tente de monter dans le classement pour avoir la chance de gagner plus en visibilité et donc, en gain de{" "}
							<Text fontWeight="bold">Tokens !</Text>
						</Text>
					</VStack>
				</Center>
			</Box>

			<Flex flexDir="row" alignItems={"center"} justifyContent="space-between" px="6">
				<Text color="black" opacity="0.5" onPress={() => navigation.navigate("WalletWords")}>
					Passer
				</Text>
				<Box
					borderRadius={"full"}
					bg={{
						linearGradient: {
							colors: ["#FF9839", "#F95F5E"],
							start: [0, 1],
							end: [0.75, 0]
						}
					}}>
					<Button bg="whiteAlpha.100" borderRadius={"full"} px="5" py="2" onPress={() => navigation.navigate("WalletWords")}>
						Suivant
					</Button>
				</Box>
			</Flex>
		</Flex>
	)
}

export default Welcome2Screen
