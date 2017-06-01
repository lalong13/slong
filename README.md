# forums

### This is a node app made by me for me

## Instructions
When getting this app ready, please do the following:
_These commands are specific to Ubuntu but the instructions are not_

1. Clone this Repository
2. Install node (`sudo apt install nodejs`)
3. Install n globally (`sudo npm install -g n`) through npm
4. Install the latest stable verion of node using n (`sudo n stable`)
5. Create a symlink for this version of node that links to the command `node`:
   - `sudo ln -sf /usr/local/n/versions/node/7.10.0/bin/node /usr/bin/node`
6. Install npm-run globally (`sudo npm install -g npm-run`)
7. Install pm2 globally (`sudo npm install -g pm2`)
8. Go to the root directory of this app and run `npm update` and then `npm install`
9. Then run `sudo pm2 start -i 0 --name "forums" npm -- run prd` to run this app in cluster mode using the max cores/threads.
10. `sudo pm2 save` to save this configuration for future use
11. `sudo pm2 startup` to  execute this at bootup
12. `sudo pm2 set pm2-githook:port PORT_NUM` same port as your github webhook (This is to auto update when changing the remote repository)
13. `sudo pm2 set pm2-githook:apps "{\"forums\":{\"secret\":\"SECRET\",\"prehook\":\"npm install --production && git submodule update --initC\",\"posthook\":\"echo done\"}}"` where SECRET is your github webhook SECRET
14. `sudo pm2 install pm2-githook` to start the githook for pm2
15. `sudo pm2 save` to save the githook implementation
