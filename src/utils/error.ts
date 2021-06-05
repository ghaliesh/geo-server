export interface IError {
    error: string;
    date: Date;
    route: string;
}

export const handleError = (error: Error, route: string): IError => ({error: error.message, date: new Date(), route  });