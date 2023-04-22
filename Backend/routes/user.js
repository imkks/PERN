import express, { response } from 'express'
import * as userController from '../controllers/user.js';
import { AuthMiddleWare } from '../middlewares/authmiddleware.js';
import { MyError } from '../utils/error.js';

const userRouter=express.Router()
userRouter.use(AuthMiddleWare)

  userRouter.get('/:id', async (request, response,next) => {
      try {
        const foundUser= await userController.find(request.params.id)
        if(!foundUser)
            throw new MyError(404, 'Not Found Exception')
        response.json(foundUser);
      } 
      catch (error) {
          next(error)
      }
    
  });

export default userRouter;
