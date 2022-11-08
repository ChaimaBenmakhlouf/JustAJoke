import { Box, NativeBaseProvider, Text } from "native-base"
import React from "react"

export default function App() {
	return (
		<NativeBaseProvider>
			<Box safeArea>
				<Text color="blue.500">Hello world</Text>
			</Box>
		</NativeBaseProvider>
	)
}
