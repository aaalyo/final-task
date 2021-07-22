import Breadcrumb from '../Components/Breadcrumb';
import '../Assets/index.css';
import MessagesList from '../Components/ChatPage/MessagesList'
import SendMessageForm from '../Components/ChatPage/SendMessageForm'

function Chat({ counter, reloadTaskList }) {
    const breadcrumbPaths = [
        {
            link: '/',
            label: 'Home'
        },
        {
            label: 'Chat'
        }
    ]


    return (
        <div className=" mt-3 me-5 ms-5 mb-5 container">
            <div className="row">
                <Breadcrumb paths={breadcrumbPaths} />
            </div>
            <div className="row alert alert-light border bg-light overflow-auto chat">
                <div className="col">
                    <MessagesList reloadTaskList={reloadTaskList} counter={counter} />
                </div>
            </div>

            <SendMessageForm reloadTaskList={reloadTaskList} counter={counter} />
        </div>
    )
}

export default Chat