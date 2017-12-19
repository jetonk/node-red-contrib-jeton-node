module.exports = function(RED) {
    function Calc(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            var total = undefined;
            var parsed = parseInt(msg.req.params.number);
            total = (parsed * parsed) + 3;
            msg.payload = `${total}`;
            this.status({fill:"red",shape:"ring",text: JSON.stringify({parsed: parsed, total: total})});
            node.send(msg);
        });
    }
    RED.nodes.registerType("jeton-test", Calc);
};