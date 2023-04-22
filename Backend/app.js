
import express from 'express'
import sequelize from  'sequelize'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.js';
import dbconn from './model/connection.js'

import { errorHandler } from './middlewares/errorhandler.js';
import postRouter from './routes/post.js';
import commentRouter from './routes/comment.js';
import authRouter from './routes/auth.js';
import cors from  'cors'
const PORT =process.env.PORT || 4000
const app = express()
app.use(cors(
  {origin:'http://localhost:3000',
  credentials:true

}
))

app.use(express.json())
app.use(cookieParser())
app.use('/',authRouter)
app.use('/users',userRouter)
app.use('/posts',postRouter)
app.use('/comments',commentRouter)

app.use(errorHandler)
app.get('/', (request, response) => {
    response.send('Hello world!');
  });
app.get('/:id',(request,response)=>{
    response.send(request.params.id)
})
app.post('/',(request, response) => {
    response.send(request.body);
  })
app.listen(PORT,()=>{
    console.log(`API Server is listening on ${PORT}`)
})