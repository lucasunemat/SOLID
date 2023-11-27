/*eslint-disable*/

import { MessagingProtocol } from '../classes/interfaces/messaging-protocol';

export class Messaging implements MessagingProtocol{
  sendMessage(msg: string): void { //potencial atributo que não é responsabilidade do carrinho
    console.log('Mensagem enviada: ', msg);
  }
}
