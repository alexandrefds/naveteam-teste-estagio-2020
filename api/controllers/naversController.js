const NaverModel = require('../models/naversModel');

exports.index = (req, res) => {
    NaverModel.index((err, navers) => {
        if(err) {
            res.send(err);
        } else {
            console.log('Navers: ', navers);
            res.send(navers);
        };
    });
};

exports.show = (req, res) =>  {
    NaverModel.show(req.params.id, (err, naver) => {
        if(err) {
            res.send(err);
        } else {
            console.log('Naver: ', naver);
            res.send(naver);
        };
    });
};

exports.store = (req, res) => {
    const novoNaver = new NaverModel(req.body);
    console.log('Criado o naver: ', novoNaver);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Por favor, preencha todosos campos.'});
    } else {
        NaverModel.store(novoNaver, (err, naver) => {
            if(err) {
                res.send(err);
            } else {
                res.json({status: true, message: 'Novo naver criado.', data: naver.insertId})
            };
        });
    };
};

exports.update = (req, res) => {
    const novoNaver = new NaverModel(req.body);
    console.log('Naver atualizado: ', novoNaver);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({success: false, message: 'Por favor, preencha todosos campos.'})
    } else {
        NaverModel.update (req.params.id, novoNaver, (err, naver) => {
            if(err) {
                res.send(err);
            } else {
                res.json({status: true, message: 'Naver atualizado.'});
            };
        });
    };
};

exports.destroy = (req, res) => {
    NaverModel.destroy(req.params.id, (err, naver) => {
        if(err) {
            res.send(err);
        } else {
            res.json({success:true, message: 'Naver deletado com sucesso!'});
        };
    });
};