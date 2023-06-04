import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

// Routes:
import WorkerRoute from'./routes/worker.js';
import newCustomerRoutes from './routes/newCustomer.js';
import User from './models/newCustomerUser.js';
const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/customers',newCustomerRoutes);
app.use('/workers',WorkerRoute);


app.post('/login',async(req,res)=>{
    const { email, password } = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message:"Your Email Not Found."});
        }
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    } 
});


const CONNECTION_URL = 'mongodb+srv://anserShafiq:l1f18bscs0296@forletsconstruct.k8gilwd.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>app.listen(PORT, () => console.log(`Server started to run on PORT: ${PORT}`)))
.catch((error) => console.log(error.message));

// mongoose.set('useFineAndModify',false);
