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

  return router;
};
