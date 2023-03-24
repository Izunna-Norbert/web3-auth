import { ThirdwebAuth } from "@thirdweb-dev/auth/express";
import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";
import { THIRDWEB_AUTH_DOMAIN, THIRDWEB_AUTH_PRIVATE_KEY } from "../constants/constants";

const users: Record<string, any> = {};
const ThirdwebAuthentication = ThirdwebAuth({
    domain: THIRDWEB_AUTH_DOMAIN,
    wallet: new PrivateKeyWallet(THIRDWEB_AUTH_PRIVATE_KEY),

    callbacks: {
      onLogin: async (address) => {
        console.log("onLogin", address);
        if (!users[address]) {
          users[address] = {
            created_at: Date.now(),
            last_login_at: Date.now(),
            num_log_outs: 0,
          };
        } else {
          users[address].last_login_at = Date.now();
        }
        return { role: ["admin"] };
      },
      onUser: async (user) => {
        if (users[user.address]) {
          users[user.address].user_last_accessed = Date.now();
        }
        return users[user.address];
      },
      onLogout: async (user) => {
        if (users[user.address]) {
          users[user.address].num_log_outs++;
        }
      },
    },
});

export default ThirdwebAuthentication;
