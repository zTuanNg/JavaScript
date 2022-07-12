
function greeting(s){

    switch(s){
        case 'VN':{
            console.log('Xin chao')
            break;
        }
        case 'EN':{
            console.log('Hello')
            break;
        }
        default:
            console.log('Can not find this language')
            break;
    }
}


greeting('EN')