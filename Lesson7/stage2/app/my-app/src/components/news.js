import React from 'react'
import axios from 'axios'
import moment from 'moment'

export default class News extends React.Component{
    constructor(props)
    {
        super(props); //глобализирует props
        this.state = {
            count: 0,
            news: []
        };
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    onButtonClick()
    {
        let count = this.state.count;
        this.setState({count: ++count});
    }
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <button onClick={this.onButtonClick}>ClickMe {this.state.count}</button>
                {this.state.news.map((item)=>(
                    <div key={item._id}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                        <p>{moment(item.date).format("DD.MM.YYYY")}</p>
                    </div>
                ))}
            </div>
        );
    }
    componentDidMount()
    {
        let news = axios.get('http://localhost:3001/news')
        .then((res)=>{
            let news = res.data;
            this.setState({news: news});
        })
        .catch((err)=> console.log(err))
        console.log(news);
    }
}