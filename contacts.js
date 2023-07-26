// Lista de contactos con datos predefinidos

let contacts = [
  {name: "Simon Bastidas"},
  {name: "Enedina Mora"},
  {name: "Andres Montenegro"},
]

// Función para añadir un nuevo contacto a una lista

function addContact(name) {
  contacts.push({ name });
}

// Función para eliminar un contacto existente de la lista

function deleteContact(name) {
  contacts = contacts.filter(contact => contact.name !== name);
}

// Función para imprimir los contactos presentes en la lista

function printContacts() {
  console.log("Contacts:");
  contacts.forEach(contact => console.log(contact.name));
}