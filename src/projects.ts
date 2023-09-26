export enum ProjectTask {
  UpdateJwt = 'update_jwt',
  UpdateSupabaseApiKey = 'update_supabase_api_key',
}

export interface UpdateJwtSecretPayload {
  user_id: number
  project_ref: string
  new_jwt_secret_encrypted: string
  change_tracking_id: string
}

export interface UpdateSupabaseApiKeyPayload {
  project_id: number
  next_api_key_supabase_encrypted: string
}

export enum InitializationPayloadVersion {
  Version1 = 1,
}

export enum InitializationType {
  NewProject = 'new_project',
  Restore = 'restore',
}

export interface ProjectInitializationBasePayload {
  anon_key_encrypted: string
  api_id: string
  initialization_type: InitializationType
  payload_version: InitializationPayloadVersion
  project_id: number
  service_key_encrypted: string
  database_id: number
}

export interface NewProjectInitializationPayload extends ProjectInitializationBasePayload {
  auth_site_url: string
  db_sql: string
}

export interface RestoreProjectPayload extends ProjectInitializationBasePayload {
  backup_id: number
}

export enum BackupSchedulePayloadType {
  Create = 'create',
  Update = 'update',
  Delete = 'delete',
}

export interface BackupScheduleBasePayload {
  ref: string
  payload_type: BackupSchedulePayloadType
}

export interface CreateBackupSchedulePayload extends BackupScheduleBasePayload {
  time_of_day_utc: string // 'hh:mm:ss'
}

export interface UpdateBackupSchedulePayload extends BackupScheduleBasePayload {
  schedule_id: string
  time_of_day_utc: string // 'hh:mm:ss'
}

export interface DeletBackupSchedulePayload extends BackupScheduleBasePayload {
  schedule_id: string
}
