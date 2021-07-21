import axios from "axios";
import { useState } from "react";

function SendMessageForm({reloadTaskList}) {
    const [saving, setSaving] = useState(false);
    const [messageAuthor, setMessageAuthor] = useState('Janis');
    const [messageText, setMessageText] = useState('');

    const updateMessageAuthor = (event) => {
        setMessageAuthor(event.target.value);
    };
    const updateMessageText = (event) => {
        setMessageText(event.target.value);
    }

    const createMessage = async () => {
        if (messageAuthor === '') {
            alert('Please fill your name!');
            return;
        }
        if (messageText === '') {
            alert('Please write your message!');
            return;
        }

        setSaving(true);

        const url = 'http://localhost:8070/chat';
        const data = {
            name: messageAuthor,
            text: messageText,
            isAnswer: false
        };
       
        try {
            await axios.post(url, data);
            setSaving(false);
            setMessageAuthor('');
            setMessageText('')
            reloadTaskList();
        } catch (e) {
            alert('Something went wrong when talking to the server');
            setSaving(false);
        }
    }

    let inputFieldAuthor = <input className="form-control" value={messageAuthor} onChange={updateMessageAuthor} />
    let inputFieldText = <textarea rows="3" className="form-control" value={messageText} onChange={updateMessageText} />
    let submitBtn = (
        <button className="btn btn-warning text-white mt-3" onClick={createMessage}>
            Send
        </button>
    )
    if (saving) {
        inputFieldAuthor = <input disabled={true} className="form-control" value={messageAuthor} onChange={updateMessageAuthor} />
        inputFieldText = <textarea disabled={true} size="350" className="form-control" value={messageText} onChange={updateMessageText} />
        submitBtn = (
            <button className="btn btn-warning text-white mt-3 disabled" onClick={createMessage} disabled={true}>
                Sending...
            </button>
        )
    }

    return (
        <div>            
            <div className="row">
                <div className="col-3 col-md-1">
                    <label>Name:</label>
                </div>
                <div className="col-9 col-md-10">
                    {inputFieldAuthor}
                </div>
            </div>
            <div className="row">
                <div className="col-3 col-md-1">
                    <label>Message:</label>
                </div>
                <div className="col-9 col-md-10">
                    {inputFieldText}
                </div>
                <div className="col-12 col-md-1">
                    {submitBtn}
                </div>
            </div>
            
        </div>
    )
}

export default SendMessageForm;
