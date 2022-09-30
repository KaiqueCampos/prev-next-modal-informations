import { useContext } from "react";
import { AppContext } from "../context/appContext";

export function useApp() {
    const value = useContext(AppContext)
    return value
}