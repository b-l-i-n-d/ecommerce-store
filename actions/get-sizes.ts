import { ICategory, ISize } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export const getSizes = async (): Promise<ISize[]> => {
    const res = await fetch(URL);
    return res.json();
};
