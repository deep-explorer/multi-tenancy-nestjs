import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantsModule } from './modules/public/tenants/tenants.module';
import { TenancyModule } from './modules/tenancy/tenancy.module';
import { UsersModule } from './modules/tenanted/users/users.module';

import * as ormconfig from './orm.config';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'thomasvanderstraeten',
    //   password: 'root',
    //   database: 'nestjs-multi-tenant',
    //   autoLoadEntities: true,
    // }),
    TypeOrmModule.forRoot(ormconfig),
    TenantsModule,
    TenancyModule,
    UsersModule
  ],
})
export class AppModule {}
