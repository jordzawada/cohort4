from flask import Flask, jsonify, request, render_template

app=Flask(__name__)

stores =[
    {
        'name':'My Wonderful Store',
        'items':[
            {
                'name':'My Item',
                'price':15.99
            }
        ]
    }
]

# POST - used to get data
# GET - used to send data back
# the browser sees the opposite


#POST /store data: {name:}
#GET /store/<string:name>
#GET /store
#POST store/<string:name>/item {name, price}
#GET store/<string:name>/item

@app.route('/') #url/
def home():
    return render_template('index.html')

@app.route('/store',methods=['POST'])
def create_store():
    request_data = request.get_json()
    new_store={
        'name': request_data['name'],
        'items':[]
    }
    stores.append(new_store)
    return jsonify(new_store)

@app.route('/store/<string:name>') #http//:5000/store/some_name
def get_store(name):
    #iterate over stores, if name matches, return it. If none match return error
    for store in stores:
        if store['name'] == name:
            return jsonify(store)
    return josnify({'message':'store not found'})

@app.route('/store/') 
def getStores():
    return jsonify({'stores':stores})

@app.route('/store/<string:name>/item',methods=['POST'])
def createItemInStore(name):
    request_data = request.get_json()
    for store in stores:
        if store['name'] == name:
            new_item={
                'name': request_data['name'],
                'price': request_data['price']
            }
            store['items'].append(new_item)
            return josnify(new_item)
    return jsonify({'message':'store not found'})        

@app.route('/store/<string:name>/item') 
def getItemInStore():
    for store in stores:
        if store['name'] == name:
            return jsonify({'items':store['items']})
    return jsonify({'message':'store not found'})

app.run(port=5000)