import React from "react";

const WishlistIcon = ({ imgSrc, altText = "Wishlist" }) => {
  return (
    <div data-wishlist="On" className="w-8 h-8 relative overflow-hidden cursor-pointer">
      {imgSrc && (
        <img
          src={imgSrc}
          alt={altText}
        />
      )}
    </div>
  );
};

export default WishlistIcon;
