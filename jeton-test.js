module.exports = function(RED) {
    function Calc(config) {
        RED.nodes.createNode(this,config);
        this.number = config.number;
        this.amount = config.amount;
        var node = this;
        node.on('input', function(msg) {
            var total = 0;
            var parsed = parseInt(msg.payload.number);
            this.status({fill:"red",shape:"ring",text: JSON.stringify({msg: msg, payload: msg.payload})});

            total = (parsed * parsed) + this.amount;
                msg.payload = '(' + parsed + ' * ' + parsed + ') +' +this.amount+ ' = '+ total;
                this.status({fill:"red",shape:"ring",text: JSON.stringify({parsed: parsed, total: total})});
                node.send(msg);
        });
    }
    RED.nodes.registerType("jeton-test", Calc);
};