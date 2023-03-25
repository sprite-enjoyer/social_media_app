import express from 'express';
import { userRouter } from './users/userRoutes';
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/users", userRouter);
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

