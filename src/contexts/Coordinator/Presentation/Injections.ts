import ReceiveMsg from '../Application/ReceiveMsg/ReceiveMsg';
import Subscribe from '../Application/Subscribe/Subscribe';
import Unubscribe from '../Application/Unsubscribe/Unsubscribe';
import Coordinator from '../Domain/Coordinator';
import EventQueue from '../Infra/EventQueue';

export const injections = [
  {
    provide: 'RECEIEVE_MSG',
    useExisting: ReceiveMsg,
  },
  {
    provide: 'COORDINATOR',
    useExisting: Coordinator,
  },
  {
    provide: 'EVENT_QUEUE',
    useExisting: EventQueue,
  },
  {
    provide: 'SUBSCRIBE',
    useExisting: Subscribe,
  },
  {
    provide: 'UNSUBSCRIBE',
    useExisting: Unubscribe,
  },
];
