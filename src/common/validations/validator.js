import { string, number, ref, array } from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const whatsAppExp =
  /^$|^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const nonEmpty = /^\S+$/;

export const message = () => {
  return string().max(2500).trim().required();
};

export const price = () => {
  return number().min(1);
};

export const subject = () => {
  return string().max(2500).trim().required();
};

export const firstName = () => {
  return string().trim().required().min(3).max(50);
};

export const lastName = () => {
  return string().trim().required().min(3).max(50);
};

export const city = () => {
  return string().max(30).trim();
};

export const userName = () => {
  return string()
    .trim()
    .required()
    .min(3)
    .max(50)
    .matches(nonEmpty, "Spaces are not allowed");
};

export const title = () => {
  return string().trim().required().min(3).max(50);
};

export const location = () => {
  return string();
};

export const phoneNumber = () => {
  return string()
    .required()
    .max(15)
    .matches(phoneRegExp, "Please provide valid Phone no");
};

export const email = () => {
  return string().trim().required().email().min(3).max(100);
};

export const password = () => {
  return string().required().min(1).max(100);
};

export const confirmPassword = () => {
  return string().oneOf([ref("password"), null], "Passwords must match");
};

export const contactInfo = {
  first_name: string().required().min(3).max(50).trim().label("First Name"),

  last_name: string().required().min(3).max(50).trim().label("Last Name"),

  title: string().required().min(3).max(50).trim().label("Title"),

  email: string().required().email().min(3).max(100).trim().label("Email"),

  contact_phone: string()
    .required()
    .max(30)
    .matches(phoneRegExp, "Please provide valid Phone no")
    .label("Phone no"),
};

export const description = () => {
  return string().trim().required().min(3).max(250);
};
