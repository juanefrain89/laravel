<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class ClienteController extends Controller
{
        public function destroy($id){
        $data =User::find($id);
        $data->delete();
return response()->json("borrado", 200);

    }
}
