import { Avatar, Box, HStack, Icon, Image, ScrollView, Text, VStack } from "native-base"
import React from "react"
import { Dimensions } from "react-native"
import { Circle, Path } from "react-native-svg"

const NotificationsScreen = () => {
	const width = Dimensions.get("screen").width

	return (
		<ScrollView bg="white" p="4">
			<Text color="black" fontWeight={"bold"} fontSize="lg" pb="3.5">
				Aujourd'hui
			</Text>

			<VStack bg="white" space="2.5">
				<Box>
					<HStack space="3">
						<Avatar bg="blue.800">BC</Avatar>

						<VStack space="2.5" width={width - 100}>
							<Text fontSize={"md"}>
								<Text fontWeight={"bold"}>BronzeCookie</Text> et <Text fontWeight={"bold"}>124 autres utilisateurs</Text> viennent d'aimer votre{" "}
								<Text color="#FF9839">publication.</Text>
							</Text>

							<Text fontSize={"xs"} color="#808080">
								Il y a 3 minutes
							</Text>
						</VStack>
					</HStack>
				</Box>

				<Box>
					<HStack space="3">
						<Icon viewBox="0 0 35 35" size={46}>
							<Circle cx="17.5" cy="17.5" r="17.5" fill="#FF9839" />
							<Path
								d="M19.0028 6.91114C19.0003 6.82403 18.9052 6.76731 18.8304 6.812C14.87 9.17801 14.9434 15.1132 14.9906 16.1887C14.9942 16.2698 14.9175 16.327 14.844 16.2924C14.3865 16.077 13.0755 15.2655 13.0031 13.0175C13.0003 12.9303 12.9062 12.8742 12.8311 12.9187C10.538 14.2777 9 16.7879 9 19.5714C9 23.8319 12.5817 27.2857 17 27.2857C21.4183 27.2857 25 23.8319 25 19.5714C25 13.3819 19.1489 12.0507 19.0028 6.91114Z"
								stroke="white"
								strokeWidth="1.71429"
								fill="none"
							/>
						</Icon>

						<VStack space="2.5" width={width - 100}>
							<Text fontSize={"md"}>
								Votre <Text color="#FF9839">publication</Text> vient de dépasser les 100 likes
								<Image source={require("../../../assets/like.png")} alt="like button" />
							</Text>

							<Text fontSize={"xs"} color="#808080">
								Il y a 3 heures
							</Text>
						</VStack>
					</HStack>
				</Box>

				<Box>
					<HStack space="3">
						<Box size={46} bg="red.400" borderRadius={"full"} />

						<VStack space="2.5" width={width - 100}>
							<Text fontSize={"md"}>
								Vous venez d'être débité de 100 <Text color="#FF9839">JokePoints.</Text>
							</Text>

							<Text fontSize={"xs"} color="#808080">
								Il y a 8 heures
							</Text>
						</VStack>
					</HStack>
				</Box>
			</VStack>

			<Text color="black" fontWeight={"bold"} fontSize="lg" pb="3.5">
				Hier
			</Text>

			<VStack bg="white" space="2.5">
				<Box>
					<HStack space="3">
						<Avatar bg="blue.800">BC</Avatar>

						<VStack space="2.5" width={width - 100}>
							<Text fontSize={"md"}>
								<Text fontWeight={"bold"}>BronzeCookie</Text> et <Text fontWeight={"bold"}>124 autres utilisateurs</Text> viennent d'aimer votre{" "}
								<Text color="#FF9839">publication.</Text>
							</Text>

							<Text fontSize={"xs"} color="#808080">
								Il y a 3 minutes
							</Text>
						</VStack>
					</HStack>
				</Box>

				<Box>
					<HStack space="3">
						<Avatar bg="blue.800">BC</Avatar>

						<VStack space="2.5" width={width - 100}>
							<Text fontSize={"md"}>
								<Text fontWeight={"bold"}>BronzeCookie</Text> et <Text fontWeight={"bold"}>124 autres utilisateurs</Text> viennent d'aimer votre{" "}
								<Text color="#FF9839">publication.</Text>
							</Text>

							<Text fontSize={"xs"} color="#808080">
								Il y a 3 minutes
							</Text>
						</VStack>
					</HStack>
				</Box>

				<Box>
					<HStack space="3">
						<Avatar bg="blue.800">BC</Avatar>

						<VStack space="2.5" width={width - 100}>
							<Text fontSize={"md"}>
								<Text fontWeight={"bold"}>BronzeCookie</Text> et <Text fontWeight={"bold"}>124 autres utilisateurs</Text> viennent d'aimer votre{" "}
								<Text color="#FF9839">publication.</Text>
							</Text>

							<Text fontSize={"xs"} color="#808080">
								Il y a 3 minutes
							</Text>
						</VStack>
					</HStack>
				</Box>

				<Box>
					<HStack space="3">
						<Avatar bg="blue.800">BC</Avatar>

						<VStack space="2.5" width={width - 100}>
							<Text fontSize={"md"}>
								<Text fontWeight={"bold"}>BronzeCookie</Text> et <Text fontWeight={"bold"}>124 autres utilisateurs</Text> viennent d'aimer votre{" "}
								<Text color="#FF9839">publication.</Text>
							</Text>

							<Text fontSize={"xs"} color="#808080">
								Il y a 3 minutes
							</Text>
						</VStack>
					</HStack>
				</Box>

				<Box>
					<HStack space="3">
						<Avatar bg="blue.800">BC</Avatar>

						<VStack space="2.5" width={width - 100}>
							<Text fontSize={"md"}>
								<Text fontWeight={"bold"}>BronzeCookie</Text> et <Text fontWeight={"bold"}>124 autres utilisateurs</Text> viennent d'aimer votre{" "}
								<Text color="#FF9839">publication.</Text>
							</Text>

							<Text fontSize={"xs"} color="#808080">
								Il y a 3 minutes
							</Text>
						</VStack>
					</HStack>
				</Box>

				<Box>
					<HStack space="3">
						<Avatar bg="blue.800">BC</Avatar>

						<VStack space="2.5" width={width - 100}>
							<Text fontSize={"md"}>
								<Text fontWeight={"bold"}>BronzeCookie</Text> et <Text fontWeight={"bold"}>124 autres utilisateurs</Text> viennent d'aimer votre{" "}
								<Text color="#FF9839">publication.</Text>
							</Text>

							<Text fontSize={"xs"} color="#808080">
								Il y a 3 minutes
							</Text>
						</VStack>
					</HStack>
				</Box>
			</VStack>
		</ScrollView>
	)
}

export default NotificationsScreen
