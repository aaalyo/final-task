import axios from "axios";
import { useState, useEffect } from "react";
import { format } from 'date-fns';


function MessagesList({ counter, reloadTaskList }) {
    const [messages, setMessages] = useState({
        loading: true,
        items: [],
    });

    const loadMessages = async () => {
        setMessages({
            loading: true,
            items: [],
        });
        try {
            const url = 'http://localhost:8070/chat';
            const response = await axios.get(url);
            setMessages({
                loading: false,
                items: response.data,

            });

        } catch (e) {
            alert('Whoops, something went wrong');
            setMessages({
                loading: false,
                items: [],
            });
        }
    }

    useEffect(() => {
        loadMessages();
    }, [counter])

    let content = <h5>Loading...</h5>
    if (!messages.loading && messages.items.length === 0) {
        content = <h5>No messages</h5>
    } else if (!messages.loading) {
        const messagesElements = messages.items.map((message, index) => {
            reloadTaskList = { reloadTaskList };
            const time = format(new Date(message.createdAt), 'kk:mm')
            const date = format(new Date(message.createdAt), 'dd MMM yyyy')
            if (message.isAnswer) {
                return (
                    <div key={index} className="row">
                        <div className="col">
                            <div className="row alert alert-secondary d-inline-flex p-1" key={index}>
                                <div className="col-12  d-inline-flex float-end">
                                    <span className="fw-bolder text-secondary me-2">{message.name}</span>
                                    <span className="text-secondary me-1 message-date">at {time}</span>
                                    <span className="text-secondary message-date"> on {date}</span>
                                </div>
                                <div className="col-12 alert alert-light d-inline-flex float-end p-1">{message.text}</div>
                            </div>
                        </div>
                    </div>

                )
            } else {
                return (
                    <div key={index} className="row">
                        <div className="col">
                            <div className="row alert alert-warning d-inline-flex float-end  p-1" key={index}>
                            <div className="col-12  d-inline-flex float-end">
                                    <span className="fw-bolder text-secondary me-2">{message.name}</span>
                                    <span className="text-secondary me-1 message-date">at {time}</span>
                                    <span className="text-secondary message-date"> on {date}</span>
                                </div>
                                <div className="col-12 alert alert-light d-inline-flex float-end p-1">{message.text}</div>
                            </div>
                        </div>
                    </div>
                )
            }

        })

        content = (
            messagesElements
        )
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default MessagesList;