# Laravel Nuxt Vuetify 

 
> A Laravel Nuxt Vuetify starter project template.

<p align="center">
<img src="https://i.imgur.com/NHFTsGt.png">
</p>

## Features

- Laravel 5.7 
- Nuxt 2.3 
- Vuetify 1.3
- VueI18n + ESlint
- Multiple layouts
- Authentication with JWT tymon/jwt-auth
- Cors with barryvdh/laravel-cors 

## Installation
- `git clone`

#### Backend laravel api setup
- `cd /backend`
- Edit `.env` and set your database connection details
- `composer install`
- `php artisan jwt:secret`
- `php artisan key:generate`
- `php artisan migrate`
- `php artisan serve`

#### Frontend nuxt 
- `cd /frontend`
- Edit `.env` and set your api url, default - localhost:8000
- `npm i`
- `npn run dev`

