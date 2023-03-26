import express from 'express';
import { userRouter } from './users/userRoutes';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

const options: cors.CorsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
}

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(options));

app.use("/users", userRouter);
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

