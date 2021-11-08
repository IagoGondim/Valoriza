import { Request, Response, NextFunction, } from "express"
import { verify } from "jsonwebtoken";

interface IPayload{
    sub:string;
}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    //Receber o Token
    const authToken = request.headers.authorization;

    //Validar se token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        //Validar se token é valido
        const {sub} = verify(token, "ad81aec68cfc2cfd870c197047534c11"
        ) as IPayload;

        //Recuperar informações do usuário
        request.user_id = sub


        return next();
    } catch (err) {
        return response.status(401).end();
    }










}