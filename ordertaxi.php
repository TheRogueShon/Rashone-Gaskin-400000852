<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="bootstrap-5.1.3-dist/css/bootstrap.css">
    <link rel="stylesheet" href="style.css">
    <title>Order Taxi</title>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarLinks" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarLinks">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a href="/" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="aboutus" class="nav-link">About Us</a>
                </li>
                <li class="nav-item">
                    <a href="ordertaxi" class="nav-link">Taxi</a>
                </li>
                <li class="nav-item">
                    <a href="contact" class="nav-link">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="container m-5">
        <div class="card">
            <div class="row">
                <div class="col-7 col-sm-8">
                    <img src="images/car.jpg" alt="Car image" class="img-fluid">
                </div>
                <div class="col-5 col-sm-4">
                    <div class="card-body">
                        <h5 class="card-title">Featured Car</h5>
                        <p class="card-text"></p>
                        <button id="order-1" class="btn btn-primary">Order This Vehicle</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="container m-5">
        <div class="card">
            <div class="row">
                <div class="col-7 col-sm-8">
                    <img src="images/van.jpg" alt="Van image" class="img-fluid">
                </div>
                <div class="col-5 col-sm-4">
                    <div class="card-body">
                        <h5 class="card-title">Featured Van</h5>
                        <p class="card-text"></p>
                        <button id="order-2" class="btn btn-primary">Order This Vehicle</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container m-5">
        <div class="card">
            <div class="row">
                <div class="col-7 col-sm-8">
                    <img src="images/bus.jpg" alt="Bus image" class="img-fluid">
                </div>
                <div class="col-5 col-sm-4">
                    <div class="card-body">
                        <h5 class="card-title">Featured Bus</h5>
                        <p class="card-text"></p>
                        <button id="order-3" class="btn btn-primary">Order This Vehicle</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container m-5">
        <div class="card" >
            <div class="row">
                <div class="col-7 col-sm-8"  style="height:300px;">
                    <img src="images/truck.jpg" alt="Truck image" class="img-fluid mh-100">
                </div>
                <div class="col-5 col-sm-4">
                    <div class="card-body">
                        <h5 class="card-title">Featured Truck</h5>
                        <p class="card-text"></p>
                        <button id="order-4" class="btn btn-primary">Order This Vehicle</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>