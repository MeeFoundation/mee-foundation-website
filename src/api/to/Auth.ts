export interface AuthResponse {
  token: string,
  exp: Date
}

export interface AuthResponseTO {
  token: string,
  exp: string
}
