import { Box, Flex, Text } from "native-base"
import React, { useState } from "react"
import RankingTabItem from "../../Components/RankingTabItem"
import RankingUserItem from "../../Components/RankingUserItem"

const RankingScreen = () => {
	const [activeId, setActiveId] = useState(0)
	const tabList = [
		{
			id: 0,
			title: "Jour"
		},
		{
			id: 1,
			title: "Semaine"
		},
		{
			id: 2,
			title: "Mois"
		},
		{
			id: 3,
			title: "Toujours"
		}
	]
	return (
		<Box bg="#F6F8FA" height="full" p="4">
			<Flex flexDir="row" alignItems="center" justifyContent={"space-between"}>
				{tabList.map((tab) => (
					<RankingTabItem key={tab.id} setActive={setActiveId} activeId={activeId} title={tab.title} id={tab.id} />
				))}
			</Flex>

			<Box pt="4">
				<Text fontSize={"md"} fontWeight={"bold"} pb="2">
					Classement personnel
				</Text>

				<RankingUserItem active={true} />
			</Box>
		</Box>
	)
}

export default RankingScreen
