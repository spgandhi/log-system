import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/std:accounts-ui';
import Logs from '../imports/api/logs';

Meteor.startup(() => {
  // code to run on server at startup
  Accounts.config({
    sendVerificationEmail: false,
  });

  Meteor.publish('logs', function(){
    console.log(this.userId);
    return Logs.find({userId: this.userId});
  })

  Meteor.methods({
    deleteLog: (_id) => {
      Logs.remove({_id}, function(err, result){
        if(err){
          console.log(err);
          return {err};
        }else{
          return {result};
        }
      });
    }
  })
});

