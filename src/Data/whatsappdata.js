import avatar from '../assets/avatars/avatar-1.jpg'

const contacts = [
    {
        id: 1,
        nombre: 'Pedro',
        profilePicture: avatar,
        isVerified: true,
        isBusinessAcc: false,
        isFav: false,
        isGroup: false,
        mensajes: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola que tal?',
                status: 'visto'
            },
            {
                emisor: 'USUARIO',
                hora: '23:11',
                id: 2,
                texto: 'Si, hoy aprendi estados',
                status: 'visto'
            },
            {
                emisor: 'USUARIO',
                hora: '23:12',
                id: 3,
                texto: 'Eso que significa :cara_de_nerd:?',
                status: 'no-visto'
            },
            {
                emisor: 'YO',
                hora: '23:13',
                id: 4,
                texto: 'Estas ahi?',
                status: 'no-recibido'
            },
            {
                emisor: 'YO',
                hora: '23:13',
                id: 4,
                texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatem aperiam et rerum consectetur repellendus deserunt corporis reiciendis maiores iure error, sapiente laudantium fugiat. Ipsam ea necessitatibus impedit delectus, quos, molestias incidunt dolore cupiditate, mollitia ratione corporis. Quaerat minus saepe maiores iste laboriosam. Officia, pariatur deserunt. Dicta explicabo enim laudantium aperiam magni, libero impedit officia omnis dolor. Nam accusamus aspernatur officia, ducimus ipsam alias hic molestiae rerum commodi est illo neque laborum, tempora nesciunt in quae similique! Harum nemo eligendi repellendus officiis, aut dicta? Fugit dolore itaque ipsam dolorem reprehenderit esse non nulla delectus rerum necessitatibus optio amet, veniam quasi ad, natus magnam aliquid, minus soluta enim eveniet! Natus eligendi quas debitis numquam minima! In nostrum labore officia earum, expedita repellendus vitae itaque enim reprehenderit?',
                status: 'no-recibido'
            }
        ]
    },
    {
        id: 2,
        nombre: 'Maria R Lewis',
        profilePicture: "src/assets/avatars/avatar-2.jpg",
        isVerified: false,
        isBusinessAcc: true,
        isFav: true,
        isGroup: false,
        mensajes: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'SSup',
                status: 'visto'
            },
            {
                emisor: 'USUARIO',
                hora: '23:11',
                id: 2,
                texto: 'Si, hoy aprendi estados',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Eso que significa :cara_de_nerd:?',
                status: 'no-visto'
            },
            {
                emisor: 'YO',
                hora: '23:13',
                id: 4,
                texto: 'a',
                status: 'no-recibido'
            },
        ]
    },
    //Planes para el fin de semana
    {
        id: 3,
        nombre: 'Alison Maddocks',
        profilePicture: "src/assets/avatars/avatar-3.jpg",
        isVerified: true,
        isBusinessAcc: false,
        isFav: false,
        isGroup: false,
        mensajes: [
            { emisor: 'YO', hora: '15:00', id: 1, texto: '¿Qué haces este fin de semana?', status: 'visto' },
            { emisor: 'USUARIO', hora: '15:02', id: 2, texto: 'No sé, ¿tú tienes algo en mente?', status: 'visto' },
            { emisor: 'YO', hora: '15:05', id: 3, texto: 'Podríamos ir al cine o salir a comer', status: 'visto' },
            { emisor: 'USUARIO', hora: '15:07', id: 4, 'texto': 'Me gusta la idea del cine, ¿qué película te interesa?', status: 'visto' }
        ]
    },
    //Problema técnico
    {
        id: 4,
        nombre: 'Ana',
        profilePicture: "src/assets/avatars/avatar-4.jpg",
        isVerified: false,
        isBusinessAcc: true,
        isFav: false,
        isGroup: false,
        mensajes: [
            { emisor: 'YO', hora: '10:30', id: 1, texto: 'Hola, tengo un problema con mi computadora', status: 'visto' },
            { emisor: 'USUARIO', hora: '10:35', id: 2, texto: '¿Qué está pasando exactamente?', status: 'visto' },
            { emisor: 'YO', hora: '10:37', id: 3, texto: 'Se me congela al abrir ciertos programas', status: 'visto' },
            { emisor: 'USUARIO', hora: '10:40', id: 4, texto: '¿Has intentado reiniciarla?', status: 'visto' },
            { emisor: 'YO', hora: '10:42', id: 5, texto: 'Sí, pero sigue igual', status: 'no-visto' },
            { emisor: 'USUARIO', hora: '10:43', id: 5, texto: 'Emmmmm, bueno... suerte!', status: 'no-visto' },
        ]
    },
    //Planes para el fin de semana
    {
        id: 5,
        nombre: 'Joa Miles',
        profilePicture: "src/assets/avatars/avatar-5.jpg",
        isVerified: true,
        isBusinessAcc: false,
        isFav: true,
        isGroup: false,
        mensajes: [
            { emisor: 'YO', hora: '15:00', id: 1, texto: '¿Qué haces este fin de semana?', status: 'visto' },
            { emisor: 'USUARIO', hora: '15:02', id: 2, texto: 'No sé, ¿tú tienes algo en mente?', status: 'visto' },
            { emisor: 'YO', hora: '15:05', id: 3, texto: 'Podríamos ir al cine o salir a comer', status: 'visto' },
            { emisor: 'USUARIO', hora: '15:07', id: 4, 'texto': 'Me gusta la idea del cine, ¿qué película te interesa?', status: 'visto' }
        ]
    },
    //Problema técnico
    {
        id: 6,
        nombre: 'Shirley Schmidt',
        profilePicture: "src/assets/avatars/avatar-6.jpg",
        isVerified: false,
        isBusinessAcc: true,
        isFav: false,
        isGroup: false,
        mensajes: [
            { emisor: 'YO', hora: '10:30', id: 1, texto: 'Hola, tengo un problema con mi computadora', status: 'visto' },
            { emisor: 'USUARIO', hora: '10:35', id: 2, texto: '¿Qué está pasando exactamente?', status: 'visto' },
            { emisor: 'YO', hora: '10:37', id: 3, texto: 'Se me congela al abrir ciertos programas', status: 'visto' },
            { emisor: 'USUARIO', hora: '10:40', id: 4, texto: '¿Has intentado reiniciarla?', status: 'visto' },
            { emisor: 'YO', hora: '10:42', id: 5, texto: 'Sí, pero sigue igual', status: 'no-visto' }
        ]
    },
    {
        id: 7,
        nombre: 'Carlos',
        profilePicture: "src/assets/avatars/avatar-7.jpg",
        isVerified: false,
        isBusinessAcc: false,
        isFav: false,
        isGroup: false,
        mensajes: [
            { emisor: 'YO', hora: '19:00', id: 1, texto: '¿Conoces algún restaurante bueno cerca de aquí?', status: 'visto' },
            { emisor: 'USUARIO', hora: '19:02', id: 2, texto: 'Depende de qué tipo de comida te apetezca, ¿qué te gustaría probar?', status: 'visto' },
            { emisor: 'YO', hora: '19:05', id: 3, texto: 'Me gustaría probar algo italiano', status: 'visto' },
            { emisor: 'USUARIO', hora: '19:07', id: 4, texto: '¡Pues hay un italiano nuevo que tiene muy buenas críticas! Se llama "La Trattoria". ¿Te interesa?', status: 'visto' }
        ]
    },
    {
        id: 8,
        nombre: 'Sofi',
        profilePicture: "src/assets/avatars/avatar-8.jpg",
        isVerified: true,
        isBusinessAcc: false,
        isGroup: false,
        mensajes: [
            { emisor: 'YO', hora: '14:30', id: 1, texto: 'Hola, hice un pedido ayer y aún no lo he recibido', status: 'visto' },
            { emisor: 'USUARIO', hora: '14:35', id: 2, texto: 'Lo siento mucho por las molestias. ¿Podrías por favor facilitarme el número de pedido?', status: 'visto' },
            { emisor: 'YO', hora: '14:37', id: 3, texto: 'Claro, es el #12345', status: 'visto' },
            { emisor: 'USUARIO', hora: '14:40', id: 4, 'texto': 'Gracias. Estoy revisando el estado de tu pedido. Te enviaré una actualización lo antes posible.', status: 'visto' }
        ]
    },
    {
        id: 9,
        nombre: 'Luah Martinez',
        profilePicture: "src/assets/avatars/avatar-9.jpg",
        isVerified: false,
        isBusinessAcc: false,
        isFav: true,
        isGroup: false,
        mensajes: [
            { emisor: 'YO', hora: '20:00', id: 1, texto: '¡Hola Marta! ¿Ya tienes pensado dónde quieres ir de vacaciones este año?', status: 'visto' },
            { emisor: 'USUARIO', hora: '20:05', id: 2, texto: '¡Hola! La verdad es que estoy entre la playa y la montaña. ¿Y tú?', status: 'visto' },
            { emisor: 'YO', hora: '20:10', id: 3, texto: 'A mí me encantaría ir a la playa, pero también me llama mucho la atención hacer una ruta de senderismo. ¿Qué tal si combinamos ambas cosas?', status: 'visto' },
            { emisor: 'USUARIO', hora: '20:15', id: 4, texto: '¡Buena idea! Podríamos buscar un destino donde haya playa y montaña cerca. ¿Has pensado en algún lugar en concreto?', status: 'visto' },
            { emisor: 'YO', hora: '20:20', id: 5, texto: 'He estado viendo algunas opciones en los Alpes. Hay lugares preciosos donde puedes esquiar en invierno y hacer senderismo en verano', status: 'visto' },
            { emisor: 'USUARIO', hora: '20:25', id: 6, texto: '¡Los Alpes tienen que ser increíbles! Pero también me gustaría un lugar con más calor. ¿Qué tal las Canarias?', status: 'visto' },
            { emisor: 'YO', hora: '20:30', id: 7, texto: 'Las Canarias son una excelente opción. Tienen playas preciosas y un clima genial todo el año. Además, hay muchas rutas de senderismo', status: 'visto' },
            { emisor: 'USUARIO', hora: '20:35', id: 8, texto: '¡Me convenciste! Creo que las Canarias son perfectas. ¿Qué te parece si empezamos a buscar vuelos y alojamiento?', status: 'visto' }
        ]
    },
    {
        id: 10,
        nombre: 'Resto XYZ',
        profilePicture: "src/assets/avatars/WcDonalds.jpg",
        isVerified: true,
        isBusinessAcc: true,
        isFav: true,
        isGroup: true,
        mensajes: [
            { emisor: 'YO', hora: '13:00', id: 1, texto: 'Hola, hice un pedido hace una hora y todavía no ha llegado', status: 'visto' },
            { emisor: 'USUARIO', hora: '13:05', id: 2, texto: 'Lo sentimos mucho por la demora. ¿Podría por favor facilitarnos el número de pedido?', status: 'visto' },
            { emisor: 'YO', hora: '13:10', id: 3, texto: 'Claro, es el #67890', status: 'visto' },
            { emisor: 'USUARIO', hora: '13:15', id: 4, texto: 'Gracias. Estamos verificando el estado de su pedido. ¿Podría confirmarnos su dirección completa?', status: 'visto' },
            { emisor: 'YO', hora: '13:20', id: 5, texto: 'Sí, es Calle Mayor, 123. Piso 4, puerta B', status: 'visto' },
            { emisor: 'USUARIO', hora: '13:25', id: 6, texto: 'Perfecto. Hemos contactado con el repartidor. Debería llegar en unos 15 minutos. Disculpe nuevamente las molestias', status: 'visto' },
            { emisor: 'YO', hora: '13:40', id: 7, texto: 'Muchas gracias por la información. Les agradezco que hayan solucionado el problema tan rápido', status: 'visto' }
        ]
    },
    {
        id: 11,
        nombre: 'Ernest R',
        profilePicture: "src/assets/avatars/avatar-10.jpg",
        isVerified: false,
        isBusinessAcc: false,
        isFav: false,
        isGroup: false,
        mensajes: [
            { emisor: 'YO', hora: '22:00', id: 1, texto: 'Che, ¿viste cómo está el laburo? ¡Una cagada!', status: 'visto' },
            { emisor: 'USUARIO', hora: '22:02', id: 2, texto: '¡Ni me digas! Yo ya estoy re podrido. ¿Y vos, qué onda con la mina nueva?', status: 'visto' },
            { emisor: 'YO', hora: '22:05', id: 3, texto: '¡Uh, un quilombo bárbaro! Es re copada, pero es un poco intensa. ¿Y vos, cómo andás con el fóbal?', status: 'visto' },
            { emisor: 'USUARIO', 'hora': '22:07', id: 4, texto: '¡El Rojo sigue sin ganar un mango! ¡Qué bronca me da! ¿Vamos a tomar otra birra?', status: 'visto' }
        ]
    },

]





export { contacts }