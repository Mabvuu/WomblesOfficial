import React from 'react';

const Wine = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl text-center font-bold mb-4">Wine Details</h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border border-gray-300 text-left">Wine Details</th>
                <th className="px-4 py-2 border border-gray-300 text-left">Details</th>
                <th className="px-4 py-2 border border-gray-300 text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              {/* Section for Red Wines */}
              <tr>
                <td colSpan="3" className="bg-gray-100 text-xl font-semibold text-center py-2">Red Wines</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300"><span className='font-semibold'>Villera Down to Earth 2020 (Stellenbosch)</span>.</td>
                <td className="px-4 py-2 border border-gray-300">An explosion of spice and dark berry flavours with the tannin caressing the palate. The
extra dimension of integrated oak was all that was needed to complete the picture of
modern wine that illustrates the art of blending</td>
                <td className="px-4 py-2 border border-gray-300">$30</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300"><span className='font-semibold'>Anthonij Rupert: Optima 2020 (Franschhoek)</span></td>
                <td className="px-4 py-2 border border-gray-300">Broad, fleshy and succulent with all of that the nose promises being delivered on the
                palate. Sprice sprinkled with rich dark fruitcake flavour.</td>
                <td className="px-4 py-2 border border-gray-300">$50</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300"><span className='font-semibold'>Rupert & Rothchild Classique 2020 (Paarl/Wellington)</span></td>
                <td className="px-4 py-2 border border-gray-300">Ripe black cherry and cassis fruit with aromas of cedar wood and spice.
                Flavors of blackcurrant, liquorice and dark chocolate with a long finish.</td>
                <td className="px-4 py-2 border border-gray-300">$60</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300"><span className='font-semibold'>Hermanuspietersfontein Kleinboet 2019/2020 (Hermanus)</span></td>
                <td className="px-4 py-2 border border-gray-300">Blackcurrant, black olive, lavender and cashew abound in this medium bodied
                Bordeaux. Tannins well rounded with a classically dry finish.</td>
                <td className="px-4 py-2 border border-gray-300">$80</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300"><span className='font-semibold'>The Chocolate Block 2022 (Franshhoek/Swartland)</span></td>
                <td className="px-4 py-2 border border-gray-300">Burst with raspberries, allspice underscored by dark fruit and floral incense.
                Dark chocolate, smoky minerality and oak spice on the palate.</td>
                <td className="px-4 py-2 border border-gray-300">$90</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300"><span className='font-semibold'>Meerlust Rubicon 2021 (Stellenbosch)</span></td>
                <td className="px-4 py-2 border border-gray-300">Very deep, youthful colour and intense almost purple hue. Very classical Rubicon nose
with violets, ripe plum, cedar wood and intense spiciness. Typical liquorice notes are
evident on the nose. The palate is full bodied, structured but packed with fresh dark
fruit and rounded, linear tannins.</td>
                <td className="px-4 py-2 border border-gray-300">$100</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300"><span className='font-semibold'>Boschendal Black Angus 2020 (Stellenbosch)</span></td>
                <td className="px-4 py-2 border border-gray-300">Black pepper and cherry flavours on the nose, this wine is smooth and full
                bodied with a rich and complex palate.</td>
                <td className="px-4 py-2 border border-gray-300">$110</td>
              </tr>
              {/* Section forCabernet Sauvignon */}
              <tr>
                <td colSpan="3" className="bg-gray-100 text-lg font-semibold text-center py-2">Cabernet Sauvignon</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border font-semibold border-gray-300">Ernie Els – The Big Easy 2021 (Stellenbosch)</td>
                <td className="px-4 py-2 border border-gray-300">Medium bodied, loaded with raspberries and cherries, sprinkled with dried goji
                berries and soft creamy oak on the finish.</td>
                <td className="px-4 py-2 border border-gray-300">$30</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300"><span className='font-semibold'>Thelema 2020 (Stellenbosch) 2020</span></td>
                <td className="px-4 py-2 border border-gray-300">Complex and stylish with aromas of blackcurrant leaf and coffee bean which progresses
Into the palate with structured and racy hints of leather, dark chocolate and sweet
Blackberry.</td>
                <td className="px-4 py-2 border border-gray-300">$70</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300"><span className='font-semibold'>Meerlust 2019 (Stellenbosch)</span></td>
                <td className="px-4 py-2 border border-gray-300">Usual classic notes of dark berry fruit and cigar box with plenty of fruit depth
                and a hint of herbal quality.</td>
                <td className="px-4 py-2 border border-gray-300">$90</td>
              </tr>
             

                {/* Section for Shiraz*/}
                <tr>
                <td colSpan="3" className="bg-gray-100 text-lg font-semibold text-center py-2">Shiraz</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300"><span className='font-semibold'>Tokara 2020 (Stellenbosch)</span></td>
                <td className="px-4 py-2 border border-gray-300">Blackberry and briar fruit aromas are intertwined with notes of smoky charcuterie and
hints of cedar spice. The palate is packed full of ripe red berry flavours, sweet spices
and deliciously savory notes.</td>
                <td className="px-4 py-2 border border-gray-300">$30</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300"><span className='font-semibold'>Diemersdal 2022 (Durbanville)</span></td>
                <td className="px-4 py-2 border border-gray-300">This shiraz offers a delicate balance of berries, green and red peppercorns
                combined with a smokiness and well balanced tannins.</td>
                <td className="px-4 py-2 border border-gray-300">$40</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300"><span className='font-semibold'>Rust en Vrede Syrah 2020/2021 (Stellenbosch)</span></td>
                <td className="px-4 py-2 border border-gray-300">Intense black fruit with plush, velvet tannins. Ripe New World styling placing
                power ahead of subtlety.</td>
                <td className="px-4 py-2 border border-gray-300">$70</td>
              </tr>

                {/* Section for Pintogae */}
                <tr>
                <td colSpan="3" className="bg-gray-100 text-lg font-semibold text-center py-2">Pinotage</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border  font-semibold border-gray-300">Beyerskloof 2022 (Stellenbosch)</td>
                <td className="px-4 py-2 border border-gray-300">This wine boasts as being South Africa’s most popular Pinotage and it’s no wonder.
                Always ticks the boxes. Smooth, fruity and plumy with a touch of oak (20%).</td>
                <td className="px-4 py-2 border border-gray-300">$30</td>
              </tr>
               {/* Section for Merlot */}
               <tr>
                <td colSpan="3" className="bg-gray-100 text-lg font-semibold text-center py-2">Merlot</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border font-semibold border-gray-300">Hartenberg 2018/2020 (Stellenbosch)</td>
                <td className="px-4 py-2 border border-gray-300">Red berries, cranberries, soft dried plums and a fynbos herbaceousness on the nose.
                Generous palate with red fruits, cashmere clad tannins all interwoven with perfect harmony.</td>
                <td className="px-4 py-2 border border-gray-300">$45</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300"><span className='font-semibold'>Ken Forrester Reserve 2019 (Stellenbosch)</span></td>
                <td className="px-4 py-2 border border-gray-300">Soft, ripe merlot with added Cabernet, Franc, cab sauv and petit Verdot for body and
                structure.</td>
                <td className="px-4 py-2 border border-gray-300">$50</td>
              </tr>

                {/* Section for Pinot Noir */}
                <tr>
                <td colSpan="3" className="bg-gray-100 text-lg font-semibold text-center py-2">Pinot Noir</td>
              </tr>
            
              <tr>
                <td className="px-4 py-2 border border-gray-300"><span className='font-semibold'>Iona Mr P 2022 (Elgin)</span></td>
                <td className="px-4 py-2 border border-gray-300">Mr P is fresh with vibrant acidity and a long textured, savory finish. Beautiful ripe
strawberries, raspberries, cranberries and sweet spice on the nose, with subtle hints
of forest floor and wild mushrooms.</td>
                <td className="px-4 py-2 border border-gray-300">$40</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300"><span className='font-semibold'>Haute Cabriére Reserve 2019 (Franschhoek)</span></td>
                <td className="px-4 py-2 border border-gray-300">Enjoy red berries and cedar wood on the nose, with hints of truffle, sour cherries
                and spice on the palate.</td>
                <td className="px-4 py-2 border border-gray-300">$60</td>
              </tr>

                {/* Section for Rose */}
                <tr>
                <td colSpan="3" className="bg-gray-100 text-lg font-semibold text-center py-2">ROSÉ</td>
              </tr>
           
              <tr>
                <td className="px-4 py-2 border border-gray-300"><span className='font-semibold'>1659 Natural Sweet Rosé NV (Western Cape)</span></td>
                <td className="px-4 py-2 border border-gray-300">Playful aromas of sweet strawberries and fresh raspberries. An easy drinking wine, fruity
                and soft, with a smooth and sweet finish.</td>
                <td className="px-4 py-2 border border-gray-300">$30</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300"><span className='font-semibold'>Fairview Goats do Roam 2022/2023 (Paarl)</span></td>
                <td className="px-4 py-2 border border-gray-300">Sprightly and characterful Mediterranean style dry rosé, has a rich and creamy
texture and weight, with an appealing red berry fruit from Grenache Shiraz,
Mourvèdre.</td>
                <td className="px-4 py-2 border border-gray-300">$40</td>
              </tr>


             
            </tbody>
          </table>

          <h1 className="text-3xl font-bold mb-4 py-4 text-center">White Wines</h1>


          <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border border-gray-300 text-left">Wine Details</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Description</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            {/* Sauvignon Blanc and White Blends Section */}
            <tr>
              <td colSpan="3" className="bg-gray-100 text-lg font-semibold text-center py-2">
                Sauvignon Blanc and White Blends
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold border-gray-300">Buitenverwachting Buiten Blanc 2023 (Constantia)</td>
              <td className="px-4 py-2 border border-gray-300">
                This full-bodied cuvee offers ripe gooseberry and grassy character with slight hints of tropical fruit.
              </td>
              <td className="px-4 py-2 border border-gray-300">$30</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold border-gray-300">Haute Cabriére Pinot Chardonnay 2022 (Franschhoek)</td>
              <td className="px-4 py-2 border border-gray-300">
                Faintly pink hued, light, fresh, and elegant with a savory, faintly tannic, sweet-sour edge.
              </td>
              <td className="px-4 py-2 border border-gray-300">$35</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold border-gray-300">Klein Zalze Vineyard Sauvignon Blanc 2023 (Lutzville)</td>
              <td className="px-4 py-2 border border-gray-300">
                Wet stone, green pepper, and zingy gooseberry on a well-balanced lively vintage.
              </td>
              <td className="px-4 py-2 border border-gray-300">$35</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold border-gray-300">Klein Zalze Vineyard Sauvignon Blanc 2023 (Lutzville)</td>
              <td className="px-4 py-2 border border-gray-300">
                Wet stone, green pepper, and zingy gooseberry on a well-balanced lively vintage.
              </td>
              <td className="px-4 py-2 border border-gray-300">$35</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-semibold">Ken Forrestor Old Vine Chenin Blanc 2023 (Stellenbosch)</td>
              <td className="px-4 py-2 border border-gray-300">
                Wet This wine shows lovely complexity with a mix of tangy grassy notes, fig leaf, peach
                and nectarine nuances with a cool climate elegance.
              </td>
              <td className="px-4 py-2 border border-gray-300">$40</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold border-gray-300">Klein Constantia Sauvignon Blanc 2022 (Constantia)</td>
              <td className="px-4 py-2 border border-gray-300">
              Aromas of citrus and stone fruit fill the nose. The palate is richly textured, fresh and
complex with a bold minerality – a pure expression of Sauvignon Blanc with a long
crisp flinty conclusion.
              </td>
              <td className="px-4 py-2 border border-gray-300">$45</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold border-gray-300">Iona Sauvignon Blanc 2023 (Elgin)</td>
              <td className="px-4 py-2 border border-gray-300">
              Beautiful purity of limes and ripe gooseberry, with tropical, floral and fine herbal notes,
ruby grapefruit and a white pear drop on the finish. This is a cool climate Sauvignon
Blanc – vibrant, mineral, elegant, balanced and delicate, with a long, layered and
complex finish.
              </td>
              <td className="px-4 py-2 border border-gray-300">$50</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold border-gray-300">Springfield Life from Stone 2023 (Robertson)</td>
              <td className="px-4 py-2 border border-gray-300">
              Life from stone derives its name from the incredibly rocky soil in which it is grown.
Every year the vineyard battles against nature in order to produce highly concentrated
and poweful wines with a flinty, mineral character true to the quartz rock in which
it is grown.
              </td>
              <td className="px-4 py-2 border border-gray-300">$55</td>
            </tr>
            {/* Off Dry/Sweet Section */}
            <tr>
              <td colSpan="3" className="bg-gray-100 text-lg font-semibold text-center py-2">
                Off Dry/Sweet
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold border-gray-300">Angels Tears Moscato Chenin Natural Sweet 2022 (Western Cape)</td>
              <td className="px-4 py-2 border border-gray-300">
              This darling of the Angels Tears range is deliciously fruity with succulent stone fruit,
              litchi and citrus, enlivened by hints of floral and spicy Muscat notes.
              </td>
              <td className="px-4 py-2 border border-gray-300">$30</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border  font-semibold border-gray-300">Cederberg: Bukketraube 2023 (Western Cape)</td>
              <td className="px-4 py-2 border border-gray-300">
              The delicate nose of this wine does not prepare you for the ‘reveal’ on the palate – a rich,
opulent onslaught of exotic white flowers and honeysuckle, pineapple and stone fruit,
including white peaches and pairs. The wine shows a delightful weight and sweet spot
on the palate to offset the mélange of flavours.
              </td>
              <td className="px-4 py-2 border border-gray-300">$30</td>
            </tr>
            {/* Chardonnay Section */}
            <tr>
              <td colSpan="3" className="bg-gray-100 text-lg font-semibold text-center py-2">
                Chardonnay
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold border-gray-300">Fairview 2021/2022 (Darling/Paarl)</td>
              <td className="px-4 py-2 border border-gray-300">
              A classic, restrained Chardonnay with subtle oaking. The palate abounds with soft
              spice, fresh fruit and minerality with great length and complexity.
              </td>
              <td className="px-4 py-2 border border-gray-300">$30</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold border-gray-300">Fat Bastard Chardonnay 2023 (Various areas)</td>
              <td className="px-4 py-2 border border-gray-300">
                Brilliantly named after the full, rich, and ripe flavors found from partial barrel fermentation.
              </td>
              <td className="px-4 py-2 border border-gray-300">$40</td>
            </tr>
          </tbody>
        </table>
        </div>

        
      </div>

      <div className="container mx-auto px-4 py-6">

      <h1 className="text-2xl font-bold mb-4 text-center">MÉTHODE CAP CLASSIQUE</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border border-gray-300 text-left">Wine Details</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Description</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td className="px-4 py-2 border font-semibold border-gray-300">Graham Beck Brut NV (Robertson)</td>
              <td className="px-4 py-2 border border-gray-300">
              Light and yeasty aromas, good fruit on the nose and rich creamy complexity on the palate..
              </td>
              <td className="px-4 py-2 border border-gray-300">$45</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold border-gray-300">Graham Beck Bliss Nectar Rosé (Robertson)</td>
              <td className="px-4 py-2 border border-gray-300">
              Pieter Ferreira has been making top sparkling wines – this is his new offering that is not
              as dry as most of the others.
              </td>
              <td className="px-4 py-2 border border-gray-300">$45</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold border-gray-300">Pongraçz NV</td>
              <td className="px-4 py-2 border border-gray-300">
              A fine aroma and yeastiness on the nose, followed by a rich complexity, finesse and
              lingering aftertaste.
              </td>
              <td className="px-4 py-2 border border-gray-300">$50</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold border-gray-300">Pongraçz NV</td>
              <td className="px-4 py-2 border border-gray-300">
              A fine aroma and yeastiness on the nose, followed by a rich complexity, finesse and
              lingering aftertaste.
              </td>
              <td className="px-4 py-2 border border-gray-300">$50</td>
            </tr><tr>
              <td className="px-4 py-2 border font-semibold border-gray-300">Proseco – Casa Farive Cuvee Brut (Italy)</td>
              <td className="px-4 py-2 border border-gray-300">
              Dry and fresh with a pleasantly harmonic and persistent finish.
              </td>
              <td className="px-4 py-2 border border-gray-300">$50</td>
            </tr>
           
          </tbody>
        </table>
      </div>
      </div>

      <div className="container mx-auto px-4 py-6">

      <h1 className="text-2xl font-bold mb-4 text-center">IMPORTED CHAMPAGNE</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border border-gray-300 text-left">Wine Details</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Description</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
           
            <tr>
              <td className="px-4 py-2 border font-semibold border-gray-300">Moët et Chandon Brut Imperial NV</td>
              <td className="px-4 py-2 border border-gray-300">
              Enticingly aromatic, exuberantly frothy and elegantly chic.
              </td>
              <td className="px-4 py-2 border border-gray-300">$240</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold border-gray-300">Moët et Chandon NECTAR Imperial NV</td>
              <td className="px-4 py-2 border border-gray-300">
              A delicious expression of Moët & Chandon style. A style distinguished by its bright
              fruitiness, its seductive palate and its elegant maturity.
              </td>
              <td className="px-4 py-2 border border-gray-300">$260</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold border-gray-300">Veuve Clicquot Yellow Label NV</td>
              <td className="px-4 py-2 border border-gray-300">
              Aromas of brioche and citrus accompany the palates refined, refreshing fruit and
              vanilla flavours. Delicious long finish.
              </td>
              <td className="px-4 py-2 border border-gray-300">$280</td>
            </tr>
           
          </tbody>
        </table>
      </div>
      </div>

      <p className="text-black font-bold text-2xl underline text-center mt-7 mb-8">
        PLEASE NOTE THAT VINTAGES ARE SUBJECT TO CHANGE.
      </p>
    </div>
  );
};

export default Wine;
