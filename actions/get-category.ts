import { revalidate } from "@/components/navbar";
import { ICategory } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategory = async (id: string): Promise<ICategory> => {
    const res = await fetch(`${URL}/${id}`, {
        cache: "no-cache",
    });
    return res.json();
};
