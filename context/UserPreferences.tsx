import { Context, createContext, ReactNode, useContext, useLayoutEffect, useState } from 'react';
import type { Language } from '../components/Concept';
import { createCookie, readCookie } from '../utils/cookiesHelpers';

export const UserPreferences: Context<PreferencesType> = createContext({} as PreferencesType)


export type PreferencesType = {
    acceptCookies: boolean|undefined;
    setAcceptCookies: (acceptCookies: boolean) => void;
    language: Language|undefined; 
    setLanguage: ((lang: Language) => void)|undefined

}

interface UserPreferencesWrapperProps {
    defaultLanguage: Language,
    children: ReactNode
}

function UserPreferencesWrapper ({defaultLanguage, children}: UserPreferencesWrapperProps) {

  
    let lang: Language|undefined;

    useLayoutEffect(() => {
        const cookies = JSON.parse(readCookie('acceptCookies')!);


        if (!!readCookie('acceptCookies')) {
            setAcceptCookies(cookies);
        }

        if (cookies && !!readCookie('lang')) {
            lang = readCookie('lang') as Language;
            setLanguage(lang);
        }
        else if (/^en\b/.test(navigator.language)) {
            lang = 'en';
            setLanguage(lang);
        } else {
            lang = defaultLanguage;
            setLanguage(defaultLanguage);

        }
    }, [])

    const [acceptCookies, _setAcceptCookies] = useState<boolean>();

    const setAcceptCookies = (acceptCookies: boolean): void => {
        if (acceptCookies) {
            createCookie('acceptCookies', acceptCookies.toString(), 30);
        } else {
            createCookie('acceptCookies', acceptCookies.toString(), 1);
        }
        _setAcceptCookies(acceptCookies);
    }



    const [language, _setLanguage] = useState<Language|undefined>(lang)

    const setLanguage = (language:Language): void => {
        if (acceptCookies) {
            createCookie('lang', language, 30);
        }
        _setLanguage(language);
    }

    return (
        <UserPreferences.Provider
        value={{
            acceptCookies,
            setAcceptCookies,
            language, 
            setLanguage
        }}>
            {children}
        </UserPreferences.Provider>
    )
}

export function usePreferences (): PreferencesType {
    return useContext(UserPreferences)
};

export default UserPreferencesWrapper;