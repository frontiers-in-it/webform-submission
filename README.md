

Add to your Apache config file:

```
  ProxyPass / http://localhost:3000/
  ProxyPassReverse / http://localhost:3000/
```	


Using the `pm2` package to manage your NodeJS server is a great way to ensure that your application runs continuously, even after a crash or server restart. Here’s how you can use `pm2` to start and stop your server:

### 1. **Install pm2 Globally**
First, install `pm2` globally on your system:

Note: To work with 'nodejs v12, control the version of pm2 to be 'v4'

```bash
sudo npm install -g pm2@4
```

### 2. **Start Your Server with pm2**
You can start your server with `pm2` by specifying the script you want to run. For example, if your server script is `server.js`, you can start it with:

```bash
pm2 start server.js
```

### 3. **Check the Status of Your Server**
To see the status of your server and other running processes managed by `pm2`, use:

```bash
pm2 status
```

This command will display a list of running applications with information like their status, CPU usage, memory usage, and more.

### 4. **Stopping the Server**
To stop the server, use the following command, specifying either the name or the process ID (PID):

```bash
pm2 stop server.js
```

or if you want to stop all running processes managed by `pm2`:

```bash
pm2 stop all
```

### 5. **Restarting the Server**
If you want to restart the server:

```bash
pm2 restart server.js
```

### 6. **View Logs**
To view logs for your application:

```bash
pm2 logs
```

If you want to see the logs for a specific application, you can pass the process name or ID:

```bash
pm2 logs server
```

### 7. **Persist the pm2 Process Across Reboots**
To ensure that `pm2` automatically restarts your application after a server reboot, you need to save the current process list and configure `pm2` to start on system boot:

```bash
pm2 save
pm2 startup
```

The `pm2 startup` command will generate a command specific to your system's init system. It will look something like this:

```bash
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u your-user --hp /home/your-user
```

Run the command generated by `pm2` to set up the startup script.

### 8. **Delete a Process Managed by pm2**
If you need to remove a process from `pm2` management:

```bash
pm2 delete server.js
```

or to remove all processes:

```bash
pm2 delete all
```

### Summary of Commands
- **Start:** `pm2 start server.js`
- **Stop:** `pm2 stop server.js` or `pm2 stop all`
- **Restart:** `pm2 restart server.js`
- **Status:** `pm2 status`
- **Logs:** `pm2 logs`
- **Save Processes:** `pm2 save`
- **Startup:** `pm2 startup`

With `pm2`, your Node.js server will be more robust, and you'll have better control over its operation.
