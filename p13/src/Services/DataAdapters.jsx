const DataAdapters={
    userLoginAPI : (dataFromAPI)=>{
        return{
            token:dataFromAPI.token
        }
    },
    userProfileAPI : (dataFromAPI)=> {
        return{
            firstName:dataFromAPI.body.firstName ,
            lastName:dataFromAPI.body.lastName ,
            email:dataFromAPI.body.email,
            id:dataFromAPI.body.id,
        }
    }
}
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
export default DataAdapters
//export {fromLoginAPI,fromUserAPI}