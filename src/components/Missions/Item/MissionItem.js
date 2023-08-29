import React from 'react';

function MissionItem() {
  return (
    <div className="missions-item">
      <header className="missions-data">
        <h3 className="missions-text title">Thaicom</h3>
      </header>
      <div className="missions-data">
        <p className="missions-text parragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          perspiciatis velit reprehenderit laborum obcaecati dolor ipsam? Vero
          quam eaque nostrum consequatur velit ratione iusto dignissimos
          nesciunt non perferendis animi, harum facere earum adipisci atque ab
          esse quidem et maxime sed. Maiores beatae aliquid consectetur id sed
          quaerat doloribus praesentium nihil!
        </p>
      </div>
      <div className="missions-data center">
        <p className="missions-text tag">Not a Member</p>
      </div>
      <div className="missions-data center">
        <button type="button" className="missions-text button">
          Join Mission
        </button>
      </div>
    </div>
  );
}

export default MissionItem;
