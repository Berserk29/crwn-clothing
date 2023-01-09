import { createContext, useState} from "react";

export const DropdownContext = createContext({
    isDropdownOpen: false,
    setDropdown: () => {}
});

export const DropdownProvider = ({children}) => {
    const [isDropdownOpen, setDropdown] = useState(false);
    const value = {isDropdownOpen, setDropdown};

    return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
} 
