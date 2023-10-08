export interface IBilboard {
    id: string;
    label: string;
    imageUrl: string;
}

export interface ICategory {
    id: string;
    name: string;
    bilboard: IBilboard;
}

export interface IProduct {
    id: string;
    category: ICategory;
    name: string;
    price: number;
    isFeatured: boolean;
    size: Size;
    color: Color;
    images: Image[];
}

export interface Image {
    id: string;
    url: string;
}

export interface Size {
    id: string;
    name: string;
    value: string;
}

export interface Color {
    id: string;
    name: string;
    value: string;
}
