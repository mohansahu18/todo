const BASE_URL = "127.0.0.1:5000/api/v1"
console.log("base url", BASE_URL);
// AUTH ENDPOINTS
const endpoints = {
    CREATE_API: BASE_URL + "/createTodo",
    DELETE_API: BASE_URL + "deleteTodo/:id",
    UPDATE_API: BASE_URL + "/editTodo/:id",
    GET_API: BASE_URL + "/getAllTodo",

}
export default endpoints