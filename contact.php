<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="bootstrap-5.1.3-dist/css/bootstrap.css">
    <link rel="stylesheet" href="style.css">
    <title>Contact Us</title>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarLinks" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarLinks">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a href="index.php" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="aboutus.php" class="nav-link">About Us</a>
                </li>
                <li class="nav-item">
                    <a href="ordertaxi.php" class="nav-link">Taxi</a>
                </li>
                <li class="nav-item">
                    <a href="contact.php" class="nav-link">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="container mt-5">
    <form>
        <div class="row mb-3">
            <label for="name" id="Name" class="col-sm-2 col-form-label">Name:</label>
            <div class="col-sm-10">
                <input type="text" class="form-control">
            </div>
        </div>
        <div class="row mb-3">
            <label for="query" id="Query" class="col-sm-2 col-form-label">Query:</label>
            <div class="col-sm-10">
                <input type="text" class="form-control">
            </div>
        </div>
        <button type="submit" id="submitQuery" class="btn btn-primary">Submit</button>
    </form>
    </div>
</body>
</html>