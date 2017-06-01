module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps : [

        // First application
        {
            name      : 'forums',
            script    : 'npm -- run prd',
            cwd       : '~/Node/forums/',
            watch     : true,
            env: {
                COMMON_VARIABLE: 'true'
            },
            // Environment variables injected when starting with --env production
            // http://pm2.keymetrics.io/docs/usage/application-declaration/#switching-to-different-environment
            env_production : {
                NODE_ENV: 'production'
            }
            instances: 0,
            exec_mode: 'cluster',
        }
    ],

    /**
     * Deployment section
     * http://pm2.keymetrics.io/docs/usage/deployment/
     */
    deploy : {
        production : {
            user : 'lalong13',
            host : 'stephenlong.jedimasters.net',
            ref  : 'origin/master',
            repo : 'git@github.com:lalong13/forums.git',
            path : '/home/lalong13/Node/forums',
            'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
        },
        dev : {
            user : 'lalong13',
            host : 'stephenlong.jedimasters.net',
            ref  : 'origin/master',
            repo : 'git@github.com:lalong13/forums.git',
            path : '/home/lalong13/Node/forums',
            'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env development',
            env  : {
                NODE_ENV: 'development'
            }
        }
    },
    staging : {
        user : "lalong13",
        host :
    }
};
