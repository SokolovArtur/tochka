## Установка
* В файле `docker-compose.yml` заменить `volumes` на корректный.
Либо раскомментировать `COPY . .` в соответствующих `Dockerfile`.
* Запустить Docker Compose: `docker-compose up --build -d`
* Войти в контейнер бекенда: `docker exec -ti tochka_backend_1 /bin/bash`
* Запустить Composer: `php composer.phar install --prefer-dist`
* Измененить права доступа к файлам и директориям: `chmod -R 777 bootstrap/cache storage`
* В файле `.env` нужно прописать настройки.
* Запустить миграцию: `php artisan migrate`
* Сгенерировать список задач: `php artisan task:create --amount=1000`
* Выйти из контейнера бекенда: `exit`
* **PROFIT**

## REST API
GET /api/v1/task - Возвращает список задач.

GET /api/v1/task/:id - Детальная информация о задаче. id - идентификатор задачи.

## Frontend
Фронтенд доступен по адресу localhost:3000

Не забудьте указать адрес сервера в файле `frontend/app/services/task/task.service.ts`.
