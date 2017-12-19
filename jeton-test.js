module.exports = function(RED) {
    function Calc(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            node.log(msg);
            node.log(msg.payload);
            node.send(msg);
        });
    }
    RED.nodes.registerType("jeton-test",Calc);
};