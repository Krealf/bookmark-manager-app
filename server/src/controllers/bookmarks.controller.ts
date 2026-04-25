import { Request, Response } from 'express';
import { BookmarksService } from '../services/bookmarks.service';

export const BookmarksController = {
  getAll(_: Request, res: Response) {
    const data = BookmarksService.findAll();
    res.json(data);
  },
};
