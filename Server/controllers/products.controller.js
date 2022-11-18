// import the model to make queris to the DB

const Product = require("../models/products.model")


//FULL CRUD

//READ ALL
module.exports.findAllProducts = (requestObj,responseObj) => {
    Product.find().sort({name: "asc",})
        .then((allDaProducts) => {
            responseObj.json(allDaProducts)
        })
        .catch(err => {
            console.log("Server Error")
            responseObj.json(err)
        });
}

//FIND ONE
module.exports.findOneProduct = (requestObj,responseObj) => {
    Product.findById(requestObj.params.id)
        .then(oneProduct => {
            responseObj.json(oneProduct)
        })
        .catch(err => {
            console.log("Server Error")
            responseObj.json(err)
        });
}


//Create
module.exports.createNewProduct = (requestObj,responseObj) => {
    Product.create(requestObj.body)
        .then(newlyCreatedProduct => {
            console.log("Server Success")
            responseObj.json(newlyCreatedProduct)
        })
        .catch(err => {
            console.log("Server Error")
            responseObj.status(400).json(err)
        });
}

//Update 
module.exports.updateProduct = (requestObj,responseObj) => {
    Product.findByIdAndUpdate(
        requestObj.params.id ,
        requestObj.body,
        { new: true, runValidators: true })
        .then(updatedProduct => {
            responseObj.json(updatedProduct)
        })
        .catch(err => {
            console.log("Server Error")
            responseObj.json(err)
        });
}

//DELETE
module.exports.deleteProduct = (requestObj,responseObj) => {
    Product.findByIdAndDelete(requestObj.params.id )
        .then(result => {
            console.log("Entry has been deleted")
            responseObj.json(result)
        })
        .catch(err => {
            console.log("Server Error")
            responseObj.json(err)
        });
}