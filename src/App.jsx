import { IconCheck, IconTrash } from "@tabler/icons-react"


function App() {
  

  return (
    <div 
      className="
        min-h-screen w-screen
        bg-cinza-600 text-cinza-100 antialiased
      "
    >
      <header className="flex flex-1 justify-center items-center py-20 px-3 bg-neutral-900">
        <img src="/logo.svg" alt="" />
      </header>

      <section className="w-full max-w-3xl m-auto ">
        
        <div className="flex justify-between items-center gap-2 -translate-y-2/4">
          <input 
            type="text"
            className="
            bg-cinza-500 text-cinza-100
              border-[1px] border-cinza-700 rounded-md
              h-12 p-4 leading-normal outline-none
              w-full

            "  
          />
          <button 
            className="
              flex justify-center items-center
              h-12 p-4
              bg-azul-dark text-cinza-100
              hover:bg-azul
              border-0 rounded-md
              font-bold text-sm
              transition-all
            "
          >
            Criar
          </button>
        </div>


        {/* Lista */}
        <div className="flex flex-col gap-6">

          <header className="flex flex-1 justify-between items-center">
            <div className="flex items-center gap-2 font-bold text-azul">
              <p className="text-sm">Tarefas criadas</p>
              <span className="px-2 py-1 rounded-2xl text-xs bg-cinza-400 text-cinza-200">
                2
              </span>
            </div>
            <div className="flex items-center gap-2 font-bold text-roxo">
              <p className="text-sm">Concluídas</p>
              <span className="px-2 py-1 rounded-2xl text-xs bg-cinza-400 text-cinza-200">
                1 de 2
              </span>
            </div>
          </header>

          <div className="flex flex-col gap-3">
            {/* Item */}
            <div className="flex flex-1 justify-between items-center gap-3 p-4 rounded-lg bg-cinza-500 border-[1px] border-cinza-400">
              <div className="flex">
                <label htmlFor="checkbox" className="flex items-center gap-3 p-1">
                  <input type="checkbox" className="hidden"/>
                  <span 
                    className="
                      rounded-full w-4 h-4 flex items-center justify-center 
                      border-2 border-blue-500 hover:border-blue-300"
                  >
                    {/* Icone */}
                  </span>
                  <p>
                    Tarefa 1
                  </p>
                </label>
              </div>
              <button><IconTrash className="text-cinza-300 hover:text-danger"/></button>
            </div>

            {/* Item */}
            <div className="flex flex-1 justify-between items-center gap-3 p-4 rounded-lg bg-cinza-500 border-[1px] border-cinza-400">
              <div className="flex">
                <label htmlFor="checkbox" className="flex items-center gap-3 p-1">
                  <input type="checkbox" className="hidden" checked="true"/>
                  <span 
                    className="
                      rounded-full w-4 h-4 flex items-center justify-center 
                      border-2 border-roxo-dark bg-roxo-dark"
                  >
                    <IconCheck/>
                  </span>
                  <p className="text-cinza-300 line-through">
                    Tarefa 1
                  </p>
                </label>
              </div>
              <button><IconTrash className="text-cinza-300 hover:text-danger"/></button>
            </div>

            

          </div>

        </div>

      </section>

    </div>
  )
}

export default App
