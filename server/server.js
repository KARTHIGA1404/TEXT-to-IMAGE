import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const PORT = process.env.PORT || 4000
const app=express()

app.use(express.json())
// app.use(cors({
//   origin: ["http://localhost:5173", "https://text-to-image-5fhz.vercel.app"],
//   credentials: true
// }));
const allowedOrigins = [
  "http://localhost:5173",
  "https://text-to-image-5fhz.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed for this origin"));
    }
  },
  credentials: true
}));

await connectDB()

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)
app.get('/', (req,res)=> res.send("API Working fine"))

app.listen(PORT, ()=> console.log('Server running on port '+ PORT));
