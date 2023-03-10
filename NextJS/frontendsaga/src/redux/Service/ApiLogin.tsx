import axios from "axios"
import config from "../../Config/config"

const ApiLogin = {
    login: async (username:any, password:any) => {
        let options = {
            url: config.base_url + '/login',
            method: 'POST',
            headers : {
                'content-Type': 'application/json'
            },
            data: {
                username : username,
                password : password
            }
        }
        try {
            let result = await axios(options)
            return result.data
        }catch (error){
            return error;
        }
    }
}

export default ApiLogin