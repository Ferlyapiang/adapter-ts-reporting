export interface PaginationResponse<T>{
    success: boolean;
    message?: string;
    totalItems?: number;
    totalPages?: number;
    currentPage?: number;
    content?: T;
}