type LogLevel = "info" | "error" | "debug";

function logMessage(message: string, level: LogLevel) {
  console.log(`[${level}] - ${message}`);
}

logMessage("Uma mensagem info", "info");
logMessage("Uma mensagem info", "error");
logMessage("Uma mensagem info", "debug");
