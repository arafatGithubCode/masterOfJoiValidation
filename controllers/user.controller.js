const userRegister = (req, res) => {
  try {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmedPassword: req.body.confirmedPassword,
      dob: req.body.dob,
      age: req.body.age,
      languages: req.body.languages,
      isRegistered: req.body.isRegistered,
    };

    res.status(201).json({
      message: "user is created",
      user,
    });
  } catch (error) {
    res.status(201).json({
      message: "user is not created",
      error: error.message,
    });
  }
};

const userLogin = (req, res) => {
  try {
    const user = {
      email: req.body.email,
      password: req.body.password,
    };

    res.status(201).json({
      message: "user is created",
      user,
    });
  } catch (error) {
    res.status(201).json({
      message: "user is not created",
      error: error.message,
    });
  }
};

module.exports = { userRegister, userLogin };
