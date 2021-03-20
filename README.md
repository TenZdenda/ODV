# ODV Web App
The main focus of this work is creating the web app which is helping the school with organizing events for students. Reason for the creation this web app was poor condition of current web app used by my high school. The new system is bringing simple design, speed optimalisation and better condition for grow in the future.

## Keywords
PHP, Laravel, REST API, Javascript, Vue.js, Web App

## Run web app
### Run composer & NPM
```
$ composer install
$ npm install
$ cp .env.example .env
```

### Configure your .env
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=db_name
DB_USERNAME=db_username
DB_PASSWORD=db_password
```

### Final steps
```
$ php artisan key:generate
$ php artisan migrate
$ php artisan db:seed
$ php artisan passport:install
```
