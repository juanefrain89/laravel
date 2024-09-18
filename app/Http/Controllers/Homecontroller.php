<?php
namespace App\Http\Controllers;
use App\Models\login;
use Illuminate\Http\Request;
use App\Models\curso;
use App\Models\Publicacion;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Jobs\Logger;

class Homecontroller extends Controller
{


    public function dispatchLogger()
    {
        $message = "Este es un mensaje de prueba para el job.";
        Logger::dispatch($message); // Ejecutar el job en segundo plano
        return response()->json(['status' => 'Job despachado']);
    }


    public function login(Request $request){
        $response = ["success" => "false"];
        $email = $request->input('email');
        $password = $request->input('password');

        if (Auth::attempt(['email' => $email, 'password' => $password])) {
            $user = auth()->user();

            if ($user) { // Verifica que el usuario autenticado no sea nulo
                if (method_exists($user, 'createToken')) { // Verifica si el método createToken existe
                    $response["token"] = $user->createToken("codi")->plainTextToken;
                    $response["success"] = "true";
                    $response["user"] = $user;

                } else {
                    $response["error"] = "Método createToken no existe en el modelo User";
                }
            }
        }

        return response()->json($response, 200);
    }


    public function kk()
    {
        // Obtén todos los usuarios
        $users = User::all();

        // Retorna los usuarios en formato JSON
        return response()->json($users);
    }


public function hola ($id){
$cursos = curso::paginate();
  return view("reac",  compact("cursos"));
}

public function registrar(Request $request){
    $response=["sucess"=>"false"];
$input =$request->all();
$user = User::create($input);
$user->assignRole("admin");
$response["sucess"]="true";
$response["token"]=$user->createToken("codi")->plainTextToken;
return response()->json($response, 200);
}



public function datos(){
$user = Publicacion::all();
$response["user"] = $user;
return response()->json($response, 200);
}

public function log(Request $request){
$response =["success" => false];
$email =$request->input("email");
$password =$request->input("password");
if(Auth::attempt(["email" => $email, "password" =>$password ])){
$user = auth()->user();
    if($user){
        if(method_exists($user, "createToken")){
            $response["token"] = $user->createToken("codi")->plainTextToken;
            $response["success"] = "true";
            $response["user"] = $user;
        }else{
            $response["error"] = "Método createToken no existe en el modelo User";
        }
    }
}
$response["error"] = "Método createToken no existe en el modelo User";
}


public function dashboard($id){
    if (auth()->check()) {
$data = User::find($id);
return Inertia::render('Welcome', [
    'user' => $data, // Pasas los datos del usuario al componente de React
]);




    }else{
        return "<h1>jaja</h1>";

    }

}

public function per($id){
    if (auth()->check()) {

return Inertia::render('Perfill');}

}



public function n($id){
    $user = User::find($id);
    $response["user"]=$user;
    return response()->json($response, 200);


}




public function edit(){
return Inertia::render("Welcome");
}

public function logout(Request $request){
    $response = ["success" => "false"];
    if (auth()->check()) {
        // Si hay un usuario autenticado, eliminar los tokens
        auth()->user()->tokens()->delete();
        $response = ["success" => "true"];
    } else {
        $response = ["error" => "No user authenticated"];
    }
   return response()->json($response, 200);
}


public function create ($id){
    $cursos = curso::all();
      return view("cursos",  compact("cursos"));
    }


    public function dispatchJob()
    {
        $message = 'Este es un mensaje de prueba para el Job Logger';
        Logger::dispatch($message);

        return response()->json(['status' => 'Job dispatched!']);
    }

public function store (Request $request){
   curso::create([
    "nombre" => $request->input("nombre"),
    "edad" => $request->input("edad")
   ]);
    }
    }
