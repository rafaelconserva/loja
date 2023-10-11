const db = require("../config/db")
db.connect()

class PedidoStatusAtualizacaoPedido {
    findAllPedidoStatusCategorias() {
        db.query(`select * from categorias`, function (error, PedidoStatusCategorias, fields) {
            if(error) throw error

            PedidoStatusCategorias.forEach(PedidoStatusCategoria => {
                console.log(PedidoStatusCategoria.nome)
            });
        });
    }

    
    findByPedidoStatusCategorias(categoria, callback) {
        const sql = 'SELECT * FROM categorias WHERE id = ?';
      
        db.execute(sql, [categoria], function(error, categorias, fields) {
          if (error) {
            throw error;
          }
      
          if (categorias.length > 0) {
            callback(categorias[0]);
          } else {
            callback(null);
          }
        });
      }

}


module.exports = 