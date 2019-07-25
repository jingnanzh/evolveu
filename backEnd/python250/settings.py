import datetime

db_name = 'db.xlsx'

# db_datatypes = {'natural': validate_natural, 'string': validate_string, 'date': validate_date}

db_t_clients_name = 'Clients'
#db_t_clients_structure = {'ID': 'natural', 'Client': 'string'}

db_t_items_name = 'Items'
#db_t_items_structure = {'ID': 'natural', 'Name': 'string', 'Price': 'natural'}

db_t_lines_name = 'Lines'
#db_t_lines_structure = {'ID': 'natural', 'Invoice': 'natural', 'Item': 'natural'}

db_t_invoices_name = 'Invoices'
#db_t_invoices_structure = {'ID': 'natural', 'Date': 'date', 'Client': 'natural'}

def validate_date(value):

    result = isinstance(value, datetime.date)
    # print(f'Date validation: {value}, {result}')
    return result

def validate_natural(value):

    result = isinstance(value, int) and value > 0
    # print(f'Natural validation: {value}, {result}')
    return result

def validate_string(value):

    result = isinstance(value, str) and len(value) > 0 and value[0] != "#"
    # print(f'String validation: {value}, {result}')
    return result
 