var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
		callView("login");
    }
};

app.initialize();



// ----------------Test Cambio de Paginas--------------------------
$("#app").on('click','#goHome', function() {
  callView("home");
});

$("#app").on('click','#goLogin', function() {
  callView("login");
});

$("#app").on('click','#goPagA', function() {
  callView("pagA");
});

$("#app").on('click','#goPagB', function() {
  callView("pagB");
});