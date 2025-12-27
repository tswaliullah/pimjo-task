const audinLogger = (req, res, next) => {
  const ip = req.ip;
  const method = req.method;
  const path = req.originalUrl;
  const start = Date.now();

  console.log(`
        IP address: ${ip}
        Endpoint name: ${method} ${path}
        Timestamp: ${new Date()}
    `);

  next();
};

export default audinLogger;
