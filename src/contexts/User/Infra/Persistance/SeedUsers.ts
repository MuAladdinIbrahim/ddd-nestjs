import { Injectable, Logger } from '@nestjs/common';
import UserModel from './User.model';

@Injectable()
export default class SeedUsers {
  async run() {
    const User: any = UserModel;
    if (process.env.STAGE !== 'dev') {
      Logger.warn('Seeding can only be done in dev stage');
      return;
    }
    try {
      Logger.log('Seeding users started...');
      const count = await User.count();
      if (count > 0) {
        Logger.warn('Seeding can not be done as UserModels table has records');
        return;
      }
      await User.bulkCreate([
        { name: 'Ahmed', email: 'ahmd@gmail.com' },
        { name: 'Ali', email: 'ali@gmail.com' },
        { name: 'Mohammed', email: 'mohamed@gmail.com' },
        { name: 'Sayed', email: 'sayed@gmail.com' },
        { name: 'Mahmoud', email: 'mahmoud@gmail.com' },
        { name: 'Magdy', email: 'magdy@gmail.com' },
      ]);
      Logger.log('Seeding users should be FINISHED...');
    } catch (error) {
      Logger.error(`[SeedUsers.run] Seeding error: ${error}`);
      throw new Error(`[SeedUsers.run] error: ${error}`);
    }
  }
}
// Maybe sequlize migrations be a little bit better.
