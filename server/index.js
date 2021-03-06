import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'

const app = express();
// express middleware to connect router to application
// set up starting pad for all the routes inside the posts.js
app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: "true"}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true"}));
app.use(cors());

// https://www.mongodb.com/cloud/atlas
const CONNECTION_URL = 'mongodb+srv://amylzting:123@cluster0.wtt81.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// connect to the database
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
