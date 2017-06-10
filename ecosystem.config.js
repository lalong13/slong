module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps : [

        // First application
        {
            name      : 'webpack',
            script    : './node_modules/webpack/bin/webpack.js',
            watch     : true,
            ignore_watch : ["babel_cache", "npm-debug.log", "src/public/js/bundle.js", "package-lock.json", ".git"],
            autorestart  : false,
            // Environment variables injected when starting with --env production
            // http://pm2.keymetrics.io/docs/usage/application-declaration/#switching-to-different-environment
            env_production : {
                NODE_ENV: 'production'
            },
            env_dev : {
                NODE_ENV: 'development'
            },
            env: {
                USER: 'lalong13'
            },
        },
        // Main application
        {
            name      : 'forums',
            script    : 'src/server.js',
            env: {
                USER: 'lalong13'
            },
            instances: 0,
            exec_mode: 'cluster'
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
            path : '/home/$USER/Node',
            'pre-deploy'  : 'rm package-lock.json; npm install',
            'post-deploy' : 'pm2 startOrRestart ecosystem.config.js --env production'
        },
        dev : {
            user : 'lalong13',
            host : 'stephenlong.jedimasters.net',
            ref  : 'origin/master',
            repo : 'git@github.com:lalong13/forums.git',
            path : '/home/$USER/Node',
            'pre-deploy'  : 'rm package-lock.json; npm install',
            'post-deploy' : 'pm2 startOrRestart ecosystem.config.js --env dev'
        }
    }
};
