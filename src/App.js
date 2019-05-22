import React, {Component} from 'react';
import './App.css';
import Mic from './Mic.js'

class App extends Component {
    state = {
        result: false,
        score: 0,
        current: 1,
        questions: [
            {
                id: 1,
                content: 'Ертөнцийн цөм нь та юу?',
                answer: null,
            },
            {
                id: 2,
                content: 'Та энэ сард өөрийгөө өндрөөс унаж байна гэж зүүдэлсэн үү?',
                answer: null,
            },
            {
                id: 3,
                content: 'Та ижил хүйстэн гэдгээ бусдад хэлсэн үү?',
                answer: null,
            },
            {
                id: 4,
                content: 'Дугуйг хамгаалалтын малгайтай унж явхан зөв үү?',
                answer: null,
            },
        ],
    };
    yesAction = () => {
        this.setState((currentState) => ({
            current: currentState.current + 1,
            question: currentState.questions.map((question) => {
                if (question.id === this.state.current.id) {
                    question.answer = true
                }
                return question;
            }),
            score: currentState.score +1,
        }));
        console.log(this.state.current)
        if(this.state.questions.length <= this.state.current) {
            this.setState(()=>({
                result: true,
            }))
        }

    };
    noAction = () => {
        this.setState((currentState) => ({
            current: currentState.current + 1,
            question: currentState.questions.map((question) => {
                if (question.id === this.state.current) {
                    question.answer = false
                }
                return question;
            }),
            //score: currentState.score - 1,
        }));
        console.log(this.state.current)
        if(this.state.questions.length <= this.state.current) {
            this.setState(()=>({
                result: true,
            }))
        }
    };
  

    render() {
    return (
        <div>
            {this.state.result === false &&
            <div>
                <h1 align='center'>{this.state.questions.map((question)=>{
                    if(question.id === this.state.current) return question.content
                })}</h1>
                <div align='center'>
                    <Mic/>
                </div>
                <div align='center'>
                    <button onClick={this.yesAction} className='btn-yes'>ТИЙМ</button>
                    <button onClick={this.noAction} className='btn-no'>ҮГҮЙ</button>
                </div>
            </div>}
            {this.state.result === true &&
            <div>
                <h1 align='center'>Таны сэтгэл зүйн байдал</h1>
                {this.state.score >= this.state.questions.length/2 &&
                <div className='result' align='center'>
                    <h2 className='score-yes'>{this.state.score}/{this.state.questions.length}</h2>
                    <h3 className='yes'>ХЭВИЙН</h3>
                </div>}
                {this.state.score < this.state.questions.length/2 &&
                <div className='result' align='center'>
                    <h2 className='score-no'>{this.state.score}/{this.state.questions.length}</h2>
                    <h3 className='no'>ХЭВИЙН БУС</h3>
                </div>}
            </div>}

        </div>
    );
  }
}

export default App;
