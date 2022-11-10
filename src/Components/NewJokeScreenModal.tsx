import { Center, Box, Icon, Pressable, Button, Modal, ScrollView, Text, VStack, Input, TextArea, Flex } from "native-base"
import { Entypo } from "@expo/vector-icons"
import React, { useState } from "react"

const NewJokeScreenModal = () => {
	const [isModalVisible, setIsModalVisible] = useState(false)

	const closeModal = () => {
		setIsModalVisible(false)
	}
	return (
		<>
			<Pressable onPress={() => setIsModalVisible(true)}>
				<Center mx="4" height="full">
					<Box height="8" width="8" borderRadius={"full"} bgColor="#FF9839">
						<Center height="full">
							<Icon as={Entypo} name="plus" color="white" size={6} fontWeight="bold" />
						</Center>
					</Box>
				</Center>
			</Pressable>

			<Modal isOpen={isModalVisible} onClose={closeModal} size={"lg"}>
				<Modal.Content maxH="220">
					<Modal.Body>
						<VStack space="6">
							<TextArea h={20} borderWidth={0} borderRadius="xl" bg="#F5F5F5" placeholder="Commencez à blaguer..." />

							<Flex alignItems="center" justifyContent={"space-between"} flexDir="row">
								<Text color="#FF9839" fontSize={"2xs"}>
									Encore 2 blagues disponible pour aujourd'hui*
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
									<Button size="sm" bg="whiteAlpha.100" onPress={closeModal} borderRadius="full">
										Publier
									</Button>
								</Box>
							</Flex>
						</VStack>
					</Modal.Body>
				</Modal.Content>
			</Modal>
		</>
	)
}

export default NewJokeScreenModal
