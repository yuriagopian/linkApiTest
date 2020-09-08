define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "src/apidoc/main.js",
    "group": "/home/yuri/Estudos/linkapi/src/apidoc/main.js",
    "groupTitle": "/home/yuri/Estudos/linkapi/src/apidoc/main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "http://localhost:3000/oportunities",
    "title": "Lista oportunidades",
    "description": "<p>lista o agregado de oportunidades por dia.</p>",
    "group": "Oportunities",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n    \"data\": \"01/09/2020\",\n    \"valorTotal\": 200,\n    \"qtde\": 2\n  },\n  {\n    \"data\": \"03/09/2020\",\n    \"valorTotal\": 5080,\n    \"qtde\": 4\n  }\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>Data de inserção do pedido no pipedrive</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "valorTotal",
            "description": "<p>Valor total de oportunidades com status Won inseridas no bling</p>"
          },
          {
            "group": "Success 200",
            "type": "numer",
            "optional": false,
            "field": "qtde",
            "description": "<p>Quantidade total de oportunidades com status Won inseridas no bling</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: 400",
          "content": "HTTP/1.1 400 OK\n {\n  \"message\": \"Bad Request!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "Oportunities",
    "name": "GetHttpLocalhost3000Oportunities"
  },
  {
    "type": "post",
    "url": "http://localhost:3000/oportunities",
    "title": "Inserting oportunities",
    "description": "<p>lista todos os pedidos com oportunidade Won e os insere no bling como pedidod de venda</p>",
    "group": "Oportunities",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  [\n  {\n    \"numero\": \"99\",\n    \"idPedido\": 9392027746,\n    \"valueOrder\": 100,\n    \"organizationName\": \"Linkapi\",\n    \"wonTime\": \"2020-09-01 19:24:47\"\n  },\n  {\n    \"numero\": \"98\",\n    \"idPedido\": 9392027743,\n    \"valueOrder\": 100,\n    \"organizationName\": \"Linkapi\",\n    \"wonTime\": \"2020-09-01 19:26:53\"\n  },\n  {\n    \"numero\": \"96\",\n    \"idPedido\": 9392027737,\n    \"valueOrder\": 80,\n    \"organizationName\": \"teste\",\n    \"wonTime\": \"2020-09-03 00:13:06\"\n  },\n  {\n    \"numero\": \"97\",\n    \"idPedido\": 9392027740,\n    \"valueOrder\": 1000,\n    \"organizationName\": \"teste\",\n    \"wonTime\": \"2020-09-03 00:48:17\"\n  },\n  {\n    \"numero\": \"100\",\n    \"idPedido\": 9392027749,\n    \"valueOrder\": 2000,\n    \"organizationName\": \"teste\",\n    \"wonTime\": \"2020-09-03 01:28:29\"\n  },\n  {\n    \"numero\": \"95\",\n    \"idPedido\": 9392027734,\n    \"valueOrder\": 2000,\n    \"organizationName\": \"teste\",\n    \"wonTime\": \"2020-09-03 01:48:21\"\n  }\n]}\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "numero",
            "description": "<p>Numero do pedido.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "idPedido",
            "description": "<p>Id do pedido.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "valueOrder",
            "description": "<p>Valor totaL do pedido.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "organizationName",
            "description": "<p>Nome da empresa.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "wonTime",
            "description": "<p>Data na qual o status foi alterado par won.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: 400",
          "content": "HTTP/1.1 400 OK\n {\n  \"message\": \"Bad Request!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "Oportunities",
    "name": "PostHttpLocalhost3000Oportunities"
  }
] });
