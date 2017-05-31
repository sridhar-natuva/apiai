(function() {
  "use strict";

  var ENTER_KEY_CODE = 13;
  var queryInput, resultDiv, accessTokenInput;
  var d,h,m,msg = 0;
  window.onload = init;

   function init() {
      queryInput = document.getElementById("query");
     resultDiv = document.getElementById("result");
     accessTokenInput = "c586606e888742709b60b18031b392c9";
   //  var setAccessTokenButton = document.getElementById("set_access_token");

   //   queryInput.addEventListener("keydown", queryInputKeyDown);
   //  setAccessTokenButton.addEventListener("click", setAccessToken);
    window.init(accessTokenInput);
   }

    
    
    
 /* function setAccessToken() {
  //  document.getElementById("placeholder").style.display = "block";
  //  document.getElementById("main-wrapper").style.display = "block";
   // window.init(accessTokenInput.value);
  }*/



  function queryInputKeyDown(event) {
    if (event.which !== ENTER_KEY_CODE) {
      return;
    }

    var value = queryInput.value;
    queryInput.value = "";

/*     createResponseNode(value);
     var responseNode = createResponseNode();*/

    sendText(value)
      .then(function(response) {
        var result;
        try {
          result = response.result.fulfillment.speech
        } catch(error) {
          result = "";
        }
        setResponseJSON(response);
        setResponseOnNode(result, responseNode);
      })
      .catch(function(err) {
        setResponseJSON(err);
        setResponseOnNode("Something goes wrong", responseNode);
      });
  }
function insertMessage() {
     var value = queryInput.value;
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
   $('.message-input').val(null);  
  setDate();
	updateScrollbar();
   
         createResponseNode(value);
     var responseNode = createResponseNode();

    sendText(value)
      .then(function(response) {
        var result;
        try {
          result = response.result.fulfillment.speech
        } catch(error) {
          result = "";
        }
        setResponseJSON(response);
        setResponseOnNode(result, responseNode);
      })
      .catch(function(err) {
        setResponseJSON(err);
        setResponseOnNode("Something goes wrong", responseNode);
      });
    
    
}


$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
});



function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 1,
    timeout: 0
  });
}

function setDate(){
  d = new Date();
 
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
 
}


function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}


function insertMessage() {
     var value = queryInput.value;
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
   $('.message-input').val(null); 
  setDate();
	/*updateScrollbar();*/
   
 /*        createResponseNode(value);
     var responseNode = createResponseNode();*/

    sendText(value)
      .then(function(response) {
        var message;
        try {
          message = response.result.fulfillment.speech
        } catch(error) {
          result = "";
            
        }
        $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="images/help-desk.png" /></figure>' + message + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
      })
      .catch(function(err) {
        setResponseJSON(err);
        setResponseOnNode("Something goes wrong", responseNode);
      });
    
    
}



/*
   function createQueryNode(query) {
     var node = document.createElement('div');
     node.className = "message message-personal new";
     node.innerHTML = query;
     resultDiv.appendChild(node);
   }*/

/*
   function createResponseNode() {
     var node = document.createElement('div');
     node.className = "message message-personal new";
     node.innerHTML = "...";
     resultDiv.appendChild(node);
     return node;
   }
*/
    
    
    
    
    
    
    
    
    
    
    function fakeMessage() {
 /* if ($('.message-input').val() != '') {
    return false;
  }*/
  updateScrollbar();
  $('<div class="message loading new"><figure class="avatar"><img src="images/help-desk.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
 
  
 
	if( i > 0 ){
	params.inputText = msg;
	  	lexruntime.postText(params, function (err, data) {
  if (err){
	   console.log(err, err.stack); 
		}
  else {  
	var message = data.message;
	params.sessionAttributes = data.sessionAttributes;
	console.log(data);
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="images/help-desk.png" /></figure>' + message + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  
	} 
});
	  }else{
	  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="images/help-desk.png" /></figure>' + Fake[0] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 10 + (Math.random() * 20) * 100);
  }

}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

  function setResponseOnNode(response, node) {
    node.innerHTML = response ? response : "[empty response]";
    node.setAttribute('data-actual-response', response);
    var speaking = false;
    
    function speakNode() {
      if (!response || speaking) {
        return;
      }
      speaking = true;
      tts(response)
        .then(function () {speaking = false})
        .catch(function (err) {
          speaking = false;
          Materialize.toast(err, 2000, 'red lighten-1');
        });
    }

    node.addEventListener("click", speakNode);
    speakNode();
  }

  function setResponseJSON(response) {
    // var node = document.getElementById("jsonResponse");
    // node.innerHTML = JSON.stringify(response, null, 2);
  }

  function sendRequest() {

  }

})();

// ------------------

$(document).ready(function() {
	var $messages = $('.messages-content');
    var d,h,m,msg = 0;
  $messages.mCustomScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 100);



function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 1,
    timeout: 0
  });
}

function setDate(){
  d = new Date();
 
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
 
}

function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}


function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
   $('.message-input').val(null);  
  setDate();
	updateScrollbar();
    fakeMessage();
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
});

var Fake = [
  'Welcome to your L1 Support Desk! How may I help you?'
];


});