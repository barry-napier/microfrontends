export interface UserInfo {
  id: string;
  name: string;
  email: string;
  roles: string[];
  preferences?: {
    theme?: 'light' | 'dark';
    language?: string;
  };
}

export interface AppConfig {
  version: string;
  environment: 'development' | 'staging' | 'production';
  features: {
    [key: string]: boolean;
  };
}

export interface GlobalContext {
  userInfo: UserInfo;
  config: AppConfig;
  // Add more context properties as needed
}
