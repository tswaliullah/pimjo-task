import path from "path";
import fs from "fs";


const logDir = path.join(process.cwd(), "logs");  
const logFile = path.join(logDir, "auditLogging.json");

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, {
    recursive: true,
  });
}

const fileLogger = (logEntry) => {
  const logLine = JSON.stringify(logEntry) + "\n";

  fs.appendFile(logFile, logLine, (err) => {
    if (err) {
      console.error("Failed to write audit log:", err);
    }
  });

  return logEntry;
};

export default fileLogger;
