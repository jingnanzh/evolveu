from backend import db 


class Customer(db.Model):

    __tablename__ = 'customers'
    id = db.Column(db.Integer,primary_key= True)
    name = db.Column(db.Text)


    def __init__(self,name):        
        self.name = name

    def serialize(self):
        return {'id': self.id, 'name': self.name}


# this is from udemy course, forgot the purpose:
#     def __repr__(self):
#         return f"Customer Name: {self.name}"


class Product(db.Model):

    __tablename__ = 'products'
    id = db.Column(db.Integer,primary_key= True)
    name = db.Column(db.Text)
    price = db.Column(db.Integer) 

    def __init__(self,name,price):
        self.name = name
        self.price = price

    def serialize(self):
        return {'id': self.id, 'name': self.name, 'price': self.price}

#     def __repr__(self):
#         return f"Product Name: {self.name}"

class Invoice_product(db.Model):

    __tablename__ = 'invoices_products'
    id = db.Column(db.Integer,primary_key= True)
    invoice_id = db.Column(db.Integer, db.ForeignKey('invoices.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('products.id')) 
    qty = db.Column(db.Integer) 

    def __init__(self,invoice_id,product_id,qty):
        self.invoice_id = invoice_id
        self.product_id = product_id
        self.qty = qty


    #one list id has many invoices, this refers to the invoices table
    # invoices = db.relationship('Invoice',backref='inoices')
    # #one invoice has many products, this refers to the products table
    # # Error: On relationship Invoice_product.invoices, 'dynamic' loaders cannot be used with many-to-one/one-to-one relationships and/or uselist=False.
    # products = db.relationship('Product', backref='products')

    def serialize(self):
        return {'id': self.id, 'invoice_id': self.invoice_id, 'item_id': self.product_id, 'qty':self.qty}

#     def __repr__(self):
#         return f"Invoice to product name: {self.name}"

class Invoice(db.Model):

    __tablename__ = 'invoices'
    id = db.Column(db.Integer,primary_key = True)
    # this is from google research for foreign key:
    # attribute_group_id = db.Column(db.Integer, db.ForeignKey('oc_attribute_groups.attribute_group_id'))
    # We use invoices.id because __tablename__='invoices'
    # invoice_id = db.Column(db.Integer,db.ForeignKey('invoices.id'))
    customer_id= db.Column(db.Integer, db.ForeignKey('customers.id'))
    date = db.Column(db.Date)
    

    # #one invoice has one customer can use uselist=False at the end, error when this was used
    # customers = db.relationship('Customer',backref='customer')


    def __init__(self,customer_id,date):
        self.customer_id = customer_id        
        self.date = date

    def serialize(self):
        return {'id': self.id, 'customer_id': self.customer_id, 
                'date': self.date}

    # this is from udemy course, no idea what purpose:
    # def __repr__(self):
    #     if self.invoice:
    #         return f"Invoice date is {self.date} and customer is {self.customer.name}"
    #     else:
    #         return f"Invoice name is {self.name} and has no customer id assigned yet."    


    # this is from shane:
    # class Tech(db.Model):
    #     __tablename__ = 'tech'
    #     tech_id = db.Column(db.Integer, primary_key=True)
    #     first_name = db.Column(db.Text)
    #     last_name = db.Column(db.Text)
    #     position = db.Column(db.Text)
    #     apprentice_year = db.Column(db.Integer)
    #     jobs = db.relationship('Jobs', backref='tech')

    #     def __init__(self, first_name, last_name, position, apprentice_year):
    #         self.first_name = first_name
    #         self.last_name = last_name
    #         self.position = position
    #         self.apprentice_year = apprentice_year

    #     def serialize(self):
    #         return {'tech_id': self.tech_id, 'first_name': self.first_name, 
    #                 'last_name': self.last_name, 'position': self.position, 
    #                 'apprentice_year': self.apprentice_year}

    # class Jobs(db.Model):
    #     __tablename__ = 'jobs'
    #     job_id = db.Column(db.Integer, primary_key=True)
    #     ro_number = db.Column(db.Integer, unique=True)
    #     company = db.Column(db.Text)
    #     description = db.Column(db.Text)
    #     tech_id = db.Column(db.Integer, db.ForeignKey('tech.tech_id'))
    #     est_completion = db.Column(db.Float)

    #     def __init__(self, ro_number, company, description, tech_id, est_completion):
    #         self.company = company
    #         self.ro_number = ro_number
    #         self.description = description
    #         self.tech_id = tech_id
    #         self.est_completion = est_completion
        
    #     def serialize(self):
    #         return {'job_id': self.job_id, 'company': self.company, 
    #                 'description': self.description, 'tech_id': self.tech_id, 
    #                 'est_completion': self.est_completion,
    #                 'ro_number': self.ro_number}


    # class Parts(db.Model):
    #     __tablename__ = 'parts'
    #     parts_id = db.Column(db.Integer, primary_key=True)
    #     job_id = db.Column(db.Integer, db.ForeignKey('jobs.job_id'))
    #     description = db.Column(db.Text)
    #     cost = db.Column(db.Float)

    #     def __init__(self, job_id, description, cost):
    #         self.job_id = job_id
    #         self.description = description
    #         self.cost = cost

    #     def serialize(self):
    #         return {'job_id': self.job_id, 'description': self.description,
    #                 'cost': self.cost}
