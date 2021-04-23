import { IfStatement } from "@solidity-parser/parser/dist/ast-types";

import { Location, FinderType, Node } from "./Node";

export class IfStatementNode implements Node {
    type: string;
    uri: string;
    astNode: IfStatement;

    nameLoc?: Location | undefined;

    parent?: Node | undefined;
    children: Node[] = [];

    constructor (ifStatement: IfStatement, uri: string) {
        this.type = ifStatement.type;
        this.uri = uri;
        this.astNode = ifStatement;
        // TO-DO: Implement name location for rename
    }

    getName(): string | undefined {
        return undefined;
    }

    addChild(child: Node): void {
        this.children.push(child);
    }

    setParent(parent: Node): void {
        this.parent = parent;
    }

    accept(find: FinderType, orphanNodes: Node[], parent?: Node): Node {
        // TO-DO: Method not implemented
        return this;
    }
}