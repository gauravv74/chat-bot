class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    
    greet() {
      const greetingMessage = this.createChatBotMessage("Hello, Greetings from BloomHub!! What brings you here today.")
      this.updateChatbotState(greetingMessage)
    }
    noMessage(){
      const noMessage = this.createChatBotMessage("I Can't Understand That")
      this.updateChatbotState(noMessage)
    }
    agent(){
      const noMessage = this.createChatBotMessage("If you need to contact us directly, feel free to contact us at contact@BloomHub.com - we'll do our best to help you!")
      this.updateChatbotState(noMessage)
    }
    feedback(){
      const noMessage = this.createChatBotMessage("Thanks for Your Feedback, feel free to contact us at contact@BloomHub.com - we'll do our best to help you!")
      this.updateChatbotState(noMessage)
    }
    sales(){
      const greetingMessage = this.createChatBotMessage("What do you want to talk about: 1.Pricing 2.Product features 3. Call with sales")
      this.updateChatbotState(greetingMessage)
    }
    default(){
      const greetingMessage = this.createChatBotMessage("Sorry, I didn't get you.")
      this.updateChatbotState(greetingMessage)
    }
    loveMessage(){
      const greetingMessage = this.createChatBotMessage("Love You Too!")
      this.updateChatbotState(greetingMessage)
    };
    
    handleAdmissionsList = () =>{
        const message = this.createChatBotMessage(
            "Fantastic",
            {
              widget: "Admissions",
            }
          );
      
          this.updateChatbotState(message);
    }

   
    
    updateChatbotState(message) {
   
  // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
   
      
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }));
    }
  }
  
  export default ActionProvider
