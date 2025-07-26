import React, {useState} from "react";
import DataContext from "./dataContext";

const NameProvider = ({children}) => {
    const [name, setName] = useState('Abhay')

    return(
        <DataContext.Provider value={{name, setName}}>
            {children}
        </DataContext.Provider>
    )
}

export default NameProvider;