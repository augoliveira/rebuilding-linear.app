import getSiblings from "./getSiblings";

const cardMouseEffect = (featureEl) => {
  var featuresitems = featureEl;
  if (featuresitems) {
    featuresitems.forEach((item) => {
      item.onmouseover = function (event) {
        item.classList.add("active");
        const siblings = getSiblings(item);
          const siblingEl = siblings.map((e) => e.classList.remove("active"));
      };
    });
  }
};

export default cardMouseEffect;
