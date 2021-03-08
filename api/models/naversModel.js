const dbConnect = require('../bin/dbConnect');

let Naver = function(naver) {
    this.nameNaver = naver.nameNaver;
    this.birthdate = naver.birthdate;
    this.admission_date = naver.admission_date;
    this.job_role = naver.job_role;
    this.projetos = naver.projetos;
};

Naver.index = (result) => {
    dbConnect.query('SELECT * FROM navers', (err, res) => {
        if(err) {
            console.log('Erro ao retornar os Navers.\nErro: ', err);
        } else {
            console.log('Retorno dos navers.');
            result(null, res);
        };
    });
};

Naver.show = (id, result) => {
    dbConnect.query('SELECT navers.idNaver, navers.nameNaver, projetos.nameProjeto, projetos.idProjeto FROM navers INNER JOIN projetos ON navers.projetos = projetos.idProjeto WHERE idNaver = ?', id, (err, res) => {
        if(err) {
            console.log('Erro ao selecionar um naver pelo id ' + id + ' .');
            result(null, err);
        } else {
            console.log('Naver selecionado pelo id ' + id + '.');
            result(null, res);
        };
    });
};

Naver.store = (novoNaver, result) => {
    dbConnect.query('INSERT INTO navers SET ?', novoNaver, (err, res) => {
        if(err) {
            console.log('Erro ao inserir o novo naver.');
            result(null, err);
        } else {
            console.log('Novo naver criado.');
            result(null, res);
        };
    });
};

Naver.update = (id, novoNaver, result) => {
    dbConnect.query('UPDATE navers SET nameNaver = ?, birthdate = ?, admission_date = ?, job_role = ?, projetos = ? WHERE idNaver = ?', [novoNaver.nameNaver, novoNaver.birthdate, novoNaver.admission_date, novoNaver.job_role, novoNaver.projetos, id], (err, res) => {
        if(err) {
            console.log('Erro ao atualizar o naver');
            result(null, err);
        } else {
            console.log('Naver atualizado');
            result(null, res);
        };
    });
};

Naver.destroy= (id, result) => {
    dbConnect.query('DELETE FROM navers WHERE id = ?', [id], (err, res) => {
        if(err) {
            console.log('Erro ao deletar o naver');
            result(null, err);
        } else {
            console.log('Naver deletado.');
            result(null, res);
        };
    });
};

module.exports = Naver;