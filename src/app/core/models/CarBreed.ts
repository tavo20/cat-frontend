export interface CatBreed {
    id: string;
    name: string;
    description: string;
    origin: string;
    child_friendly: number;
    image: { url: string };
    temperament?: string;
    life_span?: string;
    weight?: { imperial: string; metric: string };
  }

  export interface imageObjectCatBreed {
    id: string
  }

  export interface CatDetails {
    name: string;
    weight: { imperial: string; metric: string };
    temperament: string;
    origin: string;
    description: string;
    life_span: string;
    image: { url: string };
  }