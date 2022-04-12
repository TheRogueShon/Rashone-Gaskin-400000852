<?php

namespace App\Http\Controllers;
use App\CalculateCost;
use Illuminate\Http\Request;

class CalculateCostController extends Controller
{
   public function getAllOrders(){
       $order = CalculateCost::get();
       return response()->json($order, 200);
   }

   public function getCost(){
       $model = new CalculateCost();
       $cost = $model->calculateCost();
       return response($cost, 200);
   }

   public function addOrder(Request $request){
    $order = CalculateCost::create([
        'email' => $request->email,
        'cellphone' => $request->cellphone,
        'cost' => $request->cost,
        'location' => $request->location,
    ]);
    return redirect()->away('http://127.0.0.1/rides');
   }
}
