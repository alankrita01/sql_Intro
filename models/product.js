const db = require('../util/database');



const Cart = require('./cart');



module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
   // it reach out to database and save the data there
   return db.execute(
    'INSERT INTO products (title,price,description,imageUrl) VALUES(?,?,?,?)',
    [this.title,this.price,this.description,this.imageUrl]
   );
  }

  static deleteById(id) {
    // to delete data from database and webpage
    return db.execute('DELETE FROM products WHERE products.id = ?',[id]);
  }

  static fetchAll() {
    // intrested in the return value in the place where calling fetch all
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    //fetching single product
    return db.execute('SELECT * FROM products WHERE products.id = ?',[id]);
  } 
};
