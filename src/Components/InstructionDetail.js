import React from 'react';
import './InstructionDetail.css';

class Instruction extends React.Component {
    

    render () {
        return (
            <div className={`card card-${ this.props.card }`}>
                {this.props.obj.map((item, i) => {
                    if(item.type==='text') {
                        return (
                            <div key={`inst${item.text}`} className={`txt ${item.classes}`}>
                                <p>{item.text}</p>
                            </div>
                        )
                    } else if (item.type==='image') {
                        return (
                            <img key={`inst${i}`} className={item.classes} src={require(`../img/${item.name}.jpg`)} alt="Connect Instance 1" />
                        )
                    } else if (item.type==='header') {
                        return (
                            <h3 className="center header" key={`inst${i}`}>{item.text}</h3>
                        )
                    } else if (item.type==='link') {
                        return (
                            <div className="txt">
                                < a href={item.link}>{item.text}</a>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}

export default Instruction;