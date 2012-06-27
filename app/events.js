App.Events = (function(lng, app, undefined) {

	lng.ready(function() {
        app.Services.refresh();
        lng.dom('#bug_date').val(today());
    });

    lng.dom('#newEntry').tap(function(event) {    	
    	App.Services.add_bug();  

    	lng.Sugar.Growl.notify('Entry added', 'Tap to hide this notification.', 'check', 'success', 4);
    });

    function today(){
    	var d = new Date();
		var curr_date = d.getDate();
		var curr_month = d.getMonth();
		var curr_year = d.getFullYear();
		return curr_date + '/' + curr_month + '/' + curr_year;

    }

})(LUNGO, App);