const axios = require("axios");

class Pagarme {
  static compra(params) {
    return axios
      .post("https://api.pagar.me/1/transactions", params, {
        headers: {
          "content-type": "application/json",
        },
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  static captura(paymentId, amount) {
    return axios
      .post(
        "https://api.pagar.me/1/transactions/" + paymentId + "/capture",
        {
          amount: amount,
          api_Key: "ak_test_qZ8moDhBmUqUL8v79MmYCTHkp7xRs5",
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .catch(function (error) {
        console.log(error);
      });
  }

  static consulta(paymentId) {
    return axios.get("https://api.pagar.me/1/transactions/" + paymentId, {
      params: {
        api_key: "ak_test_qZ8moDhBmUqUL8v79MmYCTHkp7xRs5",
      },

      headers: {
        "content-type": "application/json",
      },
    });
  }
}

module.exports = Pagarme;
