export interface IBilboard {
    id: string;
    name: string;
    imageUrl: string;
}

export interface ICategory {
    id: string;
    name: string;
    bilboard: IBilboard;
}
