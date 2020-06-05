module.exports = function(app){
    app.get('/cadastro_notas', function(req,res){
        res.render('cad/cadNotas');
    });

    app.post('/cad/cadastrar', function(req,res){
        var nota = req.body;

        var connection = app.config.dbConnection();
        var alunoModel = app.app.models.alunoModel;

        alunoModel.salvarNota(nota, connection, function(error, result){
            res.redirect('/lista_notas');
        });
    });
}