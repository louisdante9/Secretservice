import { AsyncWrapper } from '../middlewares/AsyncWrapper';
import { success } from '../utilities/helpers/response';
import { register, login } from '../controllers/userController';
import { add, all, one, edit } from "../controllers/textController";
import {auth} from '../utilities/helpers/auth'
export const routes = ({ Router }) => {
  const router = Router();
  router.get('/', AsyncWrapper((req, res) => {
    success(res, {
      message: 'Welcome to the Secret Service API'
    });
  }))
  router.post('/register', AsyncWrapper(register))
  router.post('/login', AsyncWrapper(login))
  router.post('/note/create', auth, AsyncWrapper(add))
  router.get('/note', auth, AsyncWrapper(all))
  router.put("/note/:id", auth, AsyncWrapper(edit));
  router.get("/note/:id", auth, AsyncWrapper(one));

  router.get("*",  (req, res)=> {
    res
      .status(404)
      .send({ message: "you are trying to access an unknow route" });
  });

  return router;
};
