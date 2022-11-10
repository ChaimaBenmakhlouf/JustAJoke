import { View, Avatar, Text, Flex, Box } from "native-base"
import { StyleSheet } from 'react-native';
import React from "react"
import ProfilList from "../../Components/ProfilList"

const stats = [
	{
		id: 1,
		number: 113,
		name: "Likes"
	},
	{
		id: 2,
		number: 27,
		name: "Blagues"
	},
	{
		id: 3,
		number: 761,
		name: "ETH"
	},
]

const tags = [
	{
		id: 1,
		name: "Good vibes"
	},
	{
		id: 2,
		name: "Humour"
	},
	{
		id: 3,
		name: "Décadent"
	},
]

const styles = StyleSheet.create({
	container: {
	  backgroundColor: '#F95F5E',
	  color: 'white',
	  borderRadius: 40,
	  width: 110,
	  height: 35
	},
  });


const ProfilScreen = () => {
	return  (
	<View>
		<View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 190 }}>

			<Avatar bg="green.700" size={"xl"} marginTop="50">EL</Avatar>

			<View style={{ alignItems: 'center', marginTop: 20 }}>
				<Text fontWeight={"bold"} fontSize={"lg"}>Evangelineaire</Text>
				<Text fontSize={"lg"} style={{ marginTop: 3 }}>Enchantier je m'apelle teuse</Text>
			</View>

			<Flex marginTop={2} flexDir="row">
				{stats.map((stat) => {
				return (
					<Box key={stat.id} display={"flex"} alignItems="center" margin={5}>
						<Text fontSize={"lg"} >{stat.number}</Text>
						<Text fontSize={"lg"} >{stat.name}</Text>
					</Box>
				);
				})}
			</Flex>

			<Flex flexDir="row" justifyContent={"space-around"} marginRight={3}>
				{tags.map((tag) => {
				return (
					<Box key={tag.id}>
						<Text textAlign={"center"} style={styles.container} margin={5} paddingTop={"0.5"} fontSize={"lg"} key={tag.id}>{tag.name}</Text>
					</Box>
				);
				})}
			</Flex>

			<View marginTop={10}> 
				<ProfilList></ProfilList>
			</View>

		</View>
	</View>
	)
}

export default ProfilScreen