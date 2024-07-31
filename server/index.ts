import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';

import routes from './routes';
import bodyParser from 'body-parser';
import morgan from 'morgan';

dotenv.config();
const port = process.env.PORT || 3001;

const app = express();
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(bodyParser.urlencoded())
app.use(cors())

app.use('/api', routes);

app.listen(port, () => {
  console.log(`🚀 Server ready at: http://localhost:${port}`);
});

export default app;
