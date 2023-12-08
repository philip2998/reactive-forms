"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
const apiProxy = (0, http_proxy_middleware_1.createProxyMiddleware)("/", {
    target: "https://hooks.zapier.com/hooks/catch/17278310/3fadr5h/",
    changeOrigin: true,
});
app.use("/", apiProxy);
app.listen(port, () => {
    console.log(`Proxy server is running on http://localhost:${port}`);
});
