import { AsyncWrapper } from '../middlewares/AsyncWrapper';
import { success } from '../utilities/helpers/response';
import { register, login } from '../controllers/userController';
export const routes = ({ Router }) => {
  const router = Router();

  router.get('/', AsyncWrapper((req, res) => {
    success(res, {
      message: 'Welcome to the Secret Service API'
    });
  }))
  router.post('/register', AsyncWrapper(register))
  router.post('/login', AsyncWrapper(login))

  router.get("*",  (req, res)=> {
    res
      .status(404)
      .send({ message: "you are trying to access an unknow route" });
  });

  return router;
};
