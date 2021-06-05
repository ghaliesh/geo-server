export interface IError {
    error: string;
    date: Date;
    route: string;
    moreInfo: object;
}

export const handleError = (error: Error, route: string, moreInfo: IError["moreInfo"]): IError => ({error: error.message, date: new Date(), route, moreInfo  });