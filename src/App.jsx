import React, { createContext, useContext, useState } from 'react';
import { IconCheck, IconTrash } from '@tabler/icons-react';


const ContextoDeTarefas = createContext();


function FornecedorDeTarefas({ children }) {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (textoDaTarefa) => {
    setTarefas([...tarefas, { id: Date.now(), texto: textoDaTarefa, concluida: false }]);
  };

  const alternarConclusaoTarefa = (idDaTarefa) => {
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === idDaTarefa ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    ));
  };

  const excluirTarefa = (idDaTarefa) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== idDaTarefa));
  };

  return (
    <ContextoDeTarefas.Provider value={{ tarefas, adicionarTarefa, alternarConclusaoTarefa, excluirTarefa }}>
      {children}
    </ContextoDeTarefas.Provider>
  );
}


const useTarefas = () => {
  const contexto = useContext(ContextoDeTarefas);
  return contexto;
};

function CabecalhoDeTarefas() {
  const { tarefas } = useTarefas();
  const tarefasConcluidasCount = tarefas.filter(tarefa => tarefa.concluida).length;

  return (
    <header className="flex justify-between items-center mb-6 -translate-y-2/4">
      <div className="flex items-center gap-2 font-bold text-blue-400">
        <p className="text-sm">Tarefas criadas</p>
        <span className="px-2 py-1 rounded-2xl text-xs bg-cinza-500 text-gray-100">
          {tarefas.length}
        </span>
      </div>
      <div className="flex items-center gap-2 font-bold text-purple-500">
        <p className="text-sm">Concluídas</p>
        <span className="px-2 py-1 rounded-2xl text-xs bg-cinza-500 text-gray-100">
          {tarefasConcluidasCount} de {tarefas.length}
        </span>
      </div>
    </header>
  );
}


function ItemDeTarefa({ tarefa }) {
  const { alternarConclusaoTarefa, excluirTarefa } = useTarefas();

  return (
    <div className="flex justify-between items-center gap-3 p-4 rounded-lg bg-cinza-700 border border-cinza-600">
      <div className="flex items-center gap-3">
        <label htmlFor={`checkbox-${tarefa.id}`} className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            id={`checkbox-${tarefa.id}`}
            className="hidden"
            checked={tarefa.concluida}
            onChange={() => alternarConclusaoTarefa(tarefa.id)}
          />
          <span
            className={`
              rounded-full w-6 h-6 flex items-center justify-center 
              border-2 ${tarefa.concluida ? 'border-purple-600 bg-purple-600' : 'border-blue-500 hover:border-blue-400'}
            `}
          >
            {tarefa.concluida && <IconCheck className="text-white" />}
          </span>
          <p className={tarefa.concluida ? 'text-gray-400 line-through' : 'text-gray-100'}>
            {tarefa.texto}
          </p>
        </label>
      </div>
      <button onClick={() => excluirTarefa(tarefa.id)} className="text-gray-300 hover:text-red-600">
        <IconTrash />
      </button>
    </div>
  );
}


function ListaDeTarefas() {
  const { tarefas } = useTarefas();

  return (
    <div className="flex flex-col gap-3">
      {tarefas.map(tarefa => (
        <ItemDeTarefa key={tarefa.id} tarefa={tarefa} />
      ))}
    </div>
  );
}

function EntradaDeTarefa() {
  const { adicionarTarefa } = useTarefas();
  const [novoTextoDeTarefa, setNovoTextoDeTarefa] = useState('');

  const handleCriarTarefa = () => {
    if (novoTextoDeTarefa.trim() === "") return;
    adicionarTarefa(novoTextoDeTarefa);
    setNovoTextoDeTarefa('');
  };

  return (
    <div className="flex justify-between items-center gap-2 mb-6 -translate-y-2/4">
      <input
        type="text"
        value={novoTextoDeTarefa}
        onChange={(e) => setNovoTextoDeTarefa(e.target.value)}
        className="bg-cinza-400 text-gray-100 border border-cinza-700 rounded-md h-12 p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 "
        placeholder="Adicionar nova tarefa"
      />
      <button
        onClick={handleCriarTarefa}
        className="flex justify-center items-center h-12 px-6 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-500 transition-all"
      >
        Criar
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen w-screen bg-cinza-600 text-gray-100 antialiased">
      <header className="flex justify-center items-center py-20 bg-neutral-900">
        <img src="/logo.svg" alt="Logo" />
      </header>

      <section className="w-full max-w-3xl mx-auto px-4">
        <EntradaDeTarefa />
        <CabecalhoDeTarefas />
        <ListaDeTarefas />
      </section>
    </div>
  );
}


export default function Raiz() {
  return (
    <FornecedorDeTarefas>
      <App />
    </FornecedorDeTarefas>
  );
}
