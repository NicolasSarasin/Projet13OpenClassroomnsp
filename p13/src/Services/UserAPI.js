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
    },
    ProfileAPI : async function(token) {
        const loginToken = token;
        /*const firstName = "";
        const lastName = "";*/
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
        return profileData;
    },
    ChangingProfileAPI: async function(token, firstName, lastName) {
    const formData = {
        firstName: firstName,
        lastName: lastName,
    };

    const loginToken = token;
    console.log("formData", formData);

    const changingProfileUserResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${loginToken}`
        },
        body: JSON.stringify(formData), // ✅ NE PAS COMMENTER
    });

    if (!changingProfileUserResponse.ok) {
        console.error("Token invalide");
        return null; // <- mieux que false pour la cohérence
    }

    const changingProfileUser = await changingProfileUserResponse.json();
    console.log("Profile updated:", changingProfileUser);

    // Facultatif : à condition que ce soit une fonction utile
    DataAdapters.userProfileAPI(changingProfileUser.body);

    return changingProfileUser; // ✅ retournes les données
}
}

export default UserAPI;