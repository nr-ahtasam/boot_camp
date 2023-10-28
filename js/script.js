let popup = document.getElementById("mainPopUp");
let profileImage = document.querySelector(".rightSideProfileImage");
profileImage.addEventListener("click", () => {
  popup.classList.add("openPopUp");
});
let closePopUp = document.querySelector(".closeIncon");
closePopUp.addEventListener("click", () => {
  popup.classList.remove("openPopUp");
});
