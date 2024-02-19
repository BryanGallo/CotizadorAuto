import { createContext, useState } from "react";

const CotizadorContext = createContext();
const CotizadorProvider = ({ children }) => {
    const [datos, setDatos] = useState({
        marca: "",
        year: "",
        plan: "",
    });
    const handleChangeDatos = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setDatos({ ...datos, [e.target.name]: e.target.value });
    };
    return (
        <CotizadorContext.Provider value={{ handleChangeDatos, datos }}>
            {children}
        </CotizadorContext.Provider>
    );
};

export { CotizadorProvider };

export default CotizadorContext;
