import { createContext, useState } from "react";
import { contacts } from "../Data/whatsappdata";
import { v4 as uuidv4 } from 'uuid'


// Creamos el contexto => instanciamos un objeto Context
const ContactsContext = createContext()

// Creamos un componente Provider
const ContactsProvider = ({ children }) => {
    // Estado de los contactos
    const [contactsData, setContactData] = useState(contacts)

    // Get Contact By Id
    const getContactById = (contactId) => {
        return contactsData.find((contact) => contact.id === Number(contactId))
    }

    // Add Messages
    const addNewMessageToContact = (message, contactId) => {
        // Actualizar el estado de los mensajes solo si hay un nuevo mensaje
        if (message !== '') {
            const messageToAdd = {
                id: uuidv4(),
                emisor: 'YO', // Cambia según quién sea el remitente
                hora: new Date().toLocaleTimeString('es-ES', { hour: 'numeric', minute: 'numeric' }), // Hora actual formateada
                status: 'no-visto', // Status inicial del mensaje
                texto: message, // El texto del input
            }


            setContactData((prevState) => {
                return prevState.map((contact) => {
                    return contact.id === Number(contactId) ? { ...contact, mensajes: [...contact.mensajes, messageToAdd] } : contact
                })
            })

            setTimeout(() => {
                setContactData((prevState) => {
                    return prevState.map((contact) => {
                        if (contact.id === Number(contactId)) {
                            return {
                                ...contact,
                                mensajes: contact.mensajes.map((msg) =>
                                    msg.id === messageToAdd.id
                                        ? { ...msg, status: 'visto' }
                                        : msg
                                ),
                            }
                        }
                        return contact;
                    })
                })
            }, 1000)

        }

    }


    return (
        <ContactsContext.Provider value={
            {
                contactsData: contactsData,
                setContactData: setContactData,
                getContactById: getContactById,
                addNewMessageToContact: addNewMessageToContact
            }
        }>
            {children}
        </ContactsContext.Provider>
    )
}

export { ContactsContext, ContactsProvider }