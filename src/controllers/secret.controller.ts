import { Response, Request } from "express"
import ThirdwebAuthentication from "../utils/thirdwebAuth";

export default class SecretController {
    
    constructor() {}

    getSecret = async (req: Request, res: Response) => {
        try {
            const user = await ThirdwebAuthentication.getUser(req);
            if (!user) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            return res.status(200).json({ message: 'Hello World' });
        } catch(error: any) {
            return res.status(500).json({ message: error.message });
        }
    }
}