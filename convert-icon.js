const iconGen = require('icon-gen');

iconGen('./LSPD_logo.png', './', {
    report: true,
    ico: {
        name: 'icon',
        sizes: [16, 24, 32, 48, 64, 128, 256]
    }
})
.then((results) => {
    console.log('Icon erfolgreich erstellt!');
    console.log(results);
})
.catch((err) => {
    console.error('Fehler:', err);
});
