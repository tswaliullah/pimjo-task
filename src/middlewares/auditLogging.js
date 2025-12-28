import fileLogger from "../utils/fileLogger.js";

const audinLogger = (req, res, next) => {
  const ip = req.ip;
  const method = req.method;
  const path = req.originalUrl;

  const logEntry = {
    ipAddress: ip,
    endpoint: `${method} ${path}`,
    timestamp: new Date().toISOString(),
  };

  const data = fileLogger(logEntry);

  console.log("audit log data:", data);

  next();
};

export default audinLogger;
