


import { Children, ReactElement, ReactNode } from "react";
import { LanguageContextType, useLanguage } from "../context/LanguageContext";

// useLanguage() hook - is it necessary?

// const [language, setLanguage] = useLangage('en')

//type LexicalForm = ReactNode

interface ExpressionProps {
    lang: Language,
    children: ReactNode
}

export const Expression = ({lang, children, ...props}: ExpressionProps) => {
    return(
        <>
            {children}
        </>
    )
}


export type Language = 'en' | 'es'




interface ConceptProps {
    lang?: Language,
    children: ReactElement<ExpressionProps> | ReactElement<ExpressionProps>[]
}



const Concept = ({lang, children, ...props}: ConceptProps) => {

    const langInContext: LanguageContextType[0] = useLanguage()[0];

    if (typeof lang === 'undefined') {
        lang = langInContext;
    }

    if (Array.isArray(children)) {
        for (let lexicalForm of children) {
            for (let i = 0; i < children.length; i++) {
                if (lexicalForm !== children[i]) {
                    if (lexicalForm.props.lang === children[i].props.lang) {
                        throw 'There are more than one Expression in the same language'
                    }
                }

            }
        }
        

        for (let lexicalForm of children) {
            if (lexicalForm.props.lang === lang) {
                children = lexicalForm;
            }
        }

    } else {
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


