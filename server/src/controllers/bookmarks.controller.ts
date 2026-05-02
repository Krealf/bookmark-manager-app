import { Request, Response } from 'express';
import { BookmarksService } from '../services/bookmarks.service';

// Контроллер bookmarks
export const BookmarksController = {
  // Метод getAll, который принимает пропсы Request и Response для принятия запроса и ответа на него
  getAll(_: Request, res: Response) {
    // Кладём результат вызова сервиса findAll в data
    const data = BookmarksService.findAll();

    // Отдаём ответ в виде JSON с data
    res.json(data);
  },

  // Контроллер обновления задачки по ID
  updateTodoById(req: Request<{ id: string }>, res: Response) {
    // Читаем ID из запроса
    const id = req.params.id;
    // Получаем body из запроса
    const dto = req.body;

    // Получаем обновлённую задачку
    const updated = BookmarksService.update(id, dto);
    // Возвращаем в виде ответа задачку
    res.json(updated);
  },
};
