import Router from 'express';
import { BookmarksController } from '../controllers/bookmarks.controller';

const router = Router();

router.get('/', BookmarksController.getAll);

export default router;
