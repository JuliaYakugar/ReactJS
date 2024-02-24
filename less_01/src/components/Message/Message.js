import './Message.css';

function Message(props) {  // ({text})  =>  <p>{text}</p>  
    return (
        <div className='message__style'>
            <p>{props.text}</p>   
        </div>
    )
}

export default Message;
