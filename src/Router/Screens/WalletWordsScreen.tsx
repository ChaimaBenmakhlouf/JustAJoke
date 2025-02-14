import { useNavigation } from "@react-navigation/native"
import { Box, Center, Flex, HStack, Icon, Text, View, VStack, Pressable, Button } from "native-base"
import React, { useContext, useMemo, useState } from "react"
import { Dimensions } from "react-native"
import { Path } from "react-native-svg"
import { StateContext } from "../../Context/StateContext"

interface SelectWord {
	word: string
	index: number
}

const WalletWordsScreen = () => {
	const height = Dimensions.get("screen").height
	const navigation = useNavigation()
	const [selectedWords, setSelectedWords] = useState<SelectWord[]>([])
	const words = ["pair", "spoon", "squeeze", "pass", "popular", "weapon", "old", "craft", "crawl", "behave", "tribe", "present"]
	const { setUserConnected } = useContext(StateContext)

	const selectWord = (word: string) => {
		if (selectedWords.length >= 10) return
		const selected: SelectWord = {
			word,
			index: selectedWords.length + 1
		}
		setSelectedWords((previousState) => [...previousState, selected])
	}

	const WordSelection = ({ text }: { text: string }) => {
		const isWordUsed = useMemo(() => {
			const isUsed = selectedWords.find((word) => word.word === text)
			return !!isUsed
		}, [selectedWords])

		return (
			<Pressable
				onPress={() => {
					if (text && !isWordUsed) {
						selectWord(text)
					}
				}}>
				<Box
					px="3"
					py="1"
					mx="1"
					my="1"
					borderColor="#F0E6ED"
					borderWidth={"1"}
					borderRadius={"full"}
					shadow="4"
					style={{
						shadowColor: "#F0E6ED"
					}}>
					<Text color={isWordUsed ? "red.600" : "black"} textDecorationLine={isWordUsed ? "line-through" : "unset"}>
						{text}
					</Text>
				</Box>
			</Pressable>
		)
	}

	const WordItem = ({ index }: { index: number }) => {
		const getCorrespondingWord = selectedWords.find((selected) => selected.index === index)?.word

		return (
			<HStack space="1" borderBottomColor={"white"} borderBottomWidth="1" mb="3">
				<Text fontWeight={"bold"} color="white">
					{index}
				</Text>
				{getCorrespondingWord && <Text color="white">{getCorrespondingWord}</Text>}
			</HStack>
		)
	}

	return (
		<Flex safeArea justifyContent={"space-between"} height={height - 60}>
			<Box>
				<Center pt="6">
					<HStack space="2">
						<Box height="1" width="7" bg="#F95F5E" />
						<Box height="1" width="7" bg="#F95F5E" />
						<Box height="1" width="7" bg="#F95F5E" />
					</HStack>
				</Center>

				<Box flexDir="row" alignItems={"center"} px="4" pt="6" justifyContent="center" width="full">
					<Pressable onPress={navigation.goBack} marginRight="auto">
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

					<HStack space="1" textAlign={"center"} marginRight="100">
						<Text fontWeight="bold" fontSize={"xl"}>
							Connexion à
						</Text>
						<Text fontWeight="bold" fontSize={"xl"} color="#F95F5E">
							Wallet
						</Text>
					</HStack>
				</Box>

				<Center pt="10" px="8">
					<VStack space="6">
						<Text fontSize={"md"} textAlign="center">
							Dans le bon ordre, tapez votre phrase secrète de récupération de portefeuille pour importer votre portefeuille.
						</Text>
					</VStack>
				</Center>

				<Center pt="10" px="8">
					<Flex flexWrap={"wrap"} flexDir="row" alignItems={"center"} justifyContent="space-evenly">
						{words.map((word) => (
							<WordSelection key={word} text={word} />
						))}
					</Flex>
				</Center>

				<Center pt="8" px="12">
					<Box bg="#F95F5E" height={height - 530} p="4" width="full" borderTopRadius={"xl"}>
						<HStack space="6">
							<Box flex="1" display="flex" justifyContent={"space-evenly"} flexDir="column" height="full">
								{Array(5)
									.fill(null)
									.map((_, index) => (
										<WordItem key={index + 1} index={index + 1} />
									))}
							</Box>

							<Box flex="1" display="flex" justifyContent={"space-evenly"} flexDir="column" height="full">
								{Array(5)
									.fill(null)
									.map((_, index) => (
										<WordItem key={index + 6} index={index + 6} />
									))}
							</Box>
						</HStack>
					</Box>
				</Center>
			</Box>

			<Flex flexDir="row" alignItems={"center"} justifyContent="space-between" px="6">
				<Text color="black" opacity="0.5" onPress={() => navigation.navigate("TabBar")}>
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
					<Button
						bg="whiteAlpha.100"
						borderRadius={"full"}
						px="5"
						py="2"
						onPress={() => {
							setUserConnected()
							navigation.navigate("TabBar")
						}}
						isDisabled={selectedWords.length !== 10}>
						Valider
					</Button>
				</Box>
			</Flex>
		</Flex>
	)
}

export default WalletWordsScreen
