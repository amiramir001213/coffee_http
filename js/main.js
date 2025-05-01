// Import components
import { setupMenu } from './components/menu.js';
import { setupSearch, searchArticles } from './components/search.js';
import { articles, initializeArticles } from './data/articles.js';
import { downloads, initializeDownloads } from './data/downloads.js';

// تنظیم پارتیکل‌ها
function initializeParticles() {
  // اگر از قبل تنظیم شده باشد، نیاز به پیاده‌سازی مجدد نیست
  console.log("Particles initialized");
}

// تنظیم انیمیشن‌های سایت
function setupAnimations() {
  // انیمیشن عناصری که کلاس slide-up دارند
  const animatedElements = document.querySelectorAll('.slide-up');

  animatedElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
  });
}

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  // راه‌اندازی کامپوننت‌های مختلف
  setupSearch();
  setupMenu();

  // مقداردهی اولیه داده‌ها
  if (typeof initializeArticles === 'function') initializeArticles();
  if (typeof initializeDownloads === 'function') initializeDownloads();

  // افکت‌های انیمیشن برای المان‌های صفحه
  setupAnimations();

  // اجرای ذرات در صفحه (اگر المان particles-js وجود داشته باشد)
  if (document.getElementById('particles-js')) {
    initializeParticles();
  }

  // ===== مقادیر ثابت و داده‌ها برای صفحات =====
  const appCategories = ['all', 'security', 'vpn', 'utility', 'productivity', 'multimedia'];
  const operatingSystems = ['all', 'windows', 'mac', 'android', 'ios', 'linux'];

  // Articles Section
  const articlesContainer = document.getElementById('articles-container');
  const categories = document.querySelectorAll('.category');

  // اگر توابع تنظیم وجود دارند، آنها را فراخوانی کن
  if (typeof setupCategoryTabs === 'function') setupCategoryTabs();
  if (typeof setupCategoryFilters === 'function') setupCategoryFilters();
  if (typeof setupOsFilters === 'function') setupOsFilters();
  if (typeof setupAppCategoryTabs === 'function') setupAppCategoryTabs();

  // نمایش مقالات
  if (typeof displayArticles === 'function' && articlesContainer) {
    displayArticles('all');
  }

  // مدال مقالات
  if (typeof setupArticleModal === 'function') setupArticleModal();

  // Downloads Section 
  const downloadsContainer = document.getElementById('downloads-container');
  const filters = document.querySelectorAll('.filter');

  // Handle article filtering by category
  if (categories && categories.length > 0) {
    categories.forEach(category => {
      category.addEventListener('click', function() {
        const selectedCategory = this.getAttribute('data-category');

        // Toggle active class
        categories.forEach(cat => cat.classList.remove('active'));
        this.classList.add('active');

        // Filter articles
        if (typeof filterArticles === 'function') {
          filterArticles(selectedCategory);
        }
      });
    });
  }

  // Handle filter clicks in downloads section
  if (filters && filters.length > 0) {
    filters.forEach(filter => {
      filter.addEventListener('click', function() {
        const selectedFilter = this.getAttribute('data-filter');

        // Toggle active class
        filters.forEach(flt => flt.classList.remove('active'));
        this.classList.add('active');

        // Filter downloads
        if (typeof filterDownloads === 'function') {
          filterDownloads(selectedFilter);
        }
      });
    });
  }

  // Handle OS filter clicks in apps section
  const osFilters = document.querySelectorAll('.os-filter');
  if (osFilters && osFilters.length > 0) {
    osFilters.forEach(filter => {
      filter.addEventListener('click', function() {
        const selectedOS = this.getAttribute('data-os');

        // Toggle active class
        osFilters.forEach(os => os.classList.remove('active'));
        this.classList.add('active');

        // Filter apps by OS
        if (typeof filterAppsByOS === 'function') {
          filterAppsByOS(selectedOS);
        }
      });
    });
  }

  // Handle category tabs in apps section
  const categoryTabs = document.querySelectorAll('.tab');
  if (categoryTabs && categoryTabs.length > 0) {
    categoryTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const selectedCategory = this.getAttribute('data-category');

        // Toggle active class
        categoryTabs.forEach(tab => tab.classList.remove('active'));
        this.classList.add('active');

        // Filter apps by category
        if (typeof filterAppsByCategory === 'function') {
          filterAppsByCategory(selectedCategory);
        }
      });
    });
  }

  // Load initial data
  if (typeof loadDownloads === 'function' && downloadsContainer) {
    loadDownloads();
  }

  if (typeof loadArticles === 'function' && articlesContainer) {
    loadArticles();
  }

  // Handle pagination in article page
  const prevPage = document.getElementById('prev-page');
  const nextPage = document.getElementById('next-page');
  const pageNumbers = document.querySelectorAll('.page-number');

  if (prevPage && nextPage && pageNumbers.length > 0) {
    let currentPage = 1;
    const totalPages = pageNumbers.length;

    pageNumbers.forEach(page => {
      page.addEventListener('click', function() {
        const pageNum = parseInt(this.textContent.replace(/[^0-9]/g, ''));
        goToPage(pageNum);
      });
    });

    prevPage.addEventListener('click', function() {
      if (currentPage > 1) {
        goToPage(currentPage - 1);
      }
    });

    nextPage.addEventListener('click', function() {
      if (currentPage < totalPages) {
        goToPage(currentPage + 1);
      }
    });

    function goToPage(pageNum) {
      currentPage = pageNum;

      // Update active page number
      pageNumbers.forEach(page => page.classList.remove('active'));
      pageNumbers[pageNum - 1].classList.add('active');

      // Enable/disable prev/next buttons
      prevPage.disabled = currentPage === 1;
      nextPage.disabled = currentPage === totalPages;

      // Load articles for current page
      if (typeof loadArticlesPage === 'function') {
        loadArticlesPage(pageNum);
      }
    }
  }

  // Initialize modal functionality
  if (typeof initializeModal === 'function') {
    initializeModal();
  }
});

// تبدیل عدد به فارسی
function convertToPersianNumber(number) {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return number.toString().replace(/\d/g, x => persianDigits[x]);
}

// دریافت نام دسته‌بندی برای نمایش
function getCategoryName(categoryCode) {
  switch(categoryCode) {
    case 'tech': return 'تکنولوژی';
    case 'security': return 'امنیت';
    case 'tutorial': return 'آموزشی';
    case 'app': return 'نرم‌افزار';
    case 'guide': return 'راهنما';
    case 'news': return 'اخبار';
    default: return 'عمومی';
  }
}

// فیلتر مقالات بر اساس دسته‌بندی
function filterArticles(category) {
  const articleContainer = document.getElementById('articles-container');
  if (!articleContainer || !articles) return;

  articleContainer.innerHTML = '';

  const filteredArticles = category === 'all' 
    ? articles.slice(0, 6) 
    : articles.filter(article => article.category === category).slice(0, 6);

  if (filteredArticles.length === 0) {
    articleContainer.innerHTML = '<p class="no-items">هیچ مطلبی در این دسته‌بندی یافت نشد.</p>';
    return;
  }

  filteredArticles.forEach(article => {
    const articleCard = createArticleCard(article);
    articleContainer.appendChild(articleCard);
  });

  // Add click event to new cards
  const cards = document.querySelectorAll('.article-card');
  cards.forEach(card => {
    card.addEventListener('click', function() {
      const articleId = this.getAttribute('data-id');
      openArticleModal(articleId);
    });
  });
}

// فیلتر دانلودها بر اساس نوع
function filterDownloads(filter) {
  const downloadContainer = document.getElementById('downloads-container');
  if (!downloadContainer || !downloads) return;

  downloadContainer.innerHTML = '';

  const filteredDownloads = filter === 'all' 
    ? downloads 
    : downloads.filter(download => download.type === filter);

  if (filteredDownloads.length === 0) {
    downloadContainer.innerHTML = '<p class="no-items">هیچ فایلی در این دسته‌بندی یافت نشد.</p>';
    return;
  }

  // Render filtered downloads
  filteredDownloads.forEach(download => {
    const downloadItem = document.createElement('div');
    downloadItem.className = 'download-item';
    downloadItem.innerHTML = `
      <div class="download-icon">
        <span class="material-icons">${download.icon}</span>
      </div>
      <h3 class="download-title">${download.title}</h3>
      <p class="download-info">${download.description}</p>
      <div class="download-meta">
        <span><span class="material-icons" style="font-size: 16px; margin-left: 5px;">description</span> ${download.size}</span>
        <span><span class="material-icons" style="font-size: 16px; margin-left: 5px;">date_range</span> ${download.date}</span>
      </div>
      <a href="${download.url}" class="download-button">
        <span class="material-icons" style="margin-left: 8px; font-size: 18px;">download</span>
        دانلود فایل
      </a>
    `;
    downloadContainer.appendChild(downloadItem);
  });
}

// ایجاد کارت مقاله
function createArticleCard(article) {
  const card = document.createElement('div');
  card.className = 'article-card';
  card.setAttribute('data-id', article.id);

  const categoryName = getCategoryName(article.category);

  card.innerHTML = `
    <div class="article-image">
      <img src="${article.image}" alt="${article.title}">
    </div>
    <div class="article-content">
      <span class="article-category">${categoryName}</span>
      <h3 class="article-title">${article.title}</h3>
      <p class="article-excerpt">${article.excerpt}</p>
      <div class="article-meta">
        <span class="article-author">${article.author}</span>
        <span class="article-date">${article.date}</span>
      </div>
    </div>
  `;

  return card;
}

// باز کردن مدال مقاله
function openArticleModal(articleId) {
  const modal = document.getElementById('article-modal');
  const modalContent = document.getElementById('modal-article-content');

  if (!modal || !modalContent || !articles) return;

  // Find article by id
  const article = articles.find(article => article.id === parseInt(articleId));

  if (!article) return;

  // Fill modal with article content
  modalContent.innerHTML = `
    <h2>${article.title}</h2>
    <div class="article-info">
      <span class="article-category">${getCategoryName(article.category)}</span>
      <span class="article-author">${article.author}</span>
      <span class="article-date">${article.date}</span>
    </div>
    <div class="article-full-content">
      ${article.content || article.excerpt}
    </div>
  `;

  // Show modal
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// مقداردهی اولیه مدال
function initializeModal() {
  const modal = document.getElementById('article-modal');
  if (!modal) return;

  const closeBtn = document.querySelector('.close-modal');
  if (!closeBtn) return;

  // Close modal when clicking on X
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // Close modal when clicking outside content
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Handle share buttons
  const shareButtons = document.querySelectorAll('.share-btn');
  shareButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Implement sharing functionality
      if (button.classList.contains('copy-link')) {
        copyArticleLink();
      }
    });
  });
}

// کپی لینک مقاله
function copyArticleLink() {
  const dummy = document.createElement('input');
  document.body.appendChild(dummy);
  dummy.value = window.location.href;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);

  alert('لینک مقاله کپی شد!');
}

// بارگذاری مقالات برای صفحه خانه
function loadArticles() {
  const articleContainer = document.getElementById('articles-container');
  if (!articleContainer || !articles) return;

  // Display first 6 articles
  const homeArticles = articles.slice(0, 6);

  articleContainer.innerHTML = '';

  homeArticles.forEach(article => {
    const articleCard = createArticleCard(article);
    articleContainer.appendChild(articleCard);
  });

  // Add click event to cards
  const cards = document.querySelectorAll('.article-card');
  cards.forEach(card => {
    card.addEventListener('click', function() {
      const articleId = this.getAttribute('data-id');
      openArticleModal(articleId);
    });
  });
}

// بارگذاری دانلودها
function loadDownloads(filter = 'all', customList = null) {
  const downloadsContainer = document.getElementById('downloads-container');
  if (!downloadsContainer || !downloads) return;

  downloadsContainer.innerHTML = '';

  // اگر لیست سفارشی ارائه شده باشد از آن استفاده می‌کنیم، در غیر این صورت فیلتر را اعمال می‌کنیم
  const filteredDownloads = customList || (filter === 'all'
    ? downloads
    : downloads.filter(download => download.type === filter));

  // اگر در حالت جستجو هستیم، یک عنوان اضافه کنیم
  if (customList) {
    const searchTitle = document.createElement('div');
    searchTitle.style.width = '100%';
    searchTitle.style.textAlign = 'right';
    searchTitle.style.marginBottom = '30px';
    searchTitle.innerHTML = `<h3>فایل‌های یافت شده (${filteredDownloads.length} مورد)</h3>`;
    downloadsContainer.appendChild(searchTitle);
  }

  filteredDownloads.forEach((download, index) => {
    const downloadItem = document.createElement('div');
    downloadItem.className = 'download-item';
    downloadItem.style.animationDelay = `${index * 0.1}s`;
    downloadItem.classList.add('fade-in');

    downloadItem.innerHTML = `
      <div class="download-icon">
        <span class="material-icons">${download.icon}</span>
      </div>
      <h3 class="download-title">${download.title}</h3>
      <p class="download-info">${download.description}</p>
      <div class="download-meta">
        <span><span class="material-icons" style="font-size: 16px; margin-left: 5px;">description</span> ${download.size}</span>
        <span><span class="material-icons" style="font-size: 16px; margin-left: 5px;">date_range</span> ${download.date}</span>
      </div>
      <a href="${download.url}" class="download-button">
        <span class="material-icons" style="margin-left: 8px; font-size: 18px;">download</span>
        دانلود فایل
      </a>
    `;

    downloadsContainer.appendChild(downloadItem);
  });

  // اگر نتیجه‌ای یافت نشد
  if (filteredDownloads.length === 0) {
    const noResults = document.createElement('div');
    noResults.style.textAlign = 'center';
    noResults.style.padding = '50px 0';
    noResults.style.gridColumn = '1 / -1';
    noResults.innerHTML = `
      <span class="material-icons" style="font-size: 3rem; color: var(--secondary-text); margin-bottom: 20px;">folder_off</span>
      <h3>فایلی یافت نشد</h3>
      <p style="margin-top: 15px;">هیچ فایلی با این مشخصات در سیستم وجود ندارد</p>
    `;
    downloadsContainer.appendChild(noResults);
  }
}

// Download Filters
if (filters) {
  filters.forEach(filter => {
    filter.addEventListener('click', function() {
      // Remove active class from all filters
      filters.forEach(f => f.classList.remove('active'));

      // Add active class to clicked filter
      this.classList.add('active');

      // Get filter data and load downloads
      const filterData = this.getAttribute('data-filter');
      loadDownloads(filterData);
    });
  });
}


// ===== مختص صفحه برنامه‌ها =====
// فیلتر برنامه‌ها بر اساس سیستم‌عامل
const osFiltersApps = document.querySelectorAll('.os-filter');

if (osFiltersApps.length > 0) {
  osFiltersApps.forEach(filter => {
    filter.addEventListener('click', function() {
      // حذف کلاس active از همه فیلترها
      osFiltersApps.forEach(f => f.classList.remove('active'));

      // اضافه کردن کلاس active به فیلتر انتخاب شده
      this.classList.add('active');

      // گرفتن سیستم‌عامل انتخاب شده
      const os = this.getAttribute('data-os');

      // فیلتر کردن برنامه‌ها بر اساس سیستم‌عامل
      filterApps(os);
    });
  });
}

// فیلتر برنامه‌ها بر اساس دسته‌بندی
const categoryTabsApps = document.querySelectorAll('.tab');

if (categoryTabsApps.length > 0) {
  categoryTabsApps.forEach(tab => {
    tab.addEventListener('click', function() {
      // حذف کلاس active از همه تب‌ها
      categoryTabsApps.forEach(t => t.classList.remove('active'));

      // اضافه کردن کلاس active به تب انتخاب شده
      this.classList.add('active');

      // گرفتن دسته‌بندی انتخاب شده
      const category = this.getAttribute('data-category');

      // فیلتر کردن برنامه‌ها بر اساس دسته‌بندی
      filterAppsByCategory(category);
    });
  });
}

// تابع فیلتر برنامه‌ها بر اساس سیستم‌عامل
function filterApps(os) {
  const apps = document.querySelectorAll('.app-card');

  if (apps.length > 0) {
    apps.forEach(app => {
      const appOS = app.getAttribute('data-os');

      if (os === 'all' || appOS.includes(os)) {
        app.style.display = 'grid';
      } else {
        app.style.display = 'none';
      }
    });
  }
}

// تابع فیلتر برنامه‌ها بر اساس دسته‌بندی
function filterAppsByCategory(category) {
  const apps = document.querySelectorAll('.app-card');

  if (apps.length > 0) {
    apps.forEach(app => {
      const appCategory = app.getAttribute('data-category');

      if (category === 'all' || appCategory === category) {
        app.style.display = 'grid';
      } else {
        app.style.display = 'none';
      }
    });
  }
}

// پیمایش برنامه‌ها
const prevAppPage = document.getElementById('prev-app-page');
const nextAppPage = document.getElementById('next-app-page');
const appPageNumbers = document.getElementById('app-page-numbers');

if (prevAppPage && nextAppPage && appPageNumbers) {
  const pageNumbers = appPageNumbers.querySelectorAll('.page-number');

  pageNumbers.forEach(number => {
    number.addEventListener('click', function() {
      pageNumbers.forEach(n => n.classList.remove('active'));
      this.classList.add('active');

      // اینجا منطق پیمایش صفحات را پیاده‌سازی کنید
    });
  });

  nextAppPage.addEventListener('click', function() {
    const currentPage = appPageNumbers.querySelector('.page-number.active');
    const nextPage = currentPage.nextElementSibling;

    if (nextPage) {
      currentPage.classList.remove('active');
      nextPage.classList.add('active');

      if (!nextPage.nextElementSibling) {
        nextAppPage.disabled = true;
      }

      prevAppPage.disabled = false;
    }
  });

  prevAppPage.addEventListener('click', function() {
    const currentPage = appPageNumbers.querySelector('.page-number.active');
    const prevPage = currentPage.previousElementSibling;

    if (prevPage) {
      currentPage.classList.remove('active');
      prevPage.classList.add('active');

      if (!prevPage.previousElementSibling) {
        prevAppPage.disabled = true;
      }

      nextAppPage.disabled = false;
    }
  });
}

// نمایش مقالات بر اساس دسته‌بندی
function displayArticles(category) {
  const articlesContainer = document.getElementById('articles-container');
  if (!articlesContainer) return;

  const filteredArticles = getArticlesByCategory(category);
  articlesContainer.innerHTML = '';

  filteredArticles.forEach(article => {
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

    // تنظیم رویداد کلیک برای هر کارت مقاله
    articleCard.addEventListener('click', function() {
      openArticleModal(article.id);
    });
  });
}

// تنظیم تب‌های دسته‌بندی
function setupCategoryTabs() {
  const tabs = document.querySelectorAll('.category-tabs .tab');
  if (tabs.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // حذف کلاس فعال از همه تب‌ها
      tabs.forEach(t => t.classList.remove('active'));

      // اضافه کردن کلاس فعال به تب کلیک شده
      this.classList.add('active');

      // نمایش برنامه‌ها بر اساس دسته‌بندی انتخاب شده
      const category = this.getAttribute('data-category');
      filterApps(category);
    });
  });
}

// تنظیم فیلترهای سیستم‌عامل
function setupOsFilters() {
  const filters = document.querySelectorAll('.os-filter');
  if (filters.length === 0) return;

  filters.forEach(filter => {
    filter.addEventListener('click', function() {
      // حذف کلاس فعال از همه فیلترها
      filters.forEach(f => f.classList.remove('active'));

      // اضافه کردن کلاس فعال به فیلتر کلیک شده
      this.classList.add('active');

      // نمایش برنامه‌ها بر اساس سیستم‌عامل انتخاب شده
      const os = this.getAttribute('data-os');
      filterAppsByOS(os);
    });
  });
}

// تنظیم تب‌های دسته‌بندی برنامه‌ها
function setupAppCategoryTabs() {
  const tabs = document.querySelectorAll('.category-tabs .tab');
  if (tabs.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // حذف کلاس فعال از همه تب‌ها
      tabs.forEach(t => t.classList.remove('active'));

      // اضافه کردن کلاس فعال به تب کلیک شده
      this.classList.add('active');

      // نمایش برنامه‌ها بر اساس دسته‌بندی انتخاب شده
      const category = this.getAttribute('data-category');
      filterApps(category);
    });
  });
}

// فیلتر برنامه‌ها بر اساس دسته‌بندی
function filterApps(category) {
  const appCards = document.querySelectorAll('.app-card');
  if (appCards.length === 0) return;

  appCards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-category').includes(category)) {
      card.style.display = 'grid';
    } else {
      card.style.display = 'none';
    }
  });
}

// فیلتر برنامه‌ها بر اساس سیستم‌عامل
function filterAppsByOS(os) {
  const appCards = document.querySelectorAll('.app-card');
  if (appCards.length === 0) return;

  appCards.forEach(card => {
    if (os === 'all' || card.getAttribute('data-os').includes(os)) {
      card.style.display = 'grid';
    } else {
      card.style.display = 'none';
    }
  });
}

// تنظیم فیلترهای دسته‌بندی مقالات
function setupCategoryFilters() {
  const categories = document.querySelectorAll('.categories .category');
  if (categories.length === 0) return;

  categories.forEach(category => {
    category.addEventListener('click', function() {
      // حذف کلاس فعال از همه دسته‌بندی‌ها
      categories.forEach(c => c.classList.remove('active'));

      // اضافه کردن کلاس فعال به دسته‌بندی کلیک شده
      this.classList.add('active');

      // نمایش مقالات بر اساس دسته‌بندی انتخاب شده
      const categoryVal = this.getAttribute('data-category');
      displayArticles(categoryVal);
    });
  });
}

// مدال مقالات
function setupArticleModal() {
  const modal = document.getElementById('article-modal');
  const closeBtn = document.querySelector('.close-modal');

  if (!modal || !closeBtn) return;

  // بستن مدال با کلیک روی دکمه بستن
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // بستن مدال با کلیک خارج از محتوای مدال
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
}



// Load articles for specific page
function loadArticlesPage(pageNum) {
  const articleContainer = document.querySelector('.articles-container');
  if (!articleContainer) return;

  articleContainer.innerHTML = '';

  const articlesPerPage = 9;
  const startIndex = (pageNum - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;

  const pageArticles = articles.slice(startIndex, endIndex);

  pageArticles.forEach(article => {
    const articleCard = createArticleCard(article);
    articleContainer.appendChild(articleCard);
  });

  // Add click event to new cards
  const cards = document.querySelectorAll('.article-card');
  cards.forEach(card => {
    card.addEventListener('click', function() {
      const articleId = this.getAttribute('data-id');
      openArticleModal(articleId);
    });
  });
}

// Create article card element
function createArticleCard(article) {
  const card = document.createElement('div');
  card.className = 'article-card';
  card.setAttribute('data-id', article.id);

  const categoryName = getCategoryName(article.category);

  card.innerHTML = `
    <div class="article-image">
      <img src="${article.image}" alt="${article.title}">
    </div>
    <div class="article-content">
      <span class="article-category">${categoryName}</span>
      <h3 class="article-title">${article.title}</h3>
      <p class="article-excerpt">${article.excerpt}</p>
      <div class="article-meta">
        <span class="article-author">${article.author}</span>
        <span class="article-date">${article.date}</span>
      </div>
    </div>
  `;

  return card;
}

// Initialize modal functionality
function initializeModal() {
  const modal = document.getElementById('article-modal');
  if (!modal) return;

  const closeBtn = document.querySelector('.close-modal');

  // Close modal when clicking on X
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // Close modal when clicking outside content
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Handle share buttons
  const shareButtons = document.querySelectorAll('.share-btn');
  shareButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Implement sharing functionality
      if (button.classList.contains('copy-link')) {
        copyArticleLink();
      }
    });
  });
}

// Open article modal
function openArticleModal(articleId) {
  const modal = document.getElementById('article-modal');
  const modalContent = document.getElementById('modal-article-content');

  if (!modal || !modalContent) return;

  // Find article by id
  const article = articles.find(article => article.id === parseInt(articleId));

  if (!article) return;

  // Fill modal with article content
  modalContent.innerHTML = `
    <h2>${article.title}</h2>
    <div class="article-info">
      <span class="article-category">${getCategoryName(article.category)}</span>
      <span class="article-author">${article.author}</span>
      <span class="article-date">${article.date}</span>
    </div>
    <div class="article-full-content">
      ${article.content}
    </div>
  `;

  // Show modal
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// Copy article link to clipboard
function copyArticleLink() {
  const dummy = document.createElement('input');
  document.body.appendChild(dummy);
  dummy.value = window.location.href;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);

  alert('لینک مقاله کپی شد!');
}

// Load Downloads
function loadDownloads(filter = 'all', customList = null) {
  const downloadsContainer = document.getElementById('downloads-container');
  if (!downloadsContainer) return;

  downloadsContainer.innerHTML = '';

  // اگر لیست سفارشی ارائه شده باشد از آن استفاده می‌کنیم، در غیر این صورت فیلتر را اعمال می‌کنیم
  const filteredDownloads = customList || (filter === 'all'
    ? downloads
    : downloads.filter(download => download.type === filter));

  // اگر در حالت جستجو هستیم، یک عنوان اضافه کنیم
  if (customList) {
    const searchTitle = document.createElement('div');
    searchTitle.style.width = '100%';
    searchTitle.style.textAlign = 'right';
    searchTitle.style.marginBottom = '30px';
    searchTitle.innerHTML = `<h3>فایل‌های یافت شده (${filteredDownloads.length} مورد)</h3>`;
    downloadsContainer.appendChild(searchTitle);
  }

  filteredDownloads.forEach((download, index) => {
    const downloadItem = document.createElement('div');
    downloadItem.className = 'download-item';
    downloadItem.style.animationDelay = `${index * 0.1}s`;
    downloadItem.classList.add('fade-in');

    downloadItem.innerHTML = `
      <div class="download-icon">
        <span class="material-icons">${download.icon}</span>
      </div>
      <h3 class="download-title">${download.title}</h3>
      <p class="download-info">${download.description}</p>
      <div class="download-meta">
        <span><span class="material-icons" style="font-size: 16px; margin-left: 5px;">description</span> ${download.size}</span>
        <span><span class="material-icons" style="font-size: 16px; margin-left: 5px;">date_range</span> ${download.date}</span>
      </div>
      <a href="${download.url}" class="download-button">
        <span class="material-icons" style="margin-left: 8px; font-size: 18px;">download</span>
        دانلود فایل
      </a>
    `;

    downloadsContainer.appendChild(downloadItem);
  });

  // اگر نتیجه‌ای یافت نشد
  if (filteredDownloads.length === 0) {
    const noResults = document.createElement('div');
    noResults.style.textAlign = 'center';
    noResults.style.padding = '50px 0';
    noResults.style.gridColumn = '1 / -1';
    noResults.innerHTML = `
      <span class="material-icons" style="font-size: 3rem; color: var(--secondary-text); margin-bottom: 20px;">folder_off</span>
      <h3>فایلی یافت نشد</h3>
      <p style="margin-top: 15px;">هیچ فایلی با این مشخصات در سیستم وجود ندارد</p>
    `;
    downloadsContainer.appendChild(noResults);
  }
}

// Download Filters
if (filters) {
  filters.forEach(filter => {
    filter.addEventListener('click', function() {
      // Remove active class from all filters
      filters.forEach(f => f.classList.remove('active'));

      // Add active class to clicked filter
      this.classList.add('active');

      // Get filter data and load downloads
      const filterData = this.getAttribute('data-filter');
      loadDownloads(filterData);
    });
  });
}


// ===== مختص صفحه برنامه‌ها =====
// فیلتر برنامه‌ها بر اساس سیستم‌عامل
const osFiltersApps = document.querySelectorAll('.os-filter');

if (osFiltersApps.length > 0) {
  osFiltersApps.forEach(filter => {
    filter.addEventListener('click', function() {
      // حذف کلاس active از همه فیلترها
      osFiltersApps.forEach(f => f.classList.remove('active'));

      // اضافه کردن کلاس active به فیلتر انتخاب شده
      this.classList.add('active');

      // گرفتن سیستم‌عامل انتخاب شده
      const os = this.getAttribute('data-os');

      // فیلتر کردن برنامه‌ها بر اساس سیستم‌عامل
      filterApps(os);
    });
  });
}

// فیلتر برنامه‌ها بر اساس دسته‌بندی
const categoryTabsApps = document.querySelectorAll('.tab');

if (categoryTabsApps.length > 0) {
  categoryTabsApps.forEach(tab => {
    tab.addEventListener('click', function() {
      // حذف کلاس active از همه تب‌ها
      categoryTabsApps.forEach(t => t.classList.remove('active'));

      // اضافه کردن کلاس active به تب انتخاب شده
      this.classList.add('active');

      // گرفتن دسته‌بندی انتخاب شده
      const category = this.getAttribute('data-category');

      // فیلتر کردن برنامه‌ها بر اساس دسته‌بندی
      filterAppsByCategory(category);
    });
  });
}

// تابع فیلتر برنامه‌ها بر اساس سیستم‌عامل
function filterApps(os) {
  const apps = document.querySelectorAll('.app-card');

  if (apps.length > 0) {
    apps.forEach(app => {
      const appOS = app.getAttribute('data-os');

      if (os === 'all' || appOS.includes(os)) {
        app.style.display = 'grid';
      } else {
        app.style.display = 'none';
      }
    });
  }
}

// تابع فیلتر برنامه‌ها بر اساس دسته‌بندی
function filterAppsByCategory(category) {
  const apps = document.querySelectorAll('.app-card');

  if (apps.length > 0) {
    apps.forEach(app => {
      const appCategory = app.getAttribute('data-category');

      if (category === 'all' || appCategory === category) {
        app.style.display = 'grid';
      } else {
        app.style.display = 'none';
      }
    });
  }
}

// پیمایش برنامه‌ها
const prevAppPage = document.getElementById('prev-app-page');
const nextAppPage = document.getElementById('next-app-page');
const appPageNumbers = document.getElementById('app-page-numbers');

if (prevAppPage && nextAppPage && appPageNumbers) {
  const pageNumbers = appPageNumbers.querySelectorAll('.page-number');

  pageNumbers.forEach(number => {
    number.addEventListener('click', function() {
      pageNumbers.forEach(n => n.classList.remove('active'));
      this.classList.add('active');

      // اینجا منطق پیمایش صفحات را پیاده‌سازی کنید
    });
  });

  nextAppPage.addEventListener('click', function() {
    const currentPage = appPageNumbers.querySelector('.page-number.active');
    const nextPage = currentPage.nextElementSibling;

    if (nextPage) {
      currentPage.classList.remove('active');
      nextPage.classList.add('active');

      if (!nextPage.nextElementSibling) {
        nextAppPage.disabled = true;
      }

      prevAppPage.disabled = false;
    }
  });

  prevAppPage.addEventListener('click', function() {
    const currentPage = appPageNumbers.querySelector('.page-number.active');
    const prevPage = currentPage.previousElementSibling;

    if (prevPage) {
      currentPage.classList.remove('active');
      prevPage.classList.add('active');

      if (!prevPage.previousElementSibling) {
        prevAppPage.disabled = true;
      }

      nextAppPage.disabled = false;
    }
  });
}

// نمایش مقالات بر اساس دسته‌بندی
function displayArticles(category) {
  const articlesContainer = document.getElementById('articles-container');
  if (!articlesContainer) return;

  const filteredArticles = getArticlesByCategory(category);
  articlesContainer.innerHTML = '';

  filteredArticles.forEach(article => {
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

    // تنظیم رویداد کلیک برای هر کارت مقاله
    articleCard.addEventListener('click', function() {
      openArticleModal(article.id);
    });
  });
}

// تنظیم تب‌های دسته‌بندی
function setupCategoryTabs() {
  const tabs = document.querySelectorAll('.category-tabs .tab');
  if (tabs.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // حذف کلاس فعال از همه تب‌ها
      tabs.forEach(t => t.classList.remove('active'));

      // اضافه کردن کلاس فعال به تب کلیک شده
      this.classList.add('active');

      // نمایش برنامه‌ها بر اساس دسته‌بندی انتخاب شده
      const category = this.getAttribute('data-category');
      filterApps(category);
    });
  });
}

// تنظیم فیلترهای سیستم‌عامل
function setupOsFilters() {
  const filters = document.querySelectorAll('.os-filter');
  if (filters.length === 0) return;

  filters.forEach(filter => {
    filter.addEventListener('click', function() {
      // حذف کلاس فعال از همه فیلترها
      filters.forEach(f => f.classList.remove('active'));

      // اضافه کردن کلاس فعال به فیلتر کلیک شده
      this.classList.add('active');

      // نمایش برنامه‌ها بر اساس سیستم‌عامل انتخاب شده
      const os = this.getAttribute('data-os');
      filterAppsByOS(os);
    });
  });
}

// تنظیم تب‌های دسته‌بندی برنامه‌ها
function setupAppCategoryTabs() {
  const tabs = document.querySelectorAll('.category-tabs .tab');
  if (tabs.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // حذف کلاس فعال از همه تب‌ها
      tabs.forEach(t => t.classList.remove('active'));

      // اضافه کردن کلاس فعال به تب کلیک شده
      this.classList.add('active');

      // نمایش برنامه‌ها بر اساس دسته‌بندی انتخاب شده
      const category = this.getAttribute('data-category');
      filterApps(category);
    });
  });
}

// فیلتر برنامه‌ها بر اساس دسته‌بندی
function filterApps(category) {
  const appCards = document.querySelectorAll('.app-card');
  if (appCards.length === 0) return;

  appCards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-category').includes(category)) {
      card.style.display = 'grid';
    } else {
      card.style.display = 'none';
    }
  });
}

// فیلتر برنامه‌ها بر اساس سیستم‌عامل
function filterAppsByOS(os) {
  const appCards = document.querySelectorAll('.app-card');
  if (appCards.length === 0) return;

  appCards.forEach(card => {
    if (os === 'all' || card.getAttribute('data-os').includes(os)) {
      card.style.display = 'grid';
    } else {
      card.style.display = 'none';
    }
  });
}

// تنظیم فیلترهای دسته‌بندی مقالات
function setupCategoryFilters() {
  const categories = document.querySelectorAll('.categories .category');
  if (categories.length === 0) return;

  categories.forEach(category => {
    category.addEventListener('click', function() {
      // حذف کلاس فعال از همه دسته‌بندی‌ها
      categories.forEach(c => c.classList.remove('active'));

      // اضافه کردن کلاس فعال به دسته‌بندی کلیک شده
      this.classList.add('active');

      // نمایش مقالات بر اساس دسته‌بندی انتخاب شده
      const categoryVal = this.getAttribute('data-category');
      displayArticles(categoryVal);
    });
  });
}

// مدال مقالات
function setupArticleModal() {
  const modal = document.getElementById('article-modal');
  const closeBtn = document.querySelector('.close-modal');

  if (!modal || !closeBtn) return;

  // بستن مدال با کلیک روی دکمه بستن
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // بستن مدال با کلیک خارج از محتوای مدال
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
}



// Load articles for specific page
function loadArticlesPage(pageNum) {
  const articleContainer = document.querySelector('.articles-container');
  if (!articleContainer) return;

  articleContainer.innerHTML = '';

  const articlesPerPage = 9;
  const startIndex = (pageNum - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;

  const pageArticles = articles.slice(startIndex, endIndex);

  pageArticles.forEach(article => {
    const articleCard = createArticleCard(article);
    articleContainer.appendChild(articleCard);
  });

  // Add click event to new cards
  const cards = document.querySelectorAll('.article-card');
  cards.forEach(card => {
    card.addEventListener('click', function() {
      const articleId = this.getAttribute('data-id');
      openArticleModal(articleId);
    });
  });
}

// Create article card element
function createArticleCard(article) {
  const card = document.createElement('div');
  card.className = 'article-card';
  card.setAttribute('data-id', article.id);

  const categoryName = getCategoryName(article.category);

  card.innerHTML = `
    <div class="article-image">
      <img src="${article.image}" alt="${article.title}">
    </div>
    <div class="article-content">
      <span class="article-category">${categoryName}</span>
      <h3 class="article-title">${article.title}</h3>
      <p class="article-excerpt">${article.excerpt}</p>
      <div class="article-meta">
        <span class="article-author">${article.author}</span>
        <span class="article-date">${article.date}</span>
      </div>
    </div>
  `;

  return card;
}

// Initialize modal functionality
function initializeModal() {
  const modal = document.getElementById('article-modal');
  if (!modal) return;

  const closeBtn = document.querySelector('.close-modal');

  // Close modal when clicking on X
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // Close modal when clicking outside content
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Handle share buttons
  const shareButtons = document.querySelectorAll('.share-btn');
  shareButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Implement sharing functionality
      if (button.classList.contains('copy-link')) {
        copyArticleLink();
      }
    });
  });
}

// Open article modal
function openArticleModal(articleId) {
  const modal = document.getElementById('article-modal');
  const modalContent = document.getElementById('modal-article-content');

  if (!modal || !modalContent) return;

  // Find article by id
  const article = articles.find(article => article.id === parseInt(articleId));

  if (!article) return;

  // Fill modal with article content
  modalContent.innerHTML = `
    <h2>${article.title}</h2>
    <div class="article-info">
      <span class="article-category">${getCategoryName(article.category)}</span>
      <span class="article-author">${article.author}</span>
      <span class="article-date">${article.date}</span>
    </div>
    <div class="article-full-content">
      ${article.content}
    </div>
  `;

  // Show modal
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// Copy article link to clipboard
function copyArticleLink() {
  const dummy = document.createElement('input');
  document.body.appendChild(dummy);
  dummy.value = window.location.href;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);

  alert('لینک مقاله کپی شد!');
}

// Load Downloads
function loadDownloads(filter = 'all', customList = null) {
  const downloadsContainer = document.getElementById('downloads-container');
  if (!downloadsContainer) return;

  downloadsContainer.innerHTML = '';

  // اگر لیست سفارشی ارائه شده باشد از آن استفاده می‌کنیم، در غیر این صورت فیلتر را اعمال می‌کنیم
  const filteredDownloads = customList || (filter === 'all'
    ? downloads
    : downloads.filter(download => download.type === filter));

  // اگر در حالت جستجو هستیم، یک عنوان اضافه کنیم
  if (customList) {
    const searchTitle = document.createElement('div');
    searchTitle.style.width = '100%';
    searchTitle.style.textAlign = 'right';
    searchTitle.style.marginBottom = '30px';
    searchTitle.innerHTML = `<h3>فایل‌های یافت شده (${filteredDownloads.length} مورد)</h3>`;
    downloadsContainer.appendChild(searchTitle);
  }

  filteredDownloads.forEach((download, index) => {
    const downloadItem = document.createElement('div');
    downloadItem.className = 'download-item';
    downloadItem.style.animationDelay = `${index * 0.1}s`;
    downloadItem.classList.add('fade-in');

    downloadItem.innerHTML = `
      <div class="download-icon">
        <span class="material-icons">${download.icon}</span>
      </div>
      <h3 class="download-title">${download.title}</h3>
      <p class="download-info">${download.description}</p>
      <div class="download-meta">
        <span><span class="material-icons" style="font-size: 16px; margin-left: 5px;">description</span> ${download.size}</span>
        <span><span class="material-icons" style="font-size: 16px; margin-left: 5px;">date_range</span> ${download.date}</span>
      </div>
      <a href="${download.url}" class="download-button">
        <span class="material-icons" style="margin-left: 8px; font-size: 18px;">download</span>
        دانلود فایل
      </a>
    `;

    downloadsContainer.appendChild(downloadItem);
  });

  // اگر نتیجه‌ای یافت نشد
  if (filteredDownloads.length === 0) {
    const noResults = document.createElement('div');
    noResults.style.textAlign = 'center';
    noResults.style.padding = '50px 0';
    noResults.style.gridColumn = '1 / -1';
    noResults.innerHTML = `
      <span class="material-icons" style="font-size: 3rem; color: var(--secondary-text); margin-bottom: 20px;">folder_off</span>
      <h3>فایلی یافت نشد</h3>
      <p style="margin-top: 15px;">هیچ فایلی با این مشخصات در سیستم وجود ندارد</p>
    `;
    downloadsContainer.appendChild(noResults);
  }
}

// Download Filters
if (filters) {
  filters.forEach(filter => {
    filter.addEventListener('click', function() {
      // Remove active class from all filters
      filters.forEach(f => f.classList.remove('active'));

      // Add active class to clicked filter
      this.classList.add('active');

      // Get filter data and load downloads
      const filterData = this.getAttribute('data-filter');
      loadDownloads(filterData);
    });
  });
}


// ===== مختص صفحه برنامه‌ها =====
// فیلتر برنامه‌ها بر اساس سیستم‌عامل
const osFiltersApps = document.querySelectorAll('.os-filter');

if (osFiltersApps.length > 0) {
  osFiltersApps.forEach(filter => {
    filter.addEventListener('click', function() {
      // حذف کلاس active از همه فیلترها
      osFiltersApps.forEach(f => f.classList.remove('active'));

      // اضافه کردن کلاس active به فیلتر انتخاب شده
      this.classList.add('active');

      // گرفتن سیستم‌عامل انتخاب شده
      const os = this.getAttribute('data-os');

      // فیلتر کردن برنامه‌ها بر اساس سیستم‌عامل
      filterApps(os);
    });
  });
}

// فیلتر برنامه‌ها بر اساس دسته‌بندی
const categoryTabsApps = document.querySelectorAll('.tab');

if (categoryTabsApps.length > 0) {
  categoryTabsApps.forEach(tab => {
    tab.addEventListener('click', function() {
      // حذف کلاس active از همه تب‌ها
      categoryTabsApps.forEach(t => t.classList.remove('active'));

      // اضافه کردن کلاس active به تب انتخاب شده
      this.classList.add('active');

      // گرفتن دسته‌بندی انتخاب شده
      const category = this.getAttribute('data-category');

      // فیلتر کردن برنامه‌ها بر اساس دسته‌بندی
      filterAppsByCategory(category);
    });
  });
}

// تابع فیلتر برنامه‌ها بر اساس سیستم‌عامل
function filterApps(os) {
  const apps = document.querySelectorAll('.app-card');

  if (apps.length > 0) {
    apps.forEach(app => {
      const appOS = app.getAttribute('data-os');

      if (os === 'all' || appOS.includes(os)) {
        app.style.display = 'grid';
      } else {
        app.style.display = 'none';
      }
    });
  }
}

// تابع فیلتر برنامه‌ها بر اساس دسته‌بندی
function filterAppsByCategory(category) {
  const apps = document.querySelectorAll('.app-card');

  if (apps.length > 0) {
    apps.forEach(app => {
      const appCategory = app.getAttribute('data-category');

      if (category === 'all' || appCategory === category) {
        app.style.display = 'grid';
      } else {
        app.style.display = 'none';
      }
    });
  }
}

// پیمایش برنامه‌ها
const prevAppPage = document.getElementById('prev-app-page');
const nextAppPage = document.getElementById('next-app-page');
const appPageNumbers = document.getElementById('app-page-numbers');

if (prevAppPage && nextAppPage && appPageNumbers) {
  const pageNumbers = appPageNumbers.querySelectorAll('.page-number');

  pageNumbers.forEach(number => {
    number.addEventListener('click', function() {
      pageNumbers.forEach(n => n.classList.remove('active'));
      this.classList.add('active');

      // اینجا منطق پیمایش صفحات را پیاده‌سازی کنید
    });
  });

  nextAppPage.addEventListener('click', function() {
    const currentPage = appPageNumbers.querySelector('.page-number.active');
    const nextPage = currentPage.nextElementSibling;

    if (nextPage) {
      currentPage.classList.remove('active');
      nextPage.classList.add('active');

      if (!nextPage.nextElementSibling) {
        nextAppPage.disabled = true;
      }

      prevAppPage.disabled = false;
    }
  });

  prevAppPage.addEventListener('click', function() {
    const currentPage = appPageNumbers.querySelector('.page-number.active');
    const prevPage = currentPage.previousElementSibling;

    if (prevPage) {
      currentPage.classList.remove('active');
      prevPage.classList.add('active');

      if (!prevPage.previousElementSibling) {
        prevAppPage.disabled = true;
      }

      nextAppPage.disabled = false;
    }
  });
}