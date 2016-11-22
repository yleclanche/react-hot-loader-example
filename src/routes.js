import React from 'react';
import {IndexRoute, Route, Router} from 'react-router';
import {
    App, InfoGenerales, MassesSalariales, Calculs, Effectifs, Apprentices, Ecoles, Paiement
} from './declarations';
import {INFOS_GENERALES, ADMIN_INFO, FORMATION_PRO_CONTINUE, TAXE_APPRENTISSAGE, EFFECTIFS,
    CSP, CSA, MASSES_SALARIALES, ASSIETTES_FPC, ASSIETTES_TA, CALCULS, MONTANT_FPC, MONTANT_TA,
    APPRENTICES, ECOLES, PAIEMENT} from './constants';


// we keep a mapping : name / url to easily compute url
export const URLS = {
    [INFOS_GENERALES]: INFOS_GENERALES,
    [ADMIN_INFO]: `${INFOS_GENERALES}/${ADMIN_INFO}`,
    [FORMATION_PRO_CONTINUE]: `${INFOS_GENERALES}/${FORMATION_PRO_CONTINUE}`,
    [TAXE_APPRENTISSAGE]: `${INFOS_GENERALES}/${TAXE_APPRENTISSAGE}`,
    [EFFECTIFS]: EFFECTIFS,
    [CSP]: `${EFFECTIFS}/${CSP}`,
    [CSA]: `${EFFECTIFS}/${CSA}`,
    [MASSES_SALARIALES]: MASSES_SALARIALES,
    [ASSIETTES_FPC]: `${MASSES_SALARIALES}/${ASSIETTES_FPC}`,
    [ASSIETTES_TA]: `${MASSES_SALARIALES}/${ASSIETTES_TA}`,
    [CALCULS]: CALCULS,
    [MONTANT_FPC]: `${CALCULS}/${MONTANT_FPC}`,
    [MONTANT_TA]: `${CALCULS}/${MONTANT_TA}`,
    [APPRENTICES]: APPRENTICES,
    [ECOLES]: ECOLES,
    [PAIEMENT]: PAIEMENT
};


export default (
    <Route path="/" component={App}>
        {/*<Route path=":declId/edit">*/}
        <IndexRoute component={InfoGenerales}/>
        <Route path={INFOS_GENERALES} component={InfoGenerales}>
            <Route path={ADMIN_INFO}/>
            <Route path={FORMATION_PRO_CONTINUE}/>
            <Route path={TAXE_APPRENTISSAGE}/>
        </Route>

        <Route path={EFFECTIFS} component={Effectifs}>
            <Route path={CSP}/>
            <Route path={CSA}/>
        </Route>

        <Route path={MASSES_SALARIALES} component={MassesSalariales}>
            <Route path={ASSIETTES_FPC}/>
            <Route path={ASSIETTES_TA}/>
        </Route>

        <Route path={CALCULS} component={Calculs}>
            <Route path={MONTANT_FPC}/>
            <Route path={MONTANT_TA}/>
        </Route>

        <Route path={APPRENTICES} component={Apprentices}>
            t
        </Route>

        <Route path={ECOLES} component={Ecoles}>
        </Route>

        <Route path={PAIEMENT} component={Paiement}>
        </Route>
        {/*</Route>*/}
    </Route>
);

