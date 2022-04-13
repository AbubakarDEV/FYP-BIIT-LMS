import { object } from "yup";

import { firstName, password } from "../../common/validations/validator";

const schema = object().shape({
  username: firstName().label("Username"),
  password: password().label("Password"),
});

export default schema;
