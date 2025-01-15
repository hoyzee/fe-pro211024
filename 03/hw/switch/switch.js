let productName = 'Orange'; // !== Milk
switch(productName){
    case 'cat' :
        console.log('product cat');
        break;
        case 'milk':
        case 'Milk':

            console.log('product milk');
            break;
        default:
            console.log('any info');
            break;
}
