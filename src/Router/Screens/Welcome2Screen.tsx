import { useNavigation } from "@react-navigation/native"
import { Box, Center, Flex, HStack, Text, VStack, Button, Image } from "native-base"
import React from "react"
import { Dimensions } from "react-native"

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
						<Box height="1" width="7" bg="#F95F5E" opacity="0.4" />
						<Box height="1" width="7" bg="#F95F5E" opacity="0.4" />
					</HStack>
				</Center>

				<Center pt="10">
					<Image source={require("../../../assets/onboarding2.png")} alt="onboarding first image" />
				</Center>

				<Center pt="10">
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
				<Text color="black" opacity="0.5">
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
					<Button bg="whiteAlpha.100" borderRadius={"full"} px="5" py="2" onPress={() => navigation.navigate("Welcome2Screen")}>
						Suivant
					</Button>
				</Box>
			</Flex>
		</Flex>
	)
}

export default Welcome2Screen
