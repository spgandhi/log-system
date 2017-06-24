# log-system

#### Steps to setup the app

- Go the directory where you want to setup the app and run the git clone command
  
  `git clone https://github.com/spgandhi/log-system.git`
- Go to the app directory
  
  `cd log-system`
- Install npm packages with the below command
  
  `meteor npm install`
- Start meteor server

  `meteor`
  
  This command will start meteor on port 3000. It will also install missing meteor packages.
- Go to `http://localhost:3000/` and app should be running

#### Steps to use the app

- The first time you open the app it should show login/signup form. In case it shows "Loading" text instead for over 30 secs, then you can attempt to login/signup by going to `http://localhost:3000/login`
- Signup using your email and a password. You will be logged in immediately after signup.
- To add a log, enter text in the textfield at the bottom of the app
- The main content section will dispaly yours logs.
- To delete logs, click on "cross button" at the right of each log message.

#### Assumptions
- The logs message display in the decresing order of date they were added. The latest log will display at the top.

#### Problems?
- If you have any problem using the app, contact the author at spgandhi@live.com
