module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    // console.log("whats happening here!!");
    // console.log(req.user);
    return res.status(403).send({ error: "Not Enough Credits!" });
  }

  next();
};
