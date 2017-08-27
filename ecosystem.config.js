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
                USER: 'ubuntu'
            },
        },
        // Main application
        {
            name      : 'slong',
            script    : 'src/server.js',
            env: {
                USER: 'ubuntu'
            },
            instances: 0,
            exec_mode: 'cluster'
        },
    ],

    /**
     * Deployment section
     * http://pm2.keymetrics.io/docs/usage/deployment/
     */
    deploy : {
        production : {
            user : 'ubuntu',
            host : 'stephenlong.jedimasters.net',
            key  : '~/.ssh/jedimasters.pem',
            ref  : 'origin/master',
            repo : 'git@github.com:lalong13/slong.git',
            path : '/home/$USER/Node',
            'pre-deploy'  : 'rm package-lock.json; npm install; pm2 install pm2-githook; mkdir -p /home/$USER/.pm2 && cp module_conf.json /home/$USER/.pm2/',
            'post-deploy' : 'pm2 restart pm2-githook && pm2 startOrRestart ecosystem.config.js --env production && pm2 save'
        },
        dev : {
            user : 'ubuntu',
            host : 'stephenlong.jedimasters.net',
            key  : '~/.ssh/jedimasters.pem',
            ref  : 'origin/master',
            repo : 'git@github.com:lalong13/slong.git',
            path : '/home/$USER/Node',
            'pre-deploy'  : 'rm package-lock.json; npm install; pm2 install pm2-githook; mkdir -p /home/$USER/.pm2 && cp module_conf.json /home/$USER/.pm2/',
            'post-deploy' : 'pm2 restart pm2-githook && pm2 startOrRestart ecosystem.config.js --env dev'
        }
    }
};
