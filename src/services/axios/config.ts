import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:4600',
    // baseURL: 'http://71516d6a71f2.ngrok.io/proline/web/client',
    headers: {
        'Content-Type': 'application/json'
    }
})

export { apiClient }
