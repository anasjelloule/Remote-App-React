
import {create} from 'zustand';
// import { createStore } from 'zustand/vanilla';
interface CounterState {
  count: number;
  increase: () => void;
  decrease: () => void;
}

const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increase: () => set((state) => ({...state, count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

export const selectCount = (state:CounterState) => state.count;
 
export default useCounterStore;
