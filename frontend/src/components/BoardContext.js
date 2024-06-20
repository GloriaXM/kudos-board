import { createContext, useContext } from 'react';

export const BoardContext = createContext('');
export const useBoardContext = () => useContext(BoardContext);

export const BoardViewContext = createContext(false);
export const useBoardViewContext = () => useContext(BoardViewContext);

export const BoardViewId = createContext(false);
export const useBoardViewId = () => useContext(BoardViewId);
