class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      var lowerCaseMessage = message.toLowerCase().split(" ").join("");
      
      if (lowerCaseMessage.includes("hello")||lowerCaseMessage.includes("hi")||lowerCaseMessage.includes("hey")) {
        this.actionProvider.greet()
      }
      else if(lowerCaseMessage.includes("love")){
        this.actionProvider.loveMessage()
      }
      else  if (lowerCaseMessage ==="") {
        this.actionProvider.noMessage();
      }
      else  if (lowerCaseMessage.includes("london")) {
        this.actionProvider.london();
      }
      else  if (lowerCaseMessage.includes("adventure")) {
        this.actionProvider.handleAdmissionsList();
      }
      else if (lowerCaseMessage.includes("talk to agent")||lowerCaseMessage.includes("real person")||lowerCaseMessage.includes("connect to agent")||lowerCaseMessage.includes("talk with human")||lowerCaseMessage.includes("agent please")||lowerCaseMessage.includes("agent")) {
        this.actionProvider.agent();
      }
      else  if (lowerCaseMessage.includes("feedback")||lowerCaseMessage.includes("complaints")||lowerCaseMessage.includes("review")||lowerCaseMessage.includes("service")||lowerCaseMessage.includes("damaged")||lowerCaseMessage.includes("not happy")) {
        this.actionProvider.feedback()
      }
      else if (lowerCaseMessage.includes("paris")){
        this.actionProvider.paris()
      }
     
      else if (lowerCaseMessage.includes("sales")||lowerCaseMessage.includes("want to buy")||lowerCaseMessage.includes("question about")||lowerCaseMessage.includes("interested in")||lowerCaseMessage.includes("question")){
        this.actionProvider.sales()
      }
      else
      {
        this.actionProvider.default()
      }
     //add more cases here if needed and define functions in ActionProvider.js file
    }

}
  export default MessageParser
