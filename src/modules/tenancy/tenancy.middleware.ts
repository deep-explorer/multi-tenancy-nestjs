import { NextFunction, Request, Response } from "express";

const TENANT_HEADER = "x-tenant-id";

export function tenancyMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction
): void {
  // const header = req.headers[TENANT_HEADER] as string;
  // console.log('url', req.url, req);
  let tenantId;
  if (req.headers["host"].includes("localhost")) tenantId = "1";
  else tenantId = "2";
  req.tenantId = tenantId;
  next();
}
