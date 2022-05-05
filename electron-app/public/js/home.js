// const recommendation = document.querySelector(".recommendation");
// const addRecommendedMenu = document.querySelector(".addRecommendedMenu");

// addRecommendedMenu.addEventListener("click", () => {
//   // fetch를 통해서 데이터 추가로 받아올 예정

//   // 하드코딩
//   const newMenus = document.createElement("div");
//   newMenus.classList.add("row");
//   newMenus.classList.add("text-center");

//   const newMenu = {
//     img: "./public/image/newMenuPack.png",
//     title: "신메뉴패키지",
//     menuList: "타워스태커+징거버거+블랙라벨치킨2+닭껍질튀김+콜라M2",
//     price: "18900",
//   };

//   const div = document.createElement("div");
//   div.classList.add("card", "col-md-4", "mx-auto", "mt-3");

//   let img = new Image();
//   img.src = newMenu.img;
//   img.classList.add("card-img-top");
//   div.appendChild(img);

//   const card = document.createElement("div");
//   const title = document.createElement("h5");
//   title.classList.add("card-title");
//   title.innerText = newMenu.title;

//   const menuList = document.createElement("p");
//   menuList.classList.add("card-text");
//   menuList.innerText = newMenu.menuList;

//   const price = document.createElement("p");
//   menuList.classList.add("card-text", "text-bold");
//   price.innerText =
//     newMenu.price.substring(0, newMenu.price.length - 3) +
//     "," +
//     newMenu.price.substring(newMenu.price.length - 3);

//   const select = document.createElement("a");
//   select.classList.add("btn", "btn-primary");
//   select.href = "#";
//   select.innerText = "선택";

//   card.appendChild(title);
//   card.appendChild(menuList);
//   card.appendChild(price);
//   card.appendChild(select);

//   div.appendChild(img);
//   div.appendChild(card);

//   newMenus.appendChild(div);

//   recommendation.appendChild(newMenus);
// });
