import React, { Fragment } from "react";
import { MARCAS, YEARS, PLANES } from "../constants/index";

const Formulario = () => {
    return (
        <>
            <form>
                <div className="my-5">
                    <label
                        htmlFor="nombre"
                        className="block mb-3 font-bold text-gray-400 uppercase"
                    >
                        Marca
                    </label>
                    <select
                        name="marca"
                        className="w-full p-3 bg-white border border-gray-200"
                    >
                        <option value=""> -- Selecciona Marca --</option>
                        {MARCAS.map((marca) => {
                            return (
                                <option key={marca.id} value={marca.id}>
                                    {marca.nombre}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="my-5">
                    <label
                        htmlFor="nombre"
                        className="block mb-3 font-bold text-gray-400 uppercase"
                    >
                        Año
                    </label>
                    <select
                        name="anio"
                        className="w-full p-3 bg-white border border-gray-200"
                    >
                        <option value=""> -- Selecciona Año --</option>
                        {YEARS.map((year) => {
                            return (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="my-5">
                    <label
                        htmlFor="nombre"
                        className="block mb-3 font-bold text-gray-400 uppercase"
                    >
                        Elige un plan
                    </label>
                    <div className="flex gap-3 items-center">
                        {PLANES.map((plan) => {
                            return (
                                <Fragment key={plan.id}>
                                    <label>{plan.nombre}</label>
                                    <input
                                        type="radio"
                                        name="plan"
                                        value={plan.id}
                                    />
                                </Fragment>
                            );
                        })}
                    </div>
                </div>
                <input type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold" value="Cotizar" />
            </form>
        </>
    );
};

export default Formulario;