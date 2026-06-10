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
        dialogsData: [{
                id: 1,
                name: 'Maldives girl',
                src: 'https://www.meme-arsenal.com/memes/6b5a608b4cbea75463fd557bde26f20a.jpg',
            },
            {
                id: 2,
                name: 'Jimmy Neutron',
                src: 'https://www.meme-arsenal.com/memes/74bfca3625d80ea5fd13f6645a6c4cf0.jpg',
            },
            {
                id: 3,
                name: 'Hobbiton',
                src: 'https://www.meme-arsenal.com/memes/0ca4628e6012b07c502d5c0b23c19217.jpg',
            },
        ],
        messagesData: [
            { id: 1, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, id nostrum!' },
            { id: 2, message: 'Dolor incidunt expedita est eveniet soluta.' },
            { id: 3, message: 'Ab nostrum deserunt, provident obcaecati beatae laborum cum minima unde officia consectetur!',
            },
        ],
    },
    newsPage: {
        newsData: [
            { id: 1, title: 'React Router updated', description: 'Routes now render profile, dialogs, news, music and settings pages.' },
            { id: 2, title: 'New profile post draft', description: 'The profile page keeps posts in the shared application state.' },
            { id: 3, title: 'Community digest', description: 'Small UI templates were added for static pages.' },
        ],
    },
    musicPage: {
        tracksData: [
            { id: 1, artist: 'Daft Punk', title: 'Digital Love', duration: '5:01' },
            { id: 2, artist: 'Moby', title: 'Porcelain', duration: '4:01' },
            { id: 3, artist: 'The Chemical Brothers', title: 'Galvanize', duration: '6:33' },
        ],
    },
    settingsPage: {
        settingsData: [
            { id: 1, label: 'Profile visibility', value: 'Public' },
            { id: 2, label: 'Notifications', value: 'Enabled' },
            { id: 3, label: 'Theme', value: 'Default' },
        ],
    },
    sidebar: {},
};

export default state;
