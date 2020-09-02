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
                                    { name: 'codigo', text: deal.id },
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
        })
    }
}