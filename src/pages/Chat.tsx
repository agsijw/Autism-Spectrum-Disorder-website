import React from 'react';

function Chat() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">المساعد الذكي</h1>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/tOxDCcUvbynHmnhqfj1NY"
            width="100%"
            style={{
              height: '100%',
              minHeight: '700px',
              border: 'none'
            }}
            frameBorder="0"
            title="Chat Assistant"
          />
        </div>
      </div>
    </div>
  );
}

export default Chat;
