<?php

use Illuminate\Support\Facades\DB;

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Task::class, function () {
    static $maxId;
    static $i = 1; $i++;

    $nextId = ($maxId ?: $maxId = DB::table('tasks')->max('id')) + $i;

    return [
        'title' => "Задача {$nextId}",
        'date' => date(
            'Y-m-d',
            strtotime("+{$i} hours")
        ),
    ];
});
