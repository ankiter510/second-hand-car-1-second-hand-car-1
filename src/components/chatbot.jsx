import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSend = () => {
    if (userInput.trim()) {
      const newMessages = [
        ...messages,
        { sender: 'user', text: userInput },
        { sender: 'bot', text: getBotResponse(userInput) },
      ];
      setMessages(newMessages);
      setUserInput('');
    }
  };

  const getBotResponse = (message) => {
    const msg = message.toLowerCase();

    // Common responses for greetings
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return 'Hello! How can I assist you today?';
    }

    // Responses for buying used cars
    if (msg.includes('buy used car') || msg.includes('buy car') || msg.includes('car purchase')) {
      return 'I can help you with that! What kind of car are you looking for? Do you have any specific brand or model in mind?';
    }

    // Price related responses
    if (msg.includes('price') || msg.includes('how much') || msg.includes('cost')) {
      return 'Could you please provide the car make, model, and year so I can check the price for you?';
    }

    // Responses for car details
    if (msg.includes('car details') || msg.includes('car info') || msg.includes('information about car')) {
      return 'Sure! Please let me know the car make, model, and year to get detailed information.';
    }

    // Responses for car features
    if (msg.includes('features') || msg.includes('car features') || msg.includes('specs')) {
      return 'Let me know the model and year of the car, and I’ll provide you the features of that car.';
    }

    // Responses for location
    if (msg.includes('location') || msg.includes('where are you') || msg.includes('where can I find you')) {
      return 'We have multiple locations. Could you please provide your city or state, so I can give you the nearest dealership?';
    }

    // Responses for car types
    if (msg.includes('sedan') || msg.includes('suv') || msg.includes('hatchback') || msg.includes('convertible')) {
      return 'We have a great selection of those types! Do you have a specific model in mind, or would you like to browse our inventory?';
    }

    // Responses for financing
    if (msg.includes('finance') || msg.includes('loan') || msg.includes('payment')) {
      return 'We offer various financing options. Can you provide me with your credit score and the car model you are interested in to give you a quote?';
    }

    // Responses for car condition
    if (msg.includes('condition') || msg.includes('used') || msg.includes('new')) {
      return 'All our used cars are thoroughly inspected and certified. Would you like more information about the car condition or see a list of certified pre-owned vehicles?';
    }

    // Responses for warranties
    if (msg.includes('warranty') || msg.includes('guarantee') || msg.includes('coverage')) {
      return 'We offer warranties on all our used cars. Would you like details about our warranty options for a specific car model?';
    }

    // Responses for trade-in
    if (msg.includes('trade-in') || msg.includes('sell my car')) {
      return 'We offer trade-in options for your car! If you would like to know how much your car is worth, please provide the details of your car (make, model, year, mileage).';
    }

    // Responses for test drive
    if (msg.includes('test drive') || msg.includes('schedule test drive') || msg.includes('drive car')) {
      return 'I can help you schedule a test drive! Please provide the car model and your preferred time, and I’ll arrange it for you.';
    }

    // Responses for availability
    if (msg.includes('available') || msg.includes('in stock') || msg.includes('do you have')) {
      return 'I can check if the car is in stock for you. Please tell me the make, model, and year you are looking for.';
    }

    // Responses for vehicle inspection
    if (msg.includes('inspection') || msg.includes('check car') || msg.includes('certification')) {
      return 'All our cars are thoroughly inspected. Would you like to know more about the inspection process?';
    }

    // Responses for customer reviews
    if (msg.includes('reviews') || msg.includes('ratings') || msg.includes('testimonials')) {
      return 'We have excellent reviews! Would you like to read some customer testimonials or learn about our dealership\'s reputation?';
    }

    // Responses for general inquiries
    if (msg.includes('help') || msg.includes('assistance') || msg.includes('support')) {
      return 'How can I assist you further? Feel free to ask me anything about our cars or services!';
    }

    // Additional 50+ chatbot responses for a used car dealership
    if (msg.includes('car inspection') || msg.includes('vehicle inspection')) {
      return 'We inspect all cars before listing them. Would you like to schedule an inspection for a specific vehicle?';
    }

    if (msg.includes('car features') || msg.includes('car specs')) {
      return 'Please provide the model and year, and I’ll list the key features and specifications for you.';
    }

    if (msg.includes('condition') || msg.includes('mileage')) {
      return 'Our cars are thoroughly checked and certified. Would you like information on a specific vehicle’s mileage or condition?';
    }

    if (msg.includes('insurance')) {
      return 'We provide insurance options for all our cars. Let me know if you need a quote!';
    }

    if (msg.includes('test drive') || msg.includes('schedule a test drive')) {
      return 'I can help you schedule a test drive. Please provide your preferred time and car model!';
    }

    if (msg.includes('vehicle history') || msg.includes('car history')) {
      return 'I can provide a detailed vehicle history report for the car you are interested in. Please share the make and model.';
    }

    if (msg.includes('payment plan') || msg.includes('financing options')) {
      return 'We offer flexible payment plans. Can you provide your budget or preferred payment options?';
    }

    if (msg.includes('delivery') || msg.includes('ship car')) {
      return 'We offer home delivery for all cars. Would you like more information on delivery options?';
    }

    if (msg.includes('car brands') || msg.includes('brands available')) {
      return 'We have various brands like Honda, Toyota, BMW, Audi, and more. Which brand are you interested in?';
    }

    if (msg.includes('how to sell car') || msg.includes('sell my car')) {
      return 'Selling your car to us is easy! Just provide the details of your car, and we’ll give you an estimate right away.';
    }

    if (msg.includes('trade-in value') || msg.includes('trade in estimate')) {
      return 'We can provide a free trade-in estimate for your car. Please share the details of your car, such as make, model, year, and mileage.';
    }

    if (msg.includes('can you help me buy a car') || msg.includes('buy a car assistance')) {
      return 'I can help you! What kind of car are you looking for? Do you have a specific make, model, or budget in mind?';
    }

    if (msg.includes('car reviews') || msg.includes('car ratings')) {
      return 'You can check out reviews from customers who’ve bought cars from us. Would you like to know about specific reviews?';
    }

    if (msg.includes('certified pre-owned') || msg.includes('certified used cars')) {
      return 'We offer a wide selection of certified pre-owned cars. Would you like to see our inventory?';
    }

    if (msg.includes('car loans') || msg.includes('loan rates')) {
      return 'We have several financing options available. Let me know your details and I can suggest the best loan for you.';
    }

    if (msg.includes('why buy from us') || msg.includes('reasons to buy from you')) {
      return 'We provide certified, inspected cars, competitive prices, and flexible financing options. Plus, we have great customer service!';
    }

    if (msg.includes('car accessories') || msg.includes('car upgrades')) {
      return 'We also offer a range of car accessories and upgrades. Would you like to explore options for your car?';
    }

    if (msg.includes('how to start buying process') || msg.includes('buying process')) {
      return 'It’s simple! You can browse our available cars, select the one you like, and I can help you with the paperwork and financing options.';
    }

    if (msg.includes('can you compare cars') || msg.includes('compare cars')) {
      return 'I can compare different cars for you. Let me know the models you’re interested in and I’ll give you a detailed comparison.';
    }

    if (msg.includes('why is the price higher') || msg.includes('why this car is expensive')) {
      return 'Our cars are priced according to their condition, make, model, mileage, and demand. Would you like to see some alternative options?';
    }

    if (msg.includes('emission test') || msg.includes('pollution test')) {
      return 'We ensure all our cars pass emission tests. Would you like to check the test results for a specific car?';
    }

    if (msg.includes('test drive location') || msg.includes('where to schedule test drive')) {
      return 'We have several locations available for test drives. Please provide your location, and I’ll guide you to the nearest one!';
    }

    // Default response when the bot doesn't understand the query
    return 'Sorry, I did not understand that. Can you ask something else?';
  };

  return (
    <div style={styles.chatbotContainer}>
      <div style={styles.chatWindow}>
        <button onClick={() => window.location.reload()} style={styles.closeButton}>X</button>
        <div style={styles.chatMessages}>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                ...styles.chatMessage,
                ...(msg.sender === 'user' ? styles.userMessage : styles.botMessage),
              }}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div style={styles.chatInput}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
            style={styles.inputField}
          />
          <button onClick={handleSend} style={styles.sendButton}>Send</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  chatbotContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '300px',
    maxWidth: '100%',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 9999,
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '16px',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'red',
    cursor: 'pointer',
  },
  chatWindow: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    height: '400px',
  },
  chatMessages: {
    flex: 1,
    padding: '15px',
    overflowY: 'auto',
    maxHeight: '300px',
  },
  chatMessage: {
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '5px',
    maxWidth: '80%',
    lineHeight: '1.4',
  },
  userMessage: {
    backgroundColor: '#c8e6c9',
    color: '#2c6e3f',
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: '#e0f7fa',
    color: '#00796b',
    alignSelf: 'flex-start',
  },
  chatInput: {
    display: 'flex',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderTop: '1px solid #ddd',
  },
  inputField: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '14px',
  },
  sendButton: {
    marginLeft: '10px',
    padding: '10px 20px',
    backgroundColor: '#00796b',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ChatBot;
