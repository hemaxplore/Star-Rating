document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".fa-star");
  const ratingValue = document.querySelector(".rating-value");
  let currentRating = 0;
  
  //function to update star display
  function updateStars(rating) {
    stars.forEach((star,index) => {
        if(index < rating) {  //0,1,2,3,4
            star.classlist.add("active");
        } else {
            star.classList.remove("active");
        }   
    });
  };

  const handleStarHover = (event) => {
    const rating = event.target.dataset.rating; //4
    stars.forEach((star, index) => {
        if(index < rating) {   //0,1,2,3
            star.classList.add("hover");
        } else {
            star.classList.remove("hover");
        }
    });
  };

  // Function to remove hover effect
  const handleStarLeave = () => {
    stars.forEach((star) => star.classList.remove("hover"));
    updateStars(currentRating);
  };

  //function to handle star click
  const handleStarClick = (event) => {
    currentRating = parseInt(event.target.dataset.rating);
    ratingValue.textContent = `${currentRating}/5`;
    updateStars(currentRating);
  };

  //Add event listeners to all stars
  stars.forEach((star) => {
    star.addEventListener("mouseover", handleStarHover);
    star.addEventListener("mouseleave", handleStarLeave);
    star.addEventListener("click", handleStarClick);
  });
});
