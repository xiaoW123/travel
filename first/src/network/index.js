import Axios from "axios"

export function request(config) {
  const abc = Axios.create({
    baseURL: 'http://localhost:8080/static/mock/dataHome.json',
    timeout: 5000
  })
  return abc({config})
}