export function deleteAddress(address, id) {
    const parsedId = parseInt(id, 10);
    const filteredAdress = address.filter(
        (address) => address.id !== parsedId,
    );
    return filteredAdress;
}