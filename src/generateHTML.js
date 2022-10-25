function employeeInfo(employee) {
    if (employee.role == "Manager") {
        return `Office Number: ${employee.officeNum}`
    }
    else if (employee.role == "Engineer") {
        return `GitHub: <a href="https://github.com/${employee.github}">${employee.github}</a>`
    }
    else {
        return `School: ${employee.school}`
    }
}

function renderCards(data) {
    let cards = ``
    for (let i = 0; i < data.length; i++) {
        cards = cards.concat(`
    <div class="card mb-4 ml-4 mr-4">
    <header class="card-header">
        <p class="card-header-title">
            ${data[i].name}
        </p>
    </header>
    <div class="card-content">
        <div class="table-container">
            <table class="table">
                <tbody>
                    <tr>
                        <td>Id: ${data[i].id}</td>
                    </tr>
                    <tr>
                        <td>Email: <a href = "mailto: ${data[i].email}">${data[i].email}</a></td>
                    </tr>
                    <tr>
                        <td>${employeeInfo(data[i])}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
    `)
    }
    return cards;
}

function generateHTML(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <link rel="stylesheet" href="./style.css">
    </head>

    <body>
    <section class="hero mb-5">
        <div class="hero-body has-text-centered">
            <p class="title">
                My Team
            </p>
        </div>
    </section>
    </body>
    ${renderCards(data)}
    </html>
    `
}

module.exports = generateHTML;