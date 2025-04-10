const validateRegister = (req, res, next) => {
  // NOTE: NEVER Trust the client. Assume NOTHING!
  console.log(req);
  const { name, password, email } = req.body;

  // NOTE: Lines you may use to check if the req.body is complete.
  // if not, then we should respond to the client with 400.
  // !name
  // !password
  // !email
  // return res.status(400).json({ message: "bad request" });
  console.log(name);
  if(!name || !password || !email){
    return res.status(400).json({ message: "bad request" });
  }
  // TODO:
  // check more complex validation logic here like:
  // - Check password length
  // - Validate email format using a regular expression
  // - Check if name contains invalid characters
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[a-zA-Z0-9_]+$/;

  if (password.length < 6 || !emailRegex.test(email) || !nameRegex.test(name)) {
    return res.status(400).json({ message: "bad request" });
  }

  // TODO:
  // Req.body sanitation
  // https://article.arunangshudas.com/how-do-you-ensure-request-validation-and-data-sanitization-in-a-production-express-js-application-90ab32fdab94
  // NOTE: explore express-validator to validate incoming data

  // if every check passes we ensure that next middleware or route gets called!
  next();
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  //TODO: Complete the validateLogin

  // NOTE: Lines you may use to check if the req.body is complete.
  // if not, then we should respond to the client with 400.
  // !name
  // !password
  // return res
  //   .status(400)
  //   .json({ message: "Please provide name and password" });
  if(!email || !password){
    return res.status(400).json({
      message: "Please provide email and password"
    })
  }
  console.log("pass1");
  // checking for more complex validation logic here like
  // - checking name format
  // - password format
  // TODO: We can create some util functions that check for common errors!

  // if every check passes we ensure that next middleware or route gets called!
  next();
};

export { validateRegister, validateLogin };
