import { Inject, Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import MirrorData from './MirrorData';
import MirrorDataCommand from './MirrorDataCommand';

@CommandHandler(MirrorDataCommand)
export default class MirrorDataHandler
  implements ICommandHandler<MirrorDataCommand>
{
  constructor(@Inject('MIRROR_DATA') private readonly mirrorData: MirrorData) {}

  async execute(command: MirrorDataCommand): Promise<any> {
    Logger.log(`incoming data with id: ${command.id} is being mirrored`);
    return this.mirrorData.mirror(command.data);
  }
}
