var osBadge = require("./os-badge.js");
var osNotify = require("./os-notify.js");

var Notifications = function(){
  this.unreadCount = 0;
  this.mentionCount = 0;
};

Notifications.prototype.setUnreadCount = function(unreadCount){
  this.unreadCount = unreadCount;
  this.update();
};

Notifications.prototype.setMentionCount = function(mentionCount){
  this.mentionCount = mentionCount;
  this.update();
};

Notifications.prototype.update = function(){
  osBadge.update(this.unreadCount);
  // osNotify only wants to know if the count is non-zero, so adding here is okay
  osNotify.update(this.unreadCount + this.mentionCount);
};

module.exports = Notifications;
