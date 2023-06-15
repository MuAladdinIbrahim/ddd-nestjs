import ReceiveMsg from '../Application/ReceiveMsg/ReceiveMsg';

export const injections = [
  {
    provide: 'RECEIEVE_MSG',
    useExisting: ReceiveMsg,
  },
];
