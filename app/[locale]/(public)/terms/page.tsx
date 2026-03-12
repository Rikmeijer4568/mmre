import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | MMRE',
  description: 'MMRE Terms and Conditions - The terms governing the use of our services.',
}

export default function TermsPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Algemene Voorwaarden</h1>
        <p className="text-gray-500 mb-8">Versie maart 2025 &mdash; Meijer &amp; Münninghoff Real Estate B.V.</p>

        <div className="prose prose-gray max-w-none">

          {/* ── 1. PARTIJEN & DEFINITIES ── */}
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Partijen en definities</h2>
          <p className="text-gray-600 mb-4">
            In deze Algemene Voorwaarden wordt verstaan onder:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li><strong>MMRE:</strong> Meijer &amp; Münninghoff Real Estate B.V., geregistreerd bij de Kamer van Koophandel, handelend als erkend NVM-makelaar.</li>
            <li><strong>Opdrachtgever:</strong> de natuurlijke of rechtspersoon die MMRE opdracht geeft tot het verrichten van diensten.</li>
            <li><strong>Opdracht tot Dienstverlening:</strong> de schriftelijke overeenkomst (inclusief eventuele bijlagen) die MMRE en Opdrachtgever aangaan en waarin de precieze diensten, tarieven en looptijd zijn vastgelegd.</li>
            <li><strong>Verhuurder:</strong> Opdrachtgever die een woning via MMRE wenst te verhuren.</li>
            <li><strong>Huurder:</strong> natuurlijke persoon die via MMRE een woning zoekt om te huren.</li>
          </ul>
          <p className="text-gray-600 mb-4">
            Deze Algemene Voorwaarden zijn van toepassing op alle aanbiedingen, overeenkomsten en werkzaamheden van MMRE, tenzij schriftelijk anders overeengekomen. Afwijkingen zijn uitsluitend geldig indien uitdrukkelijk schriftelijk bevestigd door MMRE.
          </p>

          {/* ── 2. DIENSTEN ── */}
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Diensten</h2>
          <p className="text-gray-600 mb-4">
            MMRE biedt de volgende diensten aan in de regio Amsterdam:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li><strong>Verhuur-bemiddeling:</strong> het namens de Verhuurder zoeken en selecteren van een geschikte huurder.</li>
            <li><strong>Aanhuur-bemiddeling:</strong> het namens de Huurder zoeken naar een geschikte huurwoning.</li>
            <li><strong>Vastgoedbeheer:</strong> het voeren van financieel en/of technisch beheer over verhuurde woningen namens de Verhuurder.</li>
            <li><strong>Aanvullende diensten:</strong> waardebepaling, marketing, huurprijsadvies, inspecties en contractbegeleiding.</li>
          </ul>
          <p className="text-gray-600 mb-4">
            De precieze invulling van de dienst, de overeengekomen looptijd en het toepasselijke tarief worden vastgelegd in de Opdracht tot Dienstverlening. Bij strijdigheid tussen deze Algemene Voorwaarden en de Opdracht tot Dienstverlening prevaleert de Opdracht tot Dienstverlening.
          </p>

          {/* ── 3. VERHUUR-BEMIDDELING ── */}
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

          {/* ── 4. AANHUUR-BEMIDDELING ── */}
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

          {/* ── 5. VASTGOEDBEHEER ── */}
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

          {/* ── 6. BETALINGSVOORWAARDEN ── */}
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Betalingsvoorwaarden</h2>
          <p className="text-gray-600 mb-4">
            Facturen dienen te worden voldaan binnen 14 dagen na factuurdatum, tenzij schriftelijk anders overeengekomen. Bij niet-tijdige betaling is de Opdrachtgever van rechtswege in verzuim en is MMRE gerechtigd de wettelijke handelsrente (art. 6:119a BW) in rekening te brengen, alsmede buitengerechtelijke incassokosten conform de staffel van het Besluit vergoeding voor buitengerechtelijke incassokosten.
          </p>

          {/* ── 7. HUURPRIJSINDICATIES ── */}
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Huurprijsindicaties</h2>
          <p className="text-gray-600 mb-4">
            Huurprijsindicaties verstrekt via de website, de rekenmodule of tijdens een adviesgesprek zijn uitsluitend indicatief en vormen geen garantie. De werkelijke huurprijs is afhankelijk van marktomstandigheden, de staat en ligging van het object en overige factoren. MMRE is niet aansprakelijk voor schade die voortvloeit uit het gebruik van een indicatie.
          </p>

          {/* ── 8. INTELLECTUEEL EIGENDOM ── */}
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Intellectueel eigendom</h2>
          <p className="text-gray-600 mb-4">
            Alle content op deze website — waaronder teksten, afbeeldingen, logo&apos;s en vormgeving — is eigendom van MMRE of haar licentiegevers en wordt beschermd door het auteursrecht. Verveelvoudiging, verspreiding of gebruik zonder voorafgaande schriftelijke toestemming van MMRE is niet toegestaan.
          </p>

          {/* ── 9. AANSPRAKELIJKHEID ── */}
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Aansprakelijkheid en vrijwaring</h2>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">9.1 Rol van MMRE</h3>
          <p className="text-gray-600 mb-4">
            MMRE treedt op als bemiddelaar en/of beheerder. MMRE is geen partij bij de huurovereenkomst tussen Verhuurder en Huurder en is niet aansprakelijk voor de nakoming van verplichtingen die voortvloeien uit die huurovereenkomst.
          </p>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">9.2 Uitsluiting aansprakelijkheid</h3>
          <p className="text-gray-600 mb-4">
            MMRE is niet aansprakelijk voor:
          </p>
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

          {/* ── 10. TOEPASSELIJK RECHT ── */}
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Toepasselijk recht en geschillen</h2>
          <p className="text-gray-600 mb-4">
            Op deze Algemene Voorwaarden en alle overeenkomsten met MMRE is uitsluitend Nederlands recht van toepassing. Geschillen worden bij uitsluiting voorgelegd aan de bevoegde rechter van de Rechtbank Amsterdam, tenzij partijen schriftelijk overeenkomen het geschil te beslechten via mediation of arbitrage.
          </p>

          {/* ── 11. WIJZIGINGEN ── */}
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Wijziging van de voorwaarden</h2>
          <p className="text-gray-600 mb-4">
            MMRE behoudt zich het recht voor deze Algemene Voorwaarden te wijzigen. De meest actuele versie is altijd beschikbaar op de website. Voor lopende overeenkomsten worden wijzigingen schriftelijk aangekondigd met een opzegtermijn van ten minste dertig (30) dagen. Voortgezet gebruik van de diensten na deze termijn geldt als aanvaarding van de gewijzigde voorwaarden.
          </p>

          {/* ── 12. CONTACT ── */}
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Contact</h2>
          <p className="text-gray-600 mb-4">
            Voor vragen over deze Algemene Voorwaarden kunt u contact opnemen via:
          </p>
          <p className="text-gray-600 mb-4">
            <strong>E-mail:</strong> info@mmre.nl<br />
            <strong>Adres:</strong> Amsterdam, Nederland
          </p>

        </div>
      </div>
    </div>
  )
}
