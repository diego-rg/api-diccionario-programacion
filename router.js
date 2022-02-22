import term from "./routes/term.js";

export default app => {
    app.use("/terms", term);
}