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
  ProjectConfigUpdated = 'project.config_updated',
  ProjectDatabaseUpgradeStatusChange = 'project.database_upgrade_status_change',
  ProjectInfrastructureUpdated = 'project.infra_updated',
  ProjectInfrastructureRestarted = 'project.infra_restarted',
  PostgresqlRestart = 'postgresql.restart',
  ProjectWalgUpdated = 'project.walg_updated',
  ProjectSubscriptionUpdated = 'project.subscription_updated',
  ProjectDiskGrowth = 'project.disk_growth',
  ProjectSoftwareUpgraded = 'project.software_upgraded',
  ProjectTransfered = 'project.transfered',
  ProjectPhysicalBackupTransition = 'project.physical_backup_transition',
}

export enum ProjectDiskGrowth {
  DiskExpand = 'disk_expand',
  FilesystemGrow = 'fs_grow',
}

export enum InfraUpdateType {
  Created = 'created',
  Resized = 'resized',
  Deleted = 'deleted',
}

export enum WalgUpdateType {
  Enabled = 'enabled',
  Changed = 'changed',
  Disabled = 'disabled',
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
  Requested = '0_requested',
  Started = '1_started',
  LaunchedUpgradedInstance = '2_launched_upgraded_instance',
  DetachedVolumeFromUpgradedInstance = '3_detached_volume_from_upgraded_instance',
  AttachedVolumeToOriginalInstance = '4_attached_volume_to_original_instance',
  InitiatedDataUpgrade = '5_initiated_data_upgrade',
  CompletedDataUpgrade = '6_completed_data_upgrade',
  DetachedVolumeFromOriginalInstance = '7_detached_volume_from_original_instance',
  AttachedVolumeToUpgradedInstance = '8_attached_volume_to_upgraded_instance',
  CompletedUpgrade = '9_completed_upgrade',
}

export enum DatabaseUpgradeError {
  UpgradedInstanceLaunchFailed = '1_upgraded_instance_launch_failed',
  VolumeDetachchmentFromUpgradedInstanceFailed = '2_volume_detachchment_from_upgraded_instance_failed',
  VolumeAttachmentToOriginalInstanceFailed = '3_volume_attachment_to_original_instance_failed',
  DataUpgradeInitiationFailed = '4_data_upgrade_initiation_failed',
  DataUpgradeCompletionFailed = '5_data_upgrade_completion_failed',
  VolumeDetachchmentFromOriginalInstanceFailed = '6_volume_detachchment_from_original_instance_failed',
  VolumeAttachmentToUpgradedInstanceFailed = '7_volume_attachment_to_upgraded_instance_failed',
  UpgradeCompletionFailed = '8_upgrade_completion_failed',
}

export interface RestartServicePayload {
  project_id: number
  service_names: ServiceNames[]
}

export interface UpdateConfigPayload {
  project_id: number
  service_names: ServiceNames[]
  restart_services: boolean
  database_id?: number
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

export interface InfraCreatedPayload {
  instanceClass: string
  type: InfraUpdateType.Created
}

export interface InfraResizedPayload {
  oldInstanceClass: string
  newInstanceClass: string
  type: InfraUpdateType.Resized
}

export interface InfraDeletedPayload {
  instanceClass: string
  type: InfraUpdateType.Deleted
  removal_type: 'paused' | 'removed'
}

export type InfraUpdatePayload = InfraCreatedPayload | InfraResizedPayload | InfraDeletedPayload

export type WalgEnabledPayload = {
  type: WalgUpdateType.Enabled
  backup_period_days: number
}

export type WalgChangedPayload = {
  type: WalgUpdateType.Changed
  backup_period_days: number
}

export type WalgDisabledPayload = {
  type: WalgUpdateType.Disabled
}

export type WalgUpdatePayload = WalgEnabledPayload | WalgChangedPayload | WalgDisabledPayload

export type DiskGrowthPayload = {
  new_disk_size_gb?: number
  old_disk_size_gb?: number
  type: ProjectDiskGrowth
}

export type SubscriptionUpdatePayload = {
  old_tier: string
  new_tier: string
  original_product_ids: string[]
  updated_product_ids: string[]
}

export enum SoftwareUpgradeStatus {
  Updating = 'updating',
  Updated = 'updated',
  Failed = 'failed',
}

export type SoftwareUpgradePayload = {
  service_name: string
  version: string
}

export type ProjectTransferedPayload = {
  old_organization_id: number
  new_organization_id: number
}
