# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140108135529) do

  create_table "cartoes", force: true do |t|
    t.integer  "numero_cartao"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "clientes", force: true do |t|
    t.string   "nome"
    t.integer  "cartao_id"
    t.integer  "telefone"
    t.integer  "cep"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "comandas", force: true do |t|
    t.integer  "cartao_id"
    t.decimal  "peso",       precision: 10, scale: 2
    t.decimal  "valor",      precision: 10, scale: 2
    t.integer  "status"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "configuracoes", force: true do |t|
    t.decimal  "valor_kg",   precision: 10, scale: 2
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "despesas", force: true do |t|
    t.string   "nome"
    t.text     "descricao"
    t.decimal  "valor",      precision: 10, scale: 2
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "falta", force: true do |t|
    t.integer  "funcionario_id"
    t.datetime "data_falta"
    t.text     "motivo"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "funcionarios", force: true do |t|
    t.string   "nome"
    t.string   "cargo"
    t.decimal  "salario",    precision: 10, scale: 2
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "produto_pagos", force: true do |t|
    t.integer  "produto_id"
    t.integer  "comanda_id"
    t.integer  "quantidade"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "produtos", force: true do |t|
    t.integer  "numero_codigo"
    t.string   "nome"
    t.decimal  "valor",         precision: 10, scale: 2
    t.text     "descricao"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "promocoes", force: true do |t|
    t.integer  "cliente_id"
    t.string   "nome"
    t.text     "descricao"
    t.decimal  "valor",      precision: 10, scale: 2
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
