import React from 'react';


export default class Result extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ["hello"]
        }
    }

    componentDidMount() {
        fetch("/api")
            .then(response => response.text())
            .then(response => {
                let newData = this.state.data.slice(0)
                newData.push(response);
                this.setState({ data: newData })
            }).catch(err => console.log(err))
    }

    render() {
        return(
            <div>
                {this.state.data.map((data, index) => <p key={index}>{data}</p>)}
            </div>
        )
    }
}