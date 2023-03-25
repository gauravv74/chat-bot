class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage(
      "Hello, Greetings from TravelPedia!! What brings you here today."
    );
    this.updateChatbotState(greetingMessage);
  }
  noMessage() {
    const noMessage = this.createChatBotMessage("I Can't Understand That");
    this.updateChatbotState(noMessage);
  }
  agent() {
    const noMessage = this.createChatBotMessage(
      "If you need to contact us directly, feel free to contact us at contact@travelpedia.com - we'll do our best to help you!"
    );
    this.updateChatbotState(noMessage);
  }
  feedback() {
    const noMessage = this.createChatBotMessage(
      "Thanks for Your Feedback, feel free to contact us at contact@travelpedia.com - we'll do our best to help you!"
    );
    this.updateChatbotState(noMessage);
  }
  sales() {
    const greetingMessage = this.createChatBotMessage(
      "What do you want to talk about: 1.Pricing 2.Product features 3. Call with sales"
    );
    this.updateChatbotState(greetingMessage);
  }
  paris() {
    const grret = this.createChatBotMessage(
      "There are so many amazing attractions in Paris! Some must-sees include the Eiffel Tower, the Louvre Museum, Notre-Dame Cathedral, and the Palace of Versailles. You may also want to explore the Montmartre neighborhood, stroll along the Seine River, and enjoy a picnic in the Luxembourg Gardens."
    );
    this.updateChatbotState(grret);
  }
  default() {
    const greetingMessage = this.createChatBotMessage(
      "Sorry, I didn't get you."
    );
    this.updateChatbotState(greetingMessage);
  }
  loveMessage() {
    const greetingMessage = this.createChatBotMessage("Love You Too!");
    this.updateChatbotState(greetingMessage);
  }
  london() {
    const greetingMessage = this.createChatBotMessage("Some popular tourist attractions in London include the Tower of London, the British Museum, and the London Eye.");
    this.updateChatbotState(greetingMessage);
  }

  handleAdmissionsList = () => {
    const message = this.createChatBotMessage(
      "Some outdoor adventure destinations include Banff National Park in Canada, Queenstown in New Zealand, and Costa Rica."
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
