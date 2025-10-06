/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_KEYCLOAK_URL: string
  readonly VITE_APP_KEYCLOAK_REALM: string
  readonly VITE_APP_KEYCLOAK_CLIENT_ID: string
  readonly VITE_APP_LS_TOKEN_KEY: string
  readonly VITE_APP_LS_REFRESH_KEY: string
  readonly VITE_APP_API_URL: string
  readonly VITE_APP_WS_API_URL: string
  readonly VITE_APP_TABLEAU_API_URL: string
  readonly VITE_APP_AUTH_CREDENTIALS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
