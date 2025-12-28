import fileLogger from "../utils/fileLogger.js";
import rateLimit from "./rateLimiting.js";

const audinLogger = (req, res, next) => {
  const ip = req.ip;
  const method = req.method;
  const path = req.originalUrl;

  const rat = rateLimit(req, res);

  let status = "allowed";
  if (!rat) {
    status = "blocked";
  }

  const logEntry = {
    ip_address: ip,
    endpoint: `${method} ${path}`,
    timestamp: new Date().toISOString(),
    status,
  };

  fileLogger(logEntry);

  next();
};

export default audinLogger;
