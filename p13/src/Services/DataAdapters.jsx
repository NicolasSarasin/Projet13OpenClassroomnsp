const DataAdapters={
    userLoginAPI : (dataFromAPI)=>{
        if (!dataFromAPI || !dataFromAPI.token) {
            console.warn("DataAdapters.userLoginAPI: token manquant", dataFromAPI);
            return null;
        }
        return{
            token:dataFromAPI.token
        }
    },
    userProfileAPI : (dataFromAPI)=> {
        if (!dataFromAPI) {
            console.warn("DataAdapters.userProfileAPI: données manquantes", dataFromAPI);
            return null;
        }
        return{
            firstName:dataFromAPI.firstName || "",
            lastName:dataFromAPI.lastName || "",
            email:dataFromAPI.email || "",
            id:dataFromAPI.id || null,
        }
    }
}
export default DataAdapters
//export {fromLoginAPI,fromUserAPI}
/*const fromLoginAPI = (data) => {
    return {
        token: data.token
    };
};
const fromUserAPI = (data) => {
    return {
        firstName: data.firstName,
        lastName: data.lastName
    };
};*/