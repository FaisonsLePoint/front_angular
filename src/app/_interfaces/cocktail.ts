export interface ICocktail {
    id?: number,
    user_id: number,
    nom: string,
    description: string,
    recette: string,
    updatedAt?: string,
    createdAt?: string,
    deletedAt?: null | string
}

export interface ISingleCocktail {
    data: ICocktail
}

export interface IDataCocktail {
    data: ICocktail[]
}
