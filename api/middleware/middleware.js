const User = require("../users/users-model");

function logger(req, res, next) {
  // DO YOUR MAGIC
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
}

async function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  try {
    const user = await User.getById(req.params.id);
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch {
    res.status(500).json({ message: "There is an error with the server" });
  }
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  const name = req.body.name;
  if (name) {
    next();
  } else {
    res.status(400).json({ message: "missing required name field" });
  }
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC

  const text = req.body.text;
  if (text) {
    next();
  } else {
    res.status(400).json({ message: "missing required text field" });
  }
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
};
