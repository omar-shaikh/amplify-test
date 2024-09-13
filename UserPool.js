import { CognitoUserPool } from "amazon-cognito-identity-js";
    
    const poolData = {
        UserPoolId:"us-west-1_TbnnJ2b4C",
        ClientId: "iiu66q22rno0hftl8v00lj6k9"
    }

export default new CognitoUserPool(poolData);