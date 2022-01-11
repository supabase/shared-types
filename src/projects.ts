export enum ProjectTask {
  UpdateJwt = 'update_jwt',
}

export interface UpdateJwtSecretPayload {
  user_id: number
  project_ref: string
  new_jwt_secret_encrypted: string
}
