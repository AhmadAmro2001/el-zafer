import React, { useEffect, useState } from 'react'
import style from './GlossaryOfTradeTerms.module.css'
export default function GlossaryOfTradeTerms() {
  const data = [
    {
      title: "A",
      words: [
        {
          title: "Air Waybill",
          description:
            "A non-negotiable contract for carriage of air transportation between an air carrier and a shipper."
        },
        {
          title: "All-Risk Insurance",
          description:
            "The broadest form of coverage available, providing protection against all risk of physical loss or damage from any external cause. Does not cover loss or damage due to delay, inherent vice, inadequate packaging, or loss of market."
        }
      ]
    },
    {
      title: "B",
      words: [
        {
          title: "BAF (Bunker Adjustment Factor)",
          description:
            "An adjustment in shipping charges to offset price fluctuations in the cost of fuel. Also known as a Bunker Surcharge (B/S). The word Bunker refers to fuel storage containers on a vessel."
        },
        {
          title: "Bill of Lading, On Board",
          description:
            "A bill of lading acknowledging that the relative goods have been received on board a specified vessel."
        },
        {
          title: "Bill of Lading, Order",
          description:
            "A negotiable bill of lading. There are two types:"
        },
        {
          title: "Bonded Warehouse",
          description:
            "A warehouse authorized by customs for storage of goods on which payment of duties is deferred until the goods are removed."
        },
        {
          title: "Break-bulk Vessel",
          description:
            "A vessel designed to handle large or oversized cargo; generally cargo unsuitable for container stowage."
        },
        {
          title: "Bulk Cargo",
          description: "Loose cargo that is loaded directly into a ship's hold."
        },
        {
          title: "Bulk Carrier",
          description:
            "There are two types of bulk carriers, the dry-bulk carrier and the liquid-bulk carrier, better known as a tanker. Bulk cargo is a shipment such as oil, grain, or one which is not packaged, bundled, bottled, or otherwise packed and is loaded without counting or marking."
        }
      ]
    },
    {
      title: "C",
      words: [
        {
          title: "CAD (Cash Against Documents)",
          description:
            "A method of payment for goods in which documents transferring title are given to the buyer upon payment of cash to an intermediary acting for the seller."
        },
        {
          title: "CAF (Currency Adjustment Factor)",
          description:
            "A surcharge on freight charges by a carrier to offset foreign currency fluctuations."
        },
        {
          title: "Cargo Insurance",
          description:
            "Insurance to protect the financial interest of the owner of the cargo in the event of a loss during transportation."
        },
        {
          title: "Carrier",
          description:
            "Any person who, through a contract of carriage, undertakes to perform or procure the performance of carriage by rail, road, sea, air, inland waterway, or by a combination of modes."
        },
        {
          title: "Certificate of Origin",
          description:
            "A document containing an affidavit to prove the origin of imported goods. It is used for customs or foreign exchange purposes or both. Certificates of Origin are commonly certified by an official organization in the country of origin such as a consular office or a chamber of commerce."
        },
        {
          title: "CFS (Container Freight Station)",
          description:
            "The term CFS at loading port means the location designated by carriers for the receiving of cargo to be loaded into containers by the carrier. At discharge or destination ports, the term CFS means the bonded location designated by carriers for devanning of containerized cargo."
        },
        {
          title: "CFS/CFS (Pier to Pier)",
          description:
            "The term CFS/CFS refers to cargo delivered at origin in less-than-containerload quantities to a container freight station (CFS) to be loaded into containers and to be unloaded from the container at destination CFS."
        },
        {
          title: "CFS Charge (Container Freight Station Charge)",
          description:
            "The charge assessed for services performed at the origin or destination for loading or unloading of cargo into/from containers at a CFS."
        },
        {
          title: "CFS Receiving Services",
          description:
            "The service performed at the loading port in receiving and packing cargo into containers from CFS to CY or shipside."
        },
        {
          title: "Chargeable Weight",
          description:
            "Rate for airfreight goods where dimensional weight factor exceeds the actual weight of the cargo."
        },
        {
          title: "Charter",
          description:
            "Originally meant a flight where a shipper contracted hire of an aircraft from an air carrier, but has usually come to mean any non-scheduled commercial service."
        },
        {
          title: "Chassis",
          description:
            "A rectangular steel frame, supported by springs and wheeled axles constructed to accept mounting of containers for over-the-road transport."
        },
        {
          title: "CIA (Cash in Advance)",
          description:
            "A method of payment for goods whereby the buyer pays the seller prior to shipping the goods."
        },
        {
          title: "Classification",
          description:
            "A term for the determination of the correct tariff number in a Customs tariff for admissibility and duty purposes."
        },
        {
          title: "Consolidated Shipment",
          description:
            "A method of shipping whereby an agent (freight forwarder or consolidator) combines individual consignments from various shippers into one shipment made to a destination agent, for the benefit of preferential rates. (Also called 'groupage')."
        }
      ]
    },
    {
      title: "D",
      words: [
        { title: "DDC", description: "Destination Delivery Charge." },
        {
          title: "DDP (Delivered Duty Paid)",
          description: "Also known as 'free domicile' or 'free house.'"
        },
        {
          title: "DDU (Delivered Duty Unpaid)",
          description:
            "This reflects the emergence of 'door-to-door' intermodal or courier contracts or carriage where only the destination customs duty and taxes (if any) are paid by consignee."
        },
        {
          title: "Dead Freight",
          description:
            "Freight charges paid by the charterer of a vessel for the contracted space which is left partially unoccupied."
        },
        {
          title: "Demurrage",
          description:
            "A penalty for exceeding free time allowed for loading or unloading at a pier or freight terminal. Also a charge for undue detention of transportation equipment or carriers in port while loading or unloading."
        },
        { title: "Density", description: "Weight units per unit of volume." }
      ]
    },
    {
      title: "E",
      words: [
        {
          title: "EDI or EDIFACT",
          description:
            "Electronic Data Interchange for Administration, Commerce and Transport. A UN-backed set of standards to define data sets in documents for standardized electronic transmission."
        }
      ]
    },
    {
      title: "F",
      words: [
        { title: "FCL", description: "Full Container Load, Full Car Load." },
        {
          title: "Force Majeure",
          description:
            "A standard clause in marine contracts exempting parties from non-fulfillment due to occurrences beyond their control (earthquakes, floods, war, etc.)."
        },
        {
          title: "Foreign Trade Zone (FTZ)",
          description:
            "A port designated by the government for duty-free entry of any non-prohibited goods. Duties are imposed only when goods enter the country from the zone."
        },
        {
          title: "Free Out (FO)",
          description: "The cost of unloading a vessel is borne by the charterer."
        },
        {
          title: "Free Port",
          description:
            "A Foreign Trade Zone port open to all traders, where merchandise may be stored duty-free pending re-export or sale."
        }
      ]
    },
    {
      title: "H",
      words: [
        {
          title: "Harmonized Code",
          description:
            "An internationally accepted and uniform description system for classifying goods for customs, statistical, and other purposes."
        },
        {
          title: "Harmonized System (HS)",
          description:
            "Established international uniformity for classifying goods in international trade under a single commodity code."
        }
      ]
    },
    {
      title: "J",
      words: [
        {
          title: "Just in Time (JIT)",
          description:
            "The principle of production and inventory control in which goods arrive when needed for production or use."
        }
      ]
    },
    {
      title: "L",
      words: [
        {
          title: "Legal Weight",
          description:
            "The weight of the goods plus any immediate wrappings or packagings sold along with the goods (e.g., the weight of a tin can as well as its contents)."
        },
        {
          title: "Letter of Credit, Confirmed",
          description:
            "A letter of credit containing a guarantee on the part of both the issuing and advising banks of payment to the seller, provided the seller's documentation is in order."
        },
        {
          title: "Liner",
          description:
            "A vessel operating on fixed schedules and routes, generally for general cargo as opposed to bulk cargo."
        },
        {
          title: "Logistics Management",
          description:
            "The efficient and cost-effective management of the physical movement of goods from supply points to final sale and their storage at various points."
        },
        {
          title: "Lo/Lo (Lift-On/Lift-Off)",
          description:
            "Cargo loading/unloading method by crane onto and off an ocean vessel."
        }
      ]
    },
    {
      title: "M",
      words: [{ title: "M/T or Metric Ton", description: "1000 Kilos" }]
    },
    {
      title: "N",
      words: [
        {
          title: "Non-Vessel Operating Common Carrier (NVOCC)",
          description:
            "An FMC-licensed cargo consolidator in ocean trade, arranging or performing consolidation/containerization. Rules differ outside the U.S."
        }
      ]
    },
    {
      title: "R",
      words: [
        {
          title: "Ro/Ro (Roll-on/Roll-Off) Vessel",
          description:
            "A ship designed to accommodate cargo that is rolled on and rolled off. Many also carry containers and/or break-bulk cargo."
        }
      ]
    },
    {
      title: "S",
      words: [
        {
          title: "Short-Shipped",
          description: "Cargo manifested but not loaded."
        },
        {
          title: "Strikes, Riots and Civil Commotion's",
          description:
            "Insurance clause covering loss/damage caused by labor disturbances, riots, etc. Not part of ordinary marine insurance; can be added by endorsement."
        }
      ]
    },
    {
      title: "T",
      words: [
        {
          title: "Temperature Controlled Cargo",
          description: "Any cargo requiring carriage under controlled temperature."
        },
        {
          title: "TEU",
          description:
            "A twenty-foot equivalent unit (6.1m). Standard for counting containers/ship capacity. 1 FEU (40') = 2 TEUs."
        },
        {
          title: "THC (Terminal Handling Charge)",
          description:
            "A charge for handling services performed at terminals."
        }
      ]
    },
    {
      title: "W",
      words: [
        {
          title: "War Risk",
          description:
            "The possible aggressive actions against a ship and its cargo by a belligerent government. This can be insured under a marine policy with a war risk clause."
        },
        {
          title: "War Risk Insurance",
          description:
            "Insurance by marine underwriters against specific war-like operations. In the U.S., written separately from marine insurance."
        },
        {
          title: "Warehouse-to-Warehouse",
          description:
            "A clause in marine insurance covering goods while in transit between shipment point and destination, subject to limitations and insurable interest."
        }
      ]
    }
  ];
  
  return <>
      <div className='my-52 container mx-auto px-4 md:px-32'>
        <h1 className='text-4xl font-bold text-left text-red-700 mb-4'>Glossary Of Trade Terms</h1>
        {data.map((item,index)=>{
          return(
            <div key={index}>
              <h1 className='text-3xl font-bold text-left text-red-700'>{item.title}</h1>
              
                {item.words.map((word,index)=>{
                  return(
                    <div key={index} className='flex  text-left'>
                      <h1 className=' mb-2 '><span className='font-semibold'>{word.title}</span>-{word.description}</h1>
                      
                    </div>
                  )
                })}
              
            </div>
          )
        })}
      </div>
    </>
}
