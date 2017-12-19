module.exports = function(RED) {
    function Calc(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            var total = 0;
            var number = msg.number;
                var parsed = parseInt(number);
                total = (parsed * parsed) + 3;
                node.send(number);
        });
    }
    RED.nodes.registerType("jeton-test",Calc);
};