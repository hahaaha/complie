const ASTNodeTypes = require("./ASTNodeTypes");
const Stmt = require("./Stmt");

class BLOCK extends Stmt {
    constructor(parent) {
        super(parent, ASTNodeTypes.BLOCK, 'block')
    }
}

module.exports = BLOCK