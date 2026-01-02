type Keyword =
    | 'mui'
    | 'next.js'
    | 'react'
    | 'typescript'
;

export interface Demo {
    cta?: string;
    description: string;
    height: number;
    href?: string;
    id: string;
    image: string;
    keywords: Keyword[];
    name: string;
    repository: string;
    width: number;
}