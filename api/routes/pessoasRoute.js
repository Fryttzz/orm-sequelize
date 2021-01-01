const { Router } = require('express')
const PessoaController = require('../controllers/PessoasController')

const router = Router()

router
    .get('/pessoas', PessoaController.pegaPessoasAtivas)
    .get('/pessoas/todos', PessoaController.pegaTodasAsPessoa)
    
    .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
    .get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)
    .get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma)
    .get('/pessoas/matricula/lotada', PessoaController.pegaTurmaLotadas)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegarUmaMatricula)
    
    .post('/pessoas', PessoaController.criaPessoa)
    .post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)
    .post('/pessoas/:id/restaura', PessoaController.restautaPessoa)
    
    .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
    .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)
    
    .put('/pessoas/:id', PessoaController.atualizaPessoa)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
    
    .delete('/pessoas/:id', PessoaController.removePessoa)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.removeMatricula)

module.exports = router