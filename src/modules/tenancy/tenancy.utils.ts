import { BadRequestException } from "@nestjs/common";
import { Connection, createConnection, getConnectionManager } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

import * as tenantsOrmconfig from "../../tenants-orm.config";

export function getTenantConnection(tenantId: string): Promise<Connection> {
  const connectionName = `tenant_${tenantId}`;
  const connectionManager = getConnectionManager();

  let host;

  switch (tenantId) {
    case "1":
      host = "postgres";
      break;
    case "2":
      host = "postgres_1";
      break;
    default:
      throw new BadRequestException("No existing Tenant id");
  }

  if (connectionManager.has(connectionName)) {
    const connection = connectionManager.get(connectionName);
    return Promise.resolve(
      connection.isConnected ? connection : connection.connect()
    );
  }

  const setting = {
    ...(tenantsOrmconfig as PostgresConnectionOptions),
    name: connectionName,
    host,
  };

  console.log("connectin setting", setting);

  return createConnection({
    ...(tenantsOrmconfig as PostgresConnectionOptions),
    name: connectionName,
    host,
  });
}
