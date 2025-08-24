import React, { useEffect, useState } from 'react'
import style from './FamousIncterm.module.css'
export default function FamousIncterm() {
    const data =[
      {
        title:"EX-Works",
        description:`One of the simplest and most basic shipment arrangements places the minimum responsibility on the seller with greater responsibility on the buyer. In an EX-Works transaction, goods are basically made available for pickup at the shipper/seller's factory or warehouse and "delivery" is accomplished when the merchandise is released to the consignee's freight forwarder. The buyer is responsible for making arrangements with their forwarder for insurance, export clearance and handling all other paperwork.`
      },
      {
        title:"FOB (Free On Board)",
        description:`One of the most commonly used-and misused-terms, FOB means that the shipper/seller uses his freight forwarder to move the merchandise to the port or designated point of origin. Though frequently used to describe inland movement of cargo, FOB specifically refers to ocean or inland waterway transportation of goods. "Delivery" is accomplished when the shipper/seller releases the goods to the buyer's forwarder. The buyer's responsibility for insurance and transportation begins at the same moment.`
      },
      {
        title:"FCA (Free Carrier)",
        description:`In this type of transaction, the seller is responsible for arranging transportation, but he is acting at the risk and the expense of the buyer. Where in FOB the freight forwarder or carrier is the choice of the buyer, in FCA the seller chooses and works with the freight forwarder or the carrier. "Delivery" is accomplished at a predetermined port or destination point and the buyer is responsible for Insurance.`
      },
      {
        title:"FAS (Free Alongside Ship)*",
        description:`In these transactions, the buyer bears all the transportation costs and the risk of loss of goods. FAS requires the shipper/seller to clear goods for export, which is a reversal from past practices. Companies selling on these terms will ordinarily use their freight forwarder to clear the goods for export. "Delivery" is accomplished when the goods are turned over to the Buyers Forwarder for insurance and transportation.`
      },
      {
        title:"CFR (Cost and Freight)",
        description:`This term formerly known as CNF (C&F) defines two distinct and separate responsibilities-one is dealing with the actual cost of merchandise "C" and the other "F" refers to the freight charges to a predetermined destination point. It is the shipper/seller's responsibility to get goods from their door to the port of destination. "Delivery" is accomplished at this time. It is the buyer's responsibility to cover insurance from the port of origin or port of shipment to buyer's door. Given that the shipper is responsible for transportation, the shipper also chooses the forwarder.`
      },
      {
        title:"CIF (Cost, Insurance and Freight)",
        description:`This arrangement similar to CFR, but instead of the buyer insuring the goods for the maritime phase of the voyage, the shipper/seller will insure the merchandise. In this arrangement, the seller usually chooses the forwarder. "Delivery" as above, is accomplished at the port of destination.`
      },
      {
        title:"CPT (Carriage Paid To)",
        description:`In CPT transactions the shipper/seller has the same obligations found with CIF, with the addition that the seller has to buy cargo insurance, naming the buyer as the insured while the goods are in transit.`
      },
      {
        title:"CIP (Carriage and Insurance Paid To)",
        description:`This term is primarily used for multimodal transport. Because it relies on the carrier's insurance, the shipper/seller is only required to purchase minimum coverage. When this particular agreement is in force, Freight Forwarders often act in effect, as carriers. The buyer's insurance is effective when the goods are turned over to the Forwarder.`
      },
      {
        title:"DAF (Delivered At Frontier)",
        description:`Here the seller's responsibility is to hire a forwarder to take goods to a named frontier, which usually a border crossing point, and clear them for export. "Delivery" occurs at this time. The buyer's responsibility is to arrange with their forwarder for the pick up of the goods after they are cleared for export, carry them across the border, clear them for importation and effect delivery. In most cases, the buyer's forwarder handles the task of accepting the goods at the border across the foreign soil.`
      },
      {
        title:"DES (Delivered Ex Ship)",
        description:`In this type of transaction, it is the seller's responsibility to get the goods to the port of destination or to engage the forwarder to the move cargo to the port of destination uncleared. "Delivery" occurs at this time. Any destination charges that occur after the ship is docked are the buyer's responsibility.`
      },
      {
        title:"DEQ (Delivered Ex Quay)*",
        description:`In this arrangement, the buyer/consignee is responsible for duties and charges and the seller is responsible for delivering the goods to the quay, wharf or port of destination. In a reversal of previous practice, the buyer must also arrange for customs clearance`
      },
      {
        title:"DDP (Delivered Duty Paid)",
        description:`DDP terms tend to be used in intermodal or courier-type shipments. Whereby, the shipper/seller is responsible for dealing with all the tasks involved in moving goods from the manufacturing plant to the buyer/consignee's door. It is the shipper/seller's responsibility to insure the goods and absorb all costs and risks including the payment of duty and fees`
      },
      {
        title:"DDU (Delivered Duty Unpaid)",
        description:`This arrangement is basically the same as with DDP, except for the fact that the buyer is responsible for the duty, fees and taxes.`
      }
    ]
  return <>
      <div className='my-52 container mx-auto px-4 md:px-32'>
        <h1 className='text-4xl font-bold text-left text-red-700'>Famous Incterm</h1>
        <div className='flex flex-col justify-between mt-5'>
          {
            data.map((item,index)=>{
              return <div key={index} className='flex flex-col text-left'>
                <h2 className=' text-xl font-bold text-[#0C71B9]'>{item.title} </h2>

                <p className='mb-5'>{item.description}</p>
              </div>
            })
          }
        </div>
      </div>
    </>
}
