module.exports = function(RED) {
    function Calc(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            var total = 0;
            var number = msg.number;
            if(number !== "" || number !== undefined){
                var parsed = parseInt(number);
                total = (parsed * parsed) + 3;
                node.send('(' + parsed + ' * ' + parsed + ')+ 3 = '+total);
            }
        });
    }
    RED.nodes.registerType("jeton-test",Calc);
};