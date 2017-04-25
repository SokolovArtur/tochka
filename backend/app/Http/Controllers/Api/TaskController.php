<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Генерация списка задач - трудоемкая операция,
        // а обновляются они не чаще одного раза в час.
        $result = Cache::remember('tasks', 3600, function() {
            // Количество возвращаемых задач: 1000.
            return DB::table('tasks')->orderBy('id', 'desc')->take(1000)->get();
        });

        return $result;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }
}
