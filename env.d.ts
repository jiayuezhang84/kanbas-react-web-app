interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_REACT_APP_REMOTE_SERVER: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  