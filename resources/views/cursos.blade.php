<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
   <form action="{{route('cursos.store')}}" method="post">
    @csrf
    <input type="text" name="nombre" placeholder="name">
    <input type="text" name="edad">
    <button>kd</button>

   </form>
</body>
</html>
