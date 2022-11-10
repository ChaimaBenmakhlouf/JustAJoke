import { Box, Center, Divider, FlatList, HStack, Icon, Text } from "native-base"
import React from "react"
import { Feather, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons"

const ProfilList = () => {
	return (
		<Box mt="8" mx="8">
			<FlatList
				data={[
					{ key: "Mon Profil", name: "user" },
					{ key: "Mes centres d'intérêts", name: "heart" },
					{ key: "Paramètres", name: "cog-outline" },
					{ key: "Centre d'aide", name: "info" }
				]}
				renderItem={({ item, index }) => (
					<React.Fragment key={item.key}>
						<HStack space="2" py="3" alignItems="center">
							{index !== 2 && <Icon as={index !== 3 ? FontAwesome5 : Feather} name={item.name} size={5} color="#F95F5E" />}
							{index === 2 && <Icon as={MaterialCommunityIcons} name={item.name} size={5} color="#F95F5E" />}
							<Text fontSize="md">{item.key}</Text>
						</HStack>
						{index !== 3 && <Divider />}
					</React.Fragment>
				)}
			/>
		</Box>
	)
}

export default ProfilList
