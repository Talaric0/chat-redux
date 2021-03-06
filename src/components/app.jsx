import React from 'react';
import ChannelList from '../containers/channel_list';
import MessageList from '../containers/message_list';
//import 'emoji-mart/css/emoji-mart.css';

const App = () => {
  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
        <img className="messaging-logo" src="https://raw.githubusercontent.com/Talaric0/chat-redux/master/assets/images/logo.png" alt="logo" />
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
