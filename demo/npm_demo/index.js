import figlet from "figlet";
const {textSync} = figlet;
console.log(figlet.textSync('Bootie!', {
    font: 'Avatar',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));
figlet.fonts(function(err, fonts) {
    if (err) {
        console.log('something went wrong...');
        console.dir(err);
        return;
    }
    console.dir(fonts);
});