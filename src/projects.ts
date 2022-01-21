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
}

export interface NewProjectInitializationPayload extends ProjectInitializationBasePayload {
  auth_site_url: string
  db_sql: string
}

export interface RestoreProjectPayload extends ProjectInitializationBasePayload {
  backup_id: number
}
