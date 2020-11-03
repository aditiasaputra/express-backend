import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const HOST: any = process.env.HOST || "localhost";
const PORT: any = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
