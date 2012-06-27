App.Services = (function(lng, app, undefined) {

	var API_URL = "http://api.blibb.it/ipedrazas/bugalive";
	var PARAMETERS = {
		callback: '?' // jsonp
	};

	var bug_service = function() {
		fetch_data('bug', PARAMETERS, '#bugs-list');
	};

	var critical_service = function(){
		fetch_data('critical', PARAMETERS, '#critical-list');
	};

	var enhancement_service = function(){
		fetch_data('enhancement', PARAMETERS, '#enhancement-list');
	};

	function fetch_data(level, params, element_id){
		var url = API_URL + "/tag/" + level;
		lng.Service.get(url, params, function(response) {
			app.View.bug_view(element_id, response.items);
		});
	};

	var add_bug = function(){

		// var post_params = {
		//         key: "bugalive.com",
		//         app_token: "bugalive.com",
		//         '01-title': lng.dom('#bug_title').val(),
		//         '02-bug': lng.dom('#bug_description').val(),
		//         '03-date': lng.dom('#bug_date').val(),
		//         '01-status': 'active',
		//         tags: lng.dom('#bug_type').val()
		//     };

		var params = "key=bugalive.com&app_token=bugalive.com&01-title="+ lng.dom('#bug_title').val() 
				+"&02-bug="+ lng.dom('#bug_description').val() +"&03-date="+ lng.dom('#bug_date').val() +"&01-status=active&tags=" + lng.dom('#bug_type').val();

		lng.Service.post(API_URL, params, function(response) {
			refresh();
			cleanup();
		});
	};

	function refresh(){
		bug_service();
		critical_service();
		enhancement_service();
	};

	function cleanup(){
		lng.dom('#bug_description').val("");
		lng.dom('#bug_title').val(""); 
	};
	
	return {
		add_bug: add_bug,
		refresh: refresh
	}

})(LUNGO, App);