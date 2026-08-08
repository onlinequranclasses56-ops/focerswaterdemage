import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { PhoneNumber } from "@/components/ui/PhoneNumber";
import { BUSINESS, SERVICES, CITIES, getService, getCity, getAllCombos } from "@/lib/config";
import type { FAQ } from "@/types";

/* ------------------------------------------------------------------ */
/* Combo-specific content — genuinely unique per service × city pair    */
/* ------------------------------------------------------------------ */

type ComboContent = {
  headline: string;
  subheadline: string;
  answerFirst: string;
  bodyParagraphs: string[];
  localFactors: { title: string; desc: string }[];
  faqs: FAQ[];
};

type ComboKey = `${string}::${string}`;
const key = (svc: string, city: string): ComboKey => `${svc}::${city}`;

const COMBO_CONTENT: Record<ComboKey, ComboContent> = {

  /* ============================================================ */
  /* WATER DAMAGE × DEBARY                                         */
  /* ============================================================ */
  [key("water-damage-restoration", "debary")]: {
    headline: "Water Damage Restoration in DeBary, FL",
    subheadline:
      "Force1 Restoration responds immediately to water damage events in DeBary. IICRC-certified extraction, structural drying, and full restoration — available 24/7.",
    answerFirst:
      "Water damage restoration in DeBary, FL involves unique challenges not present in inland communities. Force1 Restoration's proximity to the St. Johns River corridor means our technicians regularly handle both Category 1 clean water events (burst pipes, appliance failures) and Category 2–3 events associated with river backflow, storm surge, and area flooding. Force1 Restoration is headquartered in DeBary, providing the fastest on-site response time in the area.",
    bodyParagraphs: [
      "DeBary's position along the St. Johns River creates a permanently elevated water table in low-lying neighborhoods. After heavy rainfall or tropical weather systems, this high water table limits the rate at which groundwater dissipates — meaning water trapped in crawl spaces, slabs, and lower-level rooms stays longer and requires more aggressive mechanical drying than comparable events in higher-elevation Volusia County communities.",
      "Force1 Restoration technicians calibrate drying equipment specifically for DeBary's ambient conditions. Psychrometric calculations account for the area's elevated baseline relative humidity, and equipment placement is optimized to achieve IICRC S500 dry standard within an efficient timeframe despite challenging environmental conditions.",
      "Common water damage scenarios in DeBary include: roof intrusion from tropical system rainfall, St. Johns River backflow flooding during named storms, supply line failures in older homes throughout the Saxon Boulevard and Highbanks Road corridors, and washing machine or dishwasher failures. Force1 Restoration responds to all of these with the same urgency and professionalism — a live team member answers every call, 24 hours a day.",
      "Insurance documentation is critical for DeBary homeowners dealing with flood-related events, as the distinction between covered sudden water damage and flood damage (which requires separate NFIP flood insurance) often matters in the claims process. Force1 Restoration provides detailed photographic and written documentation of every loss, including moisture readings and affected area diagrams, to support your claim with your carrier.",
    ],
    localFactors: [
      { title: "St. Johns River proximity", desc: "Properties within the river corridor face repeated flood exposure and elevated ambient moisture — both elevate drying difficulty and mold risk compared to DeBary properties further inland." },
      { title: "High water table", desc: "DeBary's near-river water table limits groundwater dissipation rates, requiring longer mechanical drying cycles and more equipment than typical inland jobs." },
      { title: "Tropical weather exposure", desc: "Volusia County's storm track brings regular tropical rainfall and named storms that can overwhelm drainage infrastructure in DeBary's lower-elevation neighborhoods." },
      { title: "Force1 home base", desc: "DeBary is Force1 Restoration's headquarters — our fastest response area in Volusia County. We are already nearby when you call." },
    ],
    faqs: [
      { question: "Why is water damage restoration different near the St. Johns River?", answer: "Properties near the St. Johns River have a higher ambient water table, which means groundwater pressure against foundations and slabs during heavy rain or flood events. This slows the natural dissipation of moisture and requires more mechanical drying capacity than comparable jobs in inland areas. Force1 Restoration accounts for these conditions in equipment selection and placement." },
      { question: "Does flood damage from the St. Johns River require a different restoration approach?", answer: "Yes. River backflow flooding typically produces Category 2 or Category 3 water depending on what the river carries — which requires more intensive extraction, antimicrobial treatment, and in some cases removal of flooring and lower wall materials that cannot be safely dried in place. Force1 Restoration assesses the water category at every job and applies the appropriate IICRC protocol." },
      { question: "How quickly can Force1 Restoration respond to water damage in DeBary?", answer: "As Force1 Restoration's home base, DeBary receives our fastest emergency response times. Our technicians are typically deployed from DeBary, which minimizes travel time. We answer calls 24/7 and dispatch immediately — the sooner extraction begins, the lower the total damage and restoration cost." },
      { question: "Can water damage behind walls in DeBary homes cause mold?", answer: "Yes — and Florida's warm, humid climate accelerates the timeline significantly. Mold can begin growing within 24 to 48 hours of water exposure behind drywall, under flooring, or within wall cavities. Force1 Restoration's water damage process includes moisture monitoring inside wall assemblies to confirm complete drying before closing any work area." },
    ],
  },

  /* ============================================================ */
  /* WATER DAMAGE × ORANGE CITY                                    */
  /* ============================================================ */
  [key("water-damage-restoration", "orange-city")]: {
    headline: "Water Damage Restoration in Orange City, FL",
    subheadline:
      "Force1 Restoration provides 24/7 water damage restoration in Orange City, FL. IICRC-certified technicians, industrial extraction and drying equipment, full insurance documentation.",
    answerFirst:
      "Water damage restoration in Orange City, FL addresses a range of scenarios common to Central Florida's inland communities — from supply line failures and appliance leaks to heavy tropical rainfall and roof intrusion. Force1 Restoration serves Orange City from our Volusia County base, providing rapid emergency response and IICRC-certified extraction and structural drying for homes and businesses throughout the area.",
    bodyParagraphs: [
      "Orange City's residential and commercial mix creates a varied water damage landscape. Established neighborhoods along Enterprise Road and in older subdivisions often feature aging plumbing infrastructure — galvanized supply lines, older water heaters, and cast-iron drain systems — that can fail without warning. These Category 1 events require immediate extraction and drying to prevent Category 2 escalation and mold growth.",
      "Orange City's commercial corridor along US 17-92 includes retail spaces, medical offices, and multi-tenant buildings where water damage events can disrupt multiple occupants simultaneously. Force1 Restoration is experienced in commercial water damage mitigation that minimizes business interruption while meeting IICRC standards — often working in phases or off-hours to maintain access during restoration.",
      "Florida's summer storm season brings intense localized thunderstorms to Orange City that can overwhelm aging roof systems and gutters, resulting in water intrusion through ceilings and walls. Force1 Restoration responds to these events immediately, extracts standing water, establishes drying equipment, and documents the loss fully for your homeowners insurance carrier.",
      "The presence of Blue Spring State Park and the associated spring-fed water systems near Orange City means some lower-elevation properties in the area can experience unusual groundwater behavior during extended rainfall periods. Force1 Restoration assesses each job individually, using moisture mapping and thermal imaging to identify all affected areas before any equipment is set.",
    ],
    localFactors: [
      { title: "Aging residential plumbing", desc: "Established Orange City neighborhoods include homes with older supply lines and water heaters that are common failure points — prompt extraction prevents escalation." },
      { title: "Commercial water damage", desc: "The US 17-92 commercial corridor requires restoration approaches that minimize business interruption while meeting IICRC standards." },
      { title: "Tropical storm rainfall", desc: "Summer thunderstorm season brings intense, localized rain events that overwhelm older roof systems and gutters in Orange City neighborhoods." },
      { title: "Same rapid response", desc: "Force1 Restoration's DeBary base provides fast emergency response throughout Orange City — we answer 24/7 and dispatch immediately." },
    ],
    faqs: [
      { question: "How fast can Force1 Restoration reach Orange City for water damage?", answer: "Force1 Restoration is based in neighboring DeBary and provides rapid emergency response to Orange City 24 hours a day, 7 days a week. For water damage emergencies, every minute of delay increases the risk of structural damage and mold growth — call (407) 956-9780 immediately after discovering water damage." },
      { question: "Does Force1 Restoration handle commercial water damage in Orange City?", answer: "Yes. Force1 Restoration handles commercial water damage for businesses, retail spaces, medical offices, and multi-tenant properties throughout Orange City. Commercial jobs often require coordination with building management, after-hours scheduling, and more complex insurance documentation — our team is experienced in all of these." },
      { question: "What causes the most common water damage in Orange City homes?", answer: "The most common sources in Orange City's residential areas are supply line failures (especially in older homes with galvanized plumbing), water heater failures, roof intrusion from Florida's heavy summer thunderstorms, and AC drain pan overflow. Force1 Restoration responds to all of these events with the same urgency and IICRC-certified extraction process." },
      { question: "Will water damage to my Orange City home lead to mold?", answer: "Without prompt extraction and professional drying, yes — mold can begin growing within 24 to 48 hours in Florida's warm climate. Force1 Restoration's process is specifically designed to prevent mold colonization by achieving IICRC S500 dry standard within the critical window after a water event." },
    ],
  },

  /* ============================================================ */
  /* MOLD REMEDIATION × DEBARY                                     */
  /* ============================================================ */
  [key("mold-remediation", "debary")]: {
    headline: "Mold Remediation in DeBary, FL",
    subheadline:
      "Force1 Restoration provides IICRC-certified mold inspection, containment, and remediation in DeBary, FL. We address the moisture source, remove mold safely, and verify clearance.",
    answerFirst:
      "Mold remediation in DeBary, FL is particularly challenging because of the city's St. Johns River proximity, which creates a persistently elevated ambient humidity level throughout the year. When water damage occurs — from river flooding, roof intrusion, plumbing failures, or any other source — the warm, moist conditions in DeBary accelerate mold colonization significantly. Force1 Restoration provides IICRC S520-compliant mold remediation for DeBary homes and businesses, starting with moisture source identification and ending with post-remediation verification testing.",
    bodyParagraphs: [
      "DeBary homeowners are at elevated mold risk compared to many Central Florida communities because of the St. Johns River's influence on the local microclimate. The river maintains high ambient humidity year-round — a condition that supports mold growth even in structures that have not experienced an acute water event. Crawl spaces, bathrooms, poorly ventilated closets, and areas under AC units are particularly vulnerable in DeBary's climate.",
      "Mold that develops after a flooding event in DeBary's river corridor neighborhoods is particularly complex to remediate, because the flooding itself may have involved Category 2 or Category 3 water that deposited organic material and contaminants — providing additional nutrients for mold growth. Force1 Restoration's remediation protocol in these situations involves thorough material assessment to determine what can be dried and treated versus what must be removed and replaced.",
      "Force1 Restoration's mold remediation work in DeBary follows the EPA's guidance on mold remediation in schools and commercial buildings (applicable to residential remediation) and IICRC S520 standards. We establish physical containment with negative air pressure to prevent spore spread during removal, use HEPA filtration continuously during work, and apply EPA-registered antimicrobial treatments to remaining structural surfaces.",
      "Post-remediation verification — air and/or surface sampling after work is complete — confirms that mold levels have returned to background levels before containment is removed. This documentation is important for your insurance claim and for any future sale of the property, demonstrating that the remediation was successful and professionally verified.",
    ],
    localFactors: [
      { title: "Elevated ambient humidity", desc: "DeBary's riverside location maintains higher year-round humidity than inland Volusia County — supporting mold growth in areas with any moisture intrusion." },
      { title: "Post-flood mold risk", desc: "St. Johns River flooding events leave organic debris and moisture behind in affected structures, creating accelerated mold colonization timelines." },
      { title: "Crawl space vulnerability", desc: "Many DeBary homes have crawl spaces that are prone to moisture accumulation — a common hidden mold location in Florida's warm climate." },
      { title: "Fastest response in Volusia County", desc: "As Force1 Restoration's home base, DeBary receives our quickest response times for mold inspections and emergency remediation." },
    ],
    faqs: [
      { question: "Why is mold such a problem in DeBary, FL specifically?", answer: "DeBary's location along the St. Johns River creates consistently elevated ambient humidity — higher than most inland Central Florida communities. Florida's warm temperatures combined with this moisture create ideal conditions for mold growth in any area with water intrusion, inadequate ventilation, or moisture accumulation. Force1 Restoration's technicians are experienced with DeBary's specific environmental conditions." },
      { question: "Can Force1 Restoration test for mold in my DeBary home?", answer: "Yes. Force1 Restoration begins every mold remediation job with a thorough visual inspection and moisture assessment. If air or surface sampling is indicated, we can coordinate laboratory analysis to identify mold species and concentration levels. Baseline and post-remediation samples provide documentation that remediation was successful." },
      { question: "How does mold remediation work in a DeBary crawl space?", answer: "Crawl space mold remediation in DeBary typically involves: correcting the moisture source (ground moisture vapor, drainage issues, or HVAC condensation), applying HEPA vacuuming and antimicrobial treatment to affected structural wood, and often installing a vapor barrier system to prevent recurrence. Force1 Restoration assesses each crawl space individually and recommends the appropriate scope." },
      { question: "Is mold covered by homeowners insurance in DeBary?", answer: "Coverage depends on the source of the mold and your specific policy. Mold resulting from a sudden, covered water damage event (burst pipe, roof storm damage) is typically covered. Mold from long-term neglect or maintenance failures is usually excluded. Force1 Restoration documents the loss carefully to support your claim wherever your policy provides coverage." },
    ],
  },

  /* ============================================================ */
  /* MOLD REMEDIATION × ORANGE CITY                                */
  /* ============================================================ */
  [key("mold-remediation", "orange-city")]: {
    headline: "Mold Remediation in Orange City, FL",
    subheadline:
      "Force1 Restoration provides professional mold inspection, containment, and safe removal in Orange City, FL. IICRC-certified. We identify the source, remediate completely, and verify clearance.",
    answerFirst:
      "Mold remediation in Orange City, FL addresses mold growth in a range of residential and commercial property types — from established single-family homes to multi-unit housing and commercial spaces along the US 17-92 corridor. Force1 Restoration serves Orange City with IICRC S520-compliant mold remediation, establishing proper containment, applying professional-grade removal protocols, and confirming successful clearance with post-remediation verification.",
    bodyParagraphs: [
      "Orange City's climate — warm, humid, and subject to significant annual rainfall — creates conditions where mold can develop in any structure with a moisture source. The most common mold sources in Orange City homes include HVAC systems with condensate drain issues, roof leaks after Florida's heavy summer thunderstorms, bathroom ventilation failures, and unresolved plumbing leaks inside wall cavities.",
      "Multi-family and commercial properties in Orange City face additional mold challenges: shared HVAC systems can distribute spores between units, building managers may not discover mold in individual units until it becomes extensive, and commercial building codes may require specific documentation before reopening after remediation. Force1 Restoration is experienced in commercial mold remediation and the associated documentation requirements.",
      "Orange City's commercial corridor includes properties that may have deferred maintenance or older HVAC systems that are known contributors to mold growth. AC evaporator coils that are not regularly cleaned accumulate debris and moisture, and the condensate pan can overflow — introducing water into wall cavities and subfloor systems. Force1 Restoration's mold remediation process always identifies and addresses the moisture source before removal begins.",
      "For Orange City homeowners discovering mold after a water event, the priority is acting quickly. Every day mold grows unchecked, it spreads to additional surfaces and embeds more deeply into porous materials — increasing the scope of remediation required. Force1 Restoration provides rapid response for both emergency and scheduled mold inspections in Orange City, FL.",
    ],
    localFactors: [
      { title: "HVAC-related mold", desc: "Orange City's year-round AC use and warm, humid climate make HVAC condensate issues a leading mold source — especially in commercial and multi-family properties." },
      { title: "Multi-family complexity", desc: "Multi-unit residential and commercial properties in Orange City require remediation approaches that prevent cross-contamination between units via shared systems." },
      { title: "Commercial sector", desc: "Orange City's US 17-92 commercial corridor includes properties requiring professional mold remediation with appropriate business documentation and minimal downtime." },
      { title: "Rapid response", desc: "Force1 Restoration responds quickly from our DeBary base to mold inspections and emergency remediation in Orange City, FL." },
    ],
    faqs: [
      { question: "What are the signs of mold in an Orange City home or business?", answer: "Common signs include a persistent musty odor (especially in closets, under sinks, or in HVAC registers), visible dark staining on walls, ceilings, or grout, and respiratory symptoms that improve when leaving the building. In Florida's climate, any history of water intrusion — roof leak, plumbing failure, or storm flooding — is a risk factor for mold that warrants professional inspection." },
      { question: "Can Force1 Restoration remediate mold in commercial spaces in Orange City?", answer: "Yes — Force1 Restoration handles commercial mold remediation for retail spaces, office buildings, medical facilities, and other commercial properties in Orange City. Commercial remediation often requires coordination with building management, off-hours scheduling, and documentation for regulators, landlords, or tenants. Our team is experienced in all of these scenarios." },
      { question: "How long does mold remediation take in Orange City?", answer: "Small surface mold jobs can often be completed in one to two days. Larger projects involving wall cavities, HVAC systems, or multiple rooms may require three to seven days. Post-remediation verification testing adds time if laboratory results are included. Force1 Restoration provides a timeline estimate after the initial inspection." },
      { question: "What is post-remediation verification and do I need it?", answer: "Post-remediation verification (PRV) is air or surface sampling conducted after remediation work is complete to confirm that mold levels have returned to normal background levels. While not legally required in Florida, PRV is strongly recommended — it gives you documented proof that the remediation was successful, which is valuable for insurance claims and for future property sales." },
    ],
  },

  /* ============================================================ */
  /* STORM DAMAGE × DEBARY                                         */
  /* ============================================================ */
  [key("storm-damage-restoration", "debary")]: {
    headline: "Storm Damage Restoration in DeBary, FL",
    subheadline:
      "Force1 Restoration responds immediately to storm damage in DeBary, FL. Emergency tarping, water extraction, full structural restoration — available 24/7 after hurricanes, tropical storms, and severe weather.",
    answerFirst:
      "Storm damage restoration in DeBary, FL frequently involves the combination of wind damage, roof intrusion, and river-related flooding that occurs when tropical systems move through Volusia County. DeBary's position along the St. Johns River makes it particularly susceptible to flooding during prolonged rainfall and named storm events, while the city's mature tree canopy — one of its defining characteristics — creates significant risk of structural roof and wall damage from downed trees. Force1 Restoration's home base in DeBary enables the fastest emergency response in the area.",
    bodyParagraphs: [
      "When a hurricane or tropical storm impacts Volusia County, DeBary homeowners face multiple simultaneous damage mechanisms. Wind-driven rain penetrates compromised roof systems and window seals. Storm surge can inundate the St. Johns River corridor, reaching properties that have never previously flooded. And the city's large live oaks and slash pines — trees that define DeBary's landscape — can fall onto structures during high-wind events, causing sudden major damage that requires immediate emergency securing.",
      "Force1 Restoration's storm damage response in DeBary begins with emergency measures that stop ongoing damage: roof tarping prevents additional rain intrusion through compromised rooflines; board-up secures broken windows and doors; and debris removal from structural contact points is completed before detailed assessment and water extraction begins.",
      "Water extraction after a DeBary storm event must account for the category of water involved. Rainwater entering through a roof penetration is Category 1 (clean water). St. Johns River backflow flooding, which carries sediment, organic material, and potential sewage, is Category 3 (blackwater) and requires more intensive treatment protocols including removal of flood-contacted materials that cannot be safely dried in place. Force1 Restoration identifies the water category at every job and applies the correct IICRC-prescribed approach.",
      "Insurance documentation is critical after storm damage in DeBary, particularly given the complexity of distinguishing between windstorm damage (covered by standard homeowners policies) and flood damage (requiring separate NFIP or private flood insurance). Force1 Restoration photographs and documents every aspect of the damage from the first hour on-site, providing comprehensive records that support your claim with each relevant carrier.",
    ],
    localFactors: [
      { title: "St. Johns River flood zone exposure", desc: "DeBary river-corridor properties face storm surge and extended flooding during tropical systems — often producing Category 3 blackwater that requires intensive remediation." },
      { title: "Mature tree canopy risk", desc: "DeBary's large live oaks and pines create high roof and structural damage risk during high-wind events — tree debris removal and emergency tarping are frequent storm response steps." },
      { title: "Multiple simultaneous damage types", desc: "DeBary storm events often combine wind damage, rain intrusion, and river flooding simultaneously — requiring coordination of multiple restoration disciplines." },
      { title: "Immediate local response", desc: "Force1 Restoration's DeBary base provides the shortest dispatch time in the area for post-storm emergency response." },
    ],
    faqs: [
      { question: "What should I do immediately after storm damage to my DeBary home?", answer: "First ensure your household's safety — do not enter areas with structural instability, gas smells, or electrical hazards. Once safe, call Force1 Restoration at (407) 956-9780 for immediate emergency response. Document visible damage with your own photographs if safe to do so, but do not begin discarding damaged materials before our team has documented the loss for your insurance claim." },
      { question: "Does storm damage in DeBary near the St. Johns River require special handling?", answer: "Yes. River-adjacent flooding from tropical events typically involves Category 3 blackwater — which requires removal of flood-contacted flooring, lower wall materials, and insulation rather than simply drying them in place. This is more intensive and more costly than clean water damage, but it is the safe and correct approach per IICRC standards." },
      { question: "Can Force1 Restoration repair my roof after a DeBary storm?", answer: "Yes. Emergency roof tarping is provided immediately to stop ongoing water intrusion. Full roof repair and replacement is part of our complete storm restoration service in DeBary. Handling everything from emergency tarping through final reconstruction means you only need one point of contact throughout the restoration process." },
      { question: "How long does storm damage restoration take in DeBary?", answer: "Timeline varies significantly with scope. Emergency mitigation (tarping, extraction, securing the structure) is completed within the first day or two. Structural drying typically takes 3–5 days. Full reconstruction — depending on the extent of structural damage — can range from one week to several months for major losses. Force1 Restoration provides timeline estimates after the initial damage assessment." },
    ],
  },

  /* ============================================================ */
  /* STORM DAMAGE × ORANGE CITY                                    */
  /* ============================================================ */
  [key("storm-damage-restoration", "orange-city")]: {
    headline: "Storm Damage Restoration in Orange City, FL",
    subheadline:
      "Force1 Restoration provides 24/7 storm damage restoration in Orange City, FL — hurricane response, wind damage, rain intrusion, and flooding. IICRC-certified, full insurance documentation.",
    answerFirst:
      "Storm damage restoration in Orange City, FL addresses the distinct weather hazards of Central Florida's inland communities — primarily severe thunderstorm wind damage, tornado risk, heavy rainfall flooding, and the water intrusion that follows any breach in a structure's building envelope. Force1 Restoration responds to storm damage events in Orange City 24 hours a day, providing emergency securing, water extraction, drying, and full structural restoration.",
    bodyParagraphs: [
      "Orange City sits in the Central Florida corridor that experiences a high frequency of severe thunderstorm events, particularly during the June–November storm season. These storms can produce wind gusts strong enough to damage roofing systems, bring down utility poles and trees, and introduce significant volumes of water through roof penetrations in a very short time. The speed of the damage and the intensity of localized cell events means Orange City properties can suffer substantial storm damage with little warning.",
      "Central Florida also falls within a region of elevated tornado risk — not the highest-risk area nationally, but a location where waterspout tornadoes from nearby coastal waters occasionally track inland, and where supercell thunderstorms can produce brief but damaging tornado touchdowns. Orange City commercial and residential properties can sustain wind damage from tornado events that is distinct from standard tropical storm wind damage in the scope and pattern of structural impact.",
      "Orange City's commercial corridor along US 17-92 presents specific storm restoration challenges: commercial roofing systems (flat or low-slope) are more vulnerable to pooling water and wind-driven rain than steep residential roofs; multi-tenant buildings require careful coordination to minimize disruption to non-affected tenants during restoration; and commercial insurance documentation requirements often differ from residential claims.",
      "Force1 Restoration handles storm damage insurance claims in Orange City by beginning documentation from the moment we arrive. Every structural impact, every moisture reading, and the full scope of damage is photographed and written up in detail. We work alongside your insurance adjuster and can communicate directly with your carrier about restoration scope and timeline.",
    ],
    localFactors: [
      { title: "Severe thunderstorm frequency", desc: "Orange City's inland location in the Central Florida storm corridor means frequent severe cells with high winds and heavy rain that can cause sudden structural damage." },
      { title: "Tornado exposure", desc: "Central Florida experiences occasional tornado events — particularly inland-tracking waterspouts — that can cause concentrated structural damage in Orange City commercial and residential areas." },
      { title: "Commercial roofing vulnerability", desc: "Orange City's commercial corridor includes flat and low-slope roofing systems that are particularly vulnerable to wind-driven rain and storm water pooling." },
      { title: "Fast Volusia County response", desc: "Force1 Restoration responds to storm damage events in Orange City from our nearby DeBary base — available 24/7 throughout the storm season." },
    ],
    faqs: [
      { question: "What storm damage does Force1 Restoration handle in Orange City?", answer: "Force1 Restoration handles all phases of storm damage restoration in Orange City: emergency securing (tarping, board-up), water extraction and structural drying, debris removal, and full structural repair including roofing, siding, windows, and interior finishes. We work with your insurance carrier and handle both residential and commercial storm damage throughout the area." },
      { question: "My Orange City roof is leaking after a storm — what should I do?", answer: "Call Force1 Restoration at (407) 956-9780 immediately. While waiting for our team to arrive, place buckets to collect dripping water and move valuables away from the leak area. Do not go on the roof yourself to assess or tarp — our team handles emergency tarping safely. Stopping water intrusion as quickly as possible limits the extent of interior water and mold damage." },
      { question: "Does tornado damage require a different restoration approach than hurricane damage?", answer: "Yes. Tornado damage tends to be more concentrated and structural in nature — punching through walls and roofs rather than the broader wind-driven rain intrusion common in tropical storms. Force1 Restoration assesses the specific pattern of damage and applies the appropriate restoration approach, which may involve more structural demolition and reconstruction for tornado-impacted properties." },
      { question: "Can Force1 Restoration repair commercial storm damage in Orange City?", answer: "Yes. Force1 Restoration handles commercial storm damage restoration throughout Orange City, including retail, office, medical, and multi-tenant properties. Commercial jobs require specialized coordination with building management, tenant communication, and commercial insurance documentation — our team is experienced in all of these aspects of commercial restoration." },
    ],
  },

  /* ============================================================ */
  /* FIRE DAMAGE × DEBARY                                          */
  /* ============================================================ */
  [key("fire-damage-restoration", "debary")]: {
    headline: "Fire Damage Restoration in DeBary, FL",
    subheadline:
      "Force1 Restoration responds immediately to fire damage in DeBary, FL. Smoke and soot cleanup, water extraction, structural restoration — IICRC S700 certified. Available 24/7.",
    answerFirst:
      "Fire damage restoration in DeBary, FL addresses the full range of destruction that follows a residential or commercial fire — not just the structural damage from flames, but the extensive smoke and soot damage that spreads throughout the structure, the water damage from firefighting efforts, and the persistent odors that embed in porous materials. Force1 Restoration begins fire restoration in DeBary as soon as the fire department clears the property, following IICRC S700 standards for fire and smoke damage.",
    bodyParagraphs: [
      "DeBary's residential neighborhoods include a mix of construction types, from older wood-frame homes to newer concrete block construction. Fire behavior differs between these types: wood-frame structures sustain faster fire spread and more extensive charring, while concrete block homes often confine fire damage more effectively to the room of origin but sustain significant smoke and soot damage throughout. Force1 Restoration's assessment process accounts for construction type in determining what can be cleaned versus what must be removed and replaced.",
      "Florida leads the nation in lightning strikes per capita, and DeBary — with its large tree canopy and open-air communities — sees regular lightning activity during the June–September storm season. Lightning strikes can cause structural fires (particularly in attics when lightning contacts wood-framed rooflines) and can damage electrical systems in ways that increase fire risk. Force1 Restoration responds to lightning-caused fire damage as part of our regular service to DeBary residents.",
      "The water used by the fire department to extinguish a DeBary fire must be addressed as part of the fire damage restoration — often before soot and smoke cleaning can begin. Firefighting water introduces Category 3 contamination (from roof and ground contact) into affected areas, and must be extracted and the structure dried to prevent mold growth in addition to managing the fire damage itself. Force1 Restoration coordinates both aspects simultaneously.",
      "Smoke and soot from a DeBary house fire don't stay confined to the fire-affected rooms. Soot particles are microscopic and travel throughout a structure via the HVAC system and air movement, depositing on walls, ceilings, and contents in rooms far from the fire origin. DeBary homes with central AC systems can distribute smoke throughout the entire structure within minutes of a fire starting. Force1 Restoration's deodorization process treats the entire structure, not just the fire-damaged areas.",
    ],
    localFactors: [
      { title: "Lightning-caused fires", desc: "Florida's high lightning frequency makes lightning-caused attic fires and electrical damage a regular occurrence in DeBary — Force1 Restoration is experienced with this specific fire type." },
      { title: "Mixed construction types", desc: "DeBary's housing stock includes both older wood-frame and concrete block homes, requiring different assessment and restoration approaches." },
      { title: "HVAC smoke distribution", desc: "Central AC systems in DeBary homes can distribute smoke throughout the entire structure during a fire — requiring whole-home deodorization, not just fire-room treatment." },
      { title: "Immediate local response", desc: "Force1 Restoration's DeBary base enables the fastest post-fire response in the area — beginning mitigation as soon as the fire department clears the property." },
    ],
    faqs: [
      { question: "What is the first step after a house fire in DeBary?", answer: "After the fire department clears the property as safe, call Force1 Restoration at (407) 956-9780 immediately. Do not enter a fire-damaged structure before it has been declared safe — compromised structural elements and electrical hazards are not always obvious. Force1 Restoration conducts a safety assessment before beginning any work and starts emergency board-up and tarping to prevent further damage and unauthorized entry." },
      { question: "Does smoke and soot cleaning matter if the fire was small?", answer: "Yes — even small, contained fires produce soot that begins etching and permanently staining surfaces within hours. Smoke odor embeds into porous materials including drywall, insulation, flooring, and soft goods throughout the structure, not just in the fire room. Prompt professional cleaning limits permanent damage and prevents ongoing odor issues that get worse over time." },
      { question: "Does Force1 Restoration handle lightning-caused fire damage in DeBary?", answer: "Yes. Lightning-caused fires are among the most common fire damage events in DeBary, particularly in attic spaces where lightning contacts wood-framed rooflines. Force1 Restoration responds to these events with the same urgency and IICRC S700-compliant process as any other fire damage call — assessing structural safety, beginning emergency securing, and then addressing soot, smoke, and water damage." },
      { question: "Can Force1 Restoration salvage belongings damaged by fire and smoke in DeBary?", answer: "Many contents can be professionally cleaned after fire and smoke damage if addressed promptly. Force1 Restoration assesses contents during the early phases of restoration and applies appropriate cleaning techniques for different material types. Items that cannot be cleaned to an acceptable standard are documented thoroughly for your insurance claim." },
    ],
  },

  /* ============================================================ */
  /* FIRE DAMAGE × ORANGE CITY                                     */
  /* ============================================================ */
  [key("fire-damage-restoration", "orange-city")]: {
    headline: "Fire Damage Restoration in Orange City, FL",
    subheadline:
      "Force1 Restoration provides 24/7 fire damage restoration in Orange City, FL. Smoke cleanup, soot removal, water extraction, odor elimination, and full structural restoration. IICRC S700 certified.",
    answerFirst:
      "Fire damage restoration in Orange City, FL addresses the complex combination of structural fire damage, smoke and soot contamination, firefighting water damage, and persistent odor problems that follow residential and commercial fires. Force1 Restoration serves Orange City from our Volusia County base, providing rapid emergency response and comprehensive IICRC S700-certified fire and smoke restoration for both residential and commercial properties.",
    bodyParagraphs: [
      "Orange City's mix of residential neighborhoods and an active commercial corridor creates varied fire damage scenarios. In residential properties, kitchen fires, electrical fires from aging wiring, and dryer fires are among the most common causes. In Orange City's commercial properties — particularly older buildings along US 17-92 — electrical infrastructure fires, HVAC-related fires, and fires caused by adjacent businesses in multi-tenant strip centers create distinct restoration challenges.",
      "Multi-family and multi-tenant properties in Orange City present particular complexity after a fire: damage to one unit can produce smoke and soot contamination throughout the building via shared wall cavities and HVAC systems, and restoration must be coordinated to address all affected units while managing the impact on non-affected tenants. Force1 Restoration is experienced in multi-unit fire damage restoration and the associated communication and coordination requirements.",
      "The commercial real estate in Orange City includes older structures that may contain building materials no longer used in new construction — materials that produce specific toxins and particulates when burned. Force1 Restoration's safety assessment before any work begins includes identification of potential hazardous materials in older commercial structures, and our technicians work with appropriate protective equipment throughout the restoration process.",
      "Fire damage insurance claims in Orange City follow the same general principles as Florida homeowners and commercial property claims — fire is a standard covered peril in most policies, covering both structural damage and contents. Force1 Restoration provides comprehensive documentation from the first hour on-site, supporting your claim and working alongside your insurance adjuster to ensure the full scope of damage is captured.",
    ],
    localFactors: [
      { title: "Commercial fire scenarios", desc: "Orange City's commercial corridor includes older buildings with aging electrical systems and multi-tenant configurations that create distinct fire and smoke restoration challenges." },
      { title: "Multi-unit complexity", desc: "Multi-family residential and commercial properties in Orange City require coordination across units when smoke and soot travel via shared systems." },
      { title: "Older building materials", desc: "Some of Orange City's older commercial structures may contain materials that require special handling after fire — Force1 Restoration assesses for these as part of every safety evaluation." },
      { title: "Rapid response", desc: "Force1 Restoration responds to fire damage in Orange City from our DeBary base — available 24/7 and dispatching immediately after the fire department clears the property." },
    ],
    faqs: [
      { question: "Does Force1 Restoration handle commercial fire damage in Orange City?", answer: "Yes. Force1 Restoration provides commercial fire damage restoration for retail spaces, office buildings, restaurants, medical facilities, and other commercial properties in Orange City. Commercial fire restoration involves specific safety assessments, coordination with building owners and tenants, commercial insurance documentation, and restoration approaches that account for the distinct construction and occupancy of commercial buildings." },
      { question: "How quickly does Force1 Restoration respond to fire damage in Orange City?", answer: "Force1 Restoration answers calls 24 hours a day and dispatches immediately after your call. Once the fire department clears the property as safe, our team can begin emergency board-up, tarping, and the initial assessment. For fire damage, speed matters — soot begins permanently etching and staining surfaces within hours, and the window for effective cleaning narrows the longer it sits." },
      { question: "Will my homeowners insurance cover fire damage in Orange City?", answer: "Fire is a standard covered peril in most homeowners insurance policies. This typically covers both structural damage and personal property (contents). Force1 Restoration provides comprehensive documentation from the moment we arrive — photos, moisture readings, scope of damage — and can work directly with your insurance adjuster throughout the restoration process." },
      { question: "What does professional smoke odor elimination involve in Orange City?", answer: "Professional smoke odor elimination goes beyond surface cleaning to treat the porous materials that absorb smoke particles — insulation, drywall, framing, soft goods, and even HVAC ductwork. Force1 Restoration uses thermal fogging (which mimics smoke behavior to reach embedded odors), hydroxyl generators, and ozone treatment in appropriate settings to neutralize odors at the molecular level, not just mask them." },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Route                                                                 */
/* ------------------------------------------------------------------ */

type Props = {
  params: Promise<{ serviceSlug: string; citySlug: string }>;
};

export function generateStaticParams() {
  return getAllCombos();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceSlug, citySlug } = await params;
  const service = getService(serviceSlug);
  const city = getCity(citySlug);
  if (!service || !city) return {};

  const comboContent = COMBO_CONTENT[key(serviceSlug, citySlug)];
  if (!comboContent) return {};

  const titleStr = `${service.name} in ${city.name}, FL`;
  const canonical = `${BUSINESS.siteUrl}/services/${service.slug}/${city.slug}`;

  return {
    title: titleStr,
    description: `Force1 Restoration provides ${service.name.toLowerCase()} in ${city.name}, FL. IICRC Certified · 24/7 Emergency · Licensed & Insured. Call (407) 956-9780.`,
    alternates: { canonical },
    openGraph: {
      title: `${titleStr} | Force1 Restoration`,
      description: `IICRC-certified ${service.name.toLowerCase()} in ${city.name}, FL. Available 24/7. Call (407) 956-9780.`,
      url: canonical,
    },
  };
}

export default async function ComboPage({ params }: Props) {
  const { serviceSlug, citySlug } = await params;
  const service = getService(serviceSlug);
  const city = getCity(citySlug);

  if (!service || !city) notFound();

  const comboContent = COMBO_CONTENT[key(serviceSlug, citySlug)];
  if (!comboContent) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.name, href: `/services/${service.slug}` },
    { label: `${city.name}, FL` },
  ];

  const pageUrl = `${BUSINESS.siteUrl}/services/${service.slug}/${city.slug}`;

  return (
    <>
      {/* Self-canonical is set via generateMetadata above */}
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        serviceName={service.name}
        serviceDescription={service.shortDescription}
        serviceUrl={pageUrl}
        cityName={city.name}
        cityState={city.state}
      />

      <Hero
        headline={comboContent.headline}
        subheadline={comboContent.subheadline}
        ctaLocation={`combo-${service.slug}-${city.slug}-hero`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <Breadcrumb items={breadcrumbs} />
      </div>

      {/* Answer-first block */}
      <section className="bg-white pb-10" aria-labelledby="combo-answer">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-primary-50 border border-primary/20 rounded-2xl p-6 md:p-8">
            <h2 id="combo-answer" className="text-xl font-bold text-ink mb-3">
              {service.name} in {city.name}: What to Expect from Force1 Restoration
            </h2>
            <p className="text-ink-muted leading-relaxed">{comboContent.answerFirst}</p>
          </div>
        </div>
      </section>

      {/* Body content */}
      <section className="py-12 bg-white" aria-labelledby="combo-body">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5">
          <h2 id="combo-body" className="text-2xl font-bold text-ink mb-6">
            {service.name} in {city.name}: Local Context
          </h2>
          {comboContent.bodyParagraphs.map((para, i) => (
            <p key={i} className="text-ink-muted leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Local factors */}
      <section className="py-14 bg-surface border-t border-border" aria-labelledby="combo-factors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 id="combo-factors" className="text-2xl font-bold text-ink mb-8">
            Local Factors Affecting {service.name} in {city.name}
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {comboContent.localFactors.map((factor, i) => (
              <div key={i} className="bg-white rounded-xl border border-border p-5">
                <h3 className="font-semibold text-ink mb-2">{factor.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{factor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline call CTA */}
      <section className="py-10 bg-primary-50 border-t border-primary/20" aria-label="Call to action">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-ink text-lg">
              Need {service.name} in {city.name}, FL?
            </p>
            <p className="text-ink-muted text-sm">
              Force1 Restoration — IICRC Certified · {BUSINESS.hours}
            </p>
          </div>
          <PhoneNumber
            location={`combo-${service.slug}-${city.slug}-inline-cta`}
            className="cta-pulse inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
          >
            <PhoneIconSmall />
            {BUSINESS.phone}
          </PhoneNumber>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={comboContent.faqs} title={`${service.name} in ${city.name} — FAQ`} />

      {/* Final call-focused close — entity statement for GEO */}
      <CTASection
        headline={`Force1 Restoration provides ${service.name} in ${city.name}, FL`}
        body={`${BUSINESS.name} · ${BUSINESS.certifications.join(", ")} · ${BUSINESS.hours} · Call ${BUSINESS.phone} for immediate assistance in ${city.name}.`}
        location={`combo-${service.slug}-${city.slug}-footer-cta`}
        variant="primary"
      />
    </>
  );
}

function PhoneIconSmall() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}
