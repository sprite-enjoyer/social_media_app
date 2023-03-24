import express from 'express';
import { userRouter } from './users/userRoutes';

const app = express();
app.use(express.json());
app.use("/users", userRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

