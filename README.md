## Установка
* В файле `docker-compose.yml` заменить `volumes` на корректный.
Либо раскомментировать `COPY . .` в соответствующих `Dockerfile`.
* Запустить Docker Compose: `docker-compose up --build -d`
* Войти в контейнер бекенда: `docker exec -ti tochka_backend_1 /bin/bash`
* Измененить права доступа к файлам и директориям: `chmod -R 777 bootstrap/cache storage`
* Установить ключ приложения: `php artisan key:generate`
* Сформируется новый файл `.env` где нужно будет прописать настройки.
* Запустить миграцию: `php artisan migrate`
* Сгенерировать список задач: `php artisan task:create --amount=1000`
* Выйти из контейнера бекенда: `exit`
* **PROFIT**

## REST API
GET /api/v1/task - Возвращает список задач.
