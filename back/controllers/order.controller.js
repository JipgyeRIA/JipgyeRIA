const Menu = require("../models/menu");

/** 주문 홈 */
module.exports.renderingOrderHome = async (req, res, next) => {
  // 추천 메뉴 로딩
  const recMenus = await Menu.find({ category: { $in: ["recommend"] } }).limit(
    4
  );

  // 세트 메뉴 판매순 로딩

  // 단품 메뉴 판매순 로딩

  // 사이드 판매순 로딩

  // 음료 판매순 로딩
  res.render("order/home", { recMenus });
};

/** 추천메뉴 더보기 */
module.exports.renderingAllRecommendedMenu = async (req, res, next) => {
  const recMenus = await Menu.find({ category: { $in: ["recommend"] } });
  console.log(req.param.url);
  res.render("order/recommend", { recMenus });
};

/** 특정 메뉴 주문페이지 */
module.exports.renderingMenu = async (req, res, next) => {
  const { id } = req.param;
  const menu = await Menu.findById(id);
  res.render("order/menu", { menu });
};
