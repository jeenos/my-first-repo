const day = 'неділя';
switch (day) {
    case 'понеділок':
    case 'вівторок':
    case 'середа':
    case 'четверг':
        console.log('робота');
        break;
    case 'пятниця':
        console.log('сходи за пивом вмагазин');
        break;
    case 'субота':
    case 'неділя':
        console.log('вихідні');
        break;
    default: console.log('undefined day');
}
