module.exports = function(application){

    application.get('/lista_notas', function(req,res){

        var connection = application.config.dbConnection();
        var alunoModel = application.app.models.alunoModel;

        alunoModel.getNotas(connection, function(error, result){
            res.render('lista_notas/lista_notas', { notas : result });
        });

    });
}