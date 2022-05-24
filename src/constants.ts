export enum ServiceNames {
  AdminApi = 'adminapi',
  ApiGateway = 'api-gateway',
  Functions = 'functions',
  Gotrue = 'gotrue',
  Kong = 'kong',
  Pgbouncer = 'pgbouncer',
  Postgresql = 'postgresql',
  Postgrest = 'postgrest',
  Realtime = 'realtime',
  Storage = 'storage',
}

export const DEFAULT_REALTIME_SLOT_NAME_WITH_WALRUS = 'realtime_rls'

export enum PermissionAction {
  ANALYTICS_READ = 'analytics:Read',
  AUTH_EXECUTE = 'auth:Execute',
  BILLING_READ = 'billing:Read',
  BILLING_WRITE = 'billing:Write',
  FUNCTIONS_READ = 'functions:Read',
  FUNCTIONS_WRITE = 'functions:Write',
  INFRA_EXECUTE = 'infra:Execute',
  SQL_SELECT = 'sql:Read:Select',
  SQL_DELETE = 'sql:Write:Delete',
  SQL_INSERT = 'sql:Write:Insert',
  SQL_UPDATE = 'sql:Write:Update',
  STORAGE_ADMIN_READ = 'storage:Admin:Read',
  STORAGE_ADMIN_WRITE = 'storage:Admin:Write',
  TENANT_SQL_ADMIN_READ = 'tenant:Sql:Admin:Read',
  TENANT_SQL_ADMIN_WRITE = 'tenant:Sql:Admin:Write',
  TENANT_SQL_CREATE_TABLE = 'tenant:Sql:CreateTable',
  TENANT_SQL_DELETE = 'tenant:Sql:Write:Delete',
  TENANT_SQL_INSERT = 'tenant:Sql:Write:Insert',
  TENANT_SQL_QUERY = 'tenant:Sql:Query',
  TENANT_SQL_SELECT = 'tenant:Sql:Read:Select',
  TENANT_SQL_UPDATE = 'tenant:Sql:Write:Update',
}
