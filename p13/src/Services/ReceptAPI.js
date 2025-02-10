//import DataAdapters from "./DataAdapters";
const ReceptAPI = {
    getUserMain : async function (userId) {
        try {
            console.log("UserId",userId)
            const response = await fetch(/*'./API/User_main.json'*/'http://locahost:3001/'+userId);
            if (!response.ok) {
                throw new Error('Erreur de réseau');
            }
            const data = await response.json();
            return data;
            //return DataAdapters.userMainFromAPI(data.data);
        } 
        catch (error) {
            console.error('Il y a eu un problème avec la récupération des données:', error);
        }
    }
}
export default ReceptAPI;