import { Axios } from "../request";

export const userLogin = (request, callback, failure) => {
  Axios.post("/login/token.php", null, { params: request })
    .then((res) => {
      callback(res);
    })
    .catch((error) => {
      failure(error);
    });
};
