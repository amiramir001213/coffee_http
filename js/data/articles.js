// Articles Data Module

// لیستی از مقالات
let articlesData = [
  {
    id: 1,
    title: 'امنیت وب: روش‌های محافظت از اپلیکیشن‌های تحت وب',
    excerpt: 'در این مقاله به بررسی بهترین روش‌های امنیت وب و مقابله با رایج‌ترین حملات سایبری می‌پردازیم.',
    category: 'security',
    categoryLabel: 'امنیت',
    image: 'https://source.unsplash.com/random/600x400/?cybersecurity',
    date: '۱۰ مرداد ۱۴۰۲',
    readTime: '۸ دقیقه',
    author: 'محمد امینی',
    content: `
      <h2>امنیت وب: روش‌های محافظت از اپلیکیشن‌های تحت وب</h2>
      <p>امنیت وب یکی از مهمترین جنبه‌های توسعه نرم‌افزار مدرن است. هر روز هزاران حمله سایبری به سایت‌های مختلف انجام می‌شود و آشنایی با روش‌های مقابله با آن‌ها برای هر توسعه‌دهنده ضروری است.</p>

      <h3>۱. حملات XSS و روش‌های مقابله</h3>
      <p>حملات Cross-Site Scripting یا XSS یکی از رایج‌ترین تهدیدات امنیتی هستند. در این نوع حمله، مهاجم کد مخرب را در قالب اسکریپت‌های جاوااسکریپت به سایت شما تزریق می‌کند. برای مقابله با این نوع حملات باید:</p>
      <ul>
        <li>ورودی‌های کاربر را به درستی اعتبارسنجی کنید</li>
        <li>از فیلترهای مناسب برای خروجی استفاده کنید</li>
        <li>هدرهای امنیتی مانند Content-Security-Policy را تنظیم کنید</li>
      </ul>

      <h3>۲. حملات SQL Injection</h3>
      <p>در این نوع حمله، مهاجم با دستکاری ورودی‌ها، کدهای SQL مخرب را به دیتابیس شما تزریق می‌کند. برای مقابله با این حملات:</p>
      <ul>
        <li>هرگز از رشته‌های الحاق شده برای ساخت کوئری‌های SQL استفاده نکنید</li>
        <li>از Prepared Statements استفاده کنید</li>
        <li>دسترسی‌های دیتابیس را محدود کنید</li>
      </ul>

      <h3>۳. احراز هویت دو مرحله‌ای</h3>
      <p>استفاده از احراز هویت دو مرحله‌ای (2FA) یکی از مؤثرترین روش‌های افزایش امنیت حساب‌های کاربری است. حتی اگر رمز عبور کاربر فاش شود، بدون دسترسی به عامل دوم (معمولاً تلفن همراه) امکان ورود وجود نخواهد داشت.</p>
    `
  },
  {
    id: 2,
    title: 'بهینه‌سازی عملکرد وب‌سایت با استفاده از تکنیک‌های مدرن',
    excerpt: 'راهنمای کامل برای افزایش سرعت بارگذاری و بهبود عملکرد وب‌سایت‌ها.',
    category: 'tech',
    categoryLabel: 'تکنولوژی',
    image: 'https://source.unsplash.com/random/600x400/?webdevelopment',
    date: '۵ مرداد ۱۴۰۲',
    readTime: '۱۲ دقیقه',
    author: 'علی محمدی',
    content: `
      <h2>بهینه‌سازی عملکرد وب‌سایت با استفاده از تکنیک‌های مدرن</h2>
      <p>عملکرد وب‌سایت یکی از مهم‌ترین فاکتورهای موفقیت در فضای آنلاین است. تحقیقات نشان می‌دهد که کاربران انتظار دارند یک سایت در کمتر از ۲ ثانیه بارگذاری شود و اگر بارگذاری بیش از ۳ ثانیه طول بکشد، بسیاری از کاربران سایت را ترک می‌کنند.</p>

      <h3>۱. بهینه‌سازی تصاویر</h3>
      <p>تصاویر معمولاً بزرگترین منابع روی صفحات وب هستند. با استفاده از این تکنیک‌ها می‌توانید حجم تصاویر را کاهش دهید:</p>
      <ul>
        <li>استفاده از فرمت‌های مناسب مثل WebP</li>
        <li>فشرده‌سازی تصاویر بدون از دست دادن کیفیت</li>
        <li>بارگذاری تنبل (Lazy Loading) برای تصاویر</li>
      </ul>

      <h3>۲. استفاده از CDN</h3>
      <p>شبکه‌های تحویل محتوا (CDN) به شما امکان می‌دهند فایل‌های استاتیک خود را در سرورهای مختلف در سراسر جهان توزیع کنید. این کار باعث می‌شود کاربران از نزدیک‌ترین سرور به خودشان فایل‌ها را دریافت کنند و سرعت بارگذاری افزایش یابد.</p>

      <h3>۳. مینیفای کردن CSS و JavaScript</h3>
      <p>حذف فضاهای خالی، کامنت‌ها و کاراکترهای غیرضروری از فایل‌های CSS و JavaScript می‌تواند حجم آن‌ها را تا ۳۰٪ کاهش دهد. از ابزارهایی مانند UglifyJS و CSSNano می‌توانید استفاده کنید.</p>
    `
  },
  {
    id: 3,
    title: 'آشنایی با هوش مصنوعی و کاربردهای آن در زندگی روزمره',
    excerpt: 'بررسی تأثیرات هوش مصنوعی بر زندگی روزمره و آینده این تکنولوژی.',
    category: 'tech',
    categoryLabel: 'تکنولوژی',
    image: 'https://source.unsplash.com/random/600x400/?ai,artificialintelligence',
    date: '۲ مرداد ۱۴۰۲',
    readTime: '۱۰ دقیقه',
    author: 'سارا احمدی',
    content: `
      <h2>آشنایی با هوش مصنوعی و کاربردهای آن در زندگی روزمره</h2>
      <p>هوش مصنوعی (AI) دیگر صرفاً یک مفهوم علمی-تخیلی نیست بلکه بخشی جدایی‌ناپذیر از زندگی روزمره ما شده است. از دستیارهای صوتی مانند سیری و الکسا گرفته تا الگوریتم‌های توصیه‌کننده نتفلیکس، همه از قدرت هوش مصنوعی بهره می‌برند.</p>

      <h3>۱. هوش مصنوعی در پزشکی</h3>
      <p>هوش مصنوعی به طور فزاینده‌ای در تشخیص بیماری‌ها، تحلیل تصاویر پزشکی و حتی طراحی داروهای جدید استفاده می‌شود. برای مثال:</p>
      <ul>
        <li>تشخیص سرطان با دقت بالاتر از پزشکان</li>
        <li>پیش‌بینی بیماری‌های قلبی با استفاده از داده‌های بیمار</li>
        <li>کشف و طراحی داروهای جدید در زمان بسیار کوتاه‌تر</li>
      </ul>

      <h3>۲. هوش مصنوعی در حمل و نقل</h3>
      <p>خودروهای خودران نمونه‌ای از کاربرد پیشرفته هوش مصنوعی هستند. شرکت‌هایی مانند تسلا، گوگل و اوبر در حال توسعه فناوری‌هایی هستند که می‌توانند ایمنی جاده‌ها را افزایش دهند و زمان سفر را کاهش دهند.</p>

      <h3>۳. هوش مصنوعی در خانه‌های هوشمند</h3>
      <p>خانه‌های هوشمند با استفاده از هوش مصنوعی می‌توانند الگوهای زندگی ساکنان را یاد بگیرند و خود را با نیازهای آن‌ها تطبیق دهند. تنظیم دما، روشنایی و حتی سفارش خودکار مواد غذایی از جمله قابلیت‌های این سیستم‌ها هستند.</p>
    `
  },
  {
    id: 4,
    title: 'آموزش برنامه‌نویسی پایتون برای مبتدیان',
    excerpt: 'راهنمای قدم به قدم یادگیری زبان برنامه‌نویسی پایتون از صفر تا صد.',
    category: 'tutorial',
    categoryLabel: 'آموزشی',
    image: 'https://source.unsplash.com/random/600x400/?python,coding',
    date: '۲۸ تیر ۱۴۰۲',
    readTime: '۱۵ دقیقه',
    author: 'امیر حسینی',
    content: `
      <h2>آموزش برنامه‌نویسی پایتون برای مبتدیان</h2>
      <p>پایتون یکی از محبوب‌ترین زبان‌های برنامه‌نویسی در دنیا است که به خاطر سادگی، خوانایی و انعطاف‌پذیری بالا شناخته می‌شود. از پایتون در حوزه‌های مختلفی مانند علم داده، هوش مصنوعی، توسعه وب و اتوماسیون استفاده می‌شود.</p>

      <h3>۱. نصب پایتون</h3>
      <p>اولین قدم برای شروع برنامه‌نویسی پایتون، نصب آن روی سیستم خود است. می‌توانید آخرین نسخه پایتون را از وب‌سایت رسمی آن دانلود کنید:</p>
      <pre>
        <code>
        # بررسی نصب بودن پایتون
        python --version

        # اجرای یک دستور ساده در محیط تعاملی پایتون
        python
        >>> print("Hello, World!")
        >>> exit()
        </code>
      </pre>

      <h3>۲. متغیرها و انواع داده در پایتون</h3>
      <p>پایتون یک زبان با تایپ پویا است، یعنی نیازی به اعلام نوع متغیر نیست:</p>
      <pre>
        <code>
        # تعریف متغیرها
        name = "Ali"
        age = 30
        height = 1.75
        is_student = True

        # نمایش نوع متغیرها
        print(type(name))      # &lt;class 'str'&gt;
        print(type(age))       # &lt;class 'int'&gt;
        print(type(height))    # &lt;class 'float'&gt;
        print(type(is_student)) # &lt;class 'bool'&gt;
        </code>
      </pre>

      <h3>۳. ساختارهای کنترلی</h3>
      <p>ساختارهای کنترلی در پایتون بسیار خوانا و ساده هستند:</p>
      <pre>
        <code>
        # ساختار شرطی
        x = 10
        if x > 5:
            print("x بزرگتر از 5 است")
        elif x == 5:
            print("x برابر 5 است")
        else:
            print("x کوچکتر از 5 است")

        # حلقه for
        fruits = ["apple", "banana", "cherry"]
        for fruit in fruits:
            print(fruit)

        # حلقه while
        i = 1
        while i <= 5:
            print(i)
            i += 1
        </code>
      </pre>
    `
  },
  {
    id: 5,
    title: 'مقدمه‌ای بر ارزهای دیجیتال و بلاکچین',
    excerpt: 'آشنایی با مفاهیم پایه‌ای ارزهای دیجیتال، بلاکچین و آینده اقتصاد دیجیتال.',
    category: 'tech',
    categoryLabel: 'تکنولوژی',
    image: 'https://source.unsplash.com/random/600x400/?cryptocurrency,blockchain',
    date: '۲۰ تیر ۱۴۰۲',
    readTime: '۱۴ دقیقه',
    author: 'رضا کریمی',
    content: `
      <h2>مقدمه‌ای بر ارزهای دیجیتال و بلاکچین</h2>
      <p>فناوری بلاکچین و ارزهای دیجیتال در سال‌های اخیر توجه زیادی را به خود جلب کرده‌اند. این فناوری‌ها نه تنها نحوه انجام تراکنش‌های مالی را متحول کرده‌اند، بلکه پتانسیل تغییر بنیادی در بسیاری از صنایع را دارند.</p>

      <h3>۱. بلاکچین چیست؟</h3>
      <p>بلاکچین یک دفتر کل توزیع‌شده است که تراکنش‌ها را در بلوک‌های به هم پیوسته ثبت می‌کند. ویژگی‌های کلیدی بلاکچین عبارتند از:</p>
      <ul>
        <li><strong>غیرمتمرکز بودن:</strong> اطلاعات روی هزاران کامپیوتر در سراسر جهان ذخیره می‌شوند</li>
        <li><strong>شفافیت:</strong> همه تراکنش‌ها برای تمام شبکه قابل مشاهده هستند</li>
        <li><strong>تغییرناپذیری:</strong> پس از ثبت یک تراکنش، تغییر آن تقریباً غیرممکن است</li>
      </ul>

      <h3>۲. بیت‌کوین: اولین ارز دیجیتال</h3>
      <p>بیت‌کوین در سال ۲۰۰۹ توسط فردی با نام مستعار ساتوشی ناکاموتو معرفی شد. این ارز دیجیتال مبتنی بر فناوری بلاکچین است و با هدف ایجاد یک سیستم پرداخت الکترونیکی بدون نیاز به واسطه‌های مالی طراحی شده است.</p>

      <h3>۳. انواع ارزهای دیجیتال</h3>
      <p>امروزه هزاران ارز دیجیتال مختلف وجود دارد که هر کدام کاربردهای خاص خود را دارند:</p>
      <ul>
        <li><strong>بیت‌کوین (BTC):</strong> اولین و بزرگترین ارز دیجیتال از نظر ارزش بازار</li>
        <li><strong>اتریوم (ETH):</strong> پلتفرمی برای قراردادهای هوشمند و برنامه‌های غیرمتمرکز</li>
        <li><strong>ریپل (XRP):</strong> طراحی شده برای تراکنش‌های بین‌المللی سریع</li>
        <li><strong>کاردانو (ADA):</strong> پلتفرم بلاکچین نسل سوم با تمرکز بر پایداری و مقیاس‌پذیری</li>
      </ul>
    `
  },
  {
    id: 6,
    title: 'امنیت اینترنت اشیا (IoT): چالش‌ها و راهکارها',
    excerpt: 'بررسی مسائل امنیتی در دستگاه‌های اینترنت اشیا و راهکارهای محافظت از آن‌ها.',
    category: 'security',
    categoryLabel: 'امنیت',
    image: 'https://source.unsplash.com/random/600x400/?iot,security',
    date: '۱۵ تیر ۱۴۰۲',
    readTime: '۹ دقیقه',
    author: 'مهدی طاهری',
    content: `
      <h2>امنیت اینترنت اشیا (IoT): چالش‌ها و راهکارها</h2>
      <p>با گسترش روزافزون دستگاه‌های متصل به اینترنت در خانه‌ها و محیط‌های کاری، تهدیدات امنیتی مرتبط با اینترنت اشیا (IoT) نیز افزایش یافته است. از دوربین‌های امنیتی هوشمند گرفته تا یخچال‌ها و ترموستات‌ها، همه این دستگاه‌ها می‌توانند هدف حملات سایبری قرار گیرند.</p>

      <h3>۱. چالش‌های امنیتی اینترنت اشیا</h3>
      <p>دستگاه‌های IoT با چالش‌های امنیتی منحصربه‌فردی روبرو هستند:</p>
      <ul>
        <li><strong>منابع محدود:</strong> بسیاری از دستگاه‌های IoT قدرت پردازش و حافظه محدودی دارند که اجرای الگوریتم‌های رمزنگاری پیچیده را دشوار می‌سازد</li>
        <li><strong>رمزهای عبور پیش‌فرض:</strong> بسیاری از کاربران رمزهای عبور پیش‌فرض دستگاه‌ها را تغییر نمی‌دهند</li>
        <li><strong>بروزرسانی‌های نامنظم:</strong> بسیاری از سازندگان دستگاه‌های IoT بروزرسانی‌های امنیتی منظم ارائه نمی‌دهند</li>
      </ul>

      <h3>۲. خطرات امنیتی اینترنت اشیا</h3>
      <p>تهدیدات امنیتی IoT می‌تواند منجر به پیامدهای جدی شود:</p>
      <ul>
        <li><strong>نقض حریم خصوصی:</strong> هک دوربین‌های امنیتی می‌تواند منجر به نظارت غیرمجاز شود</li>
        <li><strong>حملات DDoS:</strong> دستگاه‌های IoT هک شده می‌توانند بخشی از شبکه‌های بات‌نت برای انجام حملات DDoS باشند</li>
        <li><strong>تهدیدات فیزیکی:</strong> هک سیستم‌های هوشمند خانگی می‌تواند حتی به تهدیدات فیزیکی منجر شود</li>
      </ul>

      <h3>۳. راهکارهای امنیتی برای اینترنت اشیا</h3>
      <p>خوشبختانه راه‌های متعددی برای محافظت از دستگاه‌های IoT وجود دارد:</p>
      <ul>
        <li><strong>تغییر رمزهای عبور پیش‌فرض:</strong> اولین و مهم‌ترین اقدام امنیتی</li>
        <li><strong>بروزرسانی منظم:</strong> اطمینان از نصب آخرین بروزرسانی‌های امنیتی</li>
        <li><strong>شبکه مجزا:</strong> ایجاد یک شبکه Wi-Fi جداگانه برای دستگاه‌های IoT</li>
        <li><strong>استفاده از VPN:</strong> محافظت از ارتباطات دستگاه‌های IoT با استفاده از VPN</li>
      </ul>
    `
  }
];

// دیتای مقالات
// متغیر برای نگهداری مقالات
let articles = [];

// تابع برای دریافت نام دسته‌بندی
function getCategoryName(categoryCode) {
  const categories = {
    'all': 'همه',
    'tech': 'تکنولوژی',
    'security': 'امنیت',
    'tutorial': 'آموزشی',
    'programming': 'برنامه‌نویسی',
    'network': 'شبکه'
  };

  return categories[categoryCode] || categoryCode;
}

// باز کردن مدال مقاله
function openArticleModal(articleId) {
  const modal = document.getElementById('article-modal');
  const modalContent = document.getElementById('modal-article-content');

  if (!modal || !modalContent) return;

  const article = articles.find(article => article.id === articleId);

  if (!article) return;

  modalContent.innerHTML = `
    <div class="modal-header">
      <span class="article-category">${article.categoryLabel}</span>
      <h2>${article.title}</h2>
      <div class="article-meta">
        <span><span class="material-icons">calendar_today</span> ${article.date}</span>
        <span><span class="material-icons">timelapse</span> ${article.readTime} مطالعه</span>
        <span><span class="material-icons">person</span> ${article.author}</span>
      </div>
    </div>
    <div class="modal-body">
      ${article.content}
    </div>
  `;

  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';

  // بستن مدال با کلیک روی دکمه بستن
  const closeBtn = document.querySelector('.close-modal');
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    });
  }

  // بستن مدال با کلیک خارج از محتوا
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
}

// فیلتر مقالات بر اساس دسته‌بندی
function getArticlesByCategory(category = 'all') {
  if (category === 'all') {
    return articles;
  }
  return articles.filter(article => article.category === category);
}

// جستجو در مقالات
function searchArticles(term) {
  if (!term) return articles;

  const searchTerm = term.toLowerCase();
  return articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm) || 
    article.excerpt.toLowerCase().includes(searchTerm) ||
    (article.content && article.content.toLowerCase().includes(searchTerm))
  );
}

// تابع مقداردهی اولیه
function initializeArticles() {
  articles = articlesData;

  // نمایش مقالات در صفحه اصلی
  const homeArticlesContainer = document.getElementById('articles-container');
  if (homeArticlesContainer) {
    const articlesToShow = articles.slice(0, 3); // نمایش 3 مقاله در صفحه اصلی
    renderArticles(articlesToShow, homeArticlesContainer);
  }

  // نمایش مقالات در صفحه مقالات
  const articlesPageContainer = document.getElementById('articles-container');
  if (window.location.pathname.includes('articles.html') && articlesPageContainer) {
    renderArticles(articles, articlesPageContainer);
    setupArticleFilters();
    setupArticlePagination();
  }

  // راه‌اندازی مدال مقالات
  setupArticleModal();
}

// نمایش مقالات در کانتینر
function renderArticles(articlesArray, container) {
  if (!container) return;

  container.innerHTML = '';

  articlesArray.forEach((article, index) => {
    const articleCard = document.createElement('div');
    articleCard.className = 'article-card';
    articleCard.dataset.id = article.id;
    articleCard.style.animationDelay = `${index * 0.1}s`;
    articleCard.classList.add('slide-up');

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

    // اضافه کردن رویداد کلیک برای باز کردن مدال
    articleCard.addEventListener('click', function() {
      openArticleModal(article.id);
    });

    container.appendChild(articleCard);
  });
}

// راه‌اندازی فیلترهای مقالات
function setupArticleFilters() {
  const categoryButtons = document.querySelectorAll('.category');
  if (!categoryButtons.length) return;

  categoryButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const category = this.getAttribute('data-category');

      // تغییر کلاس active
      categoryButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // فیلتر و نمایش مقالات
      const filteredArticles = getArticlesByCategory(category);
      const articlesContainer = document.getElementById('articles-container');
      if (articlesContainer) {
        renderArticles(filteredArticles, articlesContainer);
      }
    });
  });
}

// راه‌اندازی پیجینیشن مقالات
function setupArticlePagination() {
  // پیاده‌سازی پیجینیشن بر اساس نیاز
}

// راه‌اندازی مدال مقالات
function setupArticleModal() {
  const modal = document.getElementById('article-modal');
  if (!modal) return;

  // بستن مدال با کلید Escape
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
}

// صادر کردن توابع و متغیرها
export { 
  articles, 
  getCategoryName, 
  openArticleModal, 
  getArticlesByCategory, 
  searchArticles,
  initializeArticles
};