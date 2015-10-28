
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
        
        base.currentColor = 0;
        
        base.init = function(){
            base.options = $.extend({},$.hollywood.defaultOptions, options);
            base.animateColor(0,base.options.randomSpeed);
        };
        
        // Sample Function, Uncomment to use
        base.animateColor = function(x,randomspeed){
	        if(randomspeed){
		        var animationspeed = Math.floor(Math.random() * 500) + 50;
	        }else{
		        var animationspeed = base.options.animationSpeed;
	        }
        	$("#hollywoodText").animate({
	          color: base.options.colorArray[x]
	        }, animationspeed, function() {
		        if(base.currentColor == base.options.colorArray.length - 1){
			        base.currentColor = 0
			    }else{
				    base.currentColor++
			    }
				base.animateColor(base.currentColor,base.options.randomSpeed);
    		});
        };
        
        // Run initializer
        base.init();
    };
    
    $.hollywood.defaultOptions = {
        colorArray: ["#ff0000"],
        animationSpeed: 1000,
        randomSpeed: false
    };
    
    $.fn.hollywood = function(options){
        return this.each(function(){
            (new $.hollywood(this, options));
        });
    };
    
})(jQuery);



$(document).ready(function(){
	$("#hollywoodText").hollywood({
		colorArray: ["#5E405B","#859B5D","#E94B7C","#87D4DE","#EDB524"],
		animationSpeed: 1000,
		randomSpeed: true
	});
});