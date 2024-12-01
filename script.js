const msg1 = document.getElementById("msg1");
const msg2 = document.getElementById("msg2");
const msg3 = document.getElementById("msg3");
const nextBtn = document.querySelector("#nextbtn");
const inputs = document.querySelectorAll("input");
const btns = document.querySelector(".btns");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const title = document.getElementById("title");

if (title) {
  second.classList.add("currentPage");
}

inputs.forEach((input) => {
  first.classList.add("currentPage");
  let identify = input.getAttribute("id");
  function wrong() {
    if (input.value == 0) {
      input.style.border = "1px solid red";

      if (identify == "name") {
        msg1.style.display = "block";
      } else if (identify == "email") {
        msg2.style.display = "block";
      } else if (identify == "phone") {
        msg3.style.display = "block";
      }
    }
  }

  function defined() {
    if (input.value == input.value) {
      input.style.border = "1px solid hsl(231, 11%, 63%)";
      if (identify == "name") {
        msg1.style.display = "none";
      } else if (identify == "email") {
        msg2.style.display = "none";
      } else if (identify == "phone") {
        msg3.style.display = "none";
      }
    }
  }
  nextBtn.addEventListener("click", (e) => {
    let work = "notdone";
    e.preventDefault();
    if (input.value == 0) {
      console.log(input.value);
      wrong();
    } else {
      defined();
      console.log(identify);
      if ((identify == "name" && identify == "email") || identify == "phone") {
        work = "done";
      }
    }

    if (work == "done") {
      btns.innerHTML = `<a href="plan.html "class="next" id="nextbtn">Next Step</a>`;
    }
  });
});

const slidBox = document.querySelector(".slid-button");
const planBoxes = document.querySelectorAll(".planBoxes");
const planBox1 = document.getElementById("planBox1");
const planBox2 = document.getElementById("planBox2");
const planBox3 = document.getElementById("planBox3");
const planPage = document.getElementById("planPage");
const addonPage = document.getElementById("addonPage");
const backToPlan = document.getElementById("backToPlan");
const planType = document.getElementById("planType");
const planCost = document.getElementById("planCost");
const totalCost = document.getElementById("totalCost");
let time = "/mo";
let cost = "$" + 9;
let p = 0;

planBoxes.forEach((planBox) => {
  planBox.addEventListener("click", () => {
    let checked = planBox.getAttribute("id");
    planBox.style.border = "1px solid hsl(243, 100%, 62%)";
    planBox.style.background = "hsla(228, 100%, 84%, 0.116)";

    if (checked == "planBox1") {
      planBox.style.border = "1px solid hsl(243, 100%, 62%)";
      planBox.style.background = "hsla(228, 100%, 84%, 0.116)";
      planBox2.style.border = "1px solid hsl(231, 11%, 63%)";
      planBox2.style.background = "white";
      planBox3.style.border = "1px solid hsl(231, 11%, 63%)";
      planBox3.style.background = "white";
      planType.textContent = "Arcade";
      planCost.textContent = cost + time;
      p = +cost.slice(1);
      slidBox.style.display = "flex";
    } else if (checked == "planBox2") {
      planBox.style.border = "1px solid hsl(243, 100%, 62%)";
      planBox.style.background = "hsla(228, 100%, 84%, 0.116)";
      planBox3.style.border = "1px solid hsl(231, 11%, 63%)";
      planBox3.style.background = "white";
      planBox1.style.border = "1px solid hsl(231, 11%, 63%)";
      planBox1.style.background = "white";
      planType.textContent = "Advanced";
      cost = "$12";
      planCost.textContent = cost + time;
      p = +cost.slice(1);
      slidBox.style.display = "flex";
    } else if (checked == "planBox3") {
      planBox.style.border = "1px solid hsl(243, 100%, 62%)";
      planBox.style.background = "hsla(228, 100%, 84%, 0.116)";
      planBox2.style.border = "1px solid hsl(231, 11%, 63%)";
      planBox2.style.background = "white";
      planBox1.style.border = "1px solid hsl(231, 11%, 63%)";
      planBox1.style.background = "white";
      planType.textContent = "Pro";
      cost = "$15";
      planCost.textContent = cost + time;
      p = +cost.slice(1);
      slidBox.style.display = "flex";
    }

    if (
      checked == "planBox1" ||
      checked == "planBox2" ||
      checked == "planBox3"
    ) {
      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        planPage.style.display = "none";
        addonPage.style.display = "flex";
        second.classList.remove("currentPage");
        third.classList.add("currentPage");
      });
    }
  });
});

backToPlan.addEventListener("click", (e) => {
  e.preventDefault();
  planPage.style.display = "flex";
  addonPage.style.display = "none";
  second.classList.add("currentPage");
  third.classList.remove("currentPage");
});

const checkList = document.querySelectorAll(".check");
const checkBox1 = document.getElementById("checkBox-1");
const checkBox2 = document.getElementById("checkBox-2");
const checkBox3 = document.getElementById("checkBox-3");
const finisingPage = document.getElementById("finisingPage");
const finisPageBtn = document.getElementById("finisPageBtn");
const addon1 = document.querySelector(".add-on1");
const addon2 = document.querySelector(".add-on2");
const addon3 = document.querySelector(".add-on3");
const onPrice1 = document.querySelector(".onPrice1");
const onPrice2 = document.querySelector(".onPrice2");
const onPrice3 = document.querySelector(".onPrice3");
let adonCost1 = "+$1";
let adonCost2 = "+$2";
let a1 = 0;
let a2 = 0;
let a3 = 0;
let total = 0;
let yr = "of";

let chosed = "no";
checkList.forEach((checkBox) => {
  checkBox.addEventListener("click", () => {
    let chose = checkBox.getAttribute("id");

    if (chosed == "no") {
      if (chose == "check-1") {
        checkBox.style.border = "1px solid hsl(243, 100%, 62%)";
        checkBox.style.background = "hsla(228, 100%, 84%, 0.2)";
        checkBox1.style.background = "hsl(243, 100%, 62%)";
        chosed = "ok";
        addon1.style.display = "flex";
        a1 = +adonCost1.slice(2);
      } else if (chose == "check-2") {
        checkBox.style.border = "1px solid hsl(243, 100%, 62%)";
        checkBox.style.background = "hsla(228, 100%, 84%, 0.2)";
        checkBox2.style.background = "hsl(243, 100%, 62%)";
        chosed = "ok";
        addon2.style.display = "flex";
        a2 = +adonCost2.slice(2);
      } else if (chose == "check-3") {
        checkBox.style.border = "1px solid hsl(243, 100%, 62%)";
        checkBox.style.background = "hsla(228, 100%, 84%, 0.2)";
        checkBox3.style.background = "hsl(243, 100%, 62%)";
        chosed = "ok";
        addon3.style.display = "flex";
        a3 = +adonCost2.slice(2);
      }

      if (chose == "check-1" || chose == "check-2" || chose == "check-3") {
        finisPageBtn.addEventListener("click", (e) => {
          e.preventDefault();
          addonPage.style.display = "none";
          finisingPage.style.display = "flex";
          third.classList.remove("currentPage");
          fourth.classList.add("currentPage");
        });
      }
    } else if (chosed == "ok") {
      if (chose == "check-1") {
        checkBox.style.border = "1px solid hsl(231, 11%, 63%)";
        checkBox.style.background = "white";
        checkBox1.style.background = "white";
        chosed = "no";
        addon1.style.display = "none";
        a1 = 0;
      } else if (chose == "check-2") {
        checkBox.style.border = "1px solid hsl(231, 11%, 63%)";
        checkBox.style.background = "white";
        checkBox2.style.background = "white";
        chosed = "no";
        addon2.style.display = "none";
        a2 = 0;
      } else if (chose == "check-3") {
        checkBox.style.border = "1px solid hsl(231, 11%, 63%)";
        checkBox.style.background = "white";
        checkBox3.style.background = "white";
        chosed = "no";
        addon3.style.display = "none";
        a3 = 0;
      }
    }
    if (yr == "of") {
      total = p + a1 + a2 + a3;
      totalCost.textContent = `$${total}/mo`;
    } else if (yr == "on") {
      total = p + a1 + a2 + a3;
      totalCost.textContent = `$${total * 10}/yr`;
    }
  });
});

const backToAddon = document.getElementById("backToAddon");

backToAddon.addEventListener("click", () => {
  addonPage.style.display = "flex";
  finisingPage.style.display = "none";
  third.classList.add("currentPage");
  fourth.classList.remove("currentPage");
});

const slidBtn = document.querySelector(".slid-btn");
const on = document.querySelector(".circle");
const freeAd1 = document.getElementById("freeAd1");
const freeAd2 = document.getElementById("freeAd2");
const freeAd3 = document.getElementById("freeAd3");
const arcPrice = document.querySelector(".arc-price");
const advPrice = document.querySelector(".adv-price");
const proPrice = document.querySelector(".pro-price");
const servicePrice = document.getElementById("service-price");
const storePrice = document.getElementById("store-price");
const customPrice = document.getElementById("custom-price");
const planTime = document.getElementById("planTime");
const totalCostTime = document.getElementById("costTime");

let state = "off";
slidBtn.addEventListener("click", () => {
  if (state == "off") {
    on.classList.add("move");
    state = "on";
    freeAd1.style.display = "block";
    freeAd2.style.display = "block";
    freeAd3.style.display = "block";
    arcPrice.textContent = "$90/yr";
    advPrice.textContent = "$120/yr";
    proPrice.textContent = "$150/yr";
    servicePrice.textContent = "+$10/yr";
    storePrice.textContent = "+$20/yr";
    customPrice.textContent = "+$20/yr";
    planTime.textContent = "(Yearly)";
    totalCostTime.textContent = "(per year)";
    time = "/yr";
    onPrice1.textContent = adonCost1 + "0" + time;
    onPrice2.textContent = adonCost2 + "0" + time;
    onPrice3.textContent = adonCost2 + "0" + time;
    planCost.textContent = cost + "0" + time;
    yr = "on";
  } else if (state == "on") {
    on.classList.remove("move");
    state = "off";
    freeAd1.style.display = "none";
    freeAd2.style.display = "none";
    freeAd3.style.display = "none";
    arcPrice.textContent = "$9/mo";
    advPrice.textContent = "$12/mo";
    proPrice.textContent = "$15/mo";
    servicePrice.textContent = "+$1/mo";
    storePrice.textContent = "+$2/mo";
    customPrice.textContent = "+$2/mo";
    planTime.textContent = "(Monthly)";
  }
});
