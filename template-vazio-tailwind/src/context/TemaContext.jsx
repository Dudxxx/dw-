// TemaContext.js
import React, { createContext, useState } from 'react';

// Criação do contexto para o tema
export const TemaContext = createContext();


export function TemaProvider({ children }) {
  const [tema, setTema] = useState('claro');

  const alternarTema = () => {
    setTema( tema === 'claro' ? 'escuro' : 'claro');
  };

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
}
