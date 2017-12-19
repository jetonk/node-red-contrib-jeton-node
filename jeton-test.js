module.exports = function(RED) {
    function Calc(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            var total = 0;
            if(msg.number !== "" || msg.number !== undefined){
                var parsed = msg.number;
                total = (parsed * parsed) + 3;
                // msg.payload = '(' + parsed + ' * ' + parsed + ')+ 3 = '+ total;
                msg.payload = `(${parsed} * ${parsed}) +3 = ${total}`;
                node.send(msg);
            }else{
                node.send(msg);
            }
        });
    }
    RED.nodes.registerType("jeton-test",Calc);
};