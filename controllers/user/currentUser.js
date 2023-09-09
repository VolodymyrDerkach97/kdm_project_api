const currentUser = async (req, res) => {
  const { name, email } = req.user;

  res.status(200);
  res.json({
    code: 200,
    message: "Success",
    user: {
      name,
      email,
    },
  });
};

module.exports = currentUser;
