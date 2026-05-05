let name = prompt('Enter a name');

switch(name) {
    case 'John':
    case 'Jane':
        alert('John or Jane');
        break;

    case 'Josh':
        alert('Hi Josh!')

    case '':
        alert('Never exsist!')
        break;

        default:
            alert('An unknown name');
}