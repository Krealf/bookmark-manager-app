import Router from 'express';
import { BookmarksController } from '../controllers/bookmarks.controller';

// Создаём роутер
const router = Router();

// На данном роутере обрабатываем GET запрос по пути "/" и вызываем метод getAll у BookmarksController
router.get('/', BookmarksController.getAll);
router.patch('/:id', BookmarksController.updateTodoById);

export default router;
