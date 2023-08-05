let glumulu = 10;
let batashi = 20;

console.log(glumulu, batashi);

virus = glumulu;
glumulu = batashi;
batashi = virus

//alternative way ----------
//[ glumulu, batashi ] = [ batashi, glumulu ];

console.log(glumulu, batashi);