class ASTNode {
    constructor(_parent) {
        /* tree constructor */
        this.children = []
        this.parent = _parent

        // meta info
        this.lexeme = null
        this.type = _type
        this.label = _label
    }

    getChild(index) {
        return this.children[index]
    }

    addChild(node) {
        this.children.push(node)
    }

    getLexeme() {
        return this.lexeme
    }

    getChildren() {
        return this.children
    }

}

module.exports = ASTNode