import { Axios } from "../request";

export const getAllTeacher = (request, callback, failure) => {
  debugger;
  Axios.get("/webservice/rest/server.php", null, { params: request })
    .then((res) => {
      callback(res);
    })
    .catch((error) => {
      failure(error);
    });
};
