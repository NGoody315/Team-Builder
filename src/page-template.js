function generatePage(){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Our Team</title>
        <link rel="stylesheet" href=<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="stylesheet" type="css" href="../dist/styles.css">
      </head>

      <body>
        <header>
            <div class="position-absolute top-0 start-50 translate-middle-x">
                <h1 class="title">Our Team</h1>
            </div>
            <div class="container">
                <div class="row row-cols-2">
                    <div class="col card text-white bg-primary mb-3" style="max-width: 18rem;">
                    <div class="card-header">${manager.role}</div>
                    <div class="card-body">
                        <h5 class="card-title">${manager.name}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${manager.id}</li>
                            <li class="list-group-item">Email: ${manager.email}</li>
                            <li class="list-group-item">Office: ${manager.officeNumber}</li>
                </div>
            </div>
        </header>
      </body>
      </html>
    `
}

prompt