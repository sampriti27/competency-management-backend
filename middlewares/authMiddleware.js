const jwt = require("jsonwebtoken");

const userAuth = async (req, res, next) => {
    try {
      //get accesstoken from cookies
    //   console.log(req.cookies);
      const {accessToken} = req.cookies;
    //   console.log(accessToken);
      
      //if token is missing, throw error
      if(!accessToken){
        throw new Error("Missing token");
      }

      //get the user data
      const userData = jwt.verify(accessToken, process.env.JWT_SECRET);
    //   console.log(userData);

      //if user is not mattched, throw error
      if(!userData){
        throw new Error();
      }

      req.user = userData;
      next();


    } catch (error) {
        res.status(401).json({error: "Authentcation failed!"});
    }
}

module.exports = userAuth;