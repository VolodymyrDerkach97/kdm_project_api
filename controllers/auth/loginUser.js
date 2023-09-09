const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw HttpError(400, "Error. Provide all required fields");
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "Email or password invalid");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw HttpError(401, "Email or password is wrong");
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });

  await User.findByIdAndUpdate(user._id, { token });

  res.status(200);
  res.json({
    code: 200,
    message: "User login success",
    token,
    user: {
      name: user.name,
      email: user.email,
    },
  });
};

module.exports = loginUser;
