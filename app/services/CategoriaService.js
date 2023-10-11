const db = require("../config/db")
db.connect()

class CategoriaService {
    findAllCategorias() {
        db.query(`select * from categorias`, function (error, categorias, fields) {
            if(error) throw error

            categorias.forEach(categoria => {
                console.log(categoria.nome)
            });
        });
    }

    findByCategoria(categoria, callback) {
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

module.exports = CategoriaService;