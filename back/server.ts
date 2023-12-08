import express, { Express } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const apiProxy = createProxyMiddleware("/api", {
  target: "https://hooks.zapier.com/hooks/catch/17278310/3fadr5h/",
  changeOrigin: true,
});

app.use("/api", apiProxy);

app.listen(port, () => {
  console.log(`Proxy server is running on http://localhost:${port}`);
});
