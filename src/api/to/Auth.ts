export interface AuthRequest {
  code: string;
}

export interface AuthResponse {
  token: string,
  exp: string
}
