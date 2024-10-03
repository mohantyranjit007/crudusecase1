
const e = require("express"); 
const express = require("express");
const SellBuy = require("../mongoose/models/sellBuy")
// setting up the router
const sellAndBuyRouter = new express. Router();

// code goes here for routes
sellAndBuyRouter.get("/sellProduct", async (req, res) => {
    try {
    let query = {};
    let sortBy = null; 
    if (req.query.product) {
        query.productName= req.query.product;
    }
    
    if (req.query.sortBy) {
        switch (req.query.sortBy){ 
            case "lowerCostPrice":
            sortBy = {costPrice: 1 } 
                break;
            case "higherCostPrice":
            sortBy = { costPrice: -1} 
                break;
            case "lowerSoldPrice":
            sortBy ={soldPrice: 1 } 
                break;
            case "higherSoldPrice":
            sortBy ={soldPrice: -1 } 
                break;
            default:
                return res.status (400).json({error: "Invalid sort"})
        }
    }
    const data = await SellBuy.find(query). sort (sortBy); 
    res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }
})
    
sellAndBuyRouter.post("/sellProduct", async (req, res)=>{
    try {
        if(req.body.productName.length<4) {
            return res.status(400).json({error: "product name should have minimum of four characters"});
        } 
        else if(req.body.costPrice<1){
            return res.status(400).json({error: "cost price value cannot be zero or negative value"}); 
        }
        const data = new SellBuy ({productName: req.body.productName, costPrice: req.body.costPrice}) 
        await data.save()
        res.status(201).json({message: "Product Added"});
    } 
    
    catch (err) {
        res.status(400).json({error:err.message})
    }
});

sellAndBuyRouter.patch("/sellProduct/:id", async(req, res)=>{
    try {
    if (req.body.soldPrice<l) {
        return res.status (400).json({error: "sold price value cannot be zero or negative value"});
    } 
    const data = await SellBuy.findByIdAndUpdate (req.params.id, req.body, {new: true})
    if(!data){
        return res.status(400).json({error: "Product not found"})
    }
    res.status(200).json({message: "Updated Successfully"});
    }
    catch (err) {
        res.status(400).json({error:err.message})
    }
})

sellAndBuyRouter.delete("/sellProduct/:id", async(req, res)=>{
        try{
            const data = await SellBuy.findByIdAndDelete(req.params.id) 
            if(!data){
                return res.status (400).json({error: "Product not found"})
            }
            res.status(200).json({message: "Deleted successfully"}); 
       }
       catch (err) {
            res.status(400).json({error:err.message})
       }
})
module.exports =sellAndBuyRouter;
    
        