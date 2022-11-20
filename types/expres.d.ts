declare global {
    namespace Express {
        interface Request {
            user?: UserType;
            account?: Account;
            activity?: ActivityHistoriesInRequest;
        }
    }
}
