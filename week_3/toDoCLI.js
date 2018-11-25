const net = require("net");

const server = net.createServer(socket =>{
    console.log("Request received from client");

    socket.on("data", data =>{
        console.log("Item to be added to client's to-do list! \n", data.toString());

        let item = data.toString();

        socket.write(`The following item has been added to you list: \n
        ${item}`);

    });
});

const PORT = 5050;
server.listen(PORT, 'localhost', () => {
    console.log(`The server is now listening at port ${PORT}.`);
});