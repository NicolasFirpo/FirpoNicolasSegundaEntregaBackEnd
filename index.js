
const fs = require('fs')

class ProductManager{
    constructor(){
        this.products= []
    }

getProducts= ()=> this.products
getProductsById = (id)=>{
    const productDb = this.products.find(product=>product.id===id)
    if (!productDb){
        return `No se encuentra el producto con id ${id}`
    }else {
        return productDb
    }
}
addProduct= (newItem)=>{
    const productoDb = this.products.find(product => product.code === newItem.code)

    if (productoDb){
        
        return 'Se encuentra el producto en el sistema'
    
    } else if(newItem.title==='' || newItem.description==='' || newItem.price==='' || newItem.picture==='' || newItem.code==='' || newItem.stock===''){

        return 'No se aceptan titulos vacios'

    }else if (this.products.length===0){
        newItem.id = 1
        this.products.push(newItem)
    
    } else {
        this.products = [...this.products, {...newItem, id: this.products[this.products.length - 1].id +1}]
        const saveProducts = async()=>{
            try {
                await fs.promises.writeFile('./Productos.json', JSON.stringify(producto.getProducts()), 'utf-8')
                console.log('Archivo creado');
            } catch (error) {
                console.log(error);
            }
            
    }
    saveProducts()
    }

}
deleteProduct = async(position)=>{
    try {
        const productList = JSON.parse(await fs.promises.readFile('./Productos.json'))

       productList.splice(position,position+1)

        await fs.promises.writeFile('./Productos.json', JSON.stringify(productList), 'utf-8')

        return console.log('Archivo reescrito');

    } catch (error) {
        console.log(error);
    }
}
updateProduct = async(position, newPrice)=>{
    try {
        const productList = JSON.parse(await fs.promises.readFile('./Productos.json')) 

        const productToChange = [...productList,productList[position].price = newPrice]
        
        productToChange.pop()

        await fs.promises.unlink('./Productos.json')
        await fs.promises.writeFile('./Productos.json', JSON.stringify(productToChange), 'utf-8')
        return console.log(productToChange);
    } catch (error) {
        console.log(error);
    }
}

}

const producto = new ProductManager()



producto.addProduct({
    title:'Iphone',
    description:'Mobile Phone',
    price: 1000,
    picture: 'image route',
    code: 1,
    stock: 10
});
producto.addProduct({
    title:'Imac',
    description:'Portable Computer',
    price: 3000,
    picture: 'image route',
    code: 2,
    stock: 5
});



producto.updateProduct(0,100)


producto.deleteProduct(1)


console.log(producto.products);














// console.log(producto.getProducts();
//console.log(producto.getProducts()
// console.log(producto.getProductsById(1));
// console.log(producto.getProductsById(2));
// console.log(producto.getProductsById(3));
// console.log(producto.getProductsById(4));
// console.log(producto.addProduct({
//     title:'Imac',
//     description:'Mobile Computer',
//     price: 3000,
//     picture: 'image route',
//     code: 2,
//     stock: 5
// }));
// console.log(producto.addProduct({
//     title:'',
//     description:'Mobile Computer',
//     price: 4000,
//     picture: 'image route',
//     code: 3,
//     stock: 5
// }))







