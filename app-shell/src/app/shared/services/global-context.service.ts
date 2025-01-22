import { Injectable, signal, computed } from '@angular/core';
import {
  GlobalContext,
  UserInfo,
  AppConfig,
} from '../types/global-context.types';

@Injectable({
  providedIn: 'root',
})
export class GlobalContextService {
  private readonly defaultUserInfo: UserInfo = {
    id: '',
    name: 'Guest User',
    email: '',
    roles: ['guest'],
    preferences: {
      theme: 'light',
      language: 'en',
    },
  };

  private readonly defaultConfig: AppConfig = {
    version: '1.0.0',
    environment: 'development',
    features: {},
  };

  private readonly context = signal<GlobalContext>({
    userInfo: this.defaultUserInfo,
    config: this.defaultConfig,
  });

  // Computed signals for reactive state
  readonly userInfo = computed(() => this.context().userInfo);
  readonly config = computed(() => this.context().config);
  readonly features = computed(() => this.context().config.features);

  // Getters
  getContext() {
    return this.context;
  }

  // Setters
  setUserInfo(userInfo: Partial<UserInfo>) {
    this.context.update((ctx) => ({
      ...ctx,
      userInfo: { ...ctx.userInfo, ...userInfo },
    }));
  }

  setConfig(config: Partial<AppConfig>) {
    this.context.update((ctx) => ({
      ...ctx,
      config: { ...ctx.config, ...config },
    }));
  }

  // Feature management
  setFeature(featureName: string, enabled: boolean) {
    this.context.update((ctx) => ({
      ...ctx,
      config: {
        ...ctx.config,
        features: {
          ...ctx.config.features,
          [featureName]: enabled,
        },
      },
    }));
  }

  isFeatureEnabled(featureName: string) {
    return computed(() => this.features()[featureName] ?? false);
  }

  // User preferences
  setUserPreference<K extends keyof UserInfo['preferences']>(
    key: K,
    value: UserInfo['preferences'][K]
  ) {
    this.context.update((ctx) => ({
      ...ctx,
      userInfo: {
        ...ctx.userInfo,
        preferences: {
          ...ctx.userInfo.preferences,
          [key]: value,
        },
      },
    }));
  }

  // Reset methods
  resetToDefaults() {
    this.context.set({
      userInfo: this.defaultUserInfo,
      config: this.defaultConfig,
    });
  }

  resetUserInfo() {
    this.context.update((ctx) => ({
      ...ctx,
      userInfo: this.defaultUserInfo,
    }));
  }

  resetConfig() {
    this.context.update((ctx) => ({
      ...ctx,
      config: this.defaultConfig,
    }));
  }
}
