import { View, Avatar, Text, Flex, Box, Center, HStack, Divider } from "native-base"
import { StyleSheet } from "react-native"
import React from "react"
import ProfilList from "../../Components/ProfilList"

const stats = [
	{
		id: 1,
		number: 113,
		name: "Likes"
	},
	{
		id: 2,
		number: 27,
		name: "Blagues"
	},
	{
		id: 3,
		number: 761,
		name: "ETH"
	}
]

const tags = [
	{
		id: 1,
		name: "Good vibes"
	},
	{
		id: 2,
		name: "Humour"
	},
	{
		id: 3,
		name: "Décadent"
	}
]

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#F95F5E",
		color: "white",
		borderRadius: 40,
		width: 110,
		height: 35
	}
})

const ProfilScreen = () => {
	return (
		<Box p="4">
			<Center>
				<Avatar bg="green.700" size={"xl"} marginTop="50">
					EL
				</Avatar>

				<HStack space="2" flexDir="column" alignItems={"center"} pt="4">
					<Text fontWeight={"bold"} fontSize={"lg"}>
						Evangelineaire
					</Text>
					<Text fontSize={"md"} color="#5C5C5C">
						Enchantier je m'apelle teuse
					</Text>
				</HStack>

				<Flex marginTop={2} flexDir="row">
					{stats.map((stat, index) => {
						if (index !== 2) {
							return (
								<Flex alignItems="center" flexDir="row">
									<Box key={stat.id} display={"flex"} alignItems="center" margin={5}>
										<Text fontSize={"md"} fontWeight="bold">
											{stat.number}
										</Text>
										<Text fontSize={"md"}>{stat.name}</Text>
									</Box>
									<Divider orientation="vertical" h="50" />
								</Flex>
							)
						}
						return (
							<Box key={stat.id} display={"flex"} alignItems="center" margin={5}>
								<Text fontSize={"md"} fontWeight="bold">
									{stat.number}
								</Text>
								<Text fontSize={"md"}>{stat.name}</Text>
							</Box>
						)
					})}
				</Flex>

				<Flex flexDir="row" justifyContent={"space-between"} pt="4">
					{tags.map((tag) => {
						return (
							<Box
								key={tag.id}
								position="relative"
								display="flex"
								alignItems="center"
								justifyContent={"center"}
								bg="#F95F5E"
								borderRadius="full"
								py="1"
								px="4"
								mx="2">
								<Text color="white" fontSize={"md"} key={tag.id}>
									{tag.name}
								</Text>
							</Box>
						)
					})}
				</Flex>
			</Center>
			<ProfilList />
		</Box>
	)
}

export default ProfilScreen
