let userName = 'John';

let showName = (from, text) => {
    userName = 'Jake';
    from = '*' + from + '*';
    alert(from + ':' + text);
};
let from = 'Jake';
showName(from, 'Hello');