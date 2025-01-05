import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SelectedPartState {
  selectedPartIds: string[];
  toggleSelectedPartId: (id: string) => void;
  getSelectedPartIds: () => string[];
}

export const useOrderStore = create<SelectedPartState>()(
  persist(
    (set, get) => ({
      selectedPartIds: [],
      toggleSelectedPartId: (id) =>
        set((state) => ({
          selectedPartIds: state.selectedPartIds.includes(id)
            ? state.selectedPartIds.filter((partId) => partId !== id)
            : [...state.selectedPartIds, id],
        })),
      getSelectedPartIds: () => get().selectedPartIds,
    }),
    {
      name: 'order-store', // unique name for the localStorage key
    }
  )
);
