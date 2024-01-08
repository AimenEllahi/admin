import { create } from "zustand";

const useSidebarStore = create((set) => ({
  show: false,

  setShow: (show) => set({ show }),
}));

export default useSidebarStore;
