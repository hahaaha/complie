const ASTNodeTypes = require("./ASTNodeTypes");
const Factor = require("./Factor");

class Scalar extends Factor {
    constructor(parent) {
        super(parent, ASTNodeTypes.SCALAR, 'scalar')
    }
}

module.exports = Scalar