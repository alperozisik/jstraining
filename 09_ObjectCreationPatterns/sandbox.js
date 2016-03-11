function Sandbox() {
    // turning arguments into an array
    var args = Array.prototype.slice.call(arguments), //Gönderilen değerleri diziye çeviriyor
    // the last argument is the callback
    callback = args.pop(), //dizinin sonuncu elemanını alıyor
    // modules can be passed as an array or as individual parameters
    modules = (args[0] && typeof args[0] === "string") ? args : args[0],
    i;


    // make sure the function is called
    // as a constructor
    if (!(this instanceof Sandbox)) {
        return new Sandbox(modules, callback);
    }
    // add properties to `this` as needed:
    this.a = 1;
    this.b = 2;
    // now add modules to the core `this` object
    // no modules or "*" both mean "use all modules"
    if (!modules || modules === '*') {
        modules = [];
        for (i in Sandbox.modules) {
            if (Sandbox.modules.hasOwnProperty(i)) {
                modules.push(i);
            }
        }
    }
    // initialize the required modules
    for (i = 0; i < modules.length; i += 1) {
        Sandbox.modules[modules[i]](this);
    }
    // call the callback
    callback(this);
}
// any prototype properties as needed
Sandbox.prototype = {
    name: "My Application",
    version: "1.0",
    getName: function () {
        return this.name;
    }
};