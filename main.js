function customSetInterval(func, wait, times){
    var internal = function(w, t){
        return function(){
            if(typeof t === "undefined" || t-- > 0){
                setTimeout(internal, w);
                try{
                    func.call(null);
                }
                catch(e){
                    t = 0;
                    throw e.toString();
                }
            }
        };
    }(wait, times);

    setTimeout(internal, wait);
};

var interval = 3000; //miliseconds
var repeats = 3; //repeats 3 times
customSetInterval(function() {
    alert('hello');
},interval, repeats);


if(!Object.assign) {
    Object.assign = function(target) {
        for(var i=0; i<arguments.length;i++) {
            var box = arguments[i];
            for(key in box) {
                target[key] = box[key];
            }
        }
    return target;
    }
}

var defaults = { width: 100, height: 100 };
var options = { width: 150 };
var configs = Object.assign({}, defaults, options); // -> {width: 150, height: 100}
console.log(configs);