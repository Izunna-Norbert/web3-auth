import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants/constants";
// import { Provider } from "../utils/thirdweb";


export const VerifySignatureMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { signature, address } = req.query;
        if (!signature || !address) {
            return res.status(401).json({ message: 'Invalid signature' });
        }
        // const signer = await Provider.getSigner(address.toString());

        // // Create message to sign
        // const message = 'Authenticating with Thirdweb';

        // const signedMessage = await signer.signMessage(message);

        // if (signedMessage !== signature) {
        //     return res.status(401).json({ message: 'Invalid signature' });
        // }

        next();
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export const VerifySignatureFromHeaderMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { signature, address } = req.headers;
        // if (!signature || !address) {
        //     return res.status(401).json({ message: 'Invalid signature' });
        // }
        // const signer = await Provider.getSigner(address.toString());

        // // Create message to sign
        // const message = 'Authenticating with Thirdweb';

        // const signedMessage = await signer.signMessage(message);

        // if (signedMessage !== signature) {
        //     return res.status(401).json({ message: 'Invalid signature' });
        // }

        next();
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

//security risks TO:REMOVE
export const VerifySignatureFromAuthTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // const authHeader = req.headers.authorization;
        // if (!authHeader) {
        //     return res.status(401).json({ message: 'Invalid signature' });
        // }
        // const token = authHeader.split(' ')[1];

        // const { address, signature } = jwt.verify(token, JWT_SECRET) as { address: string, signature: string };

        // if (!signature || !address) {
        //     return res.status(401).json({ message: 'Invalid signature' });
        // }

        // const signer = await Provider.getSigner(address);

        // // Create message to sign
        // const message = 'Authenticating with Thirdweb';

        // const signedMessage = await signer.signMessage(message);

        // if (signedMessage !== signature) {
        //     return res.status(401).json({ message: 'Invalid signature' });
        // }
        next();

    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};