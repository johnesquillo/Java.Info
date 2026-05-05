let num = prompt('Enter a name');

switch(num) {
    case '1':
        alert('Hi, John!')
        break;

    case '2':
        alert('Hello, Jane!');
        break;

    case '3':
        alert('Hi Josh!')
        break;

    case 4:
        alert('Never exsist!')
        break;

        default:
            alert('An unknown name');
}