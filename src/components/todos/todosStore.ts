import { atom } from 'jotai';

export type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
};

let uuid = 0;

export const getNewId = () => {
  return uuid++;
};

export const todosAtom = atom<Todo[]>([]);
