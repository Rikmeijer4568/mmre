import { Metadata } from 'next'
import { getLocale } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  if (locale === 'nl') return { title: 'Algemene Voorwaarden | MMRE', description: 'Algemene Voorwaarden van Meijer & Münninghoff Real Estate.' }
  if (locale === 'es') return { title: 'Términos y Condiciones | MMRE', description: 'Términos y Condiciones de Meijer & Münninghoff Real Estate.' }
  return { title: 'Terms & Conditions | MMRE', description: 'Terms and Conditions of Meijer & Münninghoff Real Estate.' }
}

const address = (
  <>
    <strong>Meijer &amp; Münninghoff Real Estate</strong><br />
    Kierkegaardstraat 25<br />
    1185 AH Amstelveen<br />
    KvK / CoC: 95691553<br />
    <strong>E-mail:</strong> info@mmre.nl
  </>
)

function TermsNL() {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Algemene Voorwaarden</h1>
      <p className="text-gray-500 mb-8">Versie maart 2025 &mdash; Meijer &amp; Münninghoff Real Estate &mdash; KvK 95691553</p>

      <div className="prose prose-gray max-w-none">

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Partijen en definities</h2>
        <p className="text-gray-600 mb-4">In deze Algemene Voorwaarden wordt verstaan onder:</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li><strong>MMRE:</strong> Meijer &amp; Münninghoff Real Estate, gevestigd aan de Kierkegaardstraat 25, 1185 AH Amstelveen, ingeschreven in het Handelsregister van de Kamer van Koophandel onder nummer 95691553.</li>
          <li><strong>Opdrachtgever:</strong> de natuurlijke of rechtspersoon die MMRE opdracht geeft tot het verrichten van diensten.</li>
          <li><strong>Opdracht tot Dienstverlening:</strong> de schriftelijke overeenkomst (inclusief eventuele bijlagen) die MMRE en Opdrachtgever aangaan en waarin de precieze diensten, tarieven en looptijd zijn vastgelegd.</li>
          <li><strong>Verhuurder:</strong> Opdrachtgever die een woning via MMRE wenst te verhuren.</li>
          <li><strong>Huurder:</strong> natuurlijke persoon die via MMRE een woning zoekt om te huren.</li>
        </ul>
        <p className="text-gray-600 mb-4">
          Deze Algemene Voorwaarden zijn van toepassing op alle aanbiedingen, overeenkomsten en werkzaamheden van MMRE, tenzij schriftelijk anders overeengekomen. Afwijkingen zijn uitsluitend geldig indien uitdrukkelijk schriftelijk bevestigd door MMRE.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Diensten</h2>
        <p className="text-gray-600 mb-4">MMRE biedt de volgende diensten aan in de regio Amsterdam:</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li><strong>Verhuur-bemiddeling:</strong> het namens de Verhuurder zoeken en selecteren van een geschikte huurder.</li>
          <li><strong>Aanhuur-bemiddeling:</strong> het namens de Huurder zoeken naar een geschikte huurwoning.</li>
          <li><strong>Vastgoedbeheer:</strong> het voeren van financieel en/of technisch beheer over verhuurde woningen namens de Verhuurder.</li>
          <li><strong>Aanvullende diensten:</strong> waardebepaling, marketing, huurprijsadvies, inspecties en contractbegeleiding.</li>
        </ul>
        <p className="text-gray-600 mb-4">
          De precieze invulling van de dienst, de overeengekomen looptijd en het toepasselijke tarief worden vastgelegd in de Opdracht tot Dienstverlening. Bij strijdigheid tussen deze Algemene Voorwaarden en de Opdracht tot Dienstverlening prevaleert de Opdracht tot Dienstverlening.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Verhuur-bemiddeling (voor Verhuurders)</h2>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">3.1 Inhoud van de dienst</h3>
        <p className="text-gray-600 mb-4">
          MMRE begeleidt de Verhuurder bij het plaatsen van het object op relevante kanalen, het organiseren van bezichtigingen, het screenen van kandidaat-huurders, het opstellen van de huurovereenkomst en het uitvoeren van voor- en/of eindopleveringsinspecties.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">3.2 Courtage</h3>
        <p className="text-gray-600 mb-4">
          Het vaste tarief voor verhuur-bemiddeling bedraagt <strong>&euro;1.249,&minus; excl. BTW</strong> (no cure, no pay). Dit tarief wordt verschuldigd op het moment dat een door MMRE geselecteerde huurder de huurovereenkomst ondertekent. Het exacte tarief en eventuele aanvullende kosten zijn opgenomen in de Opdracht tot Dienstverlening.
        </p>
        <p className="text-gray-600 mb-4">
          MMRE brengt een opstartvergoeding in rekening conform de Opdracht tot Dienstverlening. Deze vergoeding wordt volledig verrekend met de courtage bij succesvolle plaatsing.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">3.3 Verplichtingen Verhuurder</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Juiste en volledige informatie verstrekken over het object en eventuele beperkingen.</li>
          <li>Zorgen dat het object voldoet aan alle toepasselijke wettelijke veiligheids- en woonvereisten.</li>
          <li>Het object beschikbaar stellen voor bezichtigingen op afgesproken tijden.</li>
          <li>Overeengekomen vergoedingen voldoen binnen de in de Opdracht tot Dienstverlening genoemde termijn.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Aanhuur-bemiddeling (voor Huurders)</h2>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.1 Inhoud van de dienst</h3>
        <p className="text-gray-600 mb-4">
          Bij aanhuur-bemiddeling treedt MMRE uitsluitend op als belangenbehartiger van de Huurder. MMRE is dan <em>geen</em> vertegenwoordiger van de Verhuurder. MMRE zoekt actief naar geschikte huurwoningen, begeleidt bezichtigingen, voert onderhandelingen over huurprijs en -voorwaarden en adviseert bij het aangaan van de huurovereenkomst.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.2 Courtage</h3>
        <p className="text-gray-600 mb-4">
          Het tarief voor aanhuur-bemiddeling bedraagt één maand kale huurprijs (excl. BTW) met een minimum zoals vastgelegd in de Opdracht tot Dienstverlening. De courtage is verschuldigd op het moment dat de Huurder een huurovereenkomst ondertekent voor een door MMRE aangedragen woning (no cure, no pay). Een opstartvergoeding kan van toepassing zijn; deze wordt bij succesvolle plaatsing volledig verrekend.
        </p>
        <p className="text-gray-600 mb-4">
          Op grond van de Wet toelating verhuurders en de relevante huurwetgeving mag aan een Huurder uitsluitend courtage in rekening worden gebracht wanneer MMRE <em>uitsluitend</em> in het belang van de Huurder optreedt. Indien MMRE zowel de Verhuurder als de Huurder vertegenwoordigt, wordt de courtage uitsluitend bij de Verhuurder in rekening gebracht.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.3 Verplichtingen Huurder</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Juiste en volledige informatie verstrekken over woonwensen en financiële situatie.</li>
          <li>Verschijnen op geplande bezichtigingen of tijdig afmelden.</li>
          <li>Gevraagde documenten (inkomensbewijzen, referenties e.d.) tijdig aanleveren.</li>
          <li>Te goeder trouw handelen tijdens onderhandelingen.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Vastgoedbeheer</h2>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">5.1 Inhoud van de dienst</h3>
        <p className="text-gray-600 mb-4">
          MMRE biedt vastgoedbeheer aan in de vormen Financieel Beheer, Technisch Beheer en Volledig Beheer. De precieze omvang van elk beheerpakket is beschreven in de Opdracht tot Dienstverlening en de daarbij behorende servicebeschrijving.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">5.2 Beheertarief</h3>
        <p className="text-gray-600 mb-4">
          Het maandelijkse beheertarief is vastgelegd in de Opdracht tot Dienstverlening. Tarieven zijn excl. BTW tenzij anders vermeld. MMRE is gerechtigd het tarief jaarlijks te indexeren conform het door het CBS gepubliceerde CPI-indexcijfer (alle huishoudens), met een maximum van 5% per jaar, na schriftelijke aankondiging met een opzegtermijn van ten minste één kalendermaand.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">5.3 Looptijd en opzegging</h3>
        <p className="text-gray-600 mb-4">
          De beheerovereenkomst wordt aangegaan voor de in de Opdracht tot Dienstverlening genoemde initiële periode en wordt daarna stilzwijgend verlengd. Opzegging dient schriftelijk te geschieden met inachtneming van een opzegtermijn van één kalendermaand, tenzij in de Opdracht tot Dienstverlening een andere termijn is overeengekomen.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Betalingsvoorwaarden</h2>
        <p className="text-gray-600 mb-4">
          Facturen dienen te worden voldaan binnen 14 dagen na factuurdatum, tenzij schriftelijk anders overeengekomen. Bij niet-tijdige betaling is de Opdrachtgever van rechtswege in verzuim en is MMRE gerechtigd de wettelijke handelsrente (art. 6:119a BW) in rekening te brengen, alsmede buitengerechtelijke incassokosten conform de staffel van het Besluit vergoeding voor buitengerechtelijke incassokosten.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Huurprijsindicaties</h2>
        <p className="text-gray-600 mb-4">
          Huurprijsindicaties verstrekt via de website, de rekenmodule of tijdens een adviesgesprek zijn uitsluitend indicatief en vormen geen garantie. De werkelijke huurprijs is afhankelijk van marktomstandigheden, de staat en ligging van het object en overige factoren. MMRE is niet aansprakelijk voor schade die voortvloeit uit het gebruik van een indicatie.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Intellectueel eigendom</h2>
        <p className="text-gray-600 mb-4">
          Alle content op deze website — waaronder teksten, afbeeldingen, logo&apos;s en vormgeving — is eigendom van MMRE of haar licentiegevers en wordt beschermd door het auteursrecht. Verveelvoudiging, verspreiding of gebruik zonder voorafgaande schriftelijke toestemming van MMRE is niet toegestaan.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Aansprakelijkheid en vrijwaring</h2>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">9.1 Rol van MMRE</h3>
        <p className="text-gray-600 mb-4">
          MMRE treedt op als bemiddelaar en/of beheerder. MMRE is geen partij bij de huurovereenkomst tussen Verhuurder en Huurder en is niet aansprakelijk voor de nakoming van verplichtingen die voortvloeien uit die huurovereenkomst.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">9.2 Uitsluiting aansprakelijkheid</h3>
        <p className="text-gray-600 mb-4">MMRE is niet aansprakelijk voor:</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Onjuiste of onvolledige informatie verstrekt door Verhuurders of Huurders.</li>
          <li>De bouwkundige staat, technische gebreken of wettelijke tekortkomingen van het object.</li>
          <li>Geschillen tussen Verhuurder en Huurder, waaronder wanbetaling, schade aan het object of vroegtijdige beëindiging van de huurovereenkomst.</li>
          <li>Indirecte schade, gevolgschade, gederfde winst, gemiste huurinkomsten of reputatieschade.</li>
          <li>Schade als gevolg van overmacht, waaronder maar niet beperkt tot: overheidsmaatregelen, extreme weersomstandigheden, stakingen, cyberaanvallen of storingen bij derden.</li>
          <li>Handelen of nalaten van door MMRE ingeschakelde derden (zoals fotografen, inspectiebureaus of juridische adviseurs).</li>
        </ul>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">9.3 Beperking aansprakelijkheid</h3>
        <p className="text-gray-600 mb-4">
          Iedere aansprakelijkheid van MMRE is beperkt tot het bedrag dat MMRE voor de desbetreffende opdracht in rekening heeft gebracht, exclusief BTW, tot een maximum van <strong>&euro;2.500,&minus;</strong> per schadegeval. Aansprakelijkheid voor bedragen daarboven is uitdrukkelijk uitgesloten, voor zover wettelijk toegestaan.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">9.4 Vervaltermijn</h3>
        <p className="text-gray-600 mb-4">
          Vorderingen op MMRE vervallen indien de Opdrachtgever niet binnen twaalf (12) maanden na het moment waarop hij de schade ontdekte of redelijkerwijs had kunnen ontdekken een schriftelijke claim bij MMRE heeft ingediend.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">9.5 Vrijwaring</h3>
        <p className="text-gray-600 mb-4">
          De Opdrachtgever vrijwaart MMRE voor aanspraken van derden — waaronder de wederpartij in de huurovereenkomst — die verband houden met door de Opdrachtgever verstrekte onjuiste of onvolledige informatie, of met diens handelen in strijd met deze Algemene Voorwaarden of de wet.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Toepasselijk recht en geschillen</h2>
        <p className="text-gray-600 mb-4">
          Op deze Algemene Voorwaarden en alle overeenkomsten met MMRE is uitsluitend Nederlands recht van toepassing. Geschillen worden bij uitsluiting voorgelegd aan de bevoegde rechter van de Rechtbank Amsterdam, tenzij partijen schriftelijk overeenkomen het geschil te beslechten via mediation of arbitrage.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Wijziging van de voorwaarden</h2>
        <p className="text-gray-600 mb-4">
          MMRE behoudt zich het recht voor deze Algemene Voorwaarden te wijzigen. De meest actuele versie is altijd beschikbaar op de website. Voor lopende overeenkomsten worden wijzigingen schriftelijk aangekondigd met een opzegtermijn van ten minste dertig (30) dagen. Voortgezet gebruik van de diensten na deze termijn geldt als aanvaarding van de gewijzigde voorwaarden.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Contact</h2>
        <p className="text-gray-600 mb-4">Voor vragen over deze Algemene Voorwaarden kunt u contact opnemen via:</p>
        <p className="text-gray-600 mb-4">{address}</p>

      </div>
    </>
  )
}

function TermsEN() {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms &amp; Conditions</h1>
      <p className="text-gray-500 mb-8">Version March 2025 &mdash; Meijer &amp; Münninghoff Real Estate &mdash; CoC 95691553</p>

      <div className="prose prose-gray max-w-none">

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Parties and Definitions</h2>
        <p className="text-gray-600 mb-4">In these Terms and Conditions, the following definitions apply:</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li><strong>MMRE:</strong> Meijer &amp; Münninghoff Real Estate, registered at Kierkegaardstraat 25, 1185 AH Amstelveen, registered with the Dutch Chamber of Commerce (KvK) under number 95691553.</li>
          <li><strong>Client:</strong> the natural person or legal entity that engages MMRE to perform services.</li>
          <li><strong>Service Agreement:</strong> the written agreement (including any annexes) entered into by MMRE and the Client, specifying the exact services, fees, and duration.</li>
          <li><strong>Landlord:</strong> a Client who wishes to rent out a property through MMRE.</li>
          <li><strong>Tenant:</strong> a natural person who is looking to rent a property through MMRE.</li>
        </ul>
        <p className="text-gray-600 mb-4">
          These Terms and Conditions apply to all offers, agreements, and activities of MMRE, unless otherwise agreed in writing. Deviations are only valid if expressly confirmed in writing by MMRE.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Services</h2>
        <p className="text-gray-600 mb-4">MMRE offers the following services in the Amsterdam region:</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li><strong>Rental mediation:</strong> finding and selecting a suitable tenant on behalf of the Landlord.</li>
          <li><strong>Home-finding mediation:</strong> searching for a suitable rental property on behalf of the Tenant.</li>
          <li><strong>Property management:</strong> providing financial and/or technical management of rental properties on behalf of the Landlord.</li>
          <li><strong>Additional services:</strong> property valuation, marketing, rental price advice, inspections, and contract support.</li>
        </ul>
        <p className="text-gray-600 mb-4">
          The exact scope of the service, the agreed duration, and the applicable fee are set out in the Service Agreement. In the event of a conflict between these Terms and the Service Agreement, the Service Agreement shall prevail.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Rental Mediation (for Landlords)</h2>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">3.1 Scope of service</h3>
        <p className="text-gray-600 mb-4">
          MMRE assists the Landlord with listing the property on relevant channels, organising viewings, screening prospective tenants, drafting the tenancy agreement, and conducting check-in and/or check-out inspections.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">3.2 Commission</h3>
        <p className="text-gray-600 mb-4">
          The fixed fee for rental mediation is <strong>&euro;1,249 excl. VAT</strong> (no cure, no pay). This fee becomes due at the moment a tenant selected by MMRE signs the tenancy agreement. The exact fee and any additional costs are set out in the Service Agreement.
        </p>
        <p className="text-gray-600 mb-4">
          MMRE charges a start fee as specified in the Service Agreement. This fee is fully credited against the commission upon successful placement.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">3.3 Landlord obligations</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Provide accurate and complete information about the property and any restrictions.</li>
          <li>Ensure the property complies with all applicable legal safety and housing requirements.</li>
          <li>Make the property available for viewings at agreed times.</li>
          <li>Pay agreed fees within the period stated in the Service Agreement.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Home-Finding Mediation (for Tenants)</h2>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.1 Scope of service</h3>
        <p className="text-gray-600 mb-4">
          In home-finding mediation, MMRE acts exclusively as the representative of the Tenant. MMRE is <em>not</em> acting on behalf of any Landlord. MMRE actively searches for suitable rental properties, accompanies viewings, negotiates rental price and terms, and advises on entering into the tenancy agreement.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.2 Commission</h3>
        <p className="text-gray-600 mb-4">
          The fee for home-finding mediation is one month&apos;s net rent (excl. VAT), subject to a minimum as stated in the Service Agreement. The fee becomes due when the Tenant signs a tenancy agreement for a property sourced by MMRE (no cure, no pay). A start fee may apply and will be fully credited upon successful placement.
        </p>
        <p className="text-gray-600 mb-4">
          Under Dutch rental law, a commission may only be charged to a Tenant when MMRE acts <em>exclusively</em> in the Tenant&apos;s interest. If MMRE represents both Landlord and Tenant, the commission will be charged to the Landlord only.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.3 Tenant obligations</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Provide accurate and complete information about housing requirements and financial situation.</li>
          <li>Attend scheduled viewings or cancel in a timely manner.</li>
          <li>Supply requested documents (proof of income, references, etc.) promptly.</li>
          <li>Act in good faith during negotiations.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Property Management</h2>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">5.1 Scope of service</h3>
        <p className="text-gray-600 mb-4">
          MMRE offers property management in the forms of Financial Management, Technical Management, and Full Management. The exact scope of each package is described in the Service Agreement and the accompanying service description.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">5.2 Management fee</h3>
        <p className="text-gray-600 mb-4">
          The monthly management fee is set out in the Service Agreement. Fees are excl. VAT unless stated otherwise. MMRE is entitled to index the fee annually in line with the CPI index published by Statistics Netherlands (CBS), up to a maximum of 5% per year, following written notice with at least one calendar month&apos;s notice.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">5.3 Duration and termination</h3>
        <p className="text-gray-600 mb-4">
          The management agreement is entered into for the initial period specified in the Service Agreement and is thereafter automatically renewed. Termination must be made in writing with a notice period of one calendar month, unless a different period has been agreed in the Service Agreement.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Payment Terms</h2>
        <p className="text-gray-600 mb-4">
          Invoices must be paid within 14 days of the invoice date, unless otherwise agreed in writing. In the event of late payment, the Client is in default by operation of law and MMRE is entitled to charge statutory commercial interest and extrajudicial collection costs in accordance with Dutch law.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Rental Price Estimates</h2>
        <p className="text-gray-600 mb-4">
          Rental price estimates provided via the website, the calculator, or during consultations are indicative only and do not constitute a guarantee. Actual rental prices depend on market conditions, the condition and location of the property, and other factors. MMRE is not liable for any damages arising from reliance on an estimate.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Intellectual Property</h2>
        <p className="text-gray-600 mb-4">
          All content on this website — including texts, images, logos, and design — is the property of MMRE or its licensors and is protected by copyright law. Reproduction, distribution, or use without prior written consent of MMRE is not permitted.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Liability and Indemnification</h2>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">9.1 Role of MMRE</h3>
        <p className="text-gray-600 mb-4">
          MMRE acts as an intermediary and/or property manager. MMRE is not a party to the tenancy agreement between Landlord and Tenant and is not liable for the performance of obligations arising from that agreement.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">9.2 Exclusions of liability</h3>
        <p className="text-gray-600 mb-4">MMRE is not liable for:</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Inaccurate or incomplete information provided by Landlords or Tenants.</li>
          <li>The structural condition, technical defects, or legal shortcomings of the property.</li>
          <li>Disputes between Landlord and Tenant, including non-payment, damage to the property, or early termination of the tenancy.</li>
          <li>Indirect damages, consequential damages, loss of profit, missed rental income, or reputational damage.</li>
          <li>Damages resulting from force majeure, including but not limited to: government measures, extreme weather, strikes, cyberattacks, or third-party service failures.</li>
          <li>Acts or omissions of third parties engaged by MMRE (such as photographers, inspection agencies, or legal advisors).</li>
        </ul>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">9.3 Limitation of liability</h3>
        <p className="text-gray-600 mb-4">
          Any liability of MMRE is limited to the amount invoiced by MMRE for the relevant assignment, excl. VAT, up to a maximum of <strong>&euro;2,500</strong> per incident. Liability exceeding this amount is expressly excluded to the extent permitted by law.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">9.4 Limitation period</h3>
        <p className="text-gray-600 mb-4">
          Claims against MMRE lapse if the Client has not submitted a written claim to MMRE within twelve (12) months of the date on which the Client discovered or reasonably should have discovered the damage.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">9.5 Indemnification</h3>
        <p className="text-gray-600 mb-4">
          The Client indemnifies MMRE against claims by third parties — including the counterparty in the tenancy agreement — arising from inaccurate or incomplete information provided by the Client, or from the Client&apos;s conduct in breach of these Terms or applicable law.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Governing Law and Disputes</h2>
        <p className="text-gray-600 mb-4">
          These Terms and all agreements with MMRE are governed exclusively by Dutch law. Disputes shall be submitted exclusively to the competent court of the District Court of Amsterdam, unless the parties agree in writing to resolve the dispute through mediation or arbitration.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Changes to Terms</h2>
        <p className="text-gray-600 mb-4">
          MMRE reserves the right to amend these Terms. The most current version is always available on the website. For ongoing agreements, changes will be communicated in writing with at least thirty (30) days&apos; notice. Continued use of the services after this period constitutes acceptance of the amended Terms.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Contact</h2>
        <p className="text-gray-600 mb-4">For questions about these Terms, please contact us at:</p>
        <p className="text-gray-600 mb-4">{address}</p>

      </div>
    </>
  )
}

function TermsES() {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Términos y Condiciones</h1>
      <p className="text-gray-500 mb-8">Versión marzo 2025 &mdash; Meijer &amp; Münninghoff Real Estate &mdash; KvK 95691553</p>

      <div className="prose prose-gray max-w-none">

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Partes y definiciones</h2>
        <p className="text-gray-600 mb-4">En estos Términos y Condiciones se entiende por:</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li><strong>MMRE:</strong> Meijer &amp; Münninghoff Real Estate, con domicilio en Kierkegaardstraat 25, 1185 AH Amstelveen (Países Bajos), inscrita en el Registro Mercantil neerlandés (KvK) con el número 95691553.</li>
          <li><strong>Cliente:</strong> la persona física o jurídica que encarga a MMRE la prestación de servicios.</li>
          <li><strong>Contrato de Servicios:</strong> el acuerdo escrito (incluidos los anexos) suscrito entre MMRE y el Cliente, en el que se detallan los servicios, honorarios y duración acordados.</li>
          <li><strong>Arrendador:</strong> Cliente que desea arrendar un inmueble a través de MMRE.</li>
          <li><strong>Arrendatario:</strong> persona física que busca alquilar un inmueble a través de MMRE.</li>
        </ul>
        <p className="text-gray-600 mb-4">
          Estos Términos y Condiciones se aplican a todas las ofertas, acuerdos y actividades de MMRE, salvo que se haya acordado por escrito lo contrario. Las modificaciones solo serán válidas si MMRE las confirma expresamente por escrito.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Servicios</h2>
        <p className="text-gray-600 mb-4">MMRE ofrece los siguientes servicios en la región de Ámsterdam:</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li><strong>Intermediación en alquiler:</strong> búsqueda y selección de un arrendatario adecuado en nombre del Arrendador.</li>
          <li><strong>Búsqueda de vivienda:</strong> búsqueda de un inmueble en alquiler adecuado en nombre del Arrendatario.</li>
          <li><strong>Administración de inmuebles:</strong> gestión financiera y/o técnica de inmuebles en alquiler en nombre del Arrendador.</li>
          <li><strong>Servicios adicionales:</strong> valoración de inmuebles, marketing, asesoramiento sobre precios de alquiler, inspecciones y apoyo en la contratación.</li>
        </ul>
        <p className="text-gray-600 mb-4">
          El alcance exacto del servicio, la duración acordada y el honorario aplicable se establecen en el Contrato de Servicios. En caso de conflicto entre estos Términos y el Contrato de Servicios, prevalecerá el Contrato de Servicios.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Intermediación en alquiler (para Arrendadores)</h2>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">3.1 Alcance del servicio</h3>
        <p className="text-gray-600 mb-4">
          MMRE asiste al Arrendador con la publicación del inmueble en los canales relevantes, la organización de visitas, la selección de candidatos arrendatarios, la redacción del contrato de arrendamiento y la realización de inspecciones de entrada y/o salida.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">3.2 Honorarios</h3>
        <p className="text-gray-600 mb-4">
          El honorario fijo por intermediación en alquiler es de <strong>1.249 € excl. IVA</strong> (no win, no fee). Este honorario será exigible en el momento en que un arrendatario seleccionado por MMRE firme el contrato de arrendamiento. El honorario exacto y cualquier coste adicional se detallan en el Contrato de Servicios.
        </p>
        <p className="text-gray-600 mb-4">
          MMRE cobra un honorario de inicio según lo indicado en el Contrato de Servicios. Este importe se deducirá íntegramente del honorario final en caso de colocación exitosa.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">3.3 Obligaciones del Arrendador</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Proporcionar información veraz y completa sobre el inmueble y sus posibles limitaciones.</li>
          <li>Garantizar que el inmueble cumple todos los requisitos legales de seguridad y habitabilidad aplicables.</li>
          <li>Poner el inmueble a disposición para visitas en los horarios acordados.</li>
          <li>Abonar los honorarios acordados en el plazo establecido en el Contrato de Servicios.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Búsqueda de vivienda (para Arrendatarios)</h2>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.1 Alcance del servicio</h3>
        <p className="text-gray-600 mb-4">
          En el servicio de búsqueda de vivienda, MMRE actúa exclusivamente como representante del Arrendatario. MMRE <em>no</em> actúa en nombre del Arrendador. MMRE busca activamente inmuebles en alquiler adecuados, acompaña en las visitas, negocia el precio y las condiciones del alquiler y asesora sobre la firma del contrato de arrendamiento.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.2 Honorarios</h3>
        <p className="text-gray-600 mb-4">
          El honorario por el servicio de búsqueda de vivienda equivale a un mes de renta neta (excl. IVA), sujeto a un mínimo indicado en el Contrato de Servicios. El honorario es exigible cuando el Arrendatario firma un contrato de arrendamiento para un inmueble gestionado por MMRE (no win, no fee). Puede aplicarse un honorario de inicio, que se descontará íntegramente al completarse la colocación.
        </p>
        <p className="text-gray-600 mb-4">
          Conforme a la legislación neerlandesa de arrendamientos, solo se podrá cobrar honorarios al Arrendatario cuando MMRE actúe <em>exclusivamente</em> en su interés. Si MMRE representa tanto al Arrendador como al Arrendatario, los honorarios se cargarán únicamente al Arrendador.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.3 Obligaciones del Arrendatario</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Proporcionar información veraz y completa sobre sus preferencias de vivienda y situación financiera.</li>
          <li>Asistir a las visitas programadas o cancelar con suficiente antelación.</li>
          <li>Entregar los documentos solicitados (justificantes de ingresos, referencias, etc.) de forma oportuna.</li>
          <li>Actuar de buena fe durante las negociaciones.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Administración de inmuebles</h2>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">5.1 Alcance del servicio</h3>
        <p className="text-gray-600 mb-4">
          MMRE ofrece administración de inmuebles en las modalidades de Gestión Financiera, Gestión Técnica y Gestión Completa. El alcance exacto de cada paquete se describe en el Contrato de Servicios y en la descripción de servicios adjunta.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">5.2 Honorario de gestión</h3>
        <p className="text-gray-600 mb-4">
          El honorario mensual de gestión se establece en el Contrato de Servicios. Los precios son excl. IVA salvo indicación contraria. MMRE tiene derecho a indexar el honorario anualmente conforme al índice IPC publicado por la Oficina Central de Estadística neerlandesa (CBS), con un máximo del 5% anual, previa notificación escrita con un preaviso mínimo de un mes natural.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">5.3 Duración y rescisión</h3>
        <p className="text-gray-600 mb-4">
          El contrato de administración se suscribe por el período inicial especificado en el Contrato de Servicios y se renueva automáticamente a su vencimiento. La rescisión debe realizarse por escrito con un preaviso de un mes natural, salvo que se haya acordado un plazo diferente en el Contrato de Servicios.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Condiciones de pago</h2>
        <p className="text-gray-600 mb-4">
          Las facturas deben abonarse en un plazo de 14 días desde la fecha de factura, salvo acuerdo escrito en contrario. En caso de pago tardío, el Cliente incurrirá en mora de pleno derecho y MMRE tendrá derecho a cobrar intereses de demora legales y costes de recobro extrajudiciales conforme a la legislación neerlandesa aplicable.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Estimaciones de precio de alquiler</h2>
        <p className="text-gray-600 mb-4">
          Las estimaciones de precio de alquiler proporcionadas a través del sitio web, la calculadora o durante las consultas son meramente orientativas y no constituyen una garantía. Los precios reales de alquiler dependen de las condiciones del mercado, el estado y la ubicación del inmueble y otros factores. MMRE no se hace responsable de los daños derivados del uso de una estimación.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Propiedad intelectual</h2>
        <p className="text-gray-600 mb-4">
          Todo el contenido de este sitio web — incluidos textos, imágenes, logotipos y diseño — es propiedad de MMRE o de sus licenciantes y está protegido por las leyes de propiedad intelectual. Queda prohibida su reproducción, distribución o uso sin el consentimiento previo por escrito de MMRE.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Responsabilidad e indemnización</h2>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">9.1 Papel de MMRE</h3>
        <p className="text-gray-600 mb-4">
          MMRE actúa como intermediario y/o administrador. MMRE no es parte en el contrato de arrendamiento entre el Arrendador y el Arrendatario y no es responsable del cumplimiento de las obligaciones derivadas de dicho contrato.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">9.2 Exclusiones de responsabilidad</h3>
        <p className="text-gray-600 mb-4">MMRE no será responsable de:</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Información inexacta o incompleta proporcionada por Arrendadores o Arrendatarios.</li>
          <li>El estado estructural, defectos técnicos o incumplimientos legales del inmueble.</li>
          <li>Disputas entre Arrendador y Arrendatario, incluidos impagos, daños al inmueble o resolución anticipada del arrendamiento.</li>
          <li>Daños indirectos, daños consecuentes, lucro cesante, ingresos de alquiler no percibidos o daños reputacionales.</li>
          <li>Daños causados por fuerza mayor, incluyendo, entre otros: medidas gubernamentales, fenómenos meteorológicos extremos, huelgas, ciberataques o fallos de terceros proveedores.</li>
          <li>Actos u omisiones de terceros contratados por MMRE (como fotógrafos, empresas de inspección o asesores jurídicos).</li>
        </ul>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">9.3 Limitación de responsabilidad</h3>
        <p className="text-gray-600 mb-4">
          La responsabilidad total de MMRE se limita al importe facturado por MMRE para el encargo en cuestión, excl. IVA, con un máximo de <strong>2.500 €</strong> por siniestro. La responsabilidad por importes superiores queda expresamente excluida en la medida permitida por la ley.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">9.4 Plazo de prescripción</h3>
        <p className="text-gray-600 mb-4">
          Las reclamaciones contra MMRE prescriben si el Cliente no ha presentado una reclamación escrita a MMRE en el plazo de doce (12) meses desde la fecha en que el Cliente descubrió o razonablemente debería haber descubierto el daño.
        </p>
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">9.5 Indemnización</h3>
        <p className="text-gray-600 mb-4">
          El Cliente indemnizará a MMRE frente a reclamaciones de terceros — incluida la contraparte en el contrato de arrendamiento — derivadas de información inexacta o incompleta proporcionada por el Cliente, o de su actuación en incumplimiento de estos Términos o de la legislación aplicable.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Ley aplicable y resolución de disputas</h2>
        <p className="text-gray-600 mb-4">
          Estos Términos y todos los acuerdos con MMRE se rigen exclusivamente por la legislación neerlandesa. Las disputas se someterán exclusivamente a la jurisdicción del Tribunal de Distrito de Ámsterdam, salvo que las partes acuerden por escrito resolver la disputa mediante mediación o arbitraje.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Modificaciones de los Términos</h2>
        <p className="text-gray-600 mb-4">
          MMRE se reserva el derecho a modificar estos Términos. La versión más actualizada estará siempre disponible en el sitio web. En el caso de acuerdos en curso, los cambios se comunicarán por escrito con un preaviso mínimo de treinta (30) días. El uso continuado de los servicios tras dicho plazo implica la aceptación de los Términos modificados.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Contacto</h2>
        <p className="text-gray-600 mb-4">Para preguntas sobre estos Términos, puede contactarnos en:</p>
        <p className="text-gray-600 mb-4">{address}</p>

      </div>
    </>
  )
}

export default async function TermsPage() {
  const locale = await getLocale()

  let content
  if (locale === 'nl') content = <TermsNL />
  else if (locale === 'es') content = <TermsES />
  else content = <TermsEN />

  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {content}
      </div>
    </div>
  )
}
