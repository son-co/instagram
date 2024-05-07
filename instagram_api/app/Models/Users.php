<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
  use HasFactory;

  protected $table = 'users';
  protected $fillable = [
    'name',
    'fullname',
    'email',
    'password'
  ];

  public function posts()
  {
    return $this->hasMany(Posts::class);
  }

  public function comments()
  {
    return $this->hasMany(Comments::class);
  }

  public function savepost()
  {
    return $this->hasMany(SavePost::class);
  }

  public function favorites()
  {
    return $this->hasMany(Favorites::class);
  }

  public function follower()
  {
    return $this->hasMany(Followers::class);
  }
}
