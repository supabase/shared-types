import { NotificationName } from './notifications'
import { ServiceNames } from './constants'

export enum ProjectEvents {
  ProjectPaused = 'project.paused',
  ProjectRestored = 'project.restored',
  ProjectPendingShutdown = 'project.pending_shutdown_notification',

  PostgresqlRestart = 'postgresql.restart',
}

export interface RestartServicePayload {
  service_names: ServiceNames[]
  project_id: number
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
