export interface ShortenRequest {
    original_url: string;
}

export interface ShortenResponse {
    shortened_url: string;
    short_code: string;
}

export interface ExpandResponse {
    id: number;
    original_url: string;
    short_code: string;
}
