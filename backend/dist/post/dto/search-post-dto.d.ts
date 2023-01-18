export declare class SearchPostDto {
    title: string;
    body: string;
    limit: number;
    take: number;
    sortBy: 'views' | 'popular';
    increaseStatus: 'DESC' | 'ASC';
}
