import { createContext, ReactNode, useContext, useState } from "react";
import Data from '../service/data.json'

interface StarsProps {
    id: string,
    name: string,
    diameter: string,
    distanceFromSun: string,
    description: string,
}

interface AppContextData {
    stars: StarsProps[],
    currentStarIndex: number,
    handleStarIndex: (index: number) => void,
    nextStar: () => void,
    prevStar: () => void,
}

export const AppContext = createContext({} as AppContextData);

interface AppContextProps {
    children: ReactNode
}

export function AppContextProvider({ children }: AppContextProps) {

    const { data } = Data
    const [stars, setStars] = useState<StarsProps[]>(data)
    const [currentStarIndex, setCurrentStarIndex] = useState(0)

    const hasPrevious = currentStarIndex > 0;
    const hasNext = (currentStarIndex + 1) < stars.length;

    function handleStarIndex(index: number) {
        setCurrentStarIndex(index)
        console.log(currentStarIndex)
    }

    function nextStar() {
        hasNext ? setCurrentStarIndex(currentStarIndex + 1) : ''
    }

    function prevStar() {
        if (hasPrevious) {
            setCurrentStarIndex(currentStarIndex - 1);
        }
    }

    return (
        <AppContext.Provider
            value={{
                stars,
                currentStarIndex,
                handleStarIndex,
                nextStar,
                prevStar,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}