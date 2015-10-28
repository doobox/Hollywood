
(function($){
    $.hollywood = function(el, options){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;
        
        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;
        
        // Add a reverse reference to the DOM object
        base.$el.data("hollywood", base);
        
        base.init = function(){
            base.options = $.extend({},$.hollywood.defaultOptions, options);
            base.animateColor(0);
        };
        
        // Sample Function, Uncomment to use
        base.animateColor = function(x){
        	$("#hollywoodText").animate({
	          color: base.options.colorArray[x]
	        }, base.options.animationSpeed );
        };
        
        // Run initializer
        base.init();
    };
    
    $.hollywood.defaultOptions = {
        colorArray: "[#ff0000]",
        animationSpeed: 1000
    };
    
    $.fn.hollywood = function(options){
        return this.each(function(){
            (new $.hollywood(this, options));
        });
    };
    
})(jQuery);



$(document).ready(function(){
	$("#hollywoodText").hollywood({
		colorArray: ["#336699"],
		animationSpeed: 1000
	});
});