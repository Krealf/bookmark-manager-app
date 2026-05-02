// Записываем BASE URL на который будут идти запросы
const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001';

// Async функция с передачей своего типа, которая принимает path и параметры, а возвращает Promise переданного типа
async function request<T>(path: string, init?: RequestInit): Promise<T> {
  // Создаём запрос по BASE_URL + Path
  const res = await fetch(`${BASE_URL}${path}`, init);

  // Если запрос ошибочный, то возвращаем ошибку со статусом и текстом
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${res.statusText}`);
  }

  // В случае успешного запроса читаем запрос в виде json и отдаём как Promise
  return (await res.json()) as Promise<T>;
}

// Объект api с методами
export const api = {
  // Метод get принимает тип того, что мы хотим ожидать
  get: <T>(path: string) => request<T>(path),

  post: <T>(path: string, body: unknown) =>
    request<T>(path, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    }),

  patch: <T>(path: string, body: unknown) =>
    request<T>(path, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    }),

  delete: <T>(path: string) =>
    request<T>(path, {
      method: 'DELETE',
    }),
};
