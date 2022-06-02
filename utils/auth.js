import jwt from "jsonwebtoken";

const secret_key = "nextmarket";

const auth = (handler) => {
  return async(req, res) => {
    if(req.method === "GET") {
      return handler(req, res);
    }
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdHN1bW90b0BtYXRzdW1vdG8uY29tIiwiaWF0IjoxNjU0MTUyOTMwLCJleHAiOjE2NTQyMzU3MzB9.rl5U8QQpTjvdFcUsDCSvezrgt9a4WGiRTdwY2O3m-Rk";
    // const token = await req.headers.authorization.split(" ")[1];

    if(!token) {
      return res.status(401).json({message: "トークンがありません"});
    }

    try {
      const decoded = jwt.verify(token, secret_key);
      req.body.email = decoded.email;
      return handler(req, res);
    } catch(err) {
      return res.status(401).json({message: "トークンが正しくないので、ログインしてください"});
    }
  }
}

export default auth;