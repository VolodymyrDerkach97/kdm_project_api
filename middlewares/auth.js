const jwt = require("jsonwebtoken");
const { HttpError } = require("../helpers");
const { User } = require("../models/user");

const { SECRET_KEY } = process.env;

const auth = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  try {
    if (bearer !== "Bearer") {
      return next(HttpError(401, "Not authorized"));
    }
    if (!token) {
      return next(HttpError(401, "No token"));
    }

    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);

    if (!user || !user.token || token !== user.token) {
      throw next(HttpError(401));
    }
    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = auth;
