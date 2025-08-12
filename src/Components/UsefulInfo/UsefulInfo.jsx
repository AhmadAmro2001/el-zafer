import React, { useEffect, useState } from 'react'
import style from './UsefulInfo.module.css'
import UsefulInfoleft from '../UsefulInfoleft/UsefulInfoleft'
import UsefulInfoRight from '../UsefulInfoRight/UsefulInfoRight'
export default function UsefulInfo() {
    const data =[
      {
        title:"Abbreviation",
        description:"BAF   Bunker Adjustment fees \n CY   Container Yard \n Ctnr   Container \n DC   Dry Container \n DV   Dry Van \n D/O   Delivery Order \n FT   Feet \n H.Q   High Cubic \n ISPS   The International Ship and Port Facility Security \n THC   Terminal Handling charges \n SOC   Shippers Own Container",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1749622992/homeAbout2_hwk3er.png",
        detail:"BAF   Bunker Adjustment fees \n CY   Container Yard \n Ctnr   Container \n DC   Dry Container \n DV   Dry Van \n D/O   Delivery Order \n FT   Feet \n H.Q   High Cubic \n ISPS   The International Ship and Port Facility Security \n THC   Terminal Handling charges \n SOC   Shippers Own Container"
      },
      {
        title:"Air containers dims",
        description:"",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1749623075/home3_qnlblh.png",
        detail:""
      },
      {
        title:"Famous incoterm",
        description:"",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1749623140/ourPartners_cfca0b.png",
        detail:`EX-Works
One of the simplest and most basic shipment arrangements places the minimum responsibility on the seller with greater responsibility on the buyer. In an EX-Works transaction, goods are basically made available for pickup at the shipper/seller's factory or warehouse and "delivery" is accomplished when the merchandise is released to the consignee's freight forwarder. The buyer is responsible for making arrangements with their forwarder for insurance, export clearance and handling all other paperwork.

FOB (Free On Board)
One of the most commonly used-and misused-terms, FOB means that the shipper/seller uses his freight forwarder to move the merchandise to the port or designated point of origin. Though frequently used to describe inland movement of cargo, FOB specifically refers to ocean or inland waterway transportation of goods. "Delivery" is accomplished when the shipper/seller releases the goods to the buyer's forwarder. The buyer's responsibility for insurance and transportation begins at the same moment.

FCA (Free Carrier)
In this type of transaction, the seller is responsible for arranging transportation, but he is acting at the risk and the expense of the buyer. Where in FOB the freight forwarder or carrier is the choice of the buyer, in FCA the seller chooses and works with the freight forwarder or the carrier. "Delivery" is accomplished at a predetermined port or destination point and the buyer is responsible for Insurance.

FAS (Free Alongside Ship)*
In these transactions, the buyer bears all the transportation costs and the risk of loss of goods. FAS requires the shipper/seller to clear goods for export, which is a reversal from past practices. Companies selling on these terms will ordinarily use their freight forwarder to clear the goods for export. "Delivery" is accomplished when the goods are turned over to the Buyers Forwarder for insurance and transportation.

CFR (Cost and Freight)
This term formerly known as CNF (C&F) defines two distinct and separate responsibilities-one is dealing with the actual cost of merchandise "C" and the other "F" refers to the freight charges to a predetermined destination point. It is the shipper/seller's responsibility to get goods from their door to the port of destination. "Delivery" is accomplished at this time. It is the buyer's responsibility to cover insurance from the port of origin or port of shipment to buyer's door. Given that the shipper is responsible for transportation, the shipper also chooses the forwarder.

CIF (Cost, Insurance and Freight)
This arrangement similar to CFR, but instead of the buyer insuring the goods for the maritime phase of the voyage, the shipper/seller will insure the merchandise. In this arrangement, the seller usually chooses the forwarder. "Delivery" as above, is accomplished at the port of destination.

CPT (Carriage Paid To)
In CPT transactions the shipper/seller has the same obligations found with CIF, with the addition that the seller has to buy cargo insurance, naming the buyer as the insured while the goods are in transit.

CIP (Carriage and Insurance Paid To)
This term is primarily used for multimodal transport. Because it relies on the carrier's insurance, the shipper/seller is only required to purchase minimum coverage. When this particular agreement is in force, Freight Forwarders often act in effect, as carriers. The buyer's insurance is effective when the goods are turned over to the Forwarder.

DAF (Delivered At Frontier)
Here the seller's responsibility is to hire a forwarder to take goods to a named frontier, which usually a border crossing point, and clear them for export. "Delivery" occurs at this time. The buyer's responsibility is to arrange with their forwarder for the pick up of the goods after they are cleared for export, carry them across the border, clear them for importation and effect delivery. In most cases, the buyer's forwarder handles the task of accepting the goods at the border across the foreign soil.

DES (Delivered Ex Ship)
In this type of transaction, it is the seller's responsibility to get the goods to the port of destination or to engage the forwarder to the move cargo to the port of destination uncleared. "Delivery" occurs at this time. Any destination charges that occur after the ship is docked are the buyer's responsibility.

DEQ (Delivered Ex Quay)*
In this arrangement, the buyer/consignee is responsible for duties and charges and the seller is responsible for delivering the goods to the quay, wharf or port of destination. In a reversal of previous practice, the buyer must also arrange for customs clearance.

DDP (Delivered Duty Paid)
DDP terms tend to be used in intermodal or courier-type shipments. Whereby, the shipper/seller is responsible for dealing with all the tasks involved in moving goods from the manufacturing plant to the buyer/consignee's door. It is the shipper/seller's responsibility to insure the goods and absorb all costs and risks including the payment of duty and fees.

DDU (Delivered Duty Unpaid) This arrangement is basically the same as with DDP, except for the fact that the buyer is responsible for the duty, fees and taxes.`
      },
      {
        title:"Glossary of trade terms",
        description:"",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1750389129/useful1_xdspqu.png",
        detail:`Glossary of Trade Terms
A
Air Waybill - A non-negotiable contract for carriage of air transportation between an air carrier and a shipper.

All-Risk Insurance - The broadest form of coverage available, providing protection against all risk of physical loss or damage from any external cause. Does not cover loss or damage due to delay, inherent vice, inadequate packaging, or loss of market.

B
BAF (Bunker Adjustment Factor) - An adjustment in shipping charges to offset price fluctuations in the cost of fuel. Also known as a Bunker Surcharge (B/S). The word Bunker refers to fuel storage containers on a vessel.

Bill of Lading, On Board - A bill of lading acknowledging that the relative goods have been received on board a specified vessel.

Bill of Lading, Order - A negotiable bill of lading. There are two types:

Bonded Warehouse - A warehouse authorized by customs for storage of goods on which payment of duties is deferred until the goods are removed.

Break-bulk Vessel - A vessel designed to handle large or oversized cargo; generally cargo unsuitable for container stowage.

Bulk Cargo - Loose cargo that is loaded directly into a ship's hold.

Bulk Carrier - There are two types of bulk carriers, the dry-bulk carrier and the liquid-bulk carrier, better known as a tanker. Bulk cargo is a shipment such as oil, grain, or one which is not packaged, bundled, bottled, or otherwise packed and is loaded without counting or marking.

C
CAD (Cash Against Documents) - A method of payment for goods in which documents transferring title are given to the buyer upon payment of cash to an intermediary acting for the seller.

CAF (Currency Adjustment Factor) - A surcharge on freight charges by a carrier to offset foreign currency fluctuations.

Cargo Insurance - Insurance to protect the financial interest of the owner of the cargo in the event of a loss during transportation.

Carrier - Any person who, through a contract of carriage, undertakes to perform or procure the performance of carriage by rail, road, sea, air, inland waterway, or by a combination of modes.

Certificate of Origin - A document containing an affidavit to prove the origin of imported goods. It is used for customs or foreign exchange purposes or both. Certificates of Origin are commonly certified by an official organization in the country of origin such as a consular office or a chamber of commerce.

CFS (Container Freight Station) - The term CFS at loading port means the location designated by carriers for the receiving of cargo to be loaded into containers by the carrier. At discharge or destination ports, the term CFS means the bonded location designated by carriers for devanning of containerized cargo.

CFS/CFS (Pier to Pier) - The term CFS/CFS refers to cargo delivered at origin in less-than-containerload quantities to a container freight station (CFS) to be loaded into containers and to be unloaded from the container at destination CFS.

CFS Charge (Container Freight Station Charge) - The charge assessed for services performed at the origin or destination for loading or unloading of cargo into/from containers at a CFS.

CFS Receiving Services - The service performed at the loading port in receiving and packing cargo into containers from CFS to CY or shipside.

Chargeable Weight - Rate for airfreight goods where dimensional weight factor exceeds the actual weight of the cargo.

Charter - Originally meant a flight where a shipper contracted hire of an aircraft from an air carrier, but has usually come to mean any non-scheduled commercial service.

Chassis - A rectangular steel frame, supported by springs and wheeled axles constructed to accept mounting of containers for over-the-road transport.

CIA (Cash in Advance) - A method of payment for goods whereby the buyer pays the seller prior to shipping the goods.

Classification - A term for the determination of the correct tariff number in a Customs tariff for admissibility and duty purposes.

Consolidated Shipment - A method of shipping whereby an agent (freight forwarder or consolidator) combines individual consignments from various shippers into one shipment made to a destination agent, for the benefit of preferential rates. (Also called "groupage") The consolidation is then de-consolidated by the destination agent into its original component consignments and made available to consignees. Consolidation provides shippers access to better rates than would be otherwise attainable.

D
DDC - Destination Delivery Charge.

DDP (Delivered Duty Paid) - Also known as "free domicile" or "free house."

DDU (Delivered Duty Unpaid) - This reflects the emergence of "door-to-door" intermodal or courier contracts or carriage where only the destination customs duty and taxes (if any) are paid by consignee.

Dead Freight - Freight charges paid by the charterer of a vessel for the contracted space which is left partially unoccupied.

Demurrage - A penalty for exceeding free time allowed for loading or unloading at a pier or freight terminal. Also a charge for undue detention of transportation equipment or carriers in port while loading or unloading.

Density - Weight units per unit of volume.

E
EDI or EDIFACT (Electronic Data Interchange for Administration, Commerce and Transport) - From the United Nations-backed electronic data interchange standards body, this is a set of standards that are used to define data sets in certain documents to standardize them for electronic transmission from one format to another.

F
FCL - Full Container Load, Full Car Load.

Force Majeure - The title of a standard clause found in marine contracts exempting the parties for non-fulfillment of their obligations by reasons of occurrences beyond their control, such as earthquakes, floods, or war.

Foreign Trade Zone (FTZ) - A port designated by the government for duty-free entry of any non-prohibited goods. Merchandise may be stored, displayed, and used for manufacturing within the zone and re-exported without duties being paid. Duties are imposed only when the original goods or items manufactured from those goods pass from the zone into an area of the country subject to customs authority. Also called a Free Trade Zone.

Free Out (FO) - The cost of unloading a vessel is borne by the charterer.

Free Port - A port which is a Foreign Trade Zone open to all traders on equal terms, or more specifically a port where merchandise may he stored duty-free pending re-export or sale within that country.

H
Harmonized Code - An internationally accepted and uniform description system for classifying goods for customs, statistical, and other purposes.

Harmonized System (HS) - A key provision of the international trade bill, effective January 1, 1989, that established international uniformity for classifying goods moving in international trade under a single commodity code.

J
Just in Time (JIT) - The principle of production and inventory control in which goods arrive when needed for production or use.

L
Legal Weight - The weight of the goods plus any immediate wrappings or packagings that are sold along with the goods, e.g., the weight of a tin can as well as its contents.

Letter of Credit, Confirmed - A letter of credit containing a guarantee on the part of both the issuing and advising banks of payment to the seller, provided the seller's documentation is in order and the terms of the letter of credit are met.

Liner - The word "liner" is derived from the term "line traffic," which denotes operation along definite routes on the basis of definite, fixed schedules. A liner thus is a vessel that engages in this kind of transportation, which usually involves the haulage of general cargo as distinct from bulk cargo.

Logistics Management - The efficient and cost-effective management of the physical movement of goods from supply points to final sale and the associated transfer and holding of such goods at various intermediate storage points.

Lo/Lo (Lift-On/Lift-Off) - Denotes the method by which cargo is loaded onto and discharged from an ocean vessel, which in this case is by the use of a crane.

M
M/T or Metric Ton - 1000 Kilos

N
Non-Vessel Operating Common Carrier (NVOCC) - In the United States, a term for an FMC-Iicensed cargo consolidator of shipments in ocean trade, generally arranging for or performing consolidation and containerization functions. In trade lanes that do not include the U.S.A., NVOCC's operate under different rules and governmental licensing may not be a requirement.

R
Ro/Ro (Roll-on/Roll-Off) Vessel - A ship designed to accommodate cargo that is rolled on and rolled off. Many Ro/Ro vessels can also accommodate containers and/or break-bulk cargo.

S
Short-Shipped - Cargo manifested but not loaded.

Strikes, Riots and Civil Commotion's - An insurance clause referring to loss or damage directly caused by strikers, locked-out workmen, persons' participation in labor disturbances, and riots of various kinds. The ordinary marine insurance policy does not cover this risk. Coverage against it can be added only by endorsement.

T
Temperature Controlled Cargo - Any cargo requiring carriage under controlled temperature.

TEU - A twenty-foot equivalent unit (6.1m). A standard unit for counting containers of various lengths and for describing container ship or terminal capacity. A standard 40' container (FEU) equals 2 TEUs.

THC (Terminal Handling Charge) - A charge for handling services performed at terminals.

W
War Risk - The possible aggressive actions against a ship and its cargo by a belligerent government. This risk can be insured by a marine policy with a risk clause.

War Risk Insurance - Insurance issued by marine underwriters against war-like operations specifically described in the policy. In former times, war risk insurance was taken out only in times of war, but currently many exporters cover most of their shipments with war risk insurance as a protection against losses from derelict torpedoes and floating mines placed during former wars, and also as a safeguard against unforeseen warlike developments. In the U.S.A., war risk insurance is written in a separate policy from the ordinary marine insurance; it is desirable to take out both policies with the same underwriter in order to avoid the ill effects of a possible dispute between underwriters as to the cause (marine peril or war peril) of a given loss.

Warehouse-to-Warehouse - A clause in marine insurance policy whereby the underwriter agrees to cover the goods while in transit between the initial point of shipment and the point of destination with certain limitations, and also subject to the law of insurable interest. The warehouse-to-warehouse clause was once extremely important, but marine extension clauses now often override its provisions.`
      },
      {
        title:"Metric basics",
        description:"",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1750389127/useful2_mk8dkw.png",
        detail:`Metric Basics
The three basic metric units are the meter (length), the gram (weight), and the liter (volume). The key to metric prefixes are:

1000 = kilo
100 = hecto
10 = deca
0.1 = deci
0.01 = centi
0.001 milli`
      },
      {
        title:"Metric to US - US to metric",
        description:"",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1749985397/services1_yrb2mi.png",
        detail:`To calculate the approximate U.S. measure equivalent to a known metric measure, simply multiply the metric quantity by the conversion factor in the center column. Example: 38 kilograms = 84 pounds, approximately (38 x 2.2046 = 83.78).
        To calculate the approximate metric measure equivalent to a U.S. measure, simply multiply the U.S. quantity by the conversion factor in the center column. Example: 563 miles = 900 kilometers, approximately (563 x 1.6093 = 906.04).`
      },
      {
        title:"Ocean containers dims",
        description:"",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1750304173/activities7_nv280l.jpg",
        detail:``
      },
      {
        title:"Shipping schedule",
        description:"",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1750304203/activities6_rib58i.jpg",
        detail:""
      },
      {
        title:"Container load calculator",
        description:"",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1750304244/activities8_ouoakj.jpg",
        detail:""
      },
      {
        title:"Track & trace",
        description:"",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1750304346/activities5_b3bgx9.jpg",
        detail:""
      }
    ]
  return <>
      {/* <div className='container mx-auto relative px-4 md:px-36 md:mt-20 mt-24 text-white bg-[#095890]'>
        <div className='flex flex-col justify-center items-center  md:h-screen h-[250px] '>
            <h1 className='md:mb-5 md:text-6xl text-[24px] mb-3 font-bold'>Useful info.</h1>
            <h3 className='md:text-xl text-[10px] md:mb-2 '> We pride ourselves on our exceptional customer service, reliable delivery times, and competitive pricing, making us the go-to choice for all your shipping needs</h3>
            <p className='md:mt-5 md:text-lg text-[8px] text-center '>Whether you are shipping domestically or internationally.</p>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[495px] w-[200px] md:h-[495px] h-[200px] opacity-15 border rounded-full '>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[425px] w-[160px] md:h-[425px] h-[160px]  opacity-15  border rounded-full '>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[319px] w-[120px] md:h-[319px] h-[120px]  opacity-15  border rounded-full '>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[225px] w-[80px] md:h-[225px] h-[80px]  opacity-15  border rounded-full '>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[120px] w-[50px] md:h-[120px] h-[50px]  opacity-15  bg-white rounded-full '>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[75px] w-[35px] md:h-[75px] h-[35px]  opacity-20  bg-white rounded-full '>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[40px] w-[20px] md:h-[40px] h-[20px]  opacity-25  bg-white rounded-full '>
        </div>
        
      </div> */}

      <div className='my-5 md:my-44'>
      <UsefulInfoleft data={data[0]}/>
      <UsefulInfoRight data={data[1]}/>
      <UsefulInfoleft data={data[2]}/>
      <UsefulInfoRight data={data[3]}/>
      <UsefulInfoleft data={data[4]}/>
      <UsefulInfoRight data={data[5]}/>
      <UsefulInfoleft data={data[6]}/>
      <UsefulInfoRight data={data[7]}/>
      <UsefulInfoleft data={data[8]}/>
      <UsefulInfoRight data={data[9]}/>
      </div>
    </>
}
