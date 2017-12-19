module.exports = function(RED) {
    function Calc(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            console.log(msg.payload);
            node.send(msg);
        });
    }
    RED.nodes.registerType("lower-case",Calc);
};