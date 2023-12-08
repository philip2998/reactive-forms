import express, { Express } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import cors from "cors";

import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());

const apiProxy = createProxyMiddleware("/", {
  target: "https://hooks.zapier.com/hooks/catch/17278310/3fadr5h/",
  changeOrigin: true,
});

app.use("/", apiProxy);

app.listen(port, () => {
  console.log(`Proxy server is running on http://localhost:${port}`);
});
