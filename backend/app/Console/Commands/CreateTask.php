<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CreateTask extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'task:create
        {--amount= : Number of inserts in the table.}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Insert into tasks';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $amount = (int)$this->input->getOption('amount') ?: 1;
        factory(\App\Task::class, $amount)->create();

        $this->info('Done!');
    }
}
