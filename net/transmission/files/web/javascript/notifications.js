var Notifications={};$(document).ready(function(){if(!window.webkitNotifications){return}var b=(window.webkitNotifications.checkPermission()===0),a=$("#toggle_notifications");a.show();c();$(transmission).bind("downloadComplete seedingComplete",function(e,f){if(b){var h=(e.type=="downloadComplete"?"Download":"Seeding")+" complete",d=f.getName(),g;g=window.webkitNotifications.createNotification("style/transmission/images/logo.jpg",h,d);g.show();setTimeout(function(){g.cancel()},5000)}});function c(){a.html((b?"禁用":"启用")+"桌面通知")}Notifications.toggle=function(){if(window.webkitNotifications.checkPermission()!==0){window.webkitNotifications.requestPermission(function(){b=(window.webkitNotifications.checkPermission()===0);c()})}else{b=!b;c()}}});