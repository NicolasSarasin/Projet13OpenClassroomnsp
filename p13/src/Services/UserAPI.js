import DataAdapters from "./DataAdapters";
import useState from 'react';


const UserAPI = {
    LoginAPI : async function (email, password) {
        const {UserToken, SetUserToken} = useState(null);
        const {UserName, SetUserName} = useState(null)
            /*firstName:"",
            lastName:""*/
        const formData = {
            email:String(email),
            password:String(password),
        };
        const loginResponse = await fetch("http://localhost:3001/api/v1/user/login",{
            method:"post",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(formData),
        });
        console.log("LoginResponse",loginResponse);
        if(!loginResponse.ok){
            console.error("Mail ou mot de passe invalide");
            SetUserToken(null);
            SetUserName(null);
            return false;
        }
        //return true;
        const loginData = await loginResponse.json();
        //token dans le state pour après et utiliser le token pour le /profile
        const token = loginData.body.token;
        SetUserToken(loginData.token);
        console.log("Token",token)
        SetUserName("");
        return true;
        /*const profileResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        if (!profileResponse.ok){
            console.error("Mail ou mot de passe invalide");
            return false;
        }
        const profileData = await profileResponse.json();
        SetUserName(profileData)
        return {
            DataAdapters:DataAdapters.data,
        };*/
    }
    //Profile : async function (){}
    //Profile(setStateToken(token),firstName,lastName);
}

export default UserAPI;