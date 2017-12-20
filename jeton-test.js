module.exports = function(RED) {
    function Calc(config) {
        RED.nodes.createNode(this,config);
        this.number = config.number;
        this.amount = config.amount;
        var node = this;
        node.on('input', function(msg) {
            var total = 0;
            this.status({fill:"red",shape:"ring", text: JSON.stringify({number: msg.payload.number, msg: msg.payload})});
            if(msg.payload.number){
                // var parsed = parseInt(msg.payload.number);
                var number = msg.payload.number;
                total = parseInt(number) * parseInt(number) + parseInt(this.amount);
                //msg.payload = '(' + parsed + ' * ' + parsed + ') + ' + this.amount + ' = ' +total;
                msg.payload = `(${number} * ${parsed}) + ${this.amount} = ${total}`;
                // msg.payload = `${total}`;
                node.send(msg);
            }else{
                total = parseInt((this.number * this.number) + this.amount);
                //msg.payload = '(' + this.number + ' * ' + this.number + ') + ' + this.amount + ' = ' +total;
                //msg.payload = `(${this.number} * ${this.number}) + ${this.amount} = ${total}`;
                msg.payload = `${total}`;
                node.send(msg);
            }
        });
    }
    RED.nodes.registerType("jeton-test", Calc);
};