import { create } from 'zustand';
import { MyCounter } from '~/modules';

const useStore = create<MyCounter>((set) => ({
 counter: 0,
 increment: () => set((state: any) => ({ counter: state.counter + 1 })),
}));

export default useStore;
