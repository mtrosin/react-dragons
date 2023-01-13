import axios from 'axios';

export default class DragonService {
    constructor () {
        this.axios = axios.create({
            baseURL: 'http://localhost:5000'
        })
    }

    async get (id) {
        await this.axios.get(`/dragons/${id}`)
                .then((resp) => {
                    return resp
                })
      }
}