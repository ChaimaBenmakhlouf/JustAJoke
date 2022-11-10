import { Box, Flex, Icon, HStack, Text, Pressable, Image, Menu, Divider } from "native-base"
import React from "react"
import { SimpleLineIcons, Feather } from "@expo/vector-icons"

interface Props {
	title: string
	likes: number
	question: string
	answer: string
}

const MyJokeCard = ({ title, likes, question, answer }: Props) => {
	return (
		<Box p="4" mt="2" bg="white" borderRadius={"xl"} shadow="1" position="relative">
			<Flex justifyContent={"space-between"} flexDir="row" alignItems="center">
				<Text fontWeight={"bold"} fontSize="lg">
					{title}
				</Text>

				<Menu
					w="150"
					placement="bottom right"
					style={{
						marginTop: 30
					}}
					trigger={(triggerProps) => {
						return (
							<Pressable
								display="flex"
								w="10"
								accessibilityLabel="More options menu"
								{...triggerProps}
								alignItems="flex-end"
								justifyContent={"flex-end"}>
								<Icon size={5} color="black" as={SimpleLineIcons} name="options-vertical" />
							</Pressable>
						)
					}}>
					<Menu.Item>
						<Icon size={4} color="black" name="share-2" as={Feather} />
						<Text>Partager</Text>
					</Menu.Item>
					<Divider />

					<Menu.Item color="red.500">
						<Icon size={4} color="red.500" name="trash-2" as={Feather} />
						<Text color="red.500">Supprimer</Text>
					</Menu.Item>
				</Menu>
			</Flex>

			<Text fontSize={"md"} color="black" pt="4">
				{question}
			</Text>
			<Text fontSize={"xs"} color="#FF9839" pt="4" fontWeight={"bold"}>
				{answer}
			</Text>

			<Flex justifyContent={"flex-end"} alignItems="flex-end">
				<Pressable px="4" py="2" bg="white" borderColor="black" borderWidth={"1"} borderRadius={"full"}>
					<HStack space="1.5" alignItems="center">
						<Text color="black">{likes}</Text>
						<Image source={require("../../../assets/like.png")} alt="like button" />
					</HStack>
				</Pressable>
			</Flex>
		</Box>
	)
}

export default MyJokeCard
