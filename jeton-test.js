module.exports = function(RED) {
    function Calc(config) {
        RED.nodes.createNode(this,config);
        this.number = config.number;
        this.amount = config.amount;
        var node = this;
        node.on('input', function(msg) {
            var total = 0;
            if(msg.payload.number !== ""){
                var parsed = parseInt(msg.payload.number);
                total = (parsed * parsed) + this.amount;
                msg.payload = '(' + parsed + ' * ' + parsed + ') + ' +this.amount+ ' = ' +total;
                node.send(msg);
            }else{
                total = (this.number * this.number) + this.amount;
                this.status({fill:"red",shape:"ring", text: JSON.stringify({total: total, number: config.number})});
                // msg.payload = '(' + this.number + ' * ' + this.number + ') +' +this.amount+ ' = ' +total;
                msg.payload = 'total: '+ total + 'number: ' + this.number;
                node.send(msg);
            }
        });
    }
    RED.nodes.registerType("jeton-test", Calc);
};