// client action
import axios from 'axios';

const register = async (formData: FormData) => {
  const data = Object.fromEntries(formData);

  // ? check if the data is being passed
  Array.from(formData).forEach((element) => {
    if (!element) throw new Error('All fields are required.');
  });

  const {
    firstName,
    lastName,
    username,
    email,
    password,
    passwordConfirmation,
  } = data;
  const checkbox = formData.get('termsAndConditions');
  const termsAndConditions = checkbox == 'on' ? true : false;

  // ? check if all fields are filled
  if (
    !firstName ||
    !lastName ||
    !username ||
    !email ||
    !password ||
    !passwordConfirmation
  )
    return { error: 'All fields are required.' };

  // ? check if the password and passwordConfirmation are the same
  if (password !== passwordConfirmation)
    return { error: 'Password and Password Confirmation must be the same.' };

  // ? check if the terms and conditions are checked
  if (!termsAndConditions)
    return { error: 'You must agree to the terms and conditions.' };

  try {
    const response = await axios.post('/api/auth/register', {
      firstName,
      lastName,
      username,
      email,
      password,
      passwordConfirmation,
      termsAndConditions,
    });

    const user = response.data.user;

    return user;
  } catch (error: any) {
    const errorMsg = error.response.data.error;
    return { error: errorMsg };
  }
};

export default register;
