module.exports = function(){

    this.getNotas = function(connection, callback){
        connection.query('SELECT * FROM notas', callback);
    }

    this.getNota = function(connection, callback){
        connection.query('SELECT * FROM notas WHERE id_nota = 1', callback);
    }

    this.salvarNota = function(nota, connection, callback){
        connection.query('INSERT INTO notas SET ?', nota, callback);
    }

    return this;

}