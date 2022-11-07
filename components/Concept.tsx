


import { ReactElement, ReactNode } from "react";
import { PreferencesType, usePreferences } from "../context/UserPreferences";


export interface ExpressionProps {
    lang: Language,
    children: ReactNode,
    id?: number  // or a string?
}


export const Expression = ({lang, children, ...props}: ExpressionProps) => {
    return(
        <>
            {children}
        </>
    )
}


export type Language = 'en' | 'es' | 'jp'

// RECONSIDER NEEDING TO MAKE A PROPOSITION COMPONENT. IT COULD BE IDENTIFIED NOT AS A SECTION, BUT AS DISTRIBUTED.
// TO CREATE THIS DISTRIBIUTED EFFECT WE HAVE TO SPREAD THE PROPOSITION ACROSS ALL ITS COMPONENTS. THEREFORE, 
// THE TERMS (SUBJECT, PREDICATE, AND OBJECT) MUST HAVE A RELATION TO THE PROPOSITION ID. THE TERM CAN ALSO BE PART OF MULTIPLE
// PROPOSITIONS, SO THESE ARE ALL THINGS TO BE CONSIDERED. THIS COULD BE ACHIEVED VIA HTML CLASSES, OR REACT ELEMENT PROPS VIA REFS!.
/*export interface PropositionsProps extends ExpressionProps {
    lang: Language,
    children: ReactNode,
    id?: number,
    subject: SubjectType,
}

interface SubjectProps extends TermProps {

}

interface TermProps extends _collectionProps {

}
*/

// When there are multiple children, there can only be one Expression per same lang value



type ExpressionType = ReactElement<ExpressionProps>

/*type InArray<T extends ExpressionType[], X extends ExpressionType> = 
    T extends [X, ...infer _Rest]
        ? true
        : T extends [X]
            ? true
            : T extends readonly [infer _, ...infer Rest extends ExpressionType[]]
                ? InArray<Rest, X>
                : false
*/

type InArray<T extends ExpressionType[], X extends ExpressionType> = 
    // if T doesn't extend X, and T extends another set, 
   T extends Iterable<[infer A extends ExpressionType, ...infer Rest extends ExpressionType[]]>
        ? X["props"]["lang"] extends A["props"]["lang"]
            ? true
            : InArray<Rest, X>
        : T extends [X]
            ? true
            : false


type UniqueLang<T extends ExpressionType[]> = 
    T extends [T[0], ...infer Rest extends ExpressionType[]]
        ? InArray<Rest, T[0]> extends true
            ? ['Encountered value with duplicates:', T[0]["props"]["lang"]]
            : Rest extends ExpressionType[]
                ? UniqueLang<Rest>
                : T
        : T[1]["props"]["lang"] extends T[0]["props"]["lang"]
            ? ['Encountered value with duplicates:', T[0]["props"]["lang"]]
            : T

//type Test<E> = 

/*
type UniqueArray<T> = 
    T extends readonly ExpressionType[] & [infer X, ...infer Rest]
    ? InArray<Rest, X> extends true
        ? ['Encountered value with duplicates:', X]
        : readonly [X, ...UniqueArray<Rest>]
    : T
*/

interface ConceptProps {
    lang?: Language,
    children: ExpressionType | ExpressionType[],//UniqueLang<ExpressionType[]>,
    id?: number,  // or a string?
}


const Concept = ({lang, children, ...props}: ConceptProps) => {

    const {language}: PreferencesType = usePreferences();

    if (typeof lang === 'undefined') {
        lang = language;
    }

    
    if (Array.isArray(children)) {          // If there are multiple children
        for (let lexicalForm of children) {
            for (let i = 0; i < children.length; i++) {
                if (lexicalForm !== children[i]) {
                    if (lexicalForm.props.lang === children[i].props.lang) {     // There can not be two children that have the same lang value
                        throw 'There are more than one Expression in the same language'
                    }
                }
            }
        }
        
        let childrenChanged = false;

        for (let lexicalForm of children) {
            if (lexicalForm.props.lang === lang) {      // Set the child to the matched lang of the child to the context's
                children = lexicalForm;
                childrenChanged = true;
                break
            }
        }
        
        if (!childrenChanged) {     // If there were multiple children, but none matched its lang value, empty the children
            children = <></>;
        }
    } 
    
    else {          // If there is only one child
        if (children.props.lang !== lang) {
            children = <></>;
        }
    }

    return( 
        <>
            {children}
        </>

    )
}

export default Concept


