const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controller = {
	index: (req, res) => {
		const visited = products.filter(producto => producto.category == "visited");
		const inSale = products.filter(producto => producto.category == "in-sale") 
		res.render("index",{visited,inSale,toThousand,usuario:req.session.user})
	},
	search: (req, res) => {
		const busqueda = req.query.keywords;
		const result = [];
		products.forEach( producto => {
			if (producto.name.toLowerCase().includes(busqueda.toLowerCase())){
				result.push(producto)
			}
			
		});
		res.render("results", {result,busqueda,toThousand})
	},
};


module.exports = controller;