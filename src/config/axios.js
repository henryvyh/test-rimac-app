import axios from "axios"
export const URL = "https://my-json-server.typicode.com/henryvyh/user/"

export const axiosChallenge = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
})
// interceptor for response
axiosChallenge.interceptors.response.use(
  (response) => successResponse(response),
  (error) => failedResponse(error)
)
// response
const successResponse = async (response) => {
  return response
}
const failedResponse = (error) => {
  throw error
}
