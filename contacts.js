/* Ajusta las funciones de crear y eliminar un contacto para
que puedan almacenar la siguiente información como objetos:
id, nombres, apellidos, teléfono, ubicaciones, ciudad, dirección */

let contacts = [
  {
      id: 1,
      firstName: 'Simon',
      lastName: 'Bastidas',
      phone: '1234567890',
      location: {
          city: 'Tachira',
          address: 'Av. Carabobo'
      }
  },
  {
      id: 2,
      firstName: 'Enedina',
      lastName: 'Mora',
      phone: '098765421',
      location: {
          city: 'Portuguesa',
          address: 'Av. Hilandera'
      }
  }
];

/* función para añadir un nuevo contacto a la lista pasando el id, 
firstName, lastName, teléfono, ciudad y dirección como argumentos. */

function addContact(id, firstName, lastName, phone, city, address) {
  contacts.push({
      id: id,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      location: {
          city: city,
          address: address
      }
  });
}

/* función para eliminar un contacto existente de la lista se
puede utilizar pasando el id del contacto que vayamos a eliminar. */

function deleteContact(id) {
  contacts = contacts.filter(contact => contact.id !== id);
}

/* Funcion para imprimir en la consola el nombre y apellidos
de los contactos que esten presentes en la lista. */

function printContacts() {
  console.log('Contacts:');
  contacts.forEach(contact => console.log(`${contact.firstName} ${contact.lastName}`));
}

/* Para actualizar un contacto existente en la lista pasando el nombre y apellidos antiguos
como una única cadena y el nombre y apellidos nuevos como una única cadena. La función 
encontrará el contacto con el nombre antiguo y lo actualizará con el nombre nuevo. */

function updateContact(oldName, newName) {
    let index = contacts.findIndex(contact => contact.name === oldName);
    if (index !== -1) {
        contacts[index].name = newName;
    }
}
