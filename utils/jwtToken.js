export const sendToken = (user, statusCode, res, message) => {
    const token = user.getJWTToken();

    const cookieExpireDays = process.env.COOKIE_EXPIRE;
    if (!cookieExpireDays) {
        console.error("COOKIE_EXPIRE is not defined in environment variables.");
        res.status(500).json({
            success: false,
            message: "Server configuration error."
        });
        return;
    }

    const options = {
        expires: new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000),
        httpOnly: true,
        // secure: process.env.NODE_ENV === 'production' // Uncomment if needed for production
        secure: true,
        sameSite: "None",
    };

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        message,
        token,
    });
};
