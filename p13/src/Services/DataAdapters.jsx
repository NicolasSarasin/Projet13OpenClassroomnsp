const DataAdapters={
    userMainFromAPI : (dataFromAPI)=>{
        return{
            firstName:dataFromAPI.firstName ,
            lastName:dataFromAPI.lastName ,
            email:dataFromAPI.email,
            password:dataFromAPI.password,
        }
    },
}
export default DataAdapters