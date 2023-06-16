import ReceiveMsg from '../Application/ReceiveMsg/ReceiveMsg';
import Coordinator from '../Domain/Coordinator';
import EventQueue from '../Infra/Queue';

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
];
