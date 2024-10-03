import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes'

const app = express();
const PORT= 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect = ('')

routes(app);
app.get('/',(req,res)=>
res.send(`node and express is running on port ${PORT}`)
);

app.listen(PORT, ()=>
    console.log('server running')
);