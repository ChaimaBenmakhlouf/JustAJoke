import { Box, Flex, Text } from "native-base"
import React from "react"

interface Props {
	active: boolean
}

const RankingUserItem = ({ active }: Props) => {
	return (
		<Flex flexDir="row" borderRadius={"full"} bg={active ? "#FF9839" : "white"} shadow="1" p="2.5">
			<Flex alignItems="baseline" flexDir={"row"}>
				<Text color="#F6F8FA" fontSize={"md"} opacity={active ? 1 : 0.5}>
					14 185
				</Text>
				<Text color="#F6F8FA" fontSize={"xs"} opacity={active ? 1 : 0.5}>
					ème
				</Text>
			</Flex>
		</Flex>
	)
}

export default RankingUserItem
