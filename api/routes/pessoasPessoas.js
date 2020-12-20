const { Router } = require('express')
const PessoaController = require('../controllers/PessoasController')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoa)

router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)

router.post('/pessoas', PessoaController.criaPessoa)

router.put('/pessoas/:id', PessoaController.atualizaPessoa)

router.delete('/pessoas/:id', PessoaController.removePessoa)

router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegarUmaMatricula)

router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)

router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)

router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.removeMatricula)

router.post('/pessoas/:id/restaura', PessoaController.restautaPessoa)

router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)

module.exports = router