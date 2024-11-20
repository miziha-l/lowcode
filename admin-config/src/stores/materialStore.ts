import create from 'zustand';

interface MaterialStore {
  materials: any[];
  setMaterials: (materials: any[]) => void;
}

export const useMaterialStore = create<MaterialStore>((set) => ({
  materials: [],
  setMaterials: (materials) => set({ materials }),
})); 