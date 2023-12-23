// levanta el servidor
import server from "./src/server.js";

const PORT = process.env.PORT || 3030;

server.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});

