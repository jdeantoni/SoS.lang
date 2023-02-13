/******************************************************************************
 * This file was generated by langium-cli 1.0.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

/* eslint-disable */
import { AstNode, AbstractAstReflection, Reference, ReferenceInfo, TypeMetaData } from 'langium';

export type Expr = Plus | Var;

export const Expr = 'Expr';

export function isExpr(item: unknown): item is Expr {
    return reflection.isInstance(item, Expr);
}

export interface Model extends AstNode {
    readonly $type: 'Model';
    statements: Array<Expr>
}

export const Model = 'Model';

export function isModel(item: unknown): item is Model {
    return reflection.isInstance(item, Model);
}

export interface Plus extends AstNode {
    readonly $container: Model;
    readonly $type: 'Plus';
    left: Reference<Var>
    right: Reference<Var>
}

export const Plus = 'Plus';

export function isPlus(item: unknown): item is Plus {
    return reflection.isInstance(item, Plus);
}

export interface Var extends AstNode {
    readonly $container: Model;
    readonly $type: 'Var';
    initialValue?: number
    name: string
}

export const Var = 'Var';

export function isVar(item: unknown): item is Var {
    return reflection.isInstance(item, Var);
}

export interface SimpleLAstType {
    Expr: Expr
    Model: Model
    Plus: Plus
    Var: Var
}

export class SimpleLAstReflection extends AbstractAstReflection {

    getAllTypes(): string[] {
        return ['Expr', 'Model', 'Plus', 'Var'];
    }

    protected override computeIsSubtype(subtype: string, supertype: string): boolean {
        switch (subtype) {
            case Plus:
            case Var: {
                return this.isSubtype(Expr, supertype);
            }
            default: {
                return false;
            }
        }
    }

    getReferenceType(refInfo: ReferenceInfo): string {
        const referenceId = `${refInfo.container.$type}:${refInfo.property}`;
        switch (referenceId) {
            case 'Plus:left':
            case 'Plus:right': {
                return Var;
            }
            default: {
                throw new Error(`${referenceId} is not a valid reference id.`);
            }
        }
    }

    getTypeMetaData(type: string): TypeMetaData {
        switch (type) {
            case 'Model': {
                return {
                    name: 'Model',
                    mandatory: [
                        { name: 'statements', type: 'array' }
                    ]
                };
            }
            default: {
                return {
                    name: type,
                    mandatory: []
                };
            }
        }
    }
}

export const reflection = new SimpleLAstReflection();
