/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STUDENT_ID: string;
  readonly VITE_BRANCH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
