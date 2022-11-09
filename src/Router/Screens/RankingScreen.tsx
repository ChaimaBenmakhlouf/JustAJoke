import { Box, FlatList, Flex, Text } from "native-base"
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

	const mondialRanking = [
		{
			pseudo: "Ignazio",
			numberEth: "100,4",
			generalMark: "9,9"
		},
		{
			pseudo: "Remiette",
			numberEth: "100,4",
			generalMark: "9,9"
		},
		{
			pseudo: "Zénone",
			numberEth: "100,4",
			generalMark: "9,9"
		},
		{
			pseudo: "Yannik",
			numberEth: "100,4",
			generalMark: "9,9"
		},
		{
			pseudo: "Efisia",
			numberEth: "100,4",
			generalMark: "9,9"
		},
		{
			pseudo: "Délia",
			numberEth: "100,4",
			generalMark: "9,9"
		},
		{
			pseudo: "Wallerand",
			numberEth: "100,4",
			generalMark: "9,9"
		},
		{
			pseudo: "Alexandre",
			numberEth: "100,4",
			generalMark: "9,9"
		},
		{
			pseudo: "Gaëlla",
			numberEth: "100,4",
			generalMark: "9,9"
		},
		{
			pseudo: "Fauve",
			numberEth: "100,4",
			generalMark: "9,9"
		},
		{
			pseudo: "Camilla",
			numberEth: "100,4",
			generalMark: "9,9"
		},
		{
			pseudo: "Nans",
			numberEth: "100,4",
			generalMark: "9,9"
		}
	]

	return (
		<>
			<Flex bg="white" flexDir="row" alignItems="center" justifyContent={"space-between"} borderBottomRadius="3xl" shadow="4" p="4" zIndex={"10"}>
				{tabList.map((tab) => (
					<RankingTabItem key={tab.id} setActive={setActiveId} activeId={activeId} title={tab.title} id={tab.id} />
				))}
			</Flex>
			<Box height="full" p="4">
				<Box pt="4">
					<Text fontSize={"lg"} fontWeight={"bold"} pb="2">
						Classement personnel
					</Text>

					<RankingUserItem active={true} pseudo={"DarkToto"} numberEth={"10,4"} rank="14 185" generalMark="8,5" />
				</Box>

				<Box pt="4">
					<Text fontSize={"lg"} fontWeight={"bold"} pb="2">
						Classement mondial
					</Text>

					<FlatList
						data={mondialRanking}
						keyExtractor={(item) => item.pseudo}
						renderItem={({ item, index }) => (
							<Box pb="4">
								<RankingUserItem
									active={false}
									pseudo={item.pseudo}
									generalMark={item.generalMark}
									numberEth={item.numberEth}
									rank={(index + 1).toString()}
								/>
							</Box>
						)}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{
							paddingBottom: 20,
							paddingTop: 4
						}}
					/>
				</Box>
			</Box>
		</>
	)
}

export default RankingScreen
