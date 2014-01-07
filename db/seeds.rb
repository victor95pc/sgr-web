#encoding: utf-8
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#Produtos
coca = Produto.create numero_codigo: 00000001, nome: 'Coca-Cola(Lata)', valor: 4, descricao: 'Coco-cola lata para beber'
pepsi = Produto.create numero_codigo: 00000002, nome: 'Pepsi(Lata)', valor: 3.9, descricao: 'Lata de Pepsi'
guaracamp = Produto.create numero_codigo: 00000003, nome: 'GuaraCamp', valor: 2.5, descricao: 'Guaracamp'

victor = Funcionario.create nome: 'Victor Palomo', cargo: 'Dono do Mundo', salario: '0'
Falta.create funcionario_id: victor.id, motivo: 'O mundo não estava pronto!'

cartao_do_victor = Cartao.create numero_cartao: '000000000'
victor = Cliente.create nome: 'Victor', cartao_id: cartao_do_victor.id, telefone: 74952926, cep: 23550370
comanda_victor = Comanda.create cartao_id: cartao_do_victor.id, peso: 1.234847, valor: 150.4795, status: 2

ProdutoPago.create produto_id: coca.id, comanda_id: comanda_victor.id, quantidade: 4
ProdutoPago.create produto_id: pepsi.id, comanda_id: comanda_victor.id, quantidade: 2
ProdutoPago.create produto_id: guaracamp.id, comanda_id: comanda_victor.id, quantidade: 1