import sys
import os
import time
from openpyxl import load_workbook, Workbook
from pathlib import Path
from openpyxl.worksheet.datavalidation import DataValidation
import validateData
from flask import Flask,render_template,jsonify, request, redirect, url_for
from flask_restful import Resource, Api
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from backend.models import Invoice, Invoice_product, Customer, Product
from backend import app,db



# @app.route('/customers', methods=['GET'])
# def customer_list():
#     customers = Customer.query.all()
#     customer_list = [customer.serialize() for customer in customers]
#     return jsonify(customer_list)

@app.route('/products', methods=['GET'])
def product_list():
    products = Product.query.all()
    product_list = [product.serialize() for product in products]
    return jsonify(product_list)

#try another method using resp with the code 200 for return
@app.route('/invoices', methods=['GET'])
def invoices():
    invoices = Invoice.query.all()
    invoice_list = [invoice.serialize() for invoice in invoices]
    resp = jsonify(invoice_list)
    return resp, 200

@app.route('/lines', methods=['GET'])
def lines():
    lines = Invoice_product.query.all()
    line_list = [line.serialize() for line in lines]
    resp = jsonify(line_list)
    return resp, 200

# this is from Shane:

@app.route('/add_invoice', methods=['GET', 'POST'])
def add_invoice():
    if request.method == 'POST':
        json_data = request.get_json(force=True)
        add_inv = Invoice(date=json_data.get('date'),
                        customer_id=json_data.get('customer_id'))
        # add to dbase:
        db.session.add(add_inv)
        db.session.commit()

    else:
        print('FROM ELSE')
    return redirect(url_for('invoices'))


# @app.route('/remove_invoice', methods=['GET', 'POST'])
# unsuccesful: DETAIL:  Key (id)=(2) is still referenced from table "invoices_products".

# def remove_invoice():
#     if request.method == 'POST':
#         json_data = request.get_json(force=True)
#         remove_data = Invoice.query.filter_by(id=json_data['invoice_id']).first()
#         print('remove_data',remove_data)

#         db.session.delete(remove_data)
#         db.session.commit()
#     else:
#         print('FROM REMOVE_INVOICE ELSE')
#     return redirect(url_for('invoices'))


@app.route('/add_line', methods=['GET', 'POST'])
def add_line():
    if request.method == 'POST':
        json_data = request.get_json(force=True)
        add_line = Invoice_product(invoice_id=json_data.get('invoice_id'),
                        product_id=json_data.get('product_id'),
                        qty=json_data.get('qty'))

        db.session.add(add_line)
        db.session.commit()

    else:
        print('FROM ELSE')
    return redirect(url_for('lines'))

@app.route('/remove_line', methods=['GET', 'POST'])
def remove_line():
    if request.method == 'POST':
        json_data = request.get_json(force=True)
        remove_data = Invoice_product.query.filter_by(id=json_data['line_id']).first()
        print('remove_data',remove_data)

        db.session.delete(remove_data)
        db.session.commit()
    else:
        print('FROM ELSE')
    return redirect(url_for('lines'))


@app.route('/invoice_details/<inv_num>', methods=['GET'])
def invoice_details(inv_num=None):
    lines = Invoice_product.query.filter_by(invoice_id=inv_num).all()
    # print(f'lines are v4 {lines}')
    invoice = Invoice.query.filter_by(id=inv_num).first()
    # print('invoice cust id is ', invoice.cust_id)

    customer = Customer.query.filter_by(id=invoice.customer_id).first()
    # print('cust ', customer)
    total = 0
    products = []

    for line in lines:
        print('line is' ,line)
        # print('line.prod_id is ',line.prod_id,' ')
        currprodobj = Product.query.filter_by(id=line.product_id).first()
        total += line.qty*currprodobj.price
        currprod = currprodobj.serialize()
        currprod['qty'] = line.qty
        print('curr prod is ', currprod)
        products.append(currprod)
        
    inv_json = {'Line': line.serialize(),'Invoice': invoice.serialize(), 'Customer': customer.serialize(), 'Products': products, 'TotalCost': total}
    # print('inv json is ', inv_json)
    resp = jsonify(inv_json)
    # print('products in invoice are ', products)
    # print('---json---:', resp.response)
    return resp, 200


if __name__ == '__main__':
   app.run(debug = True)

