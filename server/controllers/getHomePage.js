export const getHomePage = (req, res) => {
  res.status(200).json({
    sucess: true,
    message: "home page accessed",
  });
};
