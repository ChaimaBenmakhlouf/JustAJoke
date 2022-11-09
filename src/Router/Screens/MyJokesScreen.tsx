import { Box, Button, Flex, HStack, Image, Pressable, ScrollView, Text, TextArea, VStack } from "native-base"
import React, { useState } from "react"
import Constants from "expo-constants"

const MyJokesScreen = () => {
	const [data, setData] = useState([{ name: "", response: "" }])
	const [name, setName] = useState("")
	const [response, setResponse] = useState("")
	return (
		<>
			<Box bg="white" borderBottomRadius="3xl" shadow="4" height="4" width="full" />
			<ScrollView>
				<Box p="4">
					<VStack space="6" bg="white" p="4" borderRadius={"xl"}>
						{/* @ts-ignore */}
						<TextArea h={"24"} borderWidth={0} borderRadius="xl" bg="#F5F5F5" placeholder="Commencez à blaguer..." />

						<Flex alignItems="center" justifyContent={"space-between"} flexDir="row">
							<Text color="#FF9839" fontSize={"2xs"}>
								Encore 1 blagues disponible pour aujourd'hui*
							</Text>
							<Box
								bg={{
									linearGradient: {
										colors: ["#FF9839", "#F95F5E"],
										start: [0, 1],
										end: [0.75, 0]
									}
								}}
								borderRadius="full">
								<Button size="sm" px="4" bg="whiteAlpha.100" borderRadius="full">
									Publier
								</Button>
							</Box>
						</Flex>
					</VStack>

					<Box p="4" mt="2" bg="white" borderRadius={"xl"} shadow="1">
						<Text fontWeight={"bold"} fontSize="lg">
							Blague du 12 Novembre
						</Text>

						<Text fontSize={"md"} color="black" pt="4">
							Qu'est-ce qu'un cochon qui passe la douane ?
						</Text>
						<Text fontSize={"xs"} color="#FF9839" pt="4" fontWeight={"bold"}>
							Un passeport
						</Text>

						<Flex justifyContent={"flex-end"} alignItems="flex-end">
							<Pressable px="4" py="2" bg="white" borderColor="black" borderWidth={"1"} borderRadius={"full"}>
								<HStack space="1.5" alignItems="center">
									<Text color="black">25</Text>
									<Image source={require("../../../assets/like.png")} alt="like button" />
								</HStack>
							</Pressable>
						</Flex>
					</Box>

					<Box p="4" mt="2" bg="white" borderRadius={"xl"} shadow="1">
						<Text fontWeight={"bold"} fontSize="lg">
							Blague du 11 Novembre
						</Text>

						<Text fontSize={"md"} color="black" pt="4">
							Qui est l'acteur à la main verte ?
						</Text>
						<Text fontSize={"xs"} color="#FF9839" pt="4" fontWeight={"bold"}>
							Jean Dujardin
						</Text>

						<Flex justifyContent={"flex-end"} alignItems="flex-end">
							<Pressable px="4" py="2" bg="white" borderColor="black" borderWidth={"1"} borderRadius={"full"}>
								<HStack space="1.5" alignItems="center">
									<Text color="black">145</Text>
									<Image source={require("../../../assets/like.png")} alt="like button" />
								</HStack>
							</Pressable>
						</Flex>
					</Box>

					<Box p="4" mt="2" bg="white" borderRadius={"xl"} shadow="1">
						<Text fontWeight={"bold"} fontSize="lg">
							Blague du 11 Novembre
						</Text>

						<Text fontSize={"md"} color="black" pt="4">
							Qui est l'acteur à la main verte ?
						</Text>
						<Text fontSize={"xs"} color="#FF9839" pt="4" fontWeight={"bold"}>
							Jean Dujardin
						</Text>

						<Flex justifyContent={"flex-end"} alignItems="flex-end">
							<Pressable px="4" py="2" bg="white" borderColor="black" borderWidth={"1"} borderRadius={"full"}>
								<HStack space="1.5" alignItems="center">
									<Text color="black">145</Text>
									<Image source={require("../../../assets/like.png")} alt="like button" />
								</HStack>
							</Pressable>
						</Flex>
					</Box>

					<Box p="4" mt="2" bg="white" borderRadius={"xl"} shadow="1">
						<Text fontWeight={"bold"} fontSize="lg">
							Blague du 11 Novembre
						</Text>

						<Text fontSize={"md"} color="black" pt="4">
							Qui est l'acteur à la main verte ?
						</Text>
						<Text fontSize={"xs"} color="#FF9839" pt="4" fontWeight={"bold"}>
							Jean Dujardin
						</Text>

						<Flex justifyContent={"flex-end"} alignItems="flex-end">
							<Pressable px="4" py="2" bg="white" borderColor="black" borderWidth={"1"} borderRadius={"full"}>
								<HStack space="1.5" alignItems="center">
									<Text color="black">145</Text>
									<Image source={require("../../../assets/like.png")} alt="like button" />
								</HStack>
							</Pressable>
						</Flex>
					</Box>

					<Box p="4" mt="2" bg="white" borderRadius={"xl"} shadow="1">
						<Text fontWeight={"bold"} fontSize="lg">
							Blague du 11 Novembre
						</Text>

						<Text fontSize={"md"} color="black" pt="4">
							Qui est l'acteur à la main verte ?
						</Text>
						<Text fontSize={"xs"} color="#FF9839" pt="4" fontWeight={"bold"}>
							Jean Dujardin
						</Text>

						<Flex justifyContent={"flex-end"} alignItems="flex-end">
							<Pressable px="4" py="2" bg="white" borderColor="black" borderWidth={"1"} borderRadius={"full"}>
								<HStack space="1.5" alignItems="center">
									<Text color="black">145</Text>
									<Image source={require("../../../assets/like.png")} alt="like button" />
								</HStack>
							</Pressable>
						</Flex>
					</Box>

					<Box p="4" mt="2" bg="white" borderRadius={"xl"} shadow="1">
						<Text fontWeight={"bold"} fontSize="lg">
							Blague du 11 Novembre
						</Text>

						<Text fontSize={"md"} color="black" pt="4">
							Qui est l'acteur à la main verte ?
						</Text>
						<Text fontSize={"xs"} color="#FF9839" pt="4" fontWeight={"bold"}>
							Jean Dujardin
						</Text>

						<Flex justifyContent={"flex-end"} alignItems="flex-end">
							<Pressable px="4" py="2" bg="white" borderColor="black" borderWidth={"1"} borderRadius={"full"}>
								<HStack space="1.5" alignItems="center">
									<Text color="black">145</Text>
									<Image source={require("../../../assets/like.png")} alt="like button" />
								</HStack>
							</Pressable>
						</Flex>
					</Box>
				</Box>
			</ScrollView>
		</>
	)
}

export default MyJokesScreen
