import DataAdapters from "./DataAdapters";
const ReceptAPI = {
    getUserMain : async function (/*userId*/) {
        await fetch("http://localhost:3001/api/v1/user/login", postMessage)
        .then(response =>  response.json())
        .then(loginData => {
            if(loginData.status !== "200")
            {
                console.log("Mail and/or password invalid")
                return;
            }
            const token = loginData.body.token;
            // enregistrer le token quelque part
            return fetch("http://localhost:3001/api/v1/user/profile", token)
            .then(response => response.json())
            .then(userData => {
                const firstName = userData.body.firstName;
                const lastName = userData.body.lastName;
                // enregistrer firstName et lastName quelque part
            });
            })
        .catch(e => {
            console.log('Il y a eu un problème avec la récupération des données:',e);
        });
        //DataAdapters.userMainFromAPI()
    }
}
export default ReceptAPI;