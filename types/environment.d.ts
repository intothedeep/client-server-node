export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            HOST_NAME: string;
            PORT: number;

            PRETTY_LOG_CLIENT_ID: string;
            PRETTY_LOG_CLIENT_SECRET: string;

            JWT_SECRET_KEY: string;
            COOKIE_SECRET_KEY: string;

            NO_QUEUE: string;
            NODE_ENV: string;

            /** this is like node env but for when tests are running (because when running tests, NODE_ENV is always set to TEST).
             * set this to 'staging' if u want to test staging db cache.
             */
            TEST_NODE_ENV: 'production' | 'staging' | 'development';

            /** string that will be used to generate a session id */
            SESSION_SECRET: string;

            PATH: string;

            JAVA_HOME: string;

            BASE_API_URL: string;
            HOSTNAME_FOR_AD_ACCOUNT: string;
            HOSTNAME_FE: string;
            PORT: string;
            JWT_SECRET: string;
            JWT_REFRESH_SECRET: string;
            JWT_CIPHER_KEY: string;
            DEBUG_DB: string;
            DEBUG: string;
            LOCAL: string;
            SPDY: string;
            POSTGRES_HOST: string;
            /** main database that will be used (database name) */
            POSTGRES_DB: string;
            POSTGRES_USER: string;
            POSTGRES_PORT: string;
            POSTGRES_PASSWORD: string;
            POSTGRES_CACHE_HOST: string;
            POSTGRES_CACHE_PORT: string;
            POSTGRES_CACHE_DB: string;
            POSTGRES_CACHE_USER: string;
            POSTGRES_CACHE_PASSWORD: string;
            /** will email automation run? can also use WORKER_PROCESS */
            EMAIL_AUTOMATION: string;
            GOOGLE_GEOCODE_KEY: string;
            GOOGLE_PLACE_KEY: string;
            STRIPE_PUBLIC_KEY: string;
            STRIPE_PRIVATE_KEY: string;
            STRIPE_WEBHOOK_SECRET: string;
            STRIPE_BASIC_PLAN_PRICE_ID: string;
            REDDIT_CLIENT_ID: string;
            REDDIT_CLIENT_SECRET: string;
            /** redis cache host */
            REDIS_HOST: string;
            /*** redis cache port */
            REDIS_PORT: string;
            REDIS_SESSION_HOST: string;
            REDIS_SESSION_PORT: string;
            GOOGLE_CLIENT_ID: string;
            GOOGLE_CLIENT_SECRET: string;
            FACEBOOK_APP_ID: string;
            FACEBOOK_APP_SECRET: string;
            MICROSOFT_CLIENT_ID: string;
            MICROSOFT_CLIENT_SECRET: string;
            FACEBOOK_CLIENT_ID: string;
            FACEBOOK_CLIENT_SECRET: string;
            GOOGLE_ADS_CLIENT_ID: string;
            GOOGLE_ADS_CLIENT_SECRET: string;
            GOOGLE_YOUTUBE_CLIENT_ID: string;
            GOOGLE_YOUTUBE_CLIENT_SECRET: string;
            GOOGLE_ANALYTICS_CLIENT_ID: string;
            GOOGLE_ANALYTICS_CLIENT_SECRET: string;
            AMAZON_CLIENT_ID: string;
            AMAZON_CLIENT_SECRET: string;
            KAKAO_CLIENT_ID: string;
            KAKAO_CLIENT_SECRET: string;
            SNAPCHAT_CLIENT_ID: string;
            SNAPCHAT_CLIENT_SECRET: string;
            APPLE_APP_ID: string;
            APPLE_CLIENT_ID: string;
            APPLE_TEAM_ID: string;
            APPLE_KEY_ID: string;
            CRITEO_CLIENT_ID: string;
            CRITEO_CLIENT_SECRET: string;
            CRITEO_SIGNING_KEY: string;
            CRITEO_SIGNING_SECRET: string;
            YAHOO_CLIENT_ID: string;
            YAHOO_CLIENT_SECRET: string;
            GOOGLE_SPREAD_SHEETS_CLIENT_ID: string;
            GOOGLE_SPREAD_SHEETS_CLIENT_SECRET: string;
            GMAIL_CLIENT_ID: string;
            GMAIL_CLIENT_SECRET: string;
            GMAIL_ASSET_CONNECTION_ACCOUNT_REFRESH_TOKEN: string;
            USE_CLIENT_KEY: string;
            KEY_PATH: string;
            CERT_PATH: string;
            ROOT_PATH: string;
            NODE_TLS_REJECT_UNAUTHORIZED: string;
            CONNECT_URL: string;
            MARKETING_ENGINE_URL: string;
            FRONT_END_URL: string;
            FORM_URL: string;
            ACCOUNT_TYPE: string;
            INTERCOM_SECRET_KEY: string;
            MAIL_HOST: string;
            MAIL_PORT: string;
            MAIL_SECURE: string;
            MAIL_USER: string;
            MAIL_PASS: string;
            MANDRILL_KEY: string;
            ADRIEL_NOTI_SIGNING_KEY: string;
            EXCHANGE_RATE_AUTH_KEY: string;
            CF_PRIVATE_KEY_PATH: string;
            CF_PRIVATE_KEY_PAIR_ID: string;
            TRACKER_API_JWT_SECRET: string;
            TRACKER_API_HOST: string;
            TRACKER_S3_BUCKET: string;
            STREAM_API_KEY: string;
            STREAM_API_SECRET: string;
            NICE_PAY_ENABLED: string;
            NICE_PAY_CREDENTIALS_SSM_PARAM: string;
            DASHBOARD_HUGE_ACCOUNT_IDS: string;
            WORKER_PROCESS: string;
            BIG_WORKSPACE_IDS: string;
            NO_CACHE_SYSTEM_FOR_ANALYTICS: string;
            APP_SUMO_USER_NAME: string;
            APP_SUMO_PASSWORD: string;
            APP_SUMO_SECRET_KEY: string;
            DOWNLOAD_FILE_ENDPOINT: string;
            ELASTICSEARCH_PASSWORD: string;
            ELASTIC_APM_SECRET: string;
            GLENN: string;
            DO_NOT_USE_APM: string;
            CF_DISABLE: string;
            HTTPS: string;
            COOKIE_STG: string;
            TIKAPI_KEY: string;
            PUBLIC_YOUTUBE_CLIENT_ID: string;
            PUBLIC_YOUTUBE_CLIENT_SECRET: string;
            CACHE_WORKER_PROCESS: string;
            /** will refreshing the cache be run */
            CACHE_REFRESHER: string;
            /** timezone. should be set to Asia/Seoul */
            TZ: string;
            /** run architecture cache worker (use this for debugging the cacheArchitecture feature) */
            CACHE_ARCHITECTURE: string;

            /** comma separated list of channels that will cache reports. use for debugging. */
            CACHE_WORKER_CHANNELS: string;

            /** amazon ads access token for testing */
            TEST_AMAZON_ACCESS_TOKEN: string;
            /** amazon ads refresh token for testing */
            TEST_AMAZON_REFRESH_TOKEN: string;
            /**
             * when not empty then run refresh data source cache only for those workspaces.
             * used for debugging purposes.
             * comma separated list of workspaces.
             * example: 1234,1235,1236
             */
            CACHE_WORKER_WORKSPACES: string;

            /**
             * comma separated channels to run cache architecture for.
             * if empty then don't filter out channels
             */
            CACHE_ARCHITECTURE_CHANNELS: string;

            /** report cache finding & fixing tool */
            REPORT_CACHE_FIX_WORKER: string;

            /** fetching product details and inserting into cache db */
            AMAZON_PRODUCT_DETAILS_WORKER: string;

            /** fetching reports and inserting into cache db */
            AMAZON_REPORTS_WORKER: string;
        }
    }
}
