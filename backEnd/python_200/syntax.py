# define attributes / variables
##number
mynumber = 2
print("number:", mynumber)
# string
mystring = "Hello"
print("mystring:", mystring)
txt= mystring[::-1]
print('reverse', txt)


# boolean
	# True
	# False
	# 0
	# 1
myboolen = False
print("myboolen:", myboolen)
# array
myarray=["cat", "dog", "human"]
print("myarray:", myarray[:2])#last digit is not included

myarray.append(['bird','seeds'])
print('myarray after append',myarray)
myarray.extend(['cow','glass'])
print('myarray after extend', myarray)

# sort can only be used for number list
print('pop will delete',myarray.pop(0)) #pop will delete 

matrix=[[1,2,3],[4,5,6],[7,8,9]]

first_col=[row[0] for row in matrix]
print('this is for the list command',first_col)

# reverse a list:
os=[1,2,3]
# Accessing Individual Elements in Reversed Order
os.reverse() #this will return the os, cannot be re-assign to a new object
# I used os_reverse=os.reverse(), when checked out, os_reverse gave a result none
print('matrix_reverse', os)

# dictionary / objects
mydictionary = {
    'brand': 'Ford',
    'model': 'Escape',
    'year': 2015
}

	# re-assign:
my_stuff={'lunch':'pizza', 'bfast':'eggs'}
my_stuff['lunch']='burger'
my_stuff['dinner']='pasta'
print(my_stuff)

# tuples
t=(1,2,3)
print('tuple',t[0])

# set is unique unordered elements
x=set()
x.add(1)
x.add(4)
x.add(4)
x.add(0.3)
print('set',x) #output will be 1, 3, 0.3

# set can convert a list into a unique element set
convert =  set([1,1,1,2,2,2,2,3,3,3,3])
print(convert) #{1,2,3}
# immutable sequences

# undefined

# sample if / else
# functions
# parameters
# returns
# arrays
# add to the front
# add to the end
# update values
# loops
# for
seq = [1,2,3,4,5]
for item in seq:
	print(item)
# for/in
# while
# do while
# forEach (with array and function)
# Objects / Dictionaries
# declare object
# lookup key to retrieve value
