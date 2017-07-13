# slong

### This is a node app made by me for me

## Instructions
When getting this app ready, please do the following:
_These commands are specific to Ubuntu but the instructions are not_
Anything in all CAPS or within `{}` should be replaced accordingly.

1. Clone this Repository into a sub directory. Logs will be saved 2 levels above the server.js file within var directory.
2. Install node (`sudo apt install nodejs`)
3. Install n globally (`sudo npm install -g n`) through npm
4. Install the latest stable verion of node using n (`sudo n stable`)
5. Create a symlink for this version of node that links to the command `node`:
   - `sudo ln -sf /usr/local/n/versions/node/{VERSION}/bin/node /usr/bin/node`
6. Install pm2 globally (`sudo npm install -g pm2`)
7. Go to the root directory of this app and run `npm update` and then `npm install`
8. (_Optional_)Execute `sudo env PATH=$PATH:/usr/local/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup systemd -u {$USER} --hp /home/{$USER}` in order to setup pm2 to run as a service on boot. This will initialize pm2 with whatever was stored from a pm2 dump or pm2 save.
9. To get running locally follow these directions, otherwise go to step 10.
    1. `pm2 install pm2-githook`
    2. `cp module_conf.json ~/.pm2/`; that hidden pm2 directory is the default location
    3. `pm2 restart pm2-githook`
    4. `pm2 startOrRestart ecosystem.config.js --env production`
    5. (_Optional_) `pm2 save`. This is to allow the app to be brought back with pm2 resurrect or to start on boot.
10. If running locally go to step 11. Follow these directions to launch this on a remote server.
    1. ssh into the remote server as the User intended to be used.
    2. Within ~ directory create a directory to store the resulting source directory after deploying.
    3. Do steps 2-6 on the remote server.
    4. Setup password-less ssh between local and remote.
    5. Setup ssh access to github on the remote.
    6. Close the ssh session and return to the root directory of the app on the local machine.
    7. Modify the ecosystem.config.js file with the correct user, path, host, etc. within the Deployment section. pre-deploy and post-deploy should be left alone.
    8. Execute `pm2 deploy ecosystem.config.js production setup && pm2 deploy ecosystem.config.js production`
11. That's it!!! The app should be running on port 3000 as that is the default Node port. This can be modified in either server.babel.js or by setting a PORT environment variable.
