export interface Photo {
    id: string;
    url: string;
    width: number;
    height: number;
    breeds: Breed[];
    categories?: Category[];
}

export interface Breed {
    id: string;
    name: string;
    temperament?: string;
    life_span: string;
    alt_names?: string;
    wikipedia_url?: string;
    origin: string;
    weight: {
        imperial: string;
        metric: string;
    };
}

export interface Category {
    id: number;
    name: string;
}
