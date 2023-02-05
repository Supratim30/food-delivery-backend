import app from './app.js';
import { connectDB } from './config/database.js';

connectDB();

app.get("/", (req, res) => {
      res.send("<h1>hi</h1>")
})

app.listen(process.env.PORT, () => console.log(`Server running at ${process.env.PORT}, IN ${process.env.NODE_ENV} MODE`)
);