const Filme = require("../models/Filme");

module.exports = {
    name: 'catalogo-service',
    version: 1,

    actions: {
        async criar(ctx) {
            if (ctx.params) {
                if (ctx.params.nome && ctx.params.sinopse) {
                    return await Filme.create({
                        nome: ctx.params.nome,
                        sinopse: ctx.params.sinopse
                    })
                }
            }
            return false;
        },

        async atualizar(ctx) {
            let filme = await Filme.findById({
                _id:ctx.params.id
            });

            if (filme) {
                return await filme.updateOne({
                    nome:ctx.params.nome ,
                    sinopse: ctx.params.sinopse
                })
            }
        },

        async buscar(ctx) {
            if (ctx.params.id) {
                return await Filme.exists({
                    _id: ctx.params.id
                });
            }
            return false;
        },

        async excluir(ctx) {
            return await Filme.findByIdAndRemove({
                _id: ctx.params.id
            });
        },

        async listar() {
            return await Filme.find();
        }
    }
}