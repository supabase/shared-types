import { ServiceNames } from 'constants'

export enum NotificationName {
  ProjectExceedingTierLimit = 'project.tier-limit-exceeded',

  // postgresql + extensions + related services (e.g. wal2json)
  PostgresqlUpgradeAvailable = 'postgresql.upgrade-available',
  PostgresqlUpgradeCompleted = 'postgresql.upgrade-completed',

  // non-postgresql services (e.g. realtime or gotrue)
  // ProjectUpdateAvailable = 'project.update-available',
  ProjectUpdateCompleted = 'project.update-completed',

  // the freeform informational notifications are to be used sparingly, as they don't
  // really provide for e.g. i18n in any meaningful way
  // PostgresqlInformational = 'postgresql.informational',
  ProjectInformational = 'project.informational',
}

export enum NotificationStatus {
  New = 'new',
  Seen = 'seen',
}

export enum ActionType {
  UpgradeProjectToPro = 'project.upgrade',
  SchedulePostgresRestart = 'postgresql.restart',
  MigratePostgresSchema = 'postgresql.migrate',
  PgBouncerRestart = 'pgbouncer.restart',
}

export enum ActionReason {
  Apply = 'apply',
  Rollback = 'rollback',
  Finalize = 'finalize',
}

export interface Action {
  action_type: ActionType
  reason?: string | ActionReason
  deadline?: Date
}

export interface SharedMeta {
  actions_available: Action[]
}

export interface Notification {
  id: string
  project_id: number
  inserted_at: Date
  notification_name: NotificationName
  notification_status: NotificationStatus
  data:
    | ProjectExceedingTierLimitData
    | PostgresqlUpgradeData
    | ProjectUpdateData
    | ProjectInformationalData
  meta: SharedMeta
}

// ########################################
// notification type specific data objects
// ########################################

// Tier Violations

export enum ViolationType {
  Storage = 'Storage',
  Egress = 'Egress',
  AuthUsers = 'AuthUsers',
  DbSize = 'DbSize',
}

export interface ViolatedLimit {
  dimension: ViolationType
  current_value: number
}

export type ProjectExceedingTierLimitData = {
  name: NotificationName.ProjectExceedingTierLimit
  violations: ViolatedLimit[]
}

// PG Upgrades

export interface ExtensionsUpgrade {
  name: string
  version_to: string
}

export interface ServerUpgrade {
  version_to: string
}

// TODO (darora): config upgrades would also be included here, but we
// need to create a config versioning and tracking scheme first
export type PostgresqlUpgradeData = {
  name: NotificationName.PostgresqlUpgradeAvailable | NotificationName.PostgresqlUpgradeCompleted
  upgrade_type: 'postgresql-server' | 'extensions' | 'schema-migration'
  additional: ServerUpgrade | ExtensionsUpgrade
  changelog_link?: string
}

// ProjectUpdateCompleted

export interface ServiceUpgrade {
  name: ServiceNames
  version_to: string
  changelog_link?: string
}

export type ProjectUpdateData = {
  name: NotificationName.ProjectUpdateCompleted
  upgrades: ServiceUpgrade[]
}

// informational

export type LinkedButton = {
  text: string
  url: string
}

export type ProjectInformationalData = {
  name: NotificationName.ProjectInformational
  message: string
  linked_buttons?: LinkedButton[]
}
