const ProjetoModel = require('../models/projetosModel');

exports.index = (req, res) => {
    ProjetoModel.index((err, projetos) => {
        if(err) {
            res.send(err);
        } else {
            console.log('Projetos: ', projetos);
            res.send(projetos);
        };
    });
};

exports.show = (req, res) =>  {
    ProjetoModel.show(req.params.id, (err, projeto) => {
        if(err) {
            res.send(err);
        } else {
            console.log('Projeto: ', projeto);
            res.send(projeto);
        };
    });
};

exports.store = (req, res) => {
    const novoProjeto = new ProjetoModel(req.body);
    console.log('Criado o projeto: ', novoProjeto);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Por favor, preencha todosos campos.'});
    } else {
        ProjetoModel.store(novoProjeto, (err, projeto) => {
            if(err) {
                res.send(err);
            } else {
                res.json({status: true, message: 'Novo projeto criado.', data: projeto.insertId})
            };
        });
    };
};

exports.update = (req, res) => {
    const novoProjeto = new ProjetoModel(req.body);
    console.log('Projeto atualizado: ', novoProjeto);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({success: false, message: 'Por favor, preencha todosos campos.'})
    } else {
        ProjetoModel.update (req.params.id, novoProjeto, (err, projeto) => {
            if(err) {
                res.send(err);
            } else {
                res.json({status: true, message: 'Projeto atualizado.'});
            };
        });
    };
};

exports.destroy = (req, res) => {
    ProjetoModel.destroy(req.params.id, (err, naver) => {
        if(err) {
            res.send(err);
        } else {
            res.json({success:true, message: 'Naver deletado com sucesso!'});
        };
    });
};