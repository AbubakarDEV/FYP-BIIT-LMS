import { Axios, authAxios } from "../request";

export const getProfile = (request, callback, failure) => {
  Axios.get(
    `/webservice/rest/server.php?wstoken=${request.wstoken}&wsfunction=${request.wsfunction}&field=username&values[0]=${request.username}&moodlewsrestformat=json`
  )
    .then((res) => {
      callback(res);
    })
    .catch((error) => {
      failure(error);
    });
};

export const getCourses = (request, callback, failure) => {
  Axios.get(
    `/webservice/rest/server.php?wstoken=${request.wstoken}&wsfunction=${request.wsfunction}&userid=${request.userID}&moodlewsrestformat=json`
  )
    .then((res) => {
      callback(res);
    })
    .catch((error) => {
      failure(error);
    });
};
export const getAllCourses = (request, callback, failure) => {
  Axios.get(
    `/webservice/rest/server.php?wstoken=${request.wstoken}&wsfunction=${request.wsfunction}&moodlewsrestformat=json`
  )
    .then((res) => {
      callback(res);
    })
    .catch((error) => {
      failure(error);
    });
};
export const getCourseWeeks = (request, callback, failure) => {
  Axios.get(
    `/webservice/rest/server.php?wstoken=${request.wstoken}&wsfunction=${request.wsfunction}&courseid=${request.courseid}&moodlewsrestformat=json`
  )
    .then((res) => {
      callback(res);
    })
    .catch((error) => {
      failure(error);
    });
};
