import { createContext, useState } from "react"

interface Props {
	children: React.ReactNode
}

interface State {
	isUserConnected: boolean
}

interface StateContextType {
	state: State
	setUserConnected: () => void
}

const initialState = {
	isUserConnected: false
}

export const StateContext = createContext<StateContextType>({
	state: initialState,
	setUserConnected: () => {}
})

const StateProvider = ({ children }: Props) => {
	const [state, setState] = useState<State>(initialState)

	const setUserConnected = () => {
		setState((previous) => ({
			...previous,
			hasPassedIntro: true,
			isUserConnected: true
		}))
	}

	return <StateContext.Provider value={{ state, setUserConnected }}>{children}</StateContext.Provider>
}

export default StateProvider
