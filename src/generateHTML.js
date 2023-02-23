// create the team
const generateHTML = team => {
    const html = [];

    // create the manager html
    const generateManager = addManager => {
        return `
        <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${addManager.getName()}</h2>
            <h3 class="card-title"><i class="fa-sharp fa-solid fa-mug-hot"></i>${addManager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
            <li class="list-group-item">ID: ${addManager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${addManager.getEmail()}">${addManager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${addManager.getOfficeNumber()}</li>
            </ul>
        </div>
        </div>
                `;
    };

    // create the html for engineers
    const generateEngineer = addEngineer => {
        return `
        <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${addEngineer.getName()}</h2>
            <h3 class="card-title"><i class="fa-sharp fa-solid fa-laptop-code"></i>${addEngineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
            <li class="list-group-item">ID: ${addEngineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${addEngineer.getEmail()}">${addEngineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${addEngineer.getGitName()}" target="_blank" rel="noopener noreferrer">${addEngineer.getGitName()}</a></li>
            </ul>
        </div>
        </div>
                `;
    };

    // create the html for interns
    const generateIntern = addIntern => {
        return `
        <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${addIntern.getName()}</h2>
            <h3 class="card-title"><i class="fa-sharp fa-solid fa-user-graduate"></i>${addIntern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
            <li class="list-group-item">ID: ${addIntern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${addIntern.getEmail()}">${addIntern.getEmail()}</a></li>
            <li class="list-group-item">School: ${addIntern.getSchool()}</li>
            </ul>
        </div>
        </div>
                `;
    };

    

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(addManager => generateManager(addManager))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(addEngineer => generateEngineer(addEngineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(addIntern => generateIntern(addIntern))
        .join("")
    );

    return html.join("");
}

// export entire HTML page
module.exports = team => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Office Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/fa5fa2c0d0.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div id = 'team-header' class="col-12 mb-3 team-heading bg-danger">
                <h1 class="text-center text-white">Team Profiles</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="row team-area col-12 d-flex justify-content-center">
                ${generateHTML(team)}
                </div>
            </div>
        </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};