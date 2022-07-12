

function game(){


    let arr = ['bua','keo','bao']
    let player = arr[Math.floor(Math.random()*3)];
    let computer = arr[Math.floor(Math.random()*3)];

    console.log(`Player is ${player}`)
    console.log(`Computer is ${computer}`)

    if( player == computer ){

        console.log('=> Player and Computer are equal')
        return;

    }

    switch( player ){

        case 'bua':{
            if( computer == 'keo'){
                console.log('=> Player win')
            }else{
                console.log('=> Computer win')
            }
            break;
        }

        case 'keo':{
            if( computer == 'bua'){
                console.log('=> Computer win')
            }else{
                console.log('=> Player win')

            }
            break;
        }

        case 'bao':{
            if( computer == 'keo'){
                console.log('=> Computer win')
            }else{
                console.log('=> Player win')

            }
            break;
        }
    }

    return;


}


game();
