import { NotificationName } from './notifications'
import { ServiceNames } from './constants'

export enum ProjectEvents {
  ProjectPaused = 'project.paused',
  ProjectRestored = 'project.restored',
  ProjectPendingShutdown = 'project.pending_shutdown_notification',
  ProjectShutdownEligible = 'project.shutdown_eligible',
  ProjectJwtSecretUpdated = 'project.jwt_secret_updated',
  ProjectJwtSecretUpdateFailure = 'project.jwt_secret_update_failure',
  ProjectJwtSecretUpdateProgress = 'project.jwt_secret_update_progress',

  PostgresqlRestart = 'postgresql.restart',
}

export enum JwtSecretUpdateStatus {
  Updating,
  Updated,
  Failed,
}

export enum JwtSecretUpdateProgress {
  Started,
  RestartedPostgreSQL,
  UpdatedAPIServicesConfiguration,
  RestartedAPIServices,
  UpdatedDatabaseAdminAPIConfiguration,
}

export enum JwtSecretUpdateError {
  PostgreSQLRestartFailed,
  APIServicesConfigurationUpdateFailed,
  APIServicesRestartFailed,
  DatabaseAdminAPIConfigurationUpdateFailed,
  SupabaseAPIKeyUpdateFailed,
}
export interface RestartServicePayload {
  project_id: number
  service_names: ServiceNames[]
}

export interface UpdateConfigPayload {
  project_id: number
  service_names: ServiceNames[]
  restart_services: boolean
}

export interface DismissNotificationsPayload {
  notification_ids: string[]
}

export interface CreateNotificationPayload {
  project_id: number
  notification_name: NotificationName
  data: object
  meta: object
}
