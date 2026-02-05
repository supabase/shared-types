// eslint-disable-next-line import/prefer-default-export
export const FgaPermissions = {
  USER: {
    ORGANIZATIONS_READ: {
      id: 'organizations_read',
      title: 'Read user organizations',
    },
    ORGANIZATIONS_CREATE: {
      id: 'organizations_create',
      title: 'Create organizations',
    },
    PROJECTS_READ: {
      id: 'projects_read',
      title: 'Read user projects',
    },
    SNIPPETS_READ: {
      id: 'snippets_read',
      title: 'Read user snippets',
    },
  },
  ORGANIZATION: {
    ADMIN_READ: {
      id: 'organization_admin_read',
      title: 'Read organization settings',
    },
    ADMIN_WRITE: {
      id: 'organization_admin_write',
      title: 'Manage organization settings and project transfers. Grants elevated access.',
    },
    MEMBERS_READ: {
      id: 'members_read',
      title: 'Read organization members',
    },
    MEMBERS_WRITE: {
      id: 'members_write',
      title: 'Manage organization members',
    },
    PROJECTS_READ: {
      id: 'organization_projects_read',
      title: 'Read organization projects',
    },
    PROJECTS_CREATE: {
      id: 'organization_projects_create',
      title: 'Create organization projects',
    },
  },
  PROJECT: {
    ADMIN_READ: {
      id: 'project_admin_read',
      title: 'Read project settings',
    },
    ADMIN_WRITE: {
      id: 'project_admin_write',
      title: 'Manage project settings. Grants elevated access.',
    },
    ACTION_RUNS_READ: {
      id: 'action_runs_read',
      title: 'Read project action runs',
    },
    ACTION_RUNS_WRITE: {
      id: 'action_runs_write',
      title: 'Manage project action runs',
    },
    ADVISORS_READ: {
      id: 'advisors_read',
      title: 'Read project advisor recommendations',
    },
    ANALYTICS_LOGS_READ: {
      id: 'analytics_logs_read',
      title: 'Read project log analytics',
    },
    ANALYTICS_USAGE_READ: {
      id: 'analytics_usage_read',
      title: 'Read project usage analytics data',
    },
    API_GATEWAY_KEYS_READ: {
      id: 'api_gateway_keys_read',
      title: 'Read project API keys',
    },
    API_GATEWAY_KEYS_WRITE: {
      id: 'api_gateway_keys_write',
      title: 'Manage project API keys. Grants elevated access.',
    },
    AUTH_CONFIG_READ: {
      id: 'auth_config_read',
      title: 'Read project authentication settings',
    },
    AUTH_CONFIG_WRITE: {
      id: 'auth_config_write',
      title: 'Manage project authentication settings',
    },
    AUTH_SIGNING_KEYS_READ: {
      id: 'auth_signing_keys_read',
      title: 'Read project authentication signing keys',
    },
    AUTH_SIGNING_KEYS_WRITE: {
      id: 'auth_signing_keys_write',
      title: 'Manage project authentication signing keys',
    },
    BACKUPS_READ: {
      id: 'backups_read',
      title: 'Read project backups',
    },
    BACKUPS_WRITE: {
      id: 'backups_write',
      title: 'Manage project backups',
    },
    BRANCHING_DEVELOPMENT_CREATE: {
      id: 'branching_development_create',
      title: 'Create project development branches',
    },
    BRANCHING_DEVELOPMENT_DELETE: {
      id: 'branching_development_delete',
      title: 'Delete project development branches',
    },
    BRANCHING_DEVELOPMENT_READ: {
      id: 'branching_development_read',
      title: 'Read project development branches',
    },
    BRANCHING_DEVELOPMENT_WRITE: {
      id: 'branching_development_write',
      title: 'Manage project development branches',
    },
    BRANCHING_PRODUCTION_CREATE: {
      id: 'branching_production_create',
      title: 'Create project production branches. Grants elevated access.',
    },
    BRANCHING_PRODUCTION_DELETE: {
      id: 'branching_production_delete',
      title: 'Delete project production branches. Grants elevated access.',
    },
    BRANCHING_PRODUCTION_READ: {
      id: 'branching_production_read',
      title: 'Read project production branches',
    },
    BRANCHING_PRODUCTION_WRITE: {
      id: 'branching_production_write',
      title: 'Manage project production branches',
    },
    CUSTOM_DOMAIN_READ: {
      id: 'custom_domain_read',
      title: 'Read project custom domains',
    },
    CUSTOM_DOMAIN_WRITE: {
      id: 'custom_domain_write',
      title: 'Manage project custom domains',
    },
    DATA_API_CONFIG_READ: {
      id: 'data_api_config_read',
      title: 'Read project PostgREST behavior and settings',
    },
    DATA_API_CONFIG_WRITE: {
      id: 'data_api_config_write',
      title: 'Manage project PostgREST behavior and settings',
    },
    DATABASE_READ: {
      id: 'database_read',
      title: 'Read-only project database access',
    },
    DATABASE_WRITE: {
      id: 'database_write',
      title: 'Read and write project database access. Grants elevated access.',
    },
    DATABASE_CONFIG_READ: {
      id: 'database_config_read',
      title: 'Read project database configuration',
    },
    DATABASE_CONFIG_WRITE: {
      id: 'database_config_write',
      title: 'Manage project database configuration',
    },
    DATABASE_JIT_READ: {
      id: 'database_jit_read',
      title: 'Read project database JIT settings',
    },
    DATABASE_JIT_WRITE: {
      id: 'database_jit_write',
      title: 'Manage project database JIT settings',
    },
    DATABASE_NETWORK_BANS_READ: {
      id: 'database_network_bans_read',
      title: 'Read project banned IPs',
    },
    DATABASE_NETWORK_BANS_WRITE: {
      id: 'database_network_bans_write',
      title: 'Manage project banned IPs',
    },
    DATABASE_NETWORK_RESTRICTIONS_READ: {
      id: 'database_network_restrictions_read',
      title: 'Read project network restrictions',
    },
    DATABASE_NETWORK_RESTRICTIONS_WRITE: {
      id: 'database_network_restrictions_write',
      title: 'Manage project network restrictions',
    },
    DATABASE_MIGRATIONS_READ: {
      id: 'database_migrations_read',
      title: 'Read project database migrations',
    },
    DATABASE_MIGRATIONS_WRITE: {
      id: 'database_migrations_write',
      title: 'Manage project database migrations',
    },
    DATABASE_POOLING_CONFIG_READ: {
      id: 'database_pooling_config_read',
      title: 'Read project database connection pooling',
    },
    DATABASE_POOLING_CONFIG_WRITE: {
      id: 'database_pooling_config_write',
      title: 'Manage project database connection pooling',
    },
    DATABASE_READONLY_CONFIG_READ: {
      id: 'database_readonly_config_read',
      title: 'Read project database read only mode',
    },
    DATABASE_READONLY_CONFIG_WRITE: {
      id: 'database_readonly_config_write',
      title: 'Manage project database read only mode',
    },
    DATABASE_SSL_CONFIG_READ: {
      id: 'database_ssl_config_read',
      title: 'Read project SSL configuration',
    },
    DATABASE_SSL_CONFIG_WRITE: {
      id: 'database_ssl_config_write',
      title: 'Manage project SSL for the database',
    },
    DATABASE_WEBHOOKS_CONFIG_READ: {
      id: 'database_webhooks_config_read',
      title: 'Read project webhooks triggered from the database',
    },
    DATABASE_WEBHOOKS_CONFIG_WRITE: {
      id: 'database_webhooks_config_write',
      title: 'Manage project webhooks triggered from the database',
    },
    EDGE_FUNCTIONS_READ: {
      id: 'edge_functions_read',
      title: 'Read project edge functions',
    },
    EDGE_FUNCTIONS_WRITE: {
      id: 'edge_functions_write',
      title: 'Manage project edge functions',
    },
    EDGE_FUNCTIONS_SECRETS_READ: {
      id: 'edge_functions_secrets_read',
      title: 'Read project secrets for edge functions',
    },
    EDGE_FUNCTIONS_SECRETS_WRITE: {
      id: 'edge_functions_secrets_write',
      title: 'Manage project secrets for edge functions',
    },
    INFRA_ADDONS_READ: {
      id: 'infra_add_ons_read',
      title: 'Read project project infrastructure add-ons',
    },
    INFRA_ADDONS_WRITE: {
      id: 'infra_add_ons_write',
      title: 'Manage project infrastructure add-ons',
    },
    INFRA_DISK_CONFIG_READ: {
      id: 'infra_disk_config_read',
      title: 'Read project disk configuration',
    },
    INFRA_DISK_CONFIG_WRITE: {
      id: 'infra_disk_config_write',
      title: 'Manage project disk configuration',
    },
    READ_REPLICAS_READ: {
      id: 'infra_read_replicas_read',
      title: 'Read project read replicas configuration',
    },
    READ_REPLICAS_WRITE: {
      id: 'infra_read_replicas_write',
      title: 'Manage project read replicas',
    },
    SNIPPETS_READ: {
      id: 'project_snippets_read',
      title: 'Read project code snippets',
    },
    SNIPPETS_WRITE: {
      id: 'project_snippets_write',
      title: 'Manage project code snippets',
    },
    STORAGE_READ: {
      id: 'storage_read',
      title: 'Read project file storage',
    },
    STORAGE_WRITE: {
      id: 'storage_write',
      title: 'Manage project file storage',
    },
    STORAGE_CONFIG_READ: {
      id: 'storage_config_read',
      title: 'Read project storage bucket configuration',
    },
    STORAGE_CONFIG_WRITE: {
      id: 'storage_config_write',
      title: 'Manage project storage bucket configuration',
    },
    VANITY_SUBDOMAIN_READ: {
      id: 'vanity_subdomain_read',
      title: 'Read project vanity subdomain',
    },
    VANITY_SUBDOMAIN_WRITE: {
      id: 'vanity_subdomain_write',
      title: 'Manage project vanity subdomain',
    },
  },
} as const
