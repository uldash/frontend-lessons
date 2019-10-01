// for compile
// jsc /t:library LibHello.js
package LibHello {
    class Hello {
        function say() {
        var d = new Date();
        var n = Math.random();
        return 'Hello, \ntoday is ' + d + '\nand this is random - ' + n;
    }
}
}