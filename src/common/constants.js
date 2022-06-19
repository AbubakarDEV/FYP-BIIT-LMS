export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const WEB_BASE_URL = process.env.NEXT_PUBLIC_WEB_URL;
export const SERVICE_NAME = "moodle_mobile_app";
export const MOODLEFORMAT = "json";
export const GETALLENROLLEDUSER = "core_enrol_get_enrolled_users";
export const GETPROFILE = "core_user_get_users_by_field";
export const GETALLCOURSES = "core_course_get_courses";
export const COURSECONTENT = "core_course_get_contents";
export const GETASSIGNMNET = "mod_assign_get_assignments";
export const GETENROLLEDCOURSES = "core_enrol_get_users_courses";
export const DIRECTORTOKEN = "5ab7106a8861cfd2a844f44d75dfcdaf";
export const PARTICIPANTASSIGNMENTS = "mod_assign_list_participants";
export const TIMEOUT_VALUE = 60000;

export function getErrors(err) {
  const allErrors = {};
  err.inner.forEach((e) => {
    if (allErrors[e.path]) {
      allErrors[e.path].push(e);
    } else {
      allErrors[e.path] = [e];
    }
  });
  return allErrors;
}
