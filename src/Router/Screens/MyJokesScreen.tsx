import { Box, Button, Flex, HStack, Icon, Image, Pressable, ScrollView, Text, TextArea, VStack } from "native-base"
import React, { useState } from "react"
import Constants from "expo-constants"
import { Path } from "react-native-svg"
import MyJokeCard from "../../Components/MyJokesScreen/MyJokeCard"

const MyJokesScreen = () => {
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

					<MyJokeCard title="Blague du 12 Novembre" question="Qu'est-ce qu'un cochon qui passe la douane" answer="Un passport" likes={25} />

					<MyJokeCard title="Blague du 11 Novembre" question="Qui est l'acteur à la main verte ?" answer="Jean Dujardin" likes={145} />
					<MyJokeCard title="Blague du 11 Novembre" question="Qui est l'acteur à la main verte ?" answer="Jean Dujardin" likes={145} />
					<MyJokeCard title="Blague du 11 Novembre" question="Qui est l'acteur à la main verte ?" answer="Jean Dujardin" likes={145} />
					<MyJokeCard title="Blague du 11 Novembre" question="Qui est l'acteur à la main verte ?" answer="Jean Dujardin" likes={145} />
					<MyJokeCard title="Blague du 11 Novembre" question="Qui est l'acteur à la main verte ?" answer="Jean Dujardin" likes={145} />
					<MyJokeCard title="Blague du 11 Novembre" question="Qui est l'acteur à la main verte ?" answer="Jean Dujardin" likes={145} />
					<MyJokeCard title="Blague du 11 Novembre" question="Qui est l'acteur à la main verte ?" answer="Jean Dujardin" likes={145} />
				</Box>
			</ScrollView>
		</>
	)
}

export default MyJokesScreen
