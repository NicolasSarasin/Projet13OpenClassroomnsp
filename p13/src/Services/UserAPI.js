import DataAdapters from "./DataAdapters";
//import useState from 'react';


const UserAPI = {
    LoginAPI : async function (email, password) {
        /*const [stateToken, setStateToken] = useState("");*/
        /*const [stateUser, setStateUser] = useState({
            firstName:"",
            lastName:""
        })*/
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
            console.error("Erreur lors du login");
            return false;
        }
        const loginData = await loginResponse.json();
        //token dans le state pour après et utiliser le token pour le /profile
        const token = loginData.body.token;
        console.log("Token",token)
        //setStateToken(token);
        const profileResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        if (!profileResponse.ok){
            console.error("Erreur lors du login");
            return false;
        }
        const profileData = await profileResponse.json();
        return {
            token,
            user: profileData.body,
            DataAdapters
        };
        //Profile(setStateToken(token),firstName,lastName);
        /*async function Profile(Token,firstName,lastName) {
            const formData2 = {
                firstName:firstName,
                lastName:lastName
            }
            const logingResponse2 = await fetch("http://localhost:3001/api/v1/user/profile", Token, {
                method:"get",
                body:JSON.stringify(formData2)
            })
            
            if (logingResponse2.ok == false){
                return false;
            }
            setStateUser(logingResponse2);
        }*/
        //return DataAdapters.data;
        
    }
    //Profile : async function (){}
}

export default UserAPI;