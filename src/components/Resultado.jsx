import useCotizador from "../hooks/useCotizador";
const Resultado = () => {
    const { resultado, datos } = useCotizador();
    const { marca, year, plan } = datos;
    if (resultado === 0) {
        return null;
    }
    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            {" "}
            <h2 className="text-gray-500 font-black text-2xl">
                El total es: {resultado}
            </h2>
            <p className="text-gray-500 font-bold m-2">
                <span className="font-bold">Marca: </span>
                {marca}
            </p>
        </div>
    );
};

export default Resultado;
