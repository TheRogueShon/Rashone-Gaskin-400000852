<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CalculateCost extends Model
{
    //use HasFactory;
    protected $fillable = [
                            'email',
                            'cellphone',
                            'cost',
                            'location'
                        ];
    
    public function calculateCost(){
        $date = date('w');
        if($date == 2){
            $cost = 5;
        }
        else{
            $cost = rand(10, 100);
        }
        return $cost;
    }
}
