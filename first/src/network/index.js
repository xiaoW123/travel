import Axios from "axios"

export function request(config) {
  const aaa = Axios.create({
    baseURL: 'http://localhost:8080/static/mock/dataHome.json',
    timeout: 5000
  })
  return aaa({config})
}

export function requestCity(config) {
  const bbb = Axios.create({
    baseURL: 'http://localhost:8080/static/mock/allCity.json',
    timeout: 5000
  })
  return bbb({config})
}