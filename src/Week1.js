import './App.css';
import {Carousel, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 

function Week2() {
    let dayName = ["Понедельник","Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
    let currentDate = new Date();
    let i = currentDate.getDay() - 1;
    if(i === -1){
        i = 0;
    }
    let days = []
    for(let j = 0; j < 6; j++){
        if(i < 6){
            days.push(i);
        } else{
            days.push(i-6);
        }
        i++;
    }

    let subject = [
        {
            week1: {
                subject1: [],
                subject2: [
                    "Проектирование сенсорных систем",
                    "Лекция",
                    "Зайцев В.М.",
                    "к.6 а.309",
                    "09:55-11:30"
                ],
                subject3: [
                    "Компьютерное моделирование сенсорных систем",
                    "Лекция",
                    "Дубовик А.В.",
                    "к.6 а.323",
                    "11:40-13:15"
                ],
                subject4: [
                    "Компьютерное моделирование сенсорных систем",
                    "Лаба",
                    "Дубовик А.В.",
                    "к.6 а.419в",
                    "13:55-15:40"
                ]
            }           
        },
        {
          week1:{
            subject1:[],
            subject2: [
                "Интегрированные технологии безопасности",
                "Лекция",
                "Костюк И.Р.",
                "к.6 а.302",
                "09:55-11:30"
            ],
            subject3: [
                "Интегрированные технологии безопасности",
                "Практика",
                "Костюк И.Р.",
                "к.6 а.419",
                "11:40-13:15"
            ],
            subject4: [
                "Сенсоры и сенсорные системы",
                "Лаба",
                "Костюк И.Р.",
                "к.6 а.419в",
                "13:55-15:40"
            ]
          }
        }, 
        {
            week1:{
                subject1:[],
                subject2: [],
                subject3: [
                    "Сенсоры и сенсорные системы",
                    "Лекция",
                    "Гулай В.А.",
                    "к.6 а.217",
                    "11:40-13:15"
                ],
                subject4: [
                    "Сенсоры и сенсорные системы",
                    "Практика",
                    "Гулай В.А.",
                    "к.6 а.419в",
                    "13:55-15:40"
                ]
            }
        },
        {
            week1:{
                subject1: [
                    "Охрана труда",
                    "Лаба",
                    "Абметко О.В.",
                    "к.1 а.32",
                    "08:00-09:35"
                ],
                subject2: [
                    "Контроль в технологии сенсоров",
                    "Практика",
                    "Гулай А.В",
                    "к.6 а.302",
                    "09:55-11:30"
                ],
                subject3: [
                    "Контроль в технологии сенсоров",
                    "Практика",
                    "Гулай А.В",
                    "к.6 а.302",
                    "11:40-13:15"
                ],
                subject4:[]
            }
        },
        {
            week1:{
                subject1:[],
                subject2: [
                    "Охрана труда",
                    "Лекция",
                    "Кот Т.П.",
                    "к.6 а.315",
                    "09:55-11:30"
                ],
                subject3: [
                    "Автоматизированная обработка системных данных",
                    "Лекция",
                    "Снигирев С.А.",
                    "к.6 а.216",
                    "11:40-13:15"
                ],
                subject4: []
            }
        },
        {
            week1:{
                subject1: [],
                subject2: [
                    "Автоматизированная обработка системных данных 18.09., 16.10., 13.11., 11.12.",
                    "Лаба",
                    "Снигирев С.А.",
                    "к.6 а.406",
                    "9:55-11:40"
                ],
                subject3: [
                    "Автоматизированная обработка системных данных 04.09., 02.10., 30.10., 27.11",
                    "Лаба",
                    "Снигирев С.А.",
                    "к.6 а.406",
                    "9:55-11:40"
                ],
                subject4: []
            }
        }
    ]
    console.log(subject[-1])
    let card = days.map((day, key) => 
        <Carousel.Item key={key}>
            <Card>
            <Card.Header>{dayName[day]}</Card.Header>
            <Card.Body>
                <Card.Title> {subject[day]?.week1?.subject1[0]} </Card.Title>
                <Card.Text>
                    <div className="type">
                        {subject[day]?.week1?.subject1[1]}
                    </div>
                    <div className="teacher">
                        {subject[day]?.week1?.subject1[2]}
                    </div>
                    <div className="cabinet">
                        {subject[day]?.week1?.subject1[3]}
                    </div>
                    <div className="time">
                    {subject[day]?.week1?.subject1[4]}
                    </div>
                </Card.Text>
                <Card.Title> {subject[day]?.week1?.subject2[0]} </Card.Title>
                <Card.Text>
                    <div className="type">
                        {subject[day]?.week1?.subject2[1]}
                    </div>
                    <div className="teacher">
                        {subject[day]?.week1?.subject2[2]}
                    </div>
                    <div className="cabinet">
                        {subject[day]?.week1?.subject2[3]}
                    </div>
                    <div className="time">
                    {subject[day]?.week1?.subject2[4]}
                    </div>
                </Card.Text>
                <Card.Title> {subject[day]?.week1?.subject3[0]} </Card.Title>
                <Card.Text>
                    <div className="type">
                        {subject[day]?.week1?.subject3[1]}
                    </div>
                    <div className="teacher">
                        {subject[day]?.week1?.subject3[2]}
                    </div>
                    <div className="cabinet">
                        {subject[day]?.week1?.subject3[3]}
                    </div>
                    <div className="time">
                    {subject[day]?.week1?.subject3[4]}
                    </div>
                </Card.Text>
                <Card.Title> {subject[day]?.week1?.subject4[0]} </Card.Title>
                <Card.Text>
                    <div className="type">
                        {subject[day]?.week1?.subject4[1]}
                    </div>
                    <div className="teacher">
                        {subject[day]?.week1?.subject4[2]}
                    </div>
                    <div className="cabinet">
                        {subject[day]?.week1?.subject4[3]}
                    </div>
                    <div className="time">
                    {subject[day]?.week1?.subject4[4]}
                    </div>
                </Card.Text>
            </Card.Body>
            </Card>
        </Carousel.Item>
    );
  
  return (
    <Carousel variant="dark" interval={500000}> 
        {card}
    </Carousel>
  );
}

export default Week2;
