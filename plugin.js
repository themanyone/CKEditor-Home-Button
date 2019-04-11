/**  
* Home button plugin by Henry Kroll III, www.thenerdshow.com
* Apache 2.0 license
*/
CKEDITOR.plugins.add( 'home_button', {
    icons: 'home_button',
    init: function( editor ) {

        editor.addCommand( 'home', {
            exec : function( editor1 ){
                location.href="/";
            }
        });

        editor.ui.addButton( 'Home', {
            label: 'Home',
            command: 'home',
            // Adapted from Cil De Gwynedd Shop. (2017). Home. [image] Retrieved from http://www.cildegwynedd.co.uk/shop/
            icon: 'plugins/home_button/icons/home.gif'
        });
    }
});