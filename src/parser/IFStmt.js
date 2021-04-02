const ASTNodeTypes = require("./ASTNodeTypes");
const Stmt = require("./Stmt");

class IFStmt extends Stmt {
    constructor(parent) {
        super(parent, ASTNodeTypes.IF_STMT, 'if')
    }
}

module.exports = IFStmt