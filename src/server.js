import { createServer } from "miragejs";

import { pizzas } from "./pizzaData";

export function makeServer() {
  let server = createServer({
    routes() {
      this.get("/api/pizzas", () => {
        return {
          pizzas,
        };
      });

      this.get("/api/pizza/:id", function (schema, request) {
        let pizza = pizzas.find((item) => item.id === request.params.id);
        return pizza;
      });
    },
  });

  return server;
}
