// const selectImage = document.querySelector(".select-image");
// const inputFile = document.querySelector("#imageQNA");
// const imgArea = document.querySelector(".img-area-qna");

// selectImage.addEventListener("click", function () {
//   inputFile.click();
// });

// inputFile.addEventListener("change", function () {
//   const image = this.files[0];
//   if (image.size < 2000000) {
//     const reader = new FileReader();
//     reader.onload = () => {
//       const allImg = imgArea.querySelectorAll("img");
//       allImg.forEach((item) => item.remove());
//       const imgUrl = reader.result;
//       const img = document.createElement("img");
//       img.src = imgUrl;
//       imgArea.appendChild(img);
//       imgArea.classList.add("active");
//       imgArea.dataset.img = image.name;
//     };
//     reader.readAsDataURL(image);
//   } else {
//     alert("Image size more than 2MB");
//   }
// });

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#imgQuestion").attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}
