module.exports = function(RED) {
    function Calc(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            node.send(msg.req.query);
        });
    }
    RED.nodes.registerType("jeton-test",Calc);
};