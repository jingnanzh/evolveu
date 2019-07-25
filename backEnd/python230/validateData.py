import datetime


def validate_date(value):

    result = isinstance(value, datetime.date)
    # print(f'Date validation: {value}, {result}')
    return result

def validate_natural(value):

    result = isinstance(value, int) and value > 0
    # print(f'Natural validation: {value}, {result}')
    return result

def validate_string(value):

    result = isinstance(value, str) and len(value) > 0
    # print(f'String validation: {value}, {result}')
    return result

