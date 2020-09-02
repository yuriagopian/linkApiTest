const jsonToXml = require('jsontoxml');

const { apiBling } = require('../services/api')

module.exports = {
    async generate(deals) {

        const orders = deals.map(async (deal) => {
            const xmlConverted = jsonToXml({
                pedido: [
                    {
                        name: 'cliente',
                        children: [
                            { name: 'nome', text: deal.org_id.name }
                        ]
                    },

                    {
                        name: 'itens',
                        children: [
                            {
                                name: 'item',
                                children: [
                                    // { name: 'codigo', text: deal.id },
                                    { name: 'codigo', text: Math.random() * (1000 - 0) + 0 },
                                    { name: 'descricao', text: 'oportunidade' },
                                    { name: 'qtde', text: 1 },
                                    { name: 'vlr_unit', text: deal.value }
                                ]
                            }
                        ]
                    }
                ]
            })
            //
            const postOrder = await apiBling.post(
                `/pedido/json?apikey=${process.env.API_KEY_BLING}&xml=${xmlConverted}`
            );

            const { pedido } = postOrder.data.retorno.pedidos[0];

            pedido.valueOrder = deal.value;
            delete pedido.codigos_rastreamento;
            delete pedido.volumes;
            pedido.organizationName = deal.org_id.name;
            pedido.wonTime = deal.won_time;

            return pedido
        })

        const todos = Promise.all(orders).then((values) => {
            return values
        })

        return todos
    }

}