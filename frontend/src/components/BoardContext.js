import { createContext, useContext } from 'react';

export const BoardContext = createContext('');
export const useBoardContext = () => useContext(BoardContext);

export const BoardListContext = createContext([]);
export const useBoardListContext = () => useContext(BoardListContext);

export const BoardViewContext = createContext(false);
export const useBoardViewContext = () => useContext(BoardViewContext);

export const BoardViewId = createContext(0);
export const useBoardViewId = () => useContext(BoardViewId);

export const CardViewId = createContext(0);
export const useCardViewId = () => useContext(CardViewId);

export const SearchOptionsContext = createContext([{}]);
export const useSearchOptionsContext = () => useContext(SearchOptionsContext);

export const BoardSearchContext = createContext(null);
export const useBoardSearchContext = () => useContext(BoardSearchContext);
