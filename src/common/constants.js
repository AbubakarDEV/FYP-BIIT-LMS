export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const WEB_BASE_URL = process.env.NEXT_PUBLIC_WEB_URL;
export const SERVICE_NAME = "moodle_mobile_app";
export const MOODLEFORMAT = "json";
export const GETENROLLEDUSER = "core_enrol_get_enrolled_users";
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
