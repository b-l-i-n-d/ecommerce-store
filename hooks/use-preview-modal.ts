import { create } from "zustand";

import { IProduct } from "@/types";

interface IPreviewModalStore {
    isOpen: boolean;
    data?: IProduct;
    onOpen: (data: IProduct) => void;
    onClose: () => void;
}

export const usePreviewModal = create<IPreviewModalStore>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data) => set({ isOpen: true, data }),
    onClose: () => set({ isOpen: false, data: undefined }),
}));
