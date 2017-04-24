## Установка
* В файле `docker-compose.yml` заменить `volumes` на корректный.
Либо раскомментировать `COPY . .` в соответствующих Dockerfile.
* Запустить Docker Compose: `docker-compose up --build -d`
* Войти в контейнер бекенда: `docker exec -ti tochka_backend_1 /bin/bash`
* Установить ключ приложения: `php artisan key:generate`
* Сформируется новый файл `.env` где нужно будет прописать настройки.
* Запустить миграцию: `php artisan migrate`
* **PROFIT**
