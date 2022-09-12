import { Context, createContext, ReactNode, useContext, useLayoutEffect, useState } from 'react';
import { Language } from '../components/Concept';

export const LanguageContext: Context<LanguageContextType> = createContext(['en', undefined] as LanguageContextType)

interface LanguageWrapperProps {
    defaultLanguage: Language,
    children: ReactNode
}

export type LanguageContextType = [Language, ((lang: Language) => void)|undefined]
function LanguageWrapper ({defaultLanguage, children}: LanguageWrapperProps) {


    useLayoutEffect(() => {
        if (document.cookie.includes('lang')) {
            defaultLanguage = document.cookie.substring(5) as Language;
            setLanguage(defaultLanguage);
        }
        else if (/^en\b/.test(navigator.language)) {
            defaultLanguage = 'en';
        }
    }, [])


    const [language, _setLanguage] = useState<Language>(defaultLanguage)

    const setLanguage = (language:Language): void => {
        document.cookie = `lang=${language}`;
        _setLanguage(language);
    }


    return (
        <LanguageContext.Provider
        value={[
            language, 
            setLanguage
            ]}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage (): LanguageContextType {
    return useContext(LanguageContext)
};

export default LanguageWrapper;