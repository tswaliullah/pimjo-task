const rateLimitWindow = 60 * 1000;
const maxRequests = 2;
const ipRequests = {};

const rateLimit = (req, res) => {
  const ip = req.ip || req.socket.remoteAddress;
  const currentTime = Date.now();

  if (!ipRequests[ip]) {
    ipRequests[ip] = {
      count: 1,
      startTime: currentTime,
    };
  } else {
    if (currentTime - ipRequests[ip].startTime < rateLimitWindow) {
      ipRequests[ip].count += 1;
    } else {
      ipRequests[ip] = {
        count: 1,
        startTime: currentTime,
      };
    }
  }

  if (ipRequests[ip].count > maxRequests) {
    res.status(429).json({
      success: false,
      message: "Rate limit exceeded",
      error: "Too Many Requests - your IP is being rate limited.",
    });

    return false;
  }
  ``;
  return true;
};

export default rateLimit;
// boundary brust problem
