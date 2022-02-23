import term from "./routes/term.js";
import search from "./routes/search.js";

export default app => {
    app.use("/api/terms", term);
    app.use("/api", search);
}