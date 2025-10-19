
export interface AppHttpResponse<T>{
    status: boolean,
    message : string,
    error : any;
    data : T; 
    page: number | null;
    total_items: number | null;
}