
// Downloads Data Module

// لیستی از دانلودها
const downloadsData = [
  {
    id: 1,
    title: 'راهنمای امنیت سایبری',
    info: 'یک راهنمای کامل برای محافظت از دستگاه‌ها و اطلاعات شخصی در برابر تهدیدات آنلاین',
    type: 'pdf',
    size: '۲.۵ مگابایت',
    date: '۱۸ مرداد ۱۴۰۲',
    icon: 'picture_as_pdf',
    downloads: 1250
  },
  {
    id: 2,
    title: 'نرم‌افزار مانیتورینگ شبکه',
    info: 'ابزاری قدرتمند برای نظارت بر ترافیک شبکه و تشخیص مشکلات امنیتی',
    type: 'app',
    size: '۱۲ مگابایت',
    date: '۱۰ مرداد ۱۴۰۲',
    icon: 'analytics',
    downloads: 850
  },
  {
    id: 3,
    title: 'کتابچه آموزش لینوکس',
    info: 'آموزش گام به گام لینوکس از سطح مبتدی تا پیشرفته با مثال‌های کاربردی',
    type: 'pdf',
    size: '۵.۸ مگابایت',
    date: '۵ مرداد ۱۴۰۲',
    icon: 'book',
    downloads: 2100
  },
  {
    id: 4,
    title: 'راهنمای استفاده از VPN',
    info: 'آشنایی با شبکه‌های خصوصی مجازی و نحوه استفاده از آن‌ها برای افزایش امنیت',
    type: 'guide',
    size: '۱.۲ مگابایت',
    date: '۲ مرداد ۱۴۰۲',
    icon: 'vpn_lock',
    downloads: 3200
  },
  {
    id: 5,
    title: 'ابزار رمزنگاری فایل‌ها',
    info: 'نرم‌افزاری برای رمزگذاری و محافظت از فایل‌های شخصی و حساس',
    type: 'app',
    size: '۸.۵ مگابایت',
    date: '۲۵ تیر ۱۴۰۲',
    icon: 'enhanced_encryption',
    downloads: 1700
  },
  {
    id: 6,
    title: 'راهنمای مقدماتی هوش مصنوعی',
    info: 'معرفی مفاهیم پایه هوش مصنوعی و کاربردهای آن در زندگی روزمره',
    type: 'pdf',
    size: '۴.۲ مگابایت',
    date: '۱۵ تیر ۱۴۰۲',
    icon: 'psychology',
    downloads: 1850
  }
];

// متغیر برای نگهداری دانلودها
let downloads = [];

// دریافت دانلودها براساس فیلتر
function getDownloadsByFilter(filter = 'all') {
  if (filter === 'all') {
    return downloads;
  }
  return downloads.filter(download => download.type === filter);
}

// نمایش دانلودها
function renderDownloads(downloadsArray, container) {
  if (!container) return;
  
  container.innerHTML = '';
  
  downloadsArray.forEach((download, index) => {
    const downloadItem = document.createElement('div');
    downloadItem.className = 'download-item';
    downloadItem.style.animationDelay = `${index * 0.1}s`;
    downloadItem.classList.add('slide-up');
    
    downloadItem.innerHTML = `
      <span class="material-icons download-icon">${download.icon}</span>
      <h3 class="download-title">${download.title}</h3>
      <p class="download-info">${download.info}</p>
      <div class="download-meta">
        <span>${download.size}</span>
        <span>${download.downloads} دانلود</span>
      </div>
      <button class="download-button">
        <span class="material-icons">download</span>
        دانلود فایل
      </button>
    `;
    
    container.appendChild(downloadItem);
  });
}

// مقداردهی اولیه
function initializeDownloads() {
  downloads = downloadsData;
  
  const downloadsContainer = document.getElementById('downloads-container');
  if (downloadsContainer) {
    renderDownloads(downloads, downloadsContainer);
    
    // راه‌اندازی فیلترها
    const filterButtons = document.querySelectorAll('.downloads-filters .filter');
    if (filterButtons.length) {
      filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
          const filter = this.getAttribute('data-filter');
          
          // تغییر کلاس active
          filterButtons.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          
          // فیلتر و نمایش دانلودها
          const filteredDownloads = getDownloadsByFilter(filter);
          renderDownloads(filteredDownloads, downloadsContainer);
        });
      });
    }
  }
}

// صادر کردن توابع و متغیرها
export { 
  downloads,
  getDownloadsByFilter,
  initializeDownloads
};
