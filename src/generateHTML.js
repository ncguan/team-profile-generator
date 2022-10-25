function renderCards(data) {
    let cards = ``
    for (let i=0; i<data.length; i++){
    cards=cards.concat(`
    <div class="card">
    <header class="card-header">
        <p class="card-header-title">
            Name of Employee
        </p>
    </header>
    <div class="card-content">
        <div class="table-container">
            <table class="table">
                <tbody>
                    <tr>
                        <td>Name: ${data[i].name}</td>
                    </tr>
                    <tr>
                        <td>Id: ${data[i].id}</td>
                    </tr>
                    <tr>
                        <td>Office: ${data[i].office}</td>
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