import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStackScreens from "./Stacks/HomeStackScreens"
import ProfilStackScreens from "./Stacks/ProfilStackScreens"
import { AntDesign } from '@expo/vector-icons'
import { Box, Center, Icon } from "native-base"
import { Circle, Path } from "react-native-svg"


const Tab = createBottomTabNavigator()

const TabBarNavigator = () => {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen name="Home" component={HomeStackScreens}
                options={{
                    tabBarIcon: ({ size, focused }) => (
                        <Icon size={size} viewBox="0 0 21 21">
                            {focused ? (
                                <Path
                                    d="M1 9.43841C1 8.21422 1.56058 7.05744 2.52142 6.29888L8.02142 1.95677C9.47466 0.809478 11.5253 0.809479 12.9786 1.95677L18.4786 6.29888C19.4394 7.05744 20 8.21422 20 9.43841V16C20 18.2091 18.2091 20 16 20H14.5C13.9477 20 13.5 19.5523 13.5 19V16C13.5 14.8954 12.6046 14 11.5 14H9.5C8.39543 14 7.5 14.8954 7.5 16V19C7.5 19.5523 7.05228 20 6.5 20H5C2.79086 20 1 18.2091 1 16L1 9.43841Z"
                                    fill="#FF9839"
                                    fillOpacity="0.6"
                                    stroke="#FF9839"
                                    strokeWidth="1.5"
                                />
                            ) : (
                                <Path
                                    d="M1 9.43841C1 8.21422 1.56058 7.05744 2.52142 6.29888L8.02142 1.95677C9.47466 0.809478 11.5253 0.809479 12.9786 1.95677L18.4786 6.29888C19.4394 7.05744 20 8.21422 20 9.43841V16C20 18.2091 18.2091 20 16 20H14.5C13.9477 20 13.5 19.5523 13.5 19V16C13.5 14.8954 12.6046 14 11.5 14H9.5C8.39543 14 7.5 14.8954 7.5 16V19C7.5 19.5523 7.05228 20 6.5 20H5C2.79086 20 1 18.2091 1 16L1 9.43841Z"
                                    stroke="#B1B1B1"
                                    strokeWidth="1.5"
                                    fill="none"
                                />
                            )}
                        </Icon>
                    )
                }}
            />
			<Tab.Screen name="Profil" 
                component={ProfilStackScreens}
                options = {{
                    tabBarIcon: ({ size, focused }) => (
                        <AntDesign name="user" size={24} color="black" />
                    )
                }}
                 />
		</Tab.Navigator>
	)
}

export default TabBarNavigator
