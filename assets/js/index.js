var home = document.getElementById("home");
var about = document.getElementById("about_section");
var portfolio = document.getElementById("portfolio_section");
var experience = document.getElementById("experience_section");
var contact = document.getElementById("contact_section");
var testimonials = document.getElementById("testimonials_section");
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var homeSection = document.getElementById("hero-section");
var portfoliosection = document.getElementById("portfolio");
var experience_section = document.getElementById("experience");
var contact_section = document.getElementById("contact");
var testimonials_section = document.getElementById("testimonials");
var aboutSection = document.getElementById("about");
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var toggleBtn = document.getElementById("theme-toggle-button");
var sunIcon = document.getElementById("sun-icon");
var moonIcon = document.getElementById("moon-icon");
var html = document.getElementById("html");
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var setting = document.getElementById("settings-toggle");
var settingsSidebar = document.getElementById("settings-sidebar");
var closeSettings = document.getElementById("close-settings");

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var alex = document.getElementById("alexandria");
var tajawal = document.getElementById("tajawal");
var cairo = document.getElementById("cairo");
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const purble = document.getElementById("purple-blue");
const light_orange = document.getElementById("pink-orange");
const light_green = document.getElementById("green-emerald");
const blue = document.getElementById("blue-cyan");
const water_melon = document.getElementById("red-rose");
const light_yellow = document.getElementById("amber-orange");
const reset_settings = document.getElementById("reset-settings");
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const scrollToTop = document.querySelector("#scroll-to-top")
var scrollTimer;

toggleBtn.addEventListener("click", function () {
  html.classList.toggle("dark");
});
function removeAllActive() {
  home.classList.remove("active");
  about.classList.remove("active");
  portfolio.classList.remove("active");
  experience.classList.remove("active");
  contact.classList.remove("active");
  testimonials.classList.remove("active");
}

window.addEventListener("scroll", function () {
  clearTimeout(scrollTimer);

  scrollTimer = setTimeout(function () {
    var scrollPosition = window.scrollY + 100;
    removeAllActive();

    if (scrollPosition >= contact_section.offsetTop) {
      contact.classList.add("active");
      scrollToTop.classList.remove("opacity-0");
      scrollToTop.classList.remove("invisible");
    } else if (
      scrollPosition >= testimonials_section.offsetTop &&
      scrollPosition < contact_section.offsetTop
    ) {
      testimonials.classList.add("active");
      scrollToTop.classList.remove("opacity-0");
      scrollToTop.classList.remove("invisible");
    } else if (
      scrollPosition >= experience_section.offsetTop &&
      scrollPosition < testimonials_section.offsetTop
    ) {
      experience.classList.add("active");
      scrollToTop.classList.remove("opacity-0");
      scrollToTop.classList.remove("invisible");
    } else if (
      scrollPosition >= portfoliosection.offsetTop &&
      scrollPosition < experience_section.offsetTop
    ) {
      portfolio.classList.add("active");
      scrollToTop.classList.remove("opacity-0");
      scrollToTop.classList.remove("invisible");
    } else if (
      scrollPosition >= aboutSection.offsetTop &&
      scrollPosition < portfoliosection.offsetTop
    ) {
      about.classList.add("active");
      scrollToTop.classList.remove("opacity-0");
      scrollToTop.classList.remove("invisible");

    } else {
      home.classList.add("active");
      scrollToTop.classList.add("opacity-0");
      scrollToTop.classList.add("invisible");
    }
  }, 60);
});
 scrollToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

home.addEventListener("click", function () {
  about.classList.remove("active");
  portfolio.classList.remove("active");
  experience.classList.remove("active");
  contact.classList.remove("active");
  testimonials.classList.remove("active");
  home.classList.add("active");
});
about.addEventListener("click", function () {
  home.classList.remove("active");
  portfolio.classList.remove("active");
  experience.classList.remove("active");
  contact.classList.remove("active");
  testimonials.classList.remove("active");
  about.classList.add("active");
});
portfolio.addEventListener("click", function () {
  home.classList.remove("active");
  about.classList.remove("active");
  portfolio.classList.add("active");
  experience.classList.remove("active");
  contact.classList.remove("active");
  testimonials.classList.remove("active");
});

experience.addEventListener("click", function () {
  home.classList.remove("active");
  about.classList.remove("active");
  portfolio.classList.remove("active");
  contact.classList.remove("active");
  testimonials.classList.remove("active");
  experience.classList.add("active");
});
contact.addEventListener("click", function () {
  home.classList.remove("active");
  about.classList.remove("active");
  portfolio.classList.remove("active");
  experience.classList.remove("active");
  testimonials.classList.remove("active");
  contact.classList.add("active");
});
testimonials.addEventListener("click", function () {
  home.classList.remove("active");
  about.classList.remove("active");
  portfolio.classList.remove("active");
  experience.classList.remove("active");
  contact.classList.remove("active");
  testimonials.classList.add("active");
});
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
setting.addEventListener("click", function () {
  settingsSidebar.classList.remove("translate-x-full");
  settingsSidebar.classList.add("translate-x-0");
  setting.style.transform = "translate(-310px, -50%)";
});
closeSettings.addEventListener("click", function () {
  settingsSidebar.classList.remove("translate-x-0");
  settingsSidebar.classList.add("translate-x-full");
  setting.style.transform = "translate(0, -50%)";
});

document.addEventListener("click", function (e) {
  if (!settingsSidebar.contains(e.target) && !setting.contains(e.target)) {
    settingsSidebar.classList.remove("translate-x-0");
    settingsSidebar.classList.add("translate-x-full");
    setting.style.transform = "translate(0, -50%)";
  }
});
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

alex.addEventListener("click", function () {
  alex.classList.remove("border-slate-200", "dark:border-slate-700");
  alex.classList.add("border-primary");
  alex.classList.add("active");
  alex.classList.add("bg-slate-50", "dark:bg-slate-800");

  tajawal.classList.remove("border-primary");
  tajawal.classList.remove("active");
  tajawal.classList.remove("bg-slate-50", "dark:bg-slate-800");
  tajawal.classList.add("border-slate-200", "dark:border-slate-700");

  cairo.classList.remove("border-primary");
  cairo.classList.remove("active");
  cairo.classList.remove("bg-slate-50", "dark:bg-slate-800");
  cairo.classList.add("border-slate-200", "dark:border-slate-700");

  document.body.classList.remove(
    "font-alexandria",
    "font-tajawal",
    "font-cairo"
  );
  document.body.classList.add("font-alexandria");

  localStorage.setItem("activeButton", "alex");
});

tajawal.addEventListener("click", function () {
  tajawal.classList.remove("border-slate-200", "dark:border-slate-700");
  tajawal.classList.add("border-primary");
  tajawal.classList.add("active");
  tajawal.classList.add("bg-slate-50", "dark:bg-slate-800");

  alex.classList.remove("border-primary");
  alex.classList.remove("active");
  alex.classList.remove("bg-slate-50", "dark:bg-slate-800");
  alex.classList.add("border-slate-200", "dark:border-slate-700");

  cairo.classList.remove("border-primary");
  cairo.classList.remove("active");
  cairo.classList.remove("bg-slate-50", "dark:bg-slate-800");
  cairo.classList.add("border-slate-200", "dark:border-slate-700");

  document.body.classList.remove(
    "font-alexandria",
    "font-tajawal",
    "font-cairo"
  );
  document.body.classList.add("font-tajawal");
  localStorage.setItem("activeButton", "tajawal");
});

cairo.addEventListener("click", function () {
  cairo.classList.remove("border-slate-200", "dark:border-slate-700");
  cairo.classList.add("border-primary");
  cairo.classList.add("active");
  cairo.classList.add("bg-slate-50", "dark:bg-slate-800");

  alex.classList.remove("border-primary");
  alex.classList.remove("active");
  alex.classList.remove("bg-slate-50", "dark:bg-slate-800");
  alex.classList.add("border-slate-200", "dark:border-slate-700");

  tajawal.classList.remove("border-primary");
  tajawal.classList.remove("active");
  tajawal.classList.remove("bg-slate-50", "dark:bg-slate-800");
  tajawal.classList.add("border-slate-200", "dark:border-slate-700");

  document.body.classList.remove(
    "font-alexandria",
    "font-tajawal",
    "font-cairo"
  );
  document.body.classList.add("font-cairo");

  localStorage.setItem("activeButton", "cairo");
});

const activeButton = localStorage.getItem("activeButton");
if (activeButton) {
  if (activeButton === "alex") {
    alex.classList.remove("border-slate-200", "dark:border-slate-700");
    alex.classList.add(
      "border-primary",
      "active",
      "bg-slate-50",
      "dark:bg-slate-800"
    );

    document.body.classList.remove(
      "font-alexandria",
      "font-tajawal",
      "font-cairo"
    );
    document.body.classList.add("font-alexandria");
  } else if (activeButton === "tajawal") {
    tajawal.classList.remove("border-slate-200", "dark:border-slate-700");
    tajawal.classList.add(
      "border-primary",
      "active",
      "bg-slate-50",
      "dark:bg-slate-800"
    );

    document.body.classList.remove(
      "font-alexandria",
      "font-tajawal",
      "font-cairo"
    );
    document.body.classList.add("font-tajawal");
  } else if (activeButton === "cairo") {
    cairo.classList.remove("border-slate-200", "dark:border-slate-700");
    cairo.classList.add(
      "border-primary",
      "active",
      "bg-slate-50",
      "dark:bg-slate-800"
    );

    document.body.classList.remove(
      "font-alexandria",
      "font-tajawal",
      "font-cairo"
    );
    document.body.classList.add("font-cairo");
  }
}

if (activeButton == null) {
  alex.classList.remove("border-slate-200", "dark:border-slate-700");
  alex.classList.add(
    "border-primary",
    "active",
    "bg-slate-50",
    "dark:bg-slate-800"
  );

  document.body.classList.remove(
    "font-alexandria",
    "font-tajawal",
    "font-cairo"
  );
  document.body.classList.add("font-alexandria");
}
function delete_colors(a,b,c,d,e) {
  a.classList.remove("ring-2" ,"ring-primary", "ring-offset-2" ,"ring-offset-white", "dark:ring-offset-slate-900");
  b.classList.remove("ring-2" ,"ring-primary", "ring-offset-2" ,"ring-offset-white", "dark:ring-offset-slate-900");
  c.classList.remove("ring-2" ,"ring-primary", "ring-offset-2" ,"ring-offset-white", "dark:ring-offset-slate-900");
  d.classList.remove("ring-2" ,"ring-primary", "ring-offset-2" ,"ring-offset-white", "dark:ring-offset-slate-900");
  e.classList.remove("ring-2" ,"ring-primary", "ring-offset-2" ,"ring-offset-white", "dark:ring-offset-slate-900");
}
function set_primary_color(color) {
 const primary=color.dataset.primary;
 const secondary=color.dataset.secondary;
  document.documentElement.style.setProperty("--color-primary", primary);
  document.documentElement.style.setProperty("--color-secondary", secondary);
  localStorage.setItem("primaryColor", primary);
  localStorage.setItem("secondaryColor", secondary);
}

light_orange.addEventListener("click", function () {
  delete_colors(light_yellow,water_melon,blue,purble,light_green);
  light_orange.classList.add("ring-2" ,"ring-primary", "ring-offset-2" ,"ring-offset-white", "dark:ring-offset-slate-900"); 
  set_primary_color(light_orange);
})
purble.addEventListener("click", function () {
  
  delete_colors(light_yellow,water_melon,blue,light_orange,light_green);
  purble.classList.add("ring-2" ,"ring-primary", "ring-offset-2" ,"ring-offset-white", "dark:ring-offset-slate-900"); 
  set_primary_color(purble);
})
light_yellow.addEventListener("click", function () {
  
  delete_colors(light_orange,water_melon,blue,purble,light_green);
  light_yellow.classList.add("ring-2" ,"ring-primary", "ring-offset-2" ,"ring-offset-white", "dark:ring-offset-slate-900"); 
  set_primary_color(light_yellow);
})
water_melon.addEventListener("click", function () {
  
  delete_colors(light_yellow,light_orange,blue,purble,light_green);
  water_melon.classList.add("ring-2" ,"ring-primary", "ring-offset-2" ,"ring-offset-white", "dark:ring-offset-slate-900"); 
  set_primary_color(water_melon);
})
blue.addEventListener("click", function () {
  
  delete_colors(light_yellow,water_melon,light_orange,purble,light_green);
  blue.classList.add("ring-2" ,"ring-primary", "ring-offset-2" ,"ring-offset-white", "dark:ring-offset-slate-900"); 
  set_primary_color(blue);
})
light_green.addEventListener("click", function () {
  
  delete_colors(light_yellow,water_melon,blue,purble,light_orange);
  light_green.classList.add("ring-2" ,"ring-primary", "ring-offset-2" ,"ring-offset-white", "dark:ring-offset-slate-900"); 
  set_primary_color(light_green);
})
window.addEventListener("load", function () {
  const storedPrimaryColor = localStorage.getItem("primaryColor");
  const storedSecondaryColor = localStorage.getItem("secondaryColor");

  if (storedPrimaryColor && storedSecondaryColor) {
    document.documentElement.style.setProperty("--color-primary", storedPrimaryColor);
    document.documentElement.style.setProperty("--color-secondary", storedSecondaryColor);
  }
  const colors=[light_orange,purble,light_yellow,water_melon,blue,light_green];

  for (let index = 0; index < colors.length; index++) {
    if (colors[index].dataset.primary==storedPrimaryColor) {
      colors[index].classList.add("ring-2" ,"ring-primary", "ring-offset-2" ,"ring-offset-white", "dark:ring-offset-slate-900"); 
    }
    else{
      colors[index].classList.remove("ring-2" ,"ring-primary", "ring-offset-2" ,"ring-offset-white", "dark:ring-offset-slate-900");
    }
  }

});
reset_settings.addEventListener("click", function () {
  delete_colors(light_yellow,water_melon,blue,light_orange,light_green);
  purble.classList.add("ring-2" ,"ring-primary", "ring-offset-2" ,"ring-offset-white", "dark:ring-offset-slate-900"); 
  alex.classList.remove("border-primary");
  alex.classList.remove("active");
  alex.classList.remove("bg-slate-50", "dark:bg-slate-800");
  alex.classList.add("border-slate-200", "dark:border-slate-700");

  cairo.classList.remove("border-primary");
  cairo.classList.remove("active");
  cairo.classList.remove("bg-slate-50", "dark:bg-slate-800");
  cairo.classList.add("border-slate-200", "dark:border-slate-700");
  tajawal.classList.remove("border-slate-200", "dark:border-slate-700");
    tajawal.classList.add(
      "border-primary",
      "active",
      "bg-slate-50",
      "dark:bg-slate-800"
    );
  document.body.classList.remove(
    "font-alexandria",
    "font-tajawal",
    "font-cairo"
  );
  document.body.classList.add("font-tajawal");

  set_primary_color(purble);
})
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++cards
const all=document.getElementById("all");
const design=document.getElementById("design");
const app=document.getElementById("app");
const web=document.getElementById("web");
const ecommerce=document.getElementById("ecommerce");
const app_section=document.querySelectorAll('[data-category="app"]');
const design_section=document.querySelectorAll('[data-category="design"]');
const ecommerce_section=document.querySelectorAll('[data-category="ecommerce"]');
const web_section=document.querySelectorAll('[data-category="web"]');
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const btns=[all,design,app,web,ecommerce];
function set_active(btn) {
  btn.classList.remove(
    "bg-white",
    "dark:bg-slate-800",
    "text-slate-600",
    "dark:text-slate-300",
    "border",
    "border-slate-300",
    "dark:border-slate-700",
    "hover:bg-slate-100",
    "dark:hover:bg-slate-700"
  );
  btn.classList.add(
    "active",
    "bg-linear-to-r",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50"
  );
  
}
function remove_active() {
for (let index = 0; index < btns.length; index++) {
  btns[index].classList.remove(
    "active",
    "bg-linear-to-r",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50"
  );
  btns[index].classList.add(
    "bg-white",
    "dark:bg-slate-800",
    "text-slate-600",
    "dark:text-slate-300",
    "border",
    "border-slate-300",
    "dark:border-slate-700",
    "hover:bg-slate-100",
    "dark:hover:bg-slate-700"
  );

}
  
}
function filterElements(category) {
  const allItems = document.querySelectorAll(".portfolio-item");

  allItems.forEach(el => {
    el.classList.remove("opacity-100", "scale-100");
    el.classList.add("opacity-0", "scale-90");
  });

  setTimeout(() => {
    allItems.forEach(el => {
      el.style.display = "none"; // نخفي الكل
    });

    let toShow;
    if (category === "all") {
      toShow = allItems;
    } else {
      toShow = document.querySelectorAll(`.portfolio-item[data-category="${category}"]`);
    }

    // عرض العناصر المتوافقة بنفس الانيميشن
    toShow.forEach(el => {
      el.style.display = "block"; 
      setTimeout(() => {
        el.classList.remove("opacity-0", "scale-90");
        el.classList.add("opacity-100", "scale-100");
      }, 50); // تأخير بسيط عشان الانيميشن يبدأ
    });
  }, 300); // نفس مدة الانيميشن
}

all.addEventListener("click", function () {
  remove_active();
  set_active(all);
  filterElements("all")
})
web.addEventListener("click", function () {
remove_active();
 set_active(web);
 filterElements("web");
})
app.addEventListener("click", function () {
  remove_active();
  set_active(app);
  filterElements("app");
})
design.addEventListener("click", function () {
  remove_active();
  set_active(design);
  filterElements("design");
})
ecommerce.addEventListener("click", function () {
  remove_active();
  set_active(ecommerce);
  filterElements("ecommerce");
})
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const carousel=document.querySelector("#testimonials-carousel");
const indicators=document.querySelectorAll(".carousel-indicator");
const prev_testimonial=document.getElementById("prev-testimonial");
const next_testimonial=document.getElementById("next-testimonial");
let currentIndex=0;
  function updateCarousel() {
    indicators.forEach((dot, i) => {
      dot.classList.remove("bg-accent", "scale-125", "active");
      dot.classList.add("bg-slate-400", "dark:bg-slate-600");
  
      if (i === currentIndex) {
        dot.classList.add("bg-accent", "scale-125", "active");
        dot.classList.remove("bg-slate-400", "dark:bg-slate-600");
      }
    });
    const percent = (100 / (indicators.length - 1)) * currentIndex;
    carousel.style.transform = `translateX(${percent}%)`;
  }

  window.addEventListener('load', function () {
    currentIndex = 0; // أول عنصر active
    updateCarousel();
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", function() {
      currentIndex = index; // حدّث currentIndex
      updateCarousel();

    });
  });

  next_testimonial.addEventListener("click", function () {
    if (currentIndex === indicators.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    } 
    updateCarousel();
  });
  prev_testimonial.addEventListener("click", function () {
    if (currentIndex === 0) {
      currentIndex = indicators.length - 1;
    } else {
      currentIndex--;
    }
    updateCarousel();
  });
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++validation
const full_name=document.getElementById("full-name");
const email=document.getElementById("email");
const project_details=document.getElementById("project-details");
const phone=document.getElementById("phone");
const submit=document.getElementById("send-message");
const full_name_error=document.getElementById("full-name-error");
const email_error=document.getElementById("email-error");
const phone_error=document.getElementById("phone-error");
const details_zero=document.getElementById("project-details-error_0");
const more_details=document.getElementById("project-details-error_more");
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const full_name_reg=/^[a-zA-Z\u0600-\u06FF]{2,}(?:\s+[a-zA-Z\u0600-\u06FF]{2,})+$/;
const email_reg=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phone_reg=/^(?:\+20|0)?1[0125][0-9]{8}/;
function check() {
  // ===== الاسم الكامل =====
  full_name.addEventListener("input", function() {
    if(full_name_reg.test(full_name.value)) {
      full_name_error.classList.add("hidden");
    } else {
      full_name_error.classList.remove("hidden");
    }
  });

  // ===== الإيميل =====
  email.addEventListener("input", function() {
    if(email_reg.test(email.value)) {
      email_error.classList.add("hidden");
    } else {
      email_error.classList.remove("hidden");
    }
  });

  // ===== التليفون =====
  phone.addEventListener("input", function() {
    if(phone_reg.test(phone.value)) {
      phone_error.classList.add("hidden");
    } else {
      phone_error.classList.remove("hidden");
    }
  });

  // ===== تفاصيل المشروع =====
  project_details.addEventListener("input", function() {
    if(project_details.value.length > 0 && project_details.value.length < 10) {
      details_zero.classList.add("hidden");
      more_details.classList.remove("hidden");
    } else if(project_details.value.length == 0) {
      details_zero.classList.remove("hidden");
      more_details.classList.add("hidden");
    } else {
      details_zero.classList.add("hidden");
      more_details.classList.add("hidden");
    }
  });
}

// استدعاء الدالة عشان تعمل event listeners فورًا
check();

function validation() {
  let valid = true;

  // التحقق من الاسم
  if(!full_name_reg.test(full_name.value)){
    full_name_error.classList.remove("hidden");
    valid = false;
  } else {
    full_name_error.classList.add("hidden");
  }

  // التحقق من الإيميل
  if(!email_reg.test(email.value)){
    email_error.classList.remove("hidden");
    valid = false;
  } else {
    email_error.classList.add("hidden");
  }

  // التحقق من التليفون
  if(!phone_reg.test(phone.value)){
    phone_error.classList.remove("hidden");
    valid = false;
  } else {
    phone_error.classList.add("hidden");
  }

  // التحقق من تفاصيل المشروع
  if(project_details.value.length == 0){
    details_zero.classList.remove("hidden");
    more_details.classList.add("hidden");
    valid = false;
  } else if(project_details.value.length < 10){
    details_zero.classList.add("hidden");
    more_details.classList.remove("hidden");
    valid = false;
  } else {
    details_zero.classList.add("hidden");
    more_details.classList.add("hidden");
  }

  return valid;
}



const select = document.querySelector('[data-name="project-type"]');
const options=document.querySelector(".custom-options");
const chevron=document.getElementById("project-type-chevron");
const option=document.querySelectorAll("#project-type-options .custom-option");
const project_type_selected_text=document.getElementById("project-type-selected-text");

option.forEach((option) => {
  option.addEventListener("click", function () {
    project_type_selected_text.classList.remove("text-slate-500", "dark:text-slate-400");
    project_type_selected_text.innerHTML = option.innerHTML;
    options.classList.add("hidden");
    chevron.classList.remove("fa-rotate-180");
  });
})

select.addEventListener("click", function () {
  options.classList.toggle("hidden");
  chevron.classList.toggle("fa-rotate-180");

});
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const budget=document.querySelector('[data-name="budget"]');
const budget_options=document.querySelector("#budget-options");
const budget_chevron=document.getElementById("budget-chevron");
const budget_selected_text=document.getElementById("budget-selected-text");
const budget_option=document.querySelectorAll("#budget-options .custom-option");

budget_option.forEach((index) => {
  index.addEventListener("click", function () {
    budget_selected_text.classList.remove("text-slate-500", "dark:text-slate-400");
    budget_selected_text.innerHTML = index.innerHTML;
    budget_options.classList.add("hidden");
    budget_chevron.classList.remove("fa-rotate-180");
  });
})

budget.addEventListener("click", function () {
  budget_options.classList.toggle("hidden");
  budget_chevron.classList.toggle("fa-rotate-180");
});

function reset(){
  full_name.value="";
  email.value="";
  phone.value="";
  project_details.value="";
  project_type_selected_text.classList.add("text-slate-500", "dark:text-slate-400");
  project_type_selected_text.innerHTML = " اختر نوع المشروع";
  budget_selected_text.classList.add("text-slate-500", "dark:text-slate-400");
  budget_selected_text.innerHTML = "اختر الميزانية";
}
submit.addEventListener("click", function (e) {
  e.preventDefault();
 
  if(validation()){
    Swal.fire({
      title: "تم إرسال رسالتك بنجاح!",
      text: "شكراً لتواصلك. سأرد عليك في أقرب وقت ممكن.",
      icon: "success",
      confirmButtonText: "حسناً",
      confirmButtonColor: "#10b981", // نفس اللون الأخضر اللي في الصورة
      background: "#1e293b", // لون الخلفية الداكن (Dark Theme)
      color: "#ffffff" // لون الخط أبيض
    });
    reset();
  }
  
});





 

  














