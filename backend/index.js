import { app } from "./src/app.js";
// import dotenv from 'dotenv';
// dotenv.config();
const PORT = process.env.PORT || 8000;

// TODO: is my server running?

// NOTE: Lines you could make use to complete this file
// process.env.PORT

app.listen(PORT, () => {
  console.info(`Running server using PORT: ${PORT}`);
});
