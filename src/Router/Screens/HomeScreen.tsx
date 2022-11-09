import { Avatar, Box, Center, Flex, HStack, Icon, Image, Input, Pressable, ScrollView, Text, VStack } from "native-base"
import React from "react"
import { Path } from "react-native-svg"
import Header from "../../Components/HomeScreen/Header"
import JokeCard from "../../Components/HomeScreen/JokeCard"

const HomeScreen = () => {
	return (
		<>
			<Header />
			<ScrollView pt="4" px="4">
				<HStack alignItems="center" flexDir="row" display="flex">
					<Avatar bg="green.600" size="sm">
						EL
					</Avatar>

					<Input ml="4" borderRadius={"full"} placeholder="Commencez à blaguer..." borderColor="#E3E3E3" borderWidth={"1"} bg="#FDFDFD" width="xs" />
				</HStack>

				<Box py="4" width="full">
					<JokeCard isJokeDay={true} />

					<Text fontSize={"lg"} fontWeight="bold" py="4">
						Toutes dernières blagues
					</Text>
					<VStack space="3.5">
						<JokeCard isJokeDay={false} />
						<JokeCard isJokeDay={false} />
						<JokeCard isJokeDay={false} />
						<JokeCard isJokeDay={false} />
					</VStack>
				</Box>
			</ScrollView>
		</>
	)
}

export default HomeScreen
