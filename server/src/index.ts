import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import BookmarkRouter from './routes/bookmarks.routes';

dotenv.config(); // Загрузка переменных из .env в переменные окружения process.env

const app = express(); // Создание приложения
const PORT = process.env.PORT || 3001; // Определение порта

app.use(cors()); // Добавление заголовков Access-Control-Allow-Origin
app.use(express.json()); // Извлечение JSON данных

app.use('/api/bookmarks', BookmarkRouter); // Говорим использовать middleware Bookmark по пути /api/bookmarks

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
