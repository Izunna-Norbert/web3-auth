import dotenv from 'dotenv';

dotenv.config();
export const PORT = process.env.PORT || 3000;
export const WEB3_NODE_URL = process.env.WEB3_NODE_URL || 'https://eth-goerli.g.alchemy.com/v2/0j2HIBRz1Jv4PYyEEBbBU9dQ5rctTKTk';
export const WEB3_NODE_API_KEY = process.env.WEB3_NODE_API_KEY || '0j2HIBRz1Jv4PYyEEBbBU9dQ5rctTKTk';
export const WEB3_NODE_NETWORK = process.env.WEB3_NODE_NETWORK || 'goerli';
export const JWT_SECRET = process.env.JWT_SECRET || 'secret';
export const THIRDWEB_AUTH_PRIVATE_KEY = process.env.THIRDWEB_AUTH_PRIVATE_KEY || '0x0';
export const THIRDWEB_AUTH_DOMAIN = process.env.THIRDWEB_AUTH_DOMAIN || 'http://localhost:3000';