<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Followers extends Model
{
    use HasFactory;
    protected $table = 'follower';
    public function user()
    {
        return $this->belongsTo(Users::class);
    }
}
