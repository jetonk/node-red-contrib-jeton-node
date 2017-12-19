module.exports = function(RED) {
    function Calc(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            node.log(msg.payload);
            node.send(msg.req.query.number);
        });
    }
    RED.nodes.registerType("jeton-test",Calc);
};