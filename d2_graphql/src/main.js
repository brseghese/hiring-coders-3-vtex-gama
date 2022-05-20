import { createServer } from "http";
import { readFile } from "fs";
import { resolve } from "path";
import { parse } from "querystring";

const server = createServer((request, response) => {
  switch (request.url) {
    case "/status": {
      response.writeHead(200, {
        "Content-Type": "application/json",
      });
      response.write(
        JSON.stringify({
          status: "Okay",
        })
      );
      response.end();
      break;
    }
    case "/sign-in": {
      const path = resolve(__dirname, "./pages/sign-in.html");
      readFile(path, (error, file) => {
        if (error) {
          response.writeHead(500, "Can't process HTML file");
          response.end();
          return;
        }
        response.writeHead(200);
        response.write(file);
        response.end();
      });
      break;
    }
    case "/home": {
      const path = resolve(__dirname, "./pages/home.html");
      readFile(path, (error, file) => {
        if (error) {
          response.writeHead(500, "Can't process HTML file");
          response.end();
          return;
        }
        response.writeHead(200);
        response.write(file);
        response.end();
      });
      break;
    }
    case "/authenticate": {
      let data = "";
      request.on("data", (chunk) => {
        data += chunk;
      });
      request.on("end", () => {
        const params = parse(data);
        response.writeHead(301, {
          Location: "/home",
        });
        response.end();
      });
      break;
    }
    default: {
      response.writeHead(404, "Service not found");
      response.end();
    }
  }
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}.`);
});
