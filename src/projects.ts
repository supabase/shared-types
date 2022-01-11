export enum ProjectTask {
  UpdateJwt = 'update_jwt',
  UpdateSupabaseApiKey = 'update_supabase_api_key',
}

export interface UpdateJwtSecretPayload {
  user_id: number
  project_ref: string
  new_jwt_secret_encrypted: string
}

export interface UpdateSupabaseApiKeyPayload {
  project_id: number
}
