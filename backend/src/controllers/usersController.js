export const getUsers = (req, res) => {
  // res.status(200).json({
  //   data: [{ name: "bonjour", difficulty: "hard", indgredients: [1, 2, 3, 4] }],
  // });
  console.log(`Get users:`);
  console.log(req.user);
  // NOTE: if this function gets called then I know that
  // a user has been logged in and req.user exits!
  res.status(200).json({
    message: `Now retrieving Users`
    // user: {
    //   id: req.user.id,
    //   username: req.user.username,
    // },
  });
};