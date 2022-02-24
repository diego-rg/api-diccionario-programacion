import term from "./routes/term.js";
import search from "./routes/search.js";
import home from "./routes/home.js";

export default app => {
    app.use("/api/terms", term);
    app.use("/api", search);
    app.use("/", home);
}