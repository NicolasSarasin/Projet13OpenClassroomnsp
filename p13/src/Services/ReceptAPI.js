import DataAdapters from "./DataAdapters";
const ReceptAPI = {
    getUserMain : async function (/*userId*/) {
        try {
            console.log("DataBase","http://localhost:3001/api/v1/user/signup")
            const response = await fetch('http://localhost:3001');
            if (!response.ok) {
                throw new Error('Erreur de réseau');
            }
            const data = await response.json();
            return DataAdapters.userMainFromAPI(data.data);
        } 
        catch (error) {
            console.error('Il y a eu un problème avec la récupération des données:', error);
        }
    }
}
export default ReceptAPI;