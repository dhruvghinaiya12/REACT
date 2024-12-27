import React from 'react';
import './UserProfileCard.css';

const UserProfileCard = ({name, age, bio, location, profilePicture,isStyled}) => {
  let CheckFollow = false; 
  let CheckBio = false; 

  const Follow = (e) => {
    CheckFollow = !CheckFollow;
    e.target.textContent = CheckFollow ? 'Unfollow' : 'Follow';
  };

  const Bio = (e) => {
    CheckBio = !CheckBio;
    const bioElement = e.target.previousSibling;
    if (CheckBio) {
      bioElement.textContent = bio;
      e.target.textContent = ' Read less';
    } else {
      bioElement.textContent = `${bio.substring(0, 66)}...`;
      e.target.textContent = ' Read more';
    }
  };

  return (
    <div className={`user-profile-card ${isStyled ? 'styled' : ''}`}>
      <img src={profilePicture} alt={`${name}'s profile`} className="profile-picture" />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
      <p>
        Bio: 
        <span>{bio.substring(0, 50)}...</span>
        {bio.length > 50 && (
          <span onClick={Bio} className="read-more">
            Read more
          </span>
        )}
      </p>
      <button className="follow-button" onClick={Follow}>
        Follow
      </button>
    </div>
  );
};

export default UserProfileCard;
