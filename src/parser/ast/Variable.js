const ASTNodeTypes = require("./ASTNodeTypes");
const Factor = require("./Factor");

class Variable extends Factor {
    constructor(parent) {
        super(parent, ASTNodeTypes.VARIABLE, 'var')
    }
}