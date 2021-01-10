import React, {Component} from 'react';

class Test extends Component {
        input1 = React.createRef()
    render() {
        return (
            <div>
                <input type="text" ref={this.input1} onInput={this.readInputValue}/>
            </div>
        );
    }
    readInputValue = () =>{
        console.log(this.input1.current.value)
    }
}

export default Test;