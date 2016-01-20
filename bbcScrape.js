var Xray = require("x-ray");

var xray = new Xray();

xray("http://www.bbc.co.uk/news", '.title-link__title-text',
[{
	span: ''	
}]
)
	.write("results.json");

console.log('BBC News scraped');
