/**
 * @module Page-Pricing-Plans
 */

import { loadScript } from "../../../globals/common-functions";
import { TypePagePricing } from "../../@types/pageTypes";
import { useEffect, useState } from "react";
import { getPricingData } from "../../../api/pricing-service";
import banner from "../../../globals/banner.json";
import SectionInnerPageBanner from "../../sections/common/banner";

/**
 * 
 * @returns Markup template for sample page Pricing Plan
 */
function PricingPlansPage() {

    const _pricingDefault: TypePagePricing = {};
    const [setResults] = useState(_pricingDefault);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {

        getPricingData((response: TypePagePricing) => {
            setIsFetching(false);
            loadScript("js/custom.js")
        })

    }, [isFetching])

    return (
        <>
            <SectionInnerPageBanner _data={banner.pricing} />

            <div className="mt-3 container py-5">
                <h2 className="mb-4">Conditions Générales – Nolyss Télécom</h2>

                <p>
                    Les présentes conditions générales encadrent l’accès et l’utilisation des services télécom
                    et solutions professionnelles proposés par <strong>Nolyss Télécom</strong>.
                    En utilisant notre site ou en souscrivant à nos offres, vous acceptez ces conditions.
                </p>

                <h4 className="mt-4">1. Objet</h4>
                <p>
                    Nolyss Télécom fournit des services de télécommunication, de connectivité et de solutions
                    numériques destinés aux entreprises et professionnels. Les caractéristiques détaillées des
                    offres sont précisées dans les documents commerciaux et fiches produits.
                </p>

                <h4 className="mt-4">2. Utilisation des services</h4>
                <p>
                    Le client s’engage à utiliser les services conformément à la législation en vigueur et à ne pas
                    faire un usage frauduleux, abusif ou contraire à l’ordre public.
                </p>

                <h4 className="mt-4">3. Responsabilité</h4>
                <p>
                    Nolyss Télécom met en œuvre tous les moyens raisonnables pour assurer la disponibilité des
                    services. Toutefois, la responsabilité de Nolyss Télécom ne saurait être engagée en cas
                    d’interruption liée à des incidents réseau, à des prestataires tiers ou à un cas de force majeure.
                </p>

                <h4 className="mt-4">4. Tarifs et facturation</h4>
                <p>
                    Les tarifs applicables sont ceux communiqués au client au moment de la souscription.
                    Toute modification tarifaire sera notifiée au client dans un délai raisonnable.
                </p>

                <h4 className="mt-4">5. Résiliation</h4>
                <p>
                    Les modalités de résiliation (préavis, frais éventuels, conditions de fin de contrat)
                    sont précisées dans la proposition commerciale ou le contrat signé entre les parties.
                </p>

                <h4 className="mt-4">6. Données personnelles</h4>
                <p>
                    Les données collectées sont traitées conformément à la réglementation en vigueur sur la
                    protection des données. Le client dispose d’un droit d’accès, de rectification et de suppression
                    de ses données en nous contactant à l’adresse suivante : support@nolyss-hub.com.
                </p>

                <h4 className="mt-4">7. Modifications des conditions</h4>
                <p>
                    Nolyss Télécom se réserve le droit de modifier les présentes conditions générales.
                    La version à jour est disponible sur le site et s’applique dès sa mise en ligne.
                </p>

                <p className="mt-5">
                    Dernière mise à jour : {new Date().getFullYear()}
                </p>
            </div>
        </>
    )
}
export default PricingPlansPage;
