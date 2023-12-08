const jwt = require('jsonwebtoken');
const Jwt_Secret_Key = "KeyByTajirSty@le";

const authenticateUser = async (req, res, next) => {
    const token = req.header('auth_token');
    if (!token) {
        return res.status(401).send({ error: "Please authenticate" });
    }

    try {
        const data = await jwt.verify(token, Jwt_Secret_Key);
        req.user = data.user;
        next();
    } catch (error) {
        // Handle the error appropriately, e.g., log it or send a different response
        console.error("JWT verification error:", error);
        return res.status(401).send({ error: "Invalid token" });
    }
}

module.exports = authenticateUser;
