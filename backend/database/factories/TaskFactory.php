<?php

use Illuminate\Support\Facades\DB;

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Task::class, function () {
    static $maxId;
    static $i = 0; $i++;

    $nextId = ($maxId ?: $maxId = DB::table('tasks')->max('id')) + $i;

    return [
        'title' => "Задача {$nextId}",
        'date' => date(
            'Y-m-d',
            strtotime("+{$i} hours")
        ),
        'author' => "Автор {$nextId}",
        'status' => "Статус {$nextId}",
        'description' => "Описание {$nextId}",
    ];
});
