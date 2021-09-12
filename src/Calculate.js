import Week1 from './Week1';
import Week2 from './Week2';
import moment from 'moment';
import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap'
let currentWeek = moment().format('w');
let numOfWeek;
let renderWeek;


function Calculate(){
    if(currentWeek % 2 === 0){
        renderWeek = <Week2/>
        numOfWeek = 2;
      } else{
        renderWeek = <Week1/>
        numOfWeek = 1;
      }

    const toFirstPage = () => currentWeek = 1;
    const toSecondPage = () => currentWeek = 2; 

    return (
        <div>
            <div>Сейчас показана {numOfWeek} неделя</div>
            {/* <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={toFirstPage}>Первая неделя</Button>
            <Button variant="secondary" onClick={toSecondPage}>Вторая неделя</Button>
            </ButtonGroup> */}
            {renderWeek}
        </div>
    );
    
}
export default Calculate;