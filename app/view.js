App.View = (function(lng, app, undefined) {

    bug_view= function(container, bugs_data) {
        lng.View.Template.List.create({
            el: container,
            template: 'bugs-tmp',
            data: bugs_data
        });
        console.error(bugs_data.length);
        lng.View.Element.count('a[href="' + container + '"]', bugs_data.length);
    };


    return {
        bug_view: bug_view
    }

})(LUNGO, App);