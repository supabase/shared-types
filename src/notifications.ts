export enum NotificationName {
  ProjectExceedingTierLimit = 'project.tier-limit-exceeded',
  PostgresqlBugfix = 'postgresql.bugfix',

  PostgresqlInformational = 'postgresql.informational',
}

export enum NotificationStatus {
  New = 'new',
  Seen = 'seen',
}

export enum Actions {
  UpgradeProjectToPro = 'project.upgrade-pro',
  UpgradeProjectToPayg = 'project.upgrade-payg',
  SchedulePostgresRestart = 'postgresql.restart',
}

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

export interface ProjectExceedingTierLimit {
  violations: ViolatedLimit[]
}

export interface PostgresRestartRequired {
  reason: string
  forceRestartBy?: Date
}

export interface SharedMeta {
  actions: Actions[]
}

export interface Notification {
  id: string
  project_id: number
  inserted_at: Date
  notification_name: NotificationName
  notification_status: NotificationStatus
  data: any
  meta: any
}
