const fetch = require("node-fetch");

const MerchantId = "1bd83517-67aa-4fd4-9929-813c4939a9f1";
const MerchantKey = "QWUQXLPMCLRKJDDJZQEQUPQBIOTXCTKNATZUWWHE";

class Cielo {
  static compra(params) {
    return fetch("https://apisandbox.cieloecommerce.cielo.com.br/1/sales/", {
      method: "post",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
        MerchantId: MerchantId,
        MerchantKey: MerchantKey,
      },
    }).then((res) => res.json());
  }

  static captura(paymentId) {
    return fetch(
      "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/" +
        paymentId +
        "/capture",
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          MerchantId: MerchantId,
          MerchantKey: MerchantKey,
        },
      }
    ).then((res) => res.json());
  }

  static consulta(paymentId) {
    return fetch(
      "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/" +
        paymentId,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          MerchantId: MerchantId,
          MerchantKey: MerchantKey,
        },
      }
    ).then((res) => res.json());
  }
}

module.exports = Cielo;
