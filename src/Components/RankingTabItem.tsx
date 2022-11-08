import { useNavigation } from "@react-navigation/native"
import { Box, PresenceTransition, Pressable, Text } from "native-base"
import React from "react"

interface Props {
	title: string
	setActive: React.Dispatch<React.SetStateAction<number>>
	activeId: number
	id: number
}

const RankingTabItem = ({ title, setActive, activeId, id }: Props) => {
	const isActive = id === activeId

	const setIdActive = () => {
		setActive(id)
	}

	return (
		<Pressable onPress={setIdActive} display="flex">
			<Text fontSize={"md"} fontWeight={"bold"} color={isActive ? "#FF9839" : "black"} textTransform="capitalize" px="1" pb="1">
				{title}
			</Text>
			<PresenceTransition
				visible={isActive}
				initial={{
					opacity: 0
				}}
				animate={{
					opacity: 1,
					transition: {
						duration: 250
					}
				}}>
				<Box height="0.5" width="full" bg="#FF9839" />
			</PresenceTransition>
		</Pressable>
	)
}

export default RankingTabItem
