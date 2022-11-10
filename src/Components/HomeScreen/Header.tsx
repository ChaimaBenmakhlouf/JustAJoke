import { VStack, Input, Icon, HStack, Text, Pressable } from "native-base"
import React from "react"
import { AntDesign } from "@expo/vector-icons"

const Header = () => {
	return (
		<VStack bg="white" p="4" space="4" borderBottomRadius={"3xl"} shadow="2" zIndex={10}>
			<VStack space="0.5">
				<Text fontSize={"xl"} fontWeight="bold">
					Bon retour,
				</Text>
				<Text fontSize={"xl"} fontWeight="bold" color="#F95F5E">
					Evangelineaire 👋🏼
				</Text>
			</VStack>

			<Input
				fontSize={"md"}
				placeholder="Mots-clés, catégories..."
				InputLeftElement={<Icon as={AntDesign} name="search1" mx="2" />}
				p="1"
				placeholderTextColor="F6F8FA"
				borderColor={"#F6F8FA"}
				borderRadius={"full"}
				borderWidth="1"
			/>

			<HStack space="3" pb="2">
				<Pressable bg="black" color="white" px="3" py="0.5" borderRadius={"full"}>
					<Text color="white" fontWeight={"bold"}>
						Tout
					</Text>
				</Pressable>

				<Pressable bg="white" color="#808080" px="3" py="0.5" borderRadius={"full"} borderColor="#F0F0F0" borderWidth="1">
					<Text color="#808080" fontWeight={"bold"}>
						Populaire
					</Text>
				</Pressable>

				<Pressable bg="white" color="#808080" px="3" py="0.5" borderRadius={"full"} borderColor="#F0F0F0" borderWidth="1">
					<Text color="#808080" fontWeight={"bold"}>
						Pour moi
					</Text>
				</Pressable>
			</HStack>
		</VStack>
	)
}

export default Header
