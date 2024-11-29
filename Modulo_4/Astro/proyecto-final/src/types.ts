export interface Author {
    name: string;
}

export interface Book {
    id: number;
    title: string;
    authors: Author[];
    description?: string;
    formats: {
        [key: string]: string; // Los formatos pueden ser de varios tipos
    };
}