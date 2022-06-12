var express = require("express");
var router = express.Router();
var pagarme = require("../lib/pagarme");

/* POST criacao de compra. */
router.post("/", function (req, res, next) {
  pagarme
    .compra(req.body)
    .then((result) => {
      const paymentId = result.data.id;
      const amount = result.data.amount;
      const status = result.data.status;

      pagarme
        .captura(paymentId, amount)
        .then((result) => {
          console.log(result);
          if (status == "authorized") {
            res.status(201).send({
              Status: "Sucesso",
              Message: "Compra realizada com sucesso.",
              CompraId: paymentId,
            });
          } else {
            res.status(402).send({
              Status: "Falhou",
              Message:
                "Compra não realizada, problema na cobrança no cartão de crédito.",
            });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    })
    .catch(function (error) {
      console.error(error);
    });
});

/* GET status de compra. */
router.get("/:compra_id/status", function (req, res, next) {
  pagarme
    .consulta(req.params.compra_id)
    .then((result) => {
      const status = result.data.status;
      let message = {};
      switch (status) {
        case "authorized":
          message = {
            Status: "Pagamento autorizado.",
          };
          break;
        case "paid":
          message = {
            Status: "Pagamento realizado.",
          };
          break;
        case "analyzing":
          message = {
            Status: "Pagamento pendente.",
          };
          break;
        default:
          message = {
            Status: "Pagamento falhou.",
          };
          break;
      }
      res.send(message);
    })
    .catch(function (error) {
      console.error(error);
    });
});

module.exports = router;
