const dbConnect = require('../bin/dbConnect');

let Projeto = function(projeto) {
    this.nameProjeto = projeto.nameProjeto;
    this.navers = projeto.navers;
};

Projeto.index = (result) => {
    dbConnect.query('SELECT * FROM projetos', (err, res) => {
        if(err) {
            console.log('Erro ao retornar os Projetos.\nErro: ', err);
        } else {
            console.log('Retorno dos projetos.');
            result(null, res);
        };
    });
};

Projeto.show = (id, result) => {
    dbConnect.query('SELECT projetos.idProjeto, projetos.nameProjeto, navers.idNaver, navers.nameNaver FROM projetos JOIN navers ON projetos.navers = navers.idNaver WHERE idProjeto = ?', id, (err, res) => {
        if(err) {
            console.log('Erro ao selecionar um projeto pelo id ' + id + ' .');
            result(null, err);
        } else {
            console.log('Projeto selecionado pelo id ' + id + '.');
            result(null, res);
        };
    });
};

Projeto.store = (novoProjeto, result) => {
    dbConnect.query('INSERT INTO projetos SET ?', novoProjeto, (err, res) => {
        if(err) {
            console.log('Erro ao inserir o novo projeto.');
            result(null, err);
        } else {
            console.log('Novo projeto criado.');
            result(null, res);
        };
    });
};

Projeto.update = (id, novoProjeto, result) => {
    dbConnect.query('UPDATE projetos SET nameProjeto = ?, navers = ? WHERE idProjeto = ?', [novoProjeto.nameProjeto, novoProjeto.navers, id], (err, res) => {
        if(err) {
            console.log('Erro ao atualizar o projeto');
            result(null, err);
        } else {
            console.log('Projeto atualizado');
            result(null, res);
        };
    });
};

Projeto.destroy= (id, result) => {
    dbConnect.query('DELETE FROM projetos WHERE id = ?', [id], (err, res) => {
        if(err) {
            console.log('Erro ao deletar o projeto');
            result(null, err);
        } else {
            console.log('Projeto deletado.');
            result(null, res);
        };
    });
};

module.exports = Projeto;