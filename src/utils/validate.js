const validate = (email, password) => {
  const email_valid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const pass_valid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  if (!email_valid) return 1;
  if (!pass_valid) return 2;
  return 3;
};

export default validate;
