from backend import db 
from backend.models import Customer, Product, Invoice_product, Invoice

db.create_all()

c1 = Customer('Jing')
c2 = Customer('Lisa')
c3 = Customer('Larry')

p1 = Product('apple', 10)
p2 = Product('orange', 13)
p3 = Product('cherry', 50)


Ip1 = Invoice_product(1,3)
Ip2 = Invoice_product(2,2)
Ip3 = Invoice_product(3,1)
Ip4 = Invoice_product(3,2)
Ip5 = Invoice_product(3,3)

Inv1 = Invoice( 1, '2019-03-01')
Inv2 = Invoice( 2, '2019-04-01')
Inv3 = Invoice( 3, '2019-05-01')


db.session.add_all([c1, c2, c3, p1, p2, p3, Ip1, Ip2, Ip3, Ip4, Ip5, Inv1, Inv2, Inv3])

db.session.commit()


print(db)
# # Import database info
# from invoice_app import db, Line_Item, Invoice, Product, Customer

# # Create the tables in the database
# # (Usually won't do it this way!)
# db.create_all()

# # Create new entries in the database

# Inv1 = Invoice(1,"2019-01-01" )
# Inv2 = Invoice(2, '2018-10-01')
# Inv3 = Invoice(3, '2019-04-05')
# Inv4 = Invoice(4, '2019-03-05')
# Inv5 = Invoice(4, '2019-10-05')
# Inv6 = Invoice(2, '2019-11-05')

# Prod1 = Product('Driver', 500)
# Prod2 = Product('Iron', 250)
# Prod3 = Product('Putter', 100)
# Prod4 = Product('Club Cover', 50)

# Cust1 = Customer('Gregory')
# Cust2 = Customer('Lauren')
# Cust3 = Customer('Jawad')
# Cust4 = Customer('Larry')

# Line1 = Line_Item(1,1,10)
# Line2 = Line_Item(1,2,20)
# Line3 = Line_Item(2,3,10)
# Line5 = Line_Item(3,1,5)
# Line6 = Line_Item(4,4,10)
# Line7 = Line_Item(4,2,1)
# Line8 = Line_Item(5,3,100)
# Line9 = Line_Item(5,4,20)



# # Ids will get created automatically once we add these entries to the DB
# db.session.add_all([Inv1, Inv2, Inv3, Inv4,Inv5,Inv6,Cust1,Cust2,Cust3,Cust4])
# db.session.add_all([Line1,Line2,Line3,Line5,Line6,Line7,Line8,Line9,Prod1,Prod2,Prod3,Prod4])

# # Alternative for individual additions:
# # db.session.add(sam)
# # db.session.add(frank)
 
# # Now save it to the database
# db.session.commit()

# # # Check the ids
# # print(Inv1.print_invoice())
# # print(Inv2.inv_num)