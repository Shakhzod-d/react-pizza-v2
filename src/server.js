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

      this.get("/api/pizza/:id", (schema, request) => {
        let pizza = pizzas.find((item) => item.id === request.params.id);
        return pizza;
      });

      this.get("/api/pizzas/:id");
    },
  });

  return server;
}
