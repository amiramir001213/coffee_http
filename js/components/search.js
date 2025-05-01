// Search Component
export const setupSearch = function() {
  // جستجوی هدر در صفحات
  setupHeaderSearch();

  // جستجوی اصلی
  setupMainSearch();

  // جستجو در مقالات
  setupArticlesSearch();

  // جستجو در آموزش‌ها
  setupTutorialsSearch();

  // جستجو در برنامه‌ها
  setupAppsSearch();
};

// تنظیم جستجوی هدر در صفحات
function setupHeaderSearch() {
  const headerSearchIcon = document.querySelector('.header-search-icon');
  const headerSearchBox = document.querySelector('.header-search-box');

  if (headerSearchIcon && headerSearchBox) {
    headerSearchIcon.addEventListener('click', function() {
      headerSearchBox.classList.toggle('active');
      if (headerSearchBox.classList.contains('active')) {
        headerSearchBox.querySelector('input').focus();
      }
    });

    // بستن باکس جستجو با کلیک خارج از آن
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.header-search') && headerSearchBox.classList.contains('active')) {
        headerSearchBox.classList.remove('active');
      }
    });
  }
}

// تنظیم جستجو برای صفحات اصلی و مقالات
function setupMainSearch() {
  // جستجوی صفحه اصلی
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');

  if (searchInput && searchButton) {
    searchInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        // اجرای جستجو
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
          performSearch(searchTerm);
        }
      }
    });

    searchButton.addEventListener('click', function() {
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        performSearch(searchTerm);
      }
    });
  }
}

// تنظیم جستجو در صفحه مقالات
function setupArticlesSearch() {
  const articlesSearchInput = document.getElementById('articles-search-input');
  const articlesSearchButton = document.getElementById('articles-search-button');

  if (articlesSearchInput && articlesSearchButton) {
    articlesSearchInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        const searchTerm = articlesSearchInput.value.trim();
        if (searchTerm) {
          searchArticles(searchTerm);
        }
      }
    });

    articlesSearchButton.addEventListener('click', function() {
      const searchTerm = articlesSearchInput.value.trim();
      if (searchTerm) {
        searchArticles(searchTerm);
      }
    });
  }
}

// تنظیم جستجو در صفحه آموزش‌ها
function setupTutorialsSearch() {
  const tutorialsSearchInput = document.getElementById('tutorials-search-input');
  const tutorialsSearchButton = document.getElementById('tutorials-search-button');

  if (tutorialsSearchInput && tutorialsSearchButton) {
    tutorialsSearchInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        const searchTerm = tutorialsSearchInput.value.trim();
        if (searchTerm) {
          searchTutorials(searchTerm);
        }
      }
    });

    tutorialsSearchButton.addEventListener('click', function() {
      const searchTerm = tutorialsSearchInput.value.trim();
      if (searchTerm) {
        searchTutorials(searchTerm);
      }
    });
  }
}

// تنظیم جستجو در صفحه برنامه‌ها
function setupAppsSearch() {
  const appsSearchInput = document.getElementById('apps-search-input');
  const appsSearchButton = document.getElementById('apps-search-button');

  if (appsSearchInput && appsSearchButton) {
    appsSearchInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        const searchTerm = appsSearchInput.value.trim();
        if (searchTerm) {
          searchApps(searchTerm);
        }
      }
    });

    appsSearchButton.addEventListener('click', function() {
      const searchTerm = appsSearchInput.value.trim();
      if (searchTerm) {
        searchApps(searchTerm);
      }
    });
  }
}

// جستجوی عمومی
function performSearch(term) {
  console.log('جستجو برای:', term);
  // اینجا منطق جستجو و نمایش نتایج را پیاده‌سازی کنید
}

// جستجو در مقالات
export function searchArticles(term) {
  console.log('جستجو در مقالات:', term);
  // اینجا منطق جستجو در مقالات را پیاده‌سازی کنید
}

// جستجو در آموزش‌ها
function searchTutorials(term) {
  console.log('جستجو در آموزش‌ها:', term);
  // اینجا منطق جستجو در آموزش‌ها را پیاده‌سازی کنید
}

// جستجو در برنامه‌ها
function searchApps(term) {
  console.log('جستجو در برنامه‌ها:', term);
  // اینجا منطق جستجو در برنامه‌ها را پیاده‌سازی کنید
}

// فیلتر برنامه‌ها بر اساس عبارت جستجو
export function filterAppsBySearch(searchTerm) {
  if (!searchTerm) return;

  const appCards = document.querySelectorAll('.app-card');
  let matchFound = false;

  searchTerm = searchTerm.toLowerCase();

  appCards.forEach(card => {
    const appTitle = card.querySelector('h3').textContent.toLowerCase();
    const appDescription = card.querySelector('p').textContent.toLowerCase();

    if (appTitle.includes(searchTerm) || appDescription.includes(searchTerm)) {
      card.style.display = 'grid';
      matchFound = true;
    } else {
      card.style.display = 'none';
    }
  });

  // نمایش پیام "موردی یافت نشد" اگر نتیجه‌ای نبود
  const appsContainer = document.getElementById('apps-container');
  const noResultsElement = document.querySelector('.no-results');

  if (!matchFound && appsContainer) {
    if (!noResultsElement) {
      const noResults = document.createElement('div');
      noResults.className = 'no-results';
      noResults.innerHTML = `
        <div class="empty-state">
          <span class="material-icons">search_off</span>
          <h3>نتیجه‌ای یافت نشد</h3>
          <p>برنامه‌ای با این عنوان یا توضیحات پیدا نشد</p>
        </div>
      `;
      appsContainer.appendChild(noResults);
    }
  } else if (noResultsElement) {
    noResultsElement.remove();
  }
}

// نمایش نتایج جستجو
export function displaySearchResults(results) {
  const articlesContainer = document.getElementById('articles-container');
  if (!articlesContainer) return;

  articlesContainer.innerHTML = '';

  if (results.length > 0) {
    // عنوان نتایج جستجو
    const searchTitle = document.createElement('div');
    searchTitle.className = 'search-results-title';
    searchTitle.innerHTML = `<h3>${results.length} نتیجه یافت شد</h3>`;
    articlesContainer.appendChild(searchTitle);

    // نمایش نتایج
    results.forEach(article => {
      const articleCard = document.createElement('div');
      articleCard.className = 'article-card';
      articleCard.setAttribute('data-id', article.id);

      articleCard.innerHTML = `
        <div class="article-image">
          <img src="${article.image}" alt="${article.title}">
        </div>
        <div class="article-content">
          <span class="article-category">${article.categoryLabel}</span>
          <h3 class="article-title">${article.title}</h3>
          <p class="article-excerpt">${article.excerpt}</p>
          <div class="article-meta">
            <span>${article.date}</span>
            <span>${article.readTime}</span>
          </div>
        </div>
      `;

      articlesContainer.appendChild(articleCard);

      // تنظیم رویداد کلیک برای باز کردن مدال
      articleCard.addEventListener('click', function() {
        const articleId = parseInt(this.getAttribute('data-id'));
        openArticleModal(articleId);
      });
    });
  } else {
    // نمایش پیام عدم یافتن نتیجه
    const noResults = document.createElement('div');
    noResults.className = 'empty-state';
    noResults.innerHTML = `
      <span class="material-icons">search_off</span>
      <h3>نتیجه‌ای یافت نشد</h3>
      <p>مقاله‌ای با این عنوان یا محتوا پیدا نشد. لطفاً عبارت دیگری را جستجو کنید.</p>
    `;
    articlesContainer.appendChild(noResults);
  }
}

// فقط برای جلوگیری از خطا در import
export function openArticleModal(articleId) {
  // این تابع در فایل main.js پیاده‌سازی شده
  console.log('Opening article modal with ID:', articleId);
}