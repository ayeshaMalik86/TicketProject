import React from 'react';
import "../../styles/pages/About/FestivalSuggestions.css";

const FestivalSuggestions = () => {
  const festivals = [
    {
      date: 'Sept 10 to 14, 2045',
      title: 'Wonder Land Music and Arts Festival',
      img: '/assets/images/like-01.jpg', 
    },
    {
      date: 'Oct 11 to 16, 2045',
      title: 'Big Water Splashing Festival',
      img: '/assets/images/like-02.jpg',
    },
    {
      date: 'Nov 10 to 18, 2045',
      title: 'Tiger Dance Hip Hop Festival',
      img: '/assets/images/like-03.jpg', 
    },
  ];

  return (
    <div className="festival-suggestions">
      <h2>You Might Also Like...</h2>
      <div className="festival-cards">
        {festivals.map((festival, index) => (
          <div className="festival-card" key={index}>
            <img src={festival.img} alt={festival.title} className="festival-image" />
            <div className="festival-info">
              <p className="festival-date">{festival.date}</p>
              <h3 className="festival-title">{festival.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FestivalSuggestions;
