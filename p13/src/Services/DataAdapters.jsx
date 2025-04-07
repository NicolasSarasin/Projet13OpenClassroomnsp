const DataAdapters={
    userMainFromAPI : (dataFromAPI)=>{
        return{
            firstName:dataFromAPI.body.firstName ,
            lastName:dataFromAPI.body.lastName ,
            email:dataFromAPI.body.email,
            password:dataFromAPI.body.password,
        }
    },
}
export default DataAdapters