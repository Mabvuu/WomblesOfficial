import React from 'react';
import './Mainpage.css';

const ThirdSection = () => {
  return (
    <div className="menu-teaser">
      <div className="part" id="first">
      <h3>Refreshing healthy Options</h3>
     <h2>Salad</h2>
     <h4>BLUE	CHEESE	SALAD</h4>
      <p>ICEBERG	LETTUCE,	tomato,	cucumber	and	onion	topped	with	a	light	blue	cheese	dressing
        a	grated	blue	cheese.</p>
      </div>
      <div className="part">
      <h3>Top Rated Dishes</h3>
        <h2>Main</h2>
        <h4>Oven Roasted Duck  </h4>
        <p>Duck oven roasted with an orand <b>OR</b> mandarin sauce or
           with a black cherry maderia and red wine sauce.</p>
      </div>
      <div className="part">
      <h3>Got a sweet tooth?</h3>
        <h2>Dessert</h2>
        <h4>WOMBLES	STYLE	CRÈME BRÛLÉE </h4>
      <p>Baked	cream	and	eggs	topped	with	caramelised	sugar	SERVED	IN	A	GLASS	and	topped	with	fresh
     berries.</p>
      </div>
      <a href="menu.html" class="menu-button"> Browse Menu</a>
    </div>
  );
};

export default ThirdSection;
