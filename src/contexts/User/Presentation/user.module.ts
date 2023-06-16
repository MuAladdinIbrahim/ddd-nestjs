import { Module, OnModuleInit } from '@nestjs/common';
import { UserModel } from '../Infra/Persistance/User.model';
import { SequelizeModule } from '@nestjs/sequelize';
import SeedUsers from '../Infra/Persistance/SeedUsers';

@Module({
  imports: [SequelizeModule.forFeature([UserModel])],
  providers: [SeedUsers],
})
export class UserModule implements OnModuleInit {
  constructor(private readonly seedUsers: SeedUsers) {}

  async onModuleInit() {
    await this.seedUsers.run();
  }
}
