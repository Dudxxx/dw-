import { useContext } from "react"
import { TemaContext } from "../context/TemaContext"

export function Home() {

    const {tema, alterarTema} = useContext(TemaContext)

    return (
        <div className="w-screen min-h-screen">
            <h1 className="text-2xl font-bold">
                Aplicação de Tema Claro e Escuro
            </h1>
            <h2>{tema}</h2>
            <button className="px-4 py-2 mt-4 rounded bg-gray-300 text-black"
            onClick={() =>
            {
                alterarTema()
            }}
            >
                alterar
            </button>
        </div>
    )
}