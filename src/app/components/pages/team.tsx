/**
 * @module Page-Our-Team
 */

import { useEffect, useState } from "react";
import { getTeamData } from "../../../api/team-service";
import { loadScript } from "../../../globals/common-functions";
import banner from "../../../globals/banner.json";
import SectionInnerPageBanner from "../../sections/common/banner";

/**
 * 
 * @returns Markup template for sample page Our Team + Politique de confidentialité
 */
function OurTeamPage() {

    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        getTeamData(() => {
            setIsFetching(false);
            loadScript("js/custom.js");
        });
    }, [isFetching]);

    return (
        <>
            {/* INNER PAGE BANNER */}
            <SectionInnerPageBanner _data={banner.team} />
            {/* INNER PAGE BANNER END */}

            {/* POLITIQUE DE CONFIDENTIALITÉ */}
            <div className="container py-5 mt-4">
                <h2 className="mb-4">Politique de Confidentialité</h2>

                <p>
                    La présente politique de confidentialité décrit la manière dont <strong>Nolyss Télécom</strong> 
                    collecte, utilise, protège et traite vos données personnelles lors de votre utilisation
                    de nos services ou de votre navigation sur notre site.
                </p>

                <h4 className="mt-4">1. Données collectées</h4>
                <p>
                    Nous pouvons collecter des informations telles que : nom, prénom, email, numéro de téléphone,
                    entreprise, ainsi que des données liées à l’usage de nos services (adresse IP, pages visitées, logs...).
                </p>

                <h4 className="mt-4">2. Utilisation des informations</h4>
                <p>
                    Ces données sont utilisées pour améliorer nos services, répondre à vos demandes, établir des
                    propositions commerciales, assurer le support client et optimiser l’expérience utilisateur.
                </p>

                <h4 className="mt-4">3. Partage des données</h4>
                <p>
                    Vos informations peuvent être transmises à des prestataires techniques partenaires uniquement
                    lorsque cela est nécessaire au fonctionnement de nos services. Aucune donnée n’est vendue.
                </p>

                <h4 className="mt-4">4. Sécurité et protection</h4>
                <p>
                    Nous mettons en place des mesures techniques et organisationnelles pour protéger vos informations
                    contre l’accès non autorisé, la modification ou la suppression.
                </p>

                <h4 className="mt-4">5. Vos droits</h4>
                <p>
                    Conformément aux lois en vigueur, vous disposez d’un droit d’accès, de rectification, d’opposition,
                    de portabilité et de suppression de vos données. Pour exercer ces droits, contactez :
                    <strong> contact@nolysstelecom.fr</strong>
                </p>

                <h4 className="mt-4">6. Cookies & tracking</h4>
                <p>
                    Nous utilisons des cookies pour analyser le trafic, améliorer le site et personnaliser l’expérience.
                    Vous pouvez gérer vos préférences directement via votre navigateur.
                </p>

                <p className="mt-5">
                    Dernière mise à jour : {new Date().getFullYear()}
                </p>
            </div>
        </>
    );
}
export default OurTeamPage;
