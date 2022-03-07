<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="bootstrap-5.1.3-dist/css/bootstrap.css">
    <link rel="stylesheet" href="style.css">
    <title>Taxi App</title>
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
    <a class="weatherwidget-io" href="https://forecast7.com/en/12d98n61d29/saint-vincent-and-the-grenadines/" data-label_1="ST VINCENT AND THE GRENADINES" data-label_2="WEATHER" data-theme="gray" >ST VINCENT AND THE GRENADINES WEATHER</a>
    <div id="carouselIndicators" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active" aria-current="true"></li>
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1"></li>
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2"></li>
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="3"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="images/kingstown-g567349bcb_1920.jpg" alt="" class="d-block w-100">
            </div> 
            <div class="carousel-item">
                <img src="images/kingstown-gd063028d9_1920.jpg" alt="" class="d-block w-100">
            </div>
            <div class="carousel-item">
                <img src="images/st-vincent-and-the-grenadines-g339fcef49_1920.jpg" alt="" class="d-block w-100">
            </div>
            <div class="carousel-item">
                <img src="images/st-vincent-and-the-grenadines-g7edc1e37d_1920.jpg" alt="" class="d-block w-100">
            </div> 
        </div>
        <a href="#carouselIndicators" class="carousel-control-prev" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </a>
        <a href="#carouselIndicators" class="carousel-control-next" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </a>
    </div>
    <div id="DateTime">Monday, 9th March 8:00am</div>
    
</body>
</script>
<script src="bootstrap-5.1.3-dist/js/bootstrap.bundle.min.js"></script>
<script>
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
</script>
</html>