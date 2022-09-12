import { Context, createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { GeneralData } from '../components/pages/SignUp';

export const SubscriptionContext: Context<SubscriptionContextType> = createContext({} as SubscriptionContextType)

type Phase = 'General' | 'Programas' | 'Revisión' | 'Pago' | 'Confirmación'

type Phases = {
    General: {
        valid: boolean
    },
    Programas: {
        valid: boolean
    },
    Revisión: {
        valid: boolean     
    },
    Pago: {
        valid: boolean
    }
    Confirmación: {
        valid: boolean
    }
}

export type SubscriptionContextType = {
    generalData: GeneralData;
    setGeneralData: Dispatch<SetStateAction<GeneralData>>;
    lvlSelected: string;
    setLvlSelected: Dispatch<SetStateAction<string>>;
    programSelected: string;
    setProgramSelected: Dispatch<SetStateAction<string>>;
    phase: Phase;
    setPhase: Dispatch<SetStateAction<Phase>>;
    phases: Phases,
    setPhases: Dispatch<SetStateAction<Phases>>;

}

function SubscriptionWrapper ({ children }:any) {

    const [phase, setPhase] = useState<Phase>('General');



    const [phases, setPhases] = useState<Phases>({
        General: {
            valid: false
        },
        Programas: {
            valid: false
        },
        Revisión: {
            valid: true     // EVENTUALLY START AS FALSE, ON SUCCESSFUL PAYMENT WEBHOOK EVENT
        },
        Pago: {
            valid: true
        },
        Confirmación: {
            valid: true     // MAY NOT NEED CONFIRMACION AFTER ALL. WE'LL SEE.
        }
    });

 

    const [ generalData, setGeneralData] = useState<GeneralData>({
        name: '',
        birthdate: '',
        address: '',
        city: '',
        country: '',
        email: '',
        phoneNumber: '',
        acknowledgementSource: ''
    })

    const [programSelected, setProgramSelected] = useState<string>('CompleteProgrammer');
    const [lvlSelected, setLvlSelected] = useState<string>('lvl1');

    return (
        <SubscriptionContext.Provider
        value={{
            generalData,
            setGeneralData,
            lvlSelected,
            setLvlSelected,
            programSelected,
            setProgramSelected,
            phase,
            setPhase,
            phases,
            setPhases,
        }}>
            {children}
        </SubscriptionContext.Provider>
    )
}

export function useSubscription (): SubscriptionContextType {
    return useContext(SubscriptionContext)
};

export default SubscriptionWrapper;