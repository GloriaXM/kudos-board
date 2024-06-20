import { createContext, useContext } from 'react';

export const BoardContext = createContext('');
export const useMyContext = () => useContext(BoardContext);
