export function getList(address){
    return `<!DOCTYPE html>
    <html>
        <head>
            <title>Adressbuch</title>
        </head>
        <body>
            <h1>Adressbuch</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Vorname</th>
                        <th>Nachname</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                ${address.map(createRow).join('')}
                </tbody>    
            </table>
        </body>
    </html>`;
}

function createRow(address) {
    return `<tr>
                <td>${address.id}</td>
                <td>${address.firstname}</td>
                <td>${address.lastname}</td>
                <td><a href="/delete/${address.id}">delete</a></td>
            </tr>`;
}