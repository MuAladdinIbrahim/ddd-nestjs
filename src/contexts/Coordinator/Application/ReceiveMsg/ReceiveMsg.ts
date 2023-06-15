export default class ReceiveMsg {
  constructor() {
    // TODO inject queue
  }

  receive(input: { data: any; id: any }) {
    // TODO push the message to its corresponding queue
    console.log('Message received');
  }
}
