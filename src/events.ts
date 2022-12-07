import { NotificationName } from './notifications'
import { ServiceNames } from './constants'

export enum ProjectEvents {
  ProjectPaused = 'project.paused',
  ProjectRestored = 'project.restored',
  ProjectRestoredFromLogicalBackup = 'project.restored_from_logical_backup',
  ProjectRestoredFromPitr = 'project.restored_from_pitr',
  ProjectFailedRestorationFromPitr = 'project.failed_restoration_from_pitr',
  ProjectPendingShutdown = 'project.pending_shutdown_notification',
  ProjectShutdownEligible = 'project.shutdown_eligible',
  ProjectJwtSecretUpdateStatusChange = 'project.jwt_secret_update_status_change',
  ProjectServiceConfigUpdate = 'project.service_config_update',
  ProjectSansKpsMigrationInitiated = 'project.sans_kps_migration_initiated',
  ProjectSansKpsMigrationCompleted = 'project.sans_kps_migration_completed',
  ProjectDatabaseUpgradeStatusChange = 'project.database_upgrade_status_change',

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
  UpdatedAPIGatewayConfiguration,
}

export enum JwtSecretUpdateError {
  PostgreSQLRestartFailed,
  APIServicesConfigurationUpdateFailed,
  APIServicesRestartFailed,
  DatabaseAdminAPIConfigurationUpdateFailed,
  SupabaseAPIKeyUpdateFailed,
  APIGatewayUpdateFailed,
}

export enum DatabaseUpgradeStatus {
  Upgrading,
  Upgraded,
  Failed,
}

export enum DatabaseUpgradeProgress {
  Started,
  LaunchedUpgradedInstance,
  DetachedVolumeFromUpgradedInstance,
  AttachedVolumeToOriginalInstance,
  InitiatedDataUpgrade,
  CompletedDataUpgrade,
  DetachedVolumeFromOriginalInstance,
  AttachedVolumeToUpgradedInstance,
  CompletedUpgrade,
}

export enum DatabaseUpgradeError {
  UpgradedInstanceLaunchFailed,
  VolumeDetachchmentFromUpgradedInstanceFailed,
  VolumeAttachmentToOriginalInstanceFailed,
  DataUpgradeInitiationFailed,
  DataUpgradeCompletionFailed,
  VolumeDetachchmentFromOriginalInstanceFailed,
  VolumeAttachmentToUpgradedInstanceFailed,
  UpgradeCompletionFailed,
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

export interface ServiceConfigUpdate {
  services: ServiceNames[]
  data: object
}
