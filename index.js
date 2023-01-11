import { createServer, get } from 'http';
import data from './data.js';
import { deleteAddress } from './delete.js';
import { getList } from './list.js';
import { getForm } from './form.js';


createServer((request, response) => {
    let responseBody;
    const parts = request.url.split('/');

    if (parts.includes('delete')) {
        data.addresses = deleteAddress(data.addresses, parts[2]);
        redirect(response, '/');
    } else if (parts.includes('new')) {
        send(response, getForm());
    } else if (parts.includes('edit')) {
        send(response, getForm(data.addresses, parts[2]));
    } else {
        send(response, getList(data.addresses));
    }

}).listen(8080, () => {
    console.log('Adressbuch ist erreichbar unter http://localhost:8080');
});

function redirect(response, to) {
    response.writeHead(302, { location: '/', 'content-type': 'text/plain' });
    response.end('302 Redirecting to /');
}

function send(response, responseBody) {
    response.writeHead(200, { 'content-type': 'text/html' });
    response.end(responseBody);
}