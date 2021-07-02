let state = {
    profilePage: {
        postsData: [{
                id: 1,
                message: 'Hello, how are you?',
                likesCount: 10,
                src: 'https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg',
            },
            {
                id: 2,
                message: 'I am fine!',
                likesCount: 20,
                src: 'https://images.ua.prom.st/1440764527_saharnaya-kartinka-lyubov.jpg',
            },
        ],
    },
    dialogsPage: {
        dialogsData: [
            { id: 1, name: 'Майк Дельфино' },
            { id: 2, name: 'Карлос Солис' },
            { id: 3, name: 'Том Скаво' },
        ],
        messagesData: [
            { id: 1, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, id nostrum!' },
            { id: 2, message: 'Dolor incidunt expedita est eveniet soluta.' },
            {
                id: 3,
                message: 'Ab nostrum deserunt, provident obcaecati beatae laborum cum minima unde officia consectetur!',
            },
        ],
    },
};

export default state;