import App from './Components/App';
import ReactDOM from 'react-dom'
import protobuf from "protobufjs";
import Long from "long";

protobuf.util.Long = Long;
protobuf.configure();

ReactDOM.render(
    <App/>,
    document.getElementById('root') as HTMLElement
);
// TODO: Add service worker(s)?