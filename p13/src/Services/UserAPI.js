import DataAdapters from "./DataAdapters";

const UserAPI = {
    LoginAPI : async function (email, password) {
        const formData = {
            email:email,
            password:password,
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
            return null;
        }
        //return true;
        const loginData = await loginResponse.json();
        console.log("logindata",loginData);
        if (!loginData || !loginData.body || !loginData.body.token) {
            console.error("Réponse invalide du backend", loginData);
            return null;
        }
        return loginData.body.token;
        /*userToken = loginData.body.token;
        console.log("Token",loginData);
        

        DataAdapters.userLoginAPI(loginData.data);
        DataAdapters.userProfileAPI(profileData.data);
        return {
            token:userToken,
            user:profileData.data
        } ;*/
    },
    ProfileAPI : async function(token) {
        const loginToken= localStorage.setItem("Token",token);
        const profileResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${loginToken}`
            }
        });
        if (!profileResponse.ok){
            console.error("Token invalide");
            return false;
        }
        const profileData = await profileResponse.json();
        console.log("profileData",profileData)
    }
}

export default UserAPI;