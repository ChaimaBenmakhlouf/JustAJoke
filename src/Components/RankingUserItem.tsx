import { Avatar, Box, Flex, HStack, Text } from "native-base"
import React from "react"

interface Props {
	active: boolean
	rank: string
	pseudo: string
	numberEth: string
	generalMark: string
}

const RankingUserItem = ({ active, generalMark, rank, pseudo, numberEth }: Props) => {
	return (
		<Flex
			flexDir="row"
			justifyContent={"space-between"}
			borderRadius={"full"}
			bg={
				active
					? {
							linearGradient: {
								colors: ["#FF9839", "#F95F5E"],
								start: [0, 1],
								end: [0.75, 0]
							}
					  }
					: "white"
			}
			shadow="1"
			p="3"
			alignItems="center">
			<HStack alignItems={"center"} space="4">
				<Flex alignItems="stretch" flexDir={"row"} flex="0.3">
					<Text fontWeight={"bold"} color={active ? "#F6F8FA" : "black"} fontSize={"md"} opacity={active ? 0.6 : 1}>
						{rank}
					</Text>
					<Text color={active ? "#F6F8FA" : "black"} fontSize={"xs"} opacity={active ? 0.6 : 1}>
						{rank === "1" ? "ère" : "ème"}
					</Text>
				</Flex>

				<Avatar bg={active ? "green.600" : "danger.500"}>{pseudo.charAt(0).toUpperCase() + pseudo.charAt(1).toUpperCase()}</Avatar>

				<Flex flex="0.5">
					<Text fontWeight="bold" fontSize={"lg"} color={active ? "white" : "black"}>
						{pseudo}
					</Text>
					<Text fontWeight={"bold"} opacity={active ? 0.6 : 1} color={active ? "white" : "black"}>
						{`${numberEth} ETH`}
					</Text>
				</Flex>
			</HStack>

			<HStack alignItems="baseline" space="1">
				<Text fontSize={"lg"} fontWeight="bold" color={active ? "white" : "#FF9839"}>
					{generalMark}
				</Text>
				<Text fontWeight="bold" fontSize="sm" color={active ? "white" : "black"}>
					/10
				</Text>
			</HStack>
		</Flex>
	)
}

export default RankingUserItem
