import { useContext } from "react"
import { ActivityContext } from "../context/activityContext"

export const useActivity = () => {
    const context = useContext(ActivityContext)
    if(!context){
        throw new Error('useActivity debe ser usado dentro de un ActivityProvider')
    }
    return context
} 