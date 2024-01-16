import { createContext, useState } from "react";

const CotizadorContext = createContext();
const CotizadorProvider = ({ children }) => {
    const [modal, setModal] = useState(false);
    const modalsito = () => {
        setModal(!modal);
    };
    return (
        <CotizadorContext.Provider value={{ modalsito }}>
            {children}
        </CotizadorContext.Provider>
    );
};

export { CotizadorProvider };

export default CotizadorContext;
