// import jwt from "jsonwebtoken";

// const userAuth=async(req, res, next)=>{
//     const {token}=req.headers;
//     if(!token){
//         return res.json({success:false,message:'Not Authorized Login Again'});
//     }
//     try {
//         const tokenDecode=jwt.verify(token, process.env.JWT_SECRET);
//         if(tokenDecode.id){
//             req.userId=tokenDecode.id;
//         }else{
//             return res.json({success:false,message:'Not Authorized Login Again'});
//         }
//         next();
//     } catch (error) {
//         res.json({success:false,message:error.message});
//     }
// };
// export default userAuth;
import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized. Please login again.",
      });
    }

    const token = authHeader.split(" ")[1]; // extract actual token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Token invalid or expired. Please login again.",
    });
  }
};

export default userAuth;
