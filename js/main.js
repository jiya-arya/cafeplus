










document.addEventListener('DOMContentLoaded', () => {
  // =========================
  // TESTIMONIAL SLIDER CODE
  // =========================
  const cards = document.querySelectorAll('.main-testimonial__card');
  const nextBtn = document.querySelector('.main-testimonial__next');
  const prevBtn = document.querySelector('.main-testimonial__prev');

  let currentIndex = 0;
  let interval;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.classList.remove('active');
      if (i === index) {
        card.classList.add('active');
      }
    });
  }

  function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  }

  function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
  }

  function startAutoSlide() {
    interval = setInterval(nextCard, 4000); // Auto slide every 4 seconds
  }

  function stopAutoSlide() {
    clearInterval(interval);
  }

  if (nextBtn && prevBtn && cards.length > 0) {
    nextBtn.addEventListener('click', () => {
      nextCard();
      stopAutoSlide();
      startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
      prevCard();
      stopAutoSlide();
      startAutoSlide();
    });

    // Initialize slider
    showCard(currentIndex);
    startAutoSlide();
  } else {
    console.warn("Testimonial slider elements not found in DOM!");
  }

  // =========================
  // MENU FILTER CODE
  // =========================
  const menuData = {
  pasta: [
    {
      title: "Whole Grain Pasta",
      desc: "Whole wheat pasta tossed with roasted eggplant spread, marinated tomatoes, garlic, and fresh basil.",
      price: 220
    },
    {
      title: "Tortellini Gorgonzola",
      desc: "Cheese-filled tortellini in creamy Gorgonzola sauce with sun-dried tomatoes and crushed walnuts.",
      price: 260
    },
    {
      title: "Rigatoni Zuccati",
      desc: "Rigatoni pasta with zucchini, fresh herbs, and a light garlic olive oil sauce.",
      price: 240
    },
    {
      title: "Spaghetti Marinara",
      desc: "Classic spaghetti with tangy marinara sauce and grated Parmesan.",
      price: 200
    },
    {
      title: "Penne Alfredo",
      desc: "Penne pasta in rich Alfredo cream sauce with sautéed mushrooms.",
      price: 250
    },
    {
      title: "Fusilli Primavera",
      desc: "Fusilli pasta loaded with fresh seasonal vegetables and light tomato basil sauce.",
      price: 230
    }
  ],

  pizza: [
    {
      title: "BBQ Special Pizza",
      desc: "Smoky BBQ sauce base topped with grilled chicken, red onions, and mozzarella cheese.",
      price: 300
    },
    {
      title: "Special Cheesy Cheese",
      desc: "Ultimate cheese overload with mozzarella, cheddar, gouda, and parmesan blend.",
      price: 280
    },
    {
      title: "Mushroom Chilly Pizza",
      desc: "Spicy delight with fresh mushrooms, green chilies, and a drizzle of hot sauce.",
      price: 270
    },
    {
      title: "Chicken BBQ Special",
      desc: "Tender chicken chunks, BBQ glaze, bell peppers, and fresh coriander on a thin crust.",
      price: 320
    },
    {
      title: "Farmhouse Delight",
      desc: "Classic veg pizza with capsicum, onions, olives, corn, and jalapeños.",
      price: 260
    },
    {
      title: "Pepperoni Feast",
      desc: "Traditional pepperoni pizza with melted mozzarella and tomato basil sauce.",
      price: 310
    }
  ],

  platter: [
    {
      title: "Sautéed Spinach",
      desc: "Fresh baby spinach sautéed with garlic butter and a dash of lemon juice.",
      price: 150
    },
    {
      title: "Roasted Butternut",
      desc: "Sweet roasted butternut squash with caramelized onions and herbs.",
      price: 180
    },
    {
      title: "Crumbled Sausage",
      desc: "Pan-seared crumbled chicken sausage served with spicy aioli dip.",
      price: 220
    },
    {
      title: "Vegetable Sauté",
      desc: "A colorful medley of stir-fried seasonal vegetables with soy glaze.",
      price: 170
    },
    {
      title: "Paneer Tikka Platter",
      desc: "Cubes of cottage cheese marinated in Indian spices and grilled to perfection.",
      price: 250
    },
    {
      title: "Crispy Potato Wedges",
      desc: "Golden fried potato wedges with tangy tomato salsa.",
      price: 140
    }
  ]
};



  const menuItemsDiv = document.getElementById('menuItems');
  const menuCards = document.querySelectorAll('.menu-card');

  function loadMenu(category = 'default') {
    if (!menuItemsDiv) {
      console.warn("Menu container not found in DOM!");
      return;
    }

    menuItemsDiv.innerHTML = '';

    if (category === 'default') {
  // Load 2 items from each category
  Object.keys(menuData).forEach(cat => {
    menuData[cat].slice(0, 2).forEach(item => {
      createMenuItem(item.title, item.desc, item.price); // ✅ Fixed
    });
  });
} else {
  // Load all items from selected category
  menuData[category].forEach(item => {
    createMenuItem(item.title, item.desc, item.price); // ✅ Fixed
  });
}

  }

  function createMenuItem(title, desc,price) {
  const item = document.createElement('div');
  item.className = 'menu-item';
  item.innerHTML = `
    <div class="menu-item-right">
      <div class="menu-item-header">
        <h4 class="menu-item-title">${title}</h4>
        <span class="menu-item-price">Rs. ${price}</span>
      </div>
      <p class="menu-item-desc">${desc}</p>
    </div>
  `;
  menuItemsDiv.appendChild(item);
}

  if (menuCards.length > 0 && menuItemsDiv) {
    menuCards.forEach(card => {
      card.addEventListener('click', () => {
        document.querySelector('.menu-card.active').classList.remove('active');
        card.classList.add('active');
        loadMenu(card.getAttribute('data-category'));
      });
    });

    // Load default view
    loadMenu();
  } else {
    console.warn("Menu cards or container not found in DOM!");
  }
});
