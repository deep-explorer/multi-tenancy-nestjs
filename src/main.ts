import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getConnection, getManager } from 'typeorm';
import { getTenantConnection } from './modules/tenancy/tenancy.utils';
import { tenancyMiddleware } from './modules/tenancy/tenancy.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(tenancyMiddleware);

  await getConnection().runMigrations()



  const tenants = ['1', '2']

  for (let i = 0; i < tenants.length; i ++) {

      const connection = await getTenantConnection(tenants[i]);
      await connection.runMigrations()
      await connection.close();
  }

  await app.listen(3000);
}
bootstrap();
