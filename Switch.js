let name = prompt('Enter a name');

switch(name) {
    case 'John':
        alert('Hi, John!')
        break;

    case 'Jane':
        alert('Hello, Jane!');
        break;

    case 'Josh':
        alert('Hi Josh!')
        break;

    case '':
        alert('Never exsist!')
        break;

        default:
            alert('An unknown name');
}