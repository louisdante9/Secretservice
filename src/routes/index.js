import { AsyncWrapper } from '../middlewares/AsyncWrapper';
import { success } from '../utilities/helpers/response';
export const routes = ({ Router }) => {
  const router = Router();

  router.get('/', AsyncWrapper((req, res) => {
    success(res, {
      message: 'Welcome to the Secret Service API'
    });
  }))
  return router;
};
