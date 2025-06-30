import { createContext, Dispatch, ReactNode, useReducer } from "react"
import { ActivityActions, activityReducer, ActivityState, initialState } from "../reducers/activity-reducer"

type activityContextProps = {
    state: ActivityState
    dispatch: Dispatch<ActivityActions>
}
type activityProviderProps = {children: ReactNode}

export const ActivityContext = createContext<activityContextProps>(null!)

export const ActivityProvider = ({children}: activityProviderProps) => {
    const [state,dispatch] = useReducer(activityReducer,initialState)

    return(
        <ActivityContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </ActivityContext.Provider>
    )

}