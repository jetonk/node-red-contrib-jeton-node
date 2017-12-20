module.exports = function(RED) {
    function Calc(config) {
        RED.nodes.createNode(this,config);
        this.number = config.number;
        this.amount = config.amount;
        var node = this;
        node.on('input', function(msg) {
            var total = 0;
            this.status({fill:"red",shape:"ring",text: JSON.stringify({payload: msg.payload, number: msg.payload.number})});
            if(msg.payload.number !== "" || msg.payload.number !== undefined){
                var parsed = parseInt(msg.payload.number);
                total = (parsed * parsed) + this.amount;
                msg.payload = `(${parsed} * ${parsed}) + ${this.amount} = ${total}`;
                node.send(msg);
            }else{
                total = (this.number * this.number) + this.amount;
                msg.payload = `(${this.number} * ${this.number}) + ${this.amount} = ${total}`;
                node.send(msg);
            }
        });
    }
    RED.nodes.registerType("jeton-test", Calc);
};