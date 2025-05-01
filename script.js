// Sample data - در پروژه واقعی این داده‌ها از سرور لود می‌شوند
const articles = [
  {
    id: 1,
    title: "نحوه استفاده از VPN برای امنیت بیشتر",
    excerpt: "در این مقاله با روش‌های استفاده از VPN برای افزایش امنیت آنلاین آشنا می‌شوید...",
    content: `<h1>نحوه استفاده از VPN برای امنیت بیشتر</h1>
              <p>با گسترش اینترنت و افزایش تهدیدات امنیتی، استفاده از VPN یکی از ضروری‌ترین اقدامات برای حفظ حریم خصوصی است. VPN یا شبکه خصوصی مجازی به شما امکان می‌دهد تا با ایجاد یک تونل امن، داده‌های خود را محافظت کنید.</p>
              <h2>VPN چگونه کار می‌کند؟</h2>
              <p>VPN با رمزگذاری ترافیک اینترنتی شما و مخفی کردن آدرس IP واقعی شما، امنیت و حریم خصوصی را تضمین می‌کند. این کار باعث می‌شود فعالیت‌های آنلاین شما از دید اشخاص ثالث، ISP‌ها و حتی هکرها پنهان بماند.</p>
              <h2>مزایای استفاده از VPN</h2>
              <ul>
                <li>حفظ حریم خصوصی و ناشناس ماندن در فضای مجازی</li>
                <li>دسترسی به محتوای محدود شده جغرافیایی</li>
                <li>محافظت از اطلاعات حساس در شبکه‌های عمومی Wi-Fi</li>
                <li>جلوگیری از ردیابی توسط سایت‌ها و شرکت‌های تبلیغاتی</li>
              </ul>
              <h2>چگونه یک VPN خوب انتخاب کنیم؟</h2>
              <p>در انتخاب VPN باید به فاکتورهایی مانند سرعت، امنیت، سیاست عدم نگهداری لاگ، قیمت و پشتیبانی از دستگاه‌های مختلف توجه کرد. همچنین اطمینان از اینکه سرویس دهنده VPN پروتکل‌های قوی رمزگذاری مانند OpenVPN یا WireGuard را پشتیبانی می‌کند، بسیار مهم است.</p>`,
    category: "security",
    image: "https://source.unsplash.com/random/600x400/?vpn,security",
    date: "۲ مرداد ۱۴۰۲",
    author: "محمد امینی"
  },
  {
    id: 2,
    title: "معرفی بهترین ابزارهای برنامه‌نویسی در سال ۲۰۲۳",
    excerpt: "برترین IDE‌ها، فریم‌ورک‌ها و ابزارهای توسعه که هر برنامه‌نویسی باید بشناسد...",
    content: `<h1>معرفی بهترین ابزارهای برنامه‌نویسی در سال ۲۰۲۳</h1>
              <p>دنیای برنامه‌نویسی همواره در حال تغییر و پیشرفت است. در این مقاله، بهترین ابزارهای برنامه‌نویسی سال ۲۰۲۳ را معرفی می‌کنیم که می‌توانند بهره‌وری شما را افزایش دهند.</p>
              <h2>محیط‌های توسعه یکپارچه (IDE)</h2>
              <p>محیط‌های توسعه یکپارچه ابزارهای قدرتمندی هستند که کار برنامه‌نویسی را بسیار راحت‌تر می‌کنند:</p>
              <ul>
                <li><strong>Visual Studio Code:</strong> یک IDE سبک و قدرتمند با پشتیبانی از اکستنشن‌های متنوع</li>
                <li><strong>JetBrains IDEs:</strong> مجموعه‌ای از IDE‌های تخصصی برای زبان‌های مختلف مانند IntelliJ IDEA، PyCharm و WebStorm</li>
                <li><strong>Neovim:</strong> نسخه مدرن و پیشرفته ویرایشگر Vim با قابلیت‌های IDE</li>
              </ul>
              <h2>فریم‌ورک‌های محبوب</h2>
              <p>فریم‌ورک‌ها به توسعه‌دهندگان کمک می‌کنند تا سریع‌تر و با کد کمتر، برنامه‌های پیچیده بسازند:</p>
              <ul>
                <li><strong>React و Next.js:</strong> برای توسعه رابط کاربری وب</li>
                <li><strong>Django و Flask:</strong> برای توسعه وب با Python</li>
                <li><strong>Flutter:</strong> برای توسعه اپلیکیشن‌های موبایل چند پلتفرمی</li>
              </ul>
              <h2>ابزارهای DevOps</h2>
              <p>ابزارهای DevOps به خودکارسازی فرآیندهای توسعه و استقرار کمک می‌کنند:</p>
              <ul>
                <li><strong>Docker و Kubernetes:</strong> برای کانتینرسازی و اجرای توزیع‌شده برنامه‌ها</li>
                <li><strong>GitHub Actions:</strong> برای خودکارسازی CI/CD</li>
                <li><strong>Terraform:</strong> برای مدیریت زیرساخت به عنوان کد</li>
              </ul>`,
    category: "tech",
    image: "https://source.unsplash.com/random/600x400/?coding,programming",
    date: "۱۵ تیر ۱۴۰۲",
    author: "سارا حسینی"
  },
  {
    id: 3,
    title: "آموزش گام به گام نصب و راه‌اندازی لینوکس اوبونتو",
    excerpt: "راهنمای کامل نصب و پیکربندی اوبونتو برای کاربران مبتدی تا حرفه‌ای...",
    content: `<h1>آموزش گام به گام نصب و راه‌اندازی لینوکس اوبونتو</h1>
              <p>لینوکس اوبونتو یکی از محبوب‌ترین توزیع‌های لینوکس است که به دلیل سادگی استفاده و پشتیبانی گسترده، گزینه خوبی برای کاربران مبتدی محسوب می‌شود. در این آموزش، مراحل نصب و راه‌اندازی اوبونتو را به صورت گام به گام شرح می‌دهیم.</p>
              <h2>پیش‌نیازها</h2>
              <ul>
                <li>یک کامپیوتر با حداقل ۴ گیگابایت رم و ۲۵ گیگابایت فضای خالی هارد دیسک</li>
                <li>یک فلش مموری ۴ گیگابایتی یا بیشتر</li>
                <li>دانلود فایل ISO اوبونتو از سایت رسمی</li>
              </ul>
              <h2>مرحله ۱: ساخت درایو بوت</h2>
              <p>ابتدا باید فایل ISO را روی فلش مموری بنویسید. برای این کار می‌توانید از نرم‌افزارهایی مانند Rufus در ویندوز یا Etcher استفاده کنید. پس از انتخاب فایل ISO و درایو فلش، روی گزینه Start کلیک کنید و منتظر بمانید تا فرآیند نوشتن تمام شود.</p>
              <h2>مرحله ۲: بوت از روی فلش مموری</h2>
              <p>کامپیوتر را روشن کنید و وارد تنظیمات BIOS شوید (معمولاً با فشردن کلیدهایی مانند F2، F12 یا Del هنگام روشن شدن). اولویت بوت را به گونه‌ای تغییر دهید که سیستم از فلش مموری بوت شود.</p>
              <h2>مرحله ۳: شروع نصب</h2>
              <p>پس از بوت شدن از روی فلش، روی گزینه "Install Ubuntu" کلیک کنید. زبان، منطقه زمانی و نوع صفحه‌کلید را انتخاب کنید. در مرحله بعد می‌توانید انتخاب کنید که آیا می‌خواهید به صورت همزمان با نصب، آپدیت‌ها و نرم‌افزارهای جانبی نیز نصب شوند یا خیر.</p>
              <h2>مرحله ۴: تنظیم پارتیشن‌ها</h2>
              <p>در این مرحله می‌توانید انتخاب کنید که اوبونتو را به عنوان تنها سیستم‌عامل نصب کنید یا در کنار سیستم‌عامل فعلی (Dual Boot). اگر حرفه‌ای هستید، می‌توانید گزینه "Something else" را انتخاب کرده و پارتیشن‌بندی را به صورت دستی انجام دهید.</p>
              <h2>مرحله ۵: تکمیل نصب</h2>
              <p>اطلاعات کاربری مانند نام، نام کاربری و رمز عبور را وارد کنید و منتظر بمانید تا فرآیند نصب تکمیل شود. پس از پایان نصب، سیستم را ریستارت کنید و فلش مموری را جدا کنید.</p>
              <h2>مرحله ۶: تنظیمات پس از نصب</h2>
              <p>پس از نصب، می‌توانید سیستم را آپدیت کنید، درایورهای مورد نیاز را نصب کنید و نرم‌افزارهای مورد نیاز خود را از Ubuntu Software Center یا با استفاده از ترمینال و دستور apt-get نصب کنید.</p>`,
    category: "tutorial",
    image: "https://source.unsplash.com/random/600x400/?linux,ubuntu",
    date: "۱۰ مرداد ۱۴۰۲",
    author: "علی کریمی"
  },
  {
    id: 4,
    title: "روش‌های پیشرفته امنیت سایبری برای کسب‌وکارها",
    excerpt: "استراتژی‌های حفاظت از داده‌ها و مقابله با حملات سایبری در کسب‌وکارهای امروزی...",
    content: `<h1>روش‌های پیشرفته امنیت سایبری برای کسب‌وکارها</h1>
              <p>با افزایش حملات سایبری، حفاظت از داده‌ها و سیستم‌های کسب‌وکارها بیش از پیش اهمیت پیدا کرده است. در این مقاله، روش‌های پیشرفته امنیت سایبری برای محافظت از کسب‌وکارها را بررسی می‌کنیم.</p>
              <h2>پیاده‌سازی رویکرد امنیتی چندلایه</h2>
              <p>امنیت چندلایه به این معنی است که از چندین مکانیزم امنیتی متفاوت برای محافظت از سیستم‌ها استفاده می‌شود. این لایه‌ها می‌توانند شامل موارد زیر باشند:</p>
              <ul>
                <li>فایروال‌ها و سیستم‌های تشخیص و جلوگیری از نفوذ (IDS/IPS)</li>
                <li>رمزگذاری داده‌ها در حالت استراحت و انتقال</li>
                <li>احراز هویت چندعاملی (MFA)</li>
                <li>کنترل دسترسی مبتنی بر نقش (RBAC)</li>
                <li>آنتی‌ویروس و ضدبدافزار پیشرفته</li>
              </ul>
              <h2>آموزش کارکنان و ایجاد فرهنگ امنیتی</h2>
              <p>بسیاری از حملات سایبری از طریق مهندسی اجتماعی و فیشینگ آغاز می‌شوند. آموزش مداوم کارکنان در مورد تهدیدات امنیتی و روش‌های شناسایی و پاسخ به آنها می‌تواند خط دفاعی قدرتمندی ایجاد کند:</p>
              <ul>
                <li>برگزاری دوره‌های آموزشی منظم درباره امنیت سایبری</li>
                <li>شبیه‌سازی حملات فیشینگ برای آزمایش و آموزش کارکنان</li>
                <li>ایجاد فرآیندهای شفاف برای گزارش حوادث امنیتی</li>
              </ul>
              <h2>پیاده‌سازی مدیریت وصله امنیتی</h2>
              <p>بسیاری از حملات سایبری از آسیب‌پذیری‌های شناخته شده در نرم‌افزارها و سیستم‌عامل‌ها سوء استفاده می‌کنند. یک برنامه منظم برای نصب وصله‌های امنیتی می‌تواند این خطرات را کاهش دهد:</p>
              <ul>
                <li>بررسی و ارزیابی منظم آسیب‌پذیری‌ها</li>
                <li>ایجاد فرآیندی برای نصب سریع وصله‌های حیاتی</li>
                <li>آزمایش وصله‌ها قبل از اعمال آنها در محیط تولید</li>
              </ul>
              <h2>تدوین و آزمایش طرح واکنش به حوادث</h2>
              <p>داشتن یک طرح واکنش به حوادث امنیتی می‌تواند آسیب ناشی از نقض امنیتی را کاهش دهد:</p>
              <ul>
                <li>تعیین نقش‌ها و مسئولیت‌ها در هنگام وقوع حادثه</li>
                <li>مستندسازی مراحل شناسایی، مهار، ریشه‌کنی و بازیابی</li>
                <li>آزمایش منظم طرح با شبیه‌سازی حوادث امنیتی</li>
              </ul>`,
    category: "security",
    image: "https://source.unsplash.com/random/600x400/?cybersecurity,hacker",
    date: "۵ تیر ۱۴۰۲",
    author: "زهرا محمدی"
  },
  {
    id: 5,
    title: "مقایسه فریم‌ورک‌های جاوااسکریپت برای توسعه وب",
    excerpt: "بررسی و مقایسه React، Vue و Angular: کدام برای پروژه شما مناسب‌تر است؟",
    content: `<h1>مقایسه فریم‌ورک‌های جاوااسکریپت برای توسعه وب</h1>
              <p>فریم‌ورک‌های جاوااسکریپت نقش مهمی در توسعه وب مدرن دارند. در این مقاله، سه فریم‌ورک محبوب React، Vue و Angular را بررسی و مقایسه می‌کنیم.</p>
              <h2>React</h2>
              <p>React یک کتابخانه جاوااسکریپت برای ساخت رابط کاربری است که توسط فیسبوک توسعه یافته و در سال 2013 منتشر شد.</p>
              <h3>نقاط قوت:</h3>
              <ul>
                <li>انعطاف‌پذیری بالا</li>
                <li>اکوسیستم گسترده و کتابخانه‌های متنوع</li>
                <li>پشتیبانی از مفهوم Virtual DOM برای عملکرد بهتر</li>
                <li>جامعه بزرگ و فعال</li>
              </ul>
              <h3>نقاط ضعف:</h3>
              <ul>
                <li>منحنی یادگیری نسبتاً تند (به ویژه با Redux)</li>
                <li>نیاز به کتابخانه‌های جانبی برای مدیریت حالت‌ها و مسیریابی</li>
              </ul>
              <h2>Vue.js</h2>
              <p>Vue یک فریم‌ورک پیشرو برای ساخت رابط کاربری است که در سال 2014 توسط Evan You ایجاد شد.</p>
              <h3>نقاط قوت:</h3>
              <ul>
                <li>منحنی یادگیری ملایم</li>
                <li>ادغام آسان با پروژه‌های موجود</li>
                <li>مستندات عالی و جامع</li>
                <li>ساختار کد سازمان‌یافته و منظم</li>
              </ul>
              <h3>نقاط ضعف:</h3>
              <ul>
                <li>اکوسیستم کوچک‌تر نسبت به React</li>
                <li>پشتیبانی کمتر از شرکت‌های بزرگ</li>
              </ul>
              <h2>Angular</h2>
              <p>Angular یک فریم‌ورک توسعه وب مبتنی بر TypeScript است که توسط گوگل پشتیبانی می‌شود.</p>
              <h3>نقاط قوت:</h3>
              <ul>
                <li>ارائه یک راه‌حل کامل با همه ابزارهای مورد نیاز</li>
                <li>پشتیبانی از معماری MVC</li>
                <li>ادغام خوب با TypeScript</li>
                <li>پشتیبانی قوی برای توسعه برنامه‌های بزرگ مقیاس</li>
              </ul>
              <h3>نقاط ضعف:</h3>
              <ul>
                <li>منحنی یادگیری تند</li>
                <li>حجم زیاد کد و پیچیدگی</li>
                <li>عملکرد گاهی ضعیف‌تر در برنامه‌های کوچک</li>
              </ul>
              <h2>کدام فریم‌ورک را انتخاب کنیم؟</h2>
              <p>انتخاب فریم‌ورک مناسب به عوامل مختلفی بستگی دارد:</p>
              <ul>
                <li><strong>برای پروژه‌های کوچک و متوسط:</strong> Vue.js به دلیل سادگی و انعطاف‌پذیری</li>
                <li><strong>برای اپلیکیشن‌های پیچیده و بزرگ:</strong> Angular به دلیل ارائه راه‌حل کامل</li>
                <li><strong>برای انعطاف‌پذیری و قابلیت توسعه:</strong> React به دلیل اکوسیستم قوی</li>
              </ul>`,
    category: "tech",
    image: "https://source.unsplash.com/random/600x400/?javascript,coding",
    date: "۲۰ تیر ۱۴۰۲",
    author: "مهدی رضایی"
  },
  {
    id: 6,
    title: "راهنمای کامل ورود به دنیای ارزهای دیجیتال",
    excerpt: "همه آنچه باید درباره بیت کوین، اتریوم و سایر ارزهای دیجیتال بدانید...",
    content: `<h1>راهنمای کامل ورود به دنیای ارزهای دیجیتال</h1>
              <p>ارزهای دیجیتال انقلابی در دنیای مالی ایجاد کرده‌اند. در این راهنما، اطلاعات پایه‌ای برای ورود به دنیای ارزهای دیجیتال را ارائه می‌دهیم.</p>
              <h2>ارزهای دیجیتال چیست؟</h2>
              <p>ارزهای دیجیتال، دارایی‌های دیجیتالی هستند که از رمزنگاری برای امنیت استفاده می‌کنند. بر خلاف ارزهای سنتی، ارزهای دیجیتال معمولاً غیرمتمرکز هستند و توسط یک نهاد مرکزی مانند بانک مرکزی کنترل نمی‌شوند.</p>
              <h2>بیت کوین</h2>
              <p>بیت کوین اولین و محبوب‌ترین ارز دیجیتال است که در سال 2009 توسط شخص یا گروهی با نام مستعار ساتوشی ناکاموتو معرفی شد. بیت کوین از فناوری بلاکچین استفاده می‌کند و تعداد آن محدود به 21 میلیون واحد است.</p>
              <h2>اتریوم</h2>
              <p>اتریوم دومین ارز دیجیتال بزرگ از نظر ارزش بازار است. بر خلاف بیت کوین که عمدتاً به عنوان ذخیره ارزش استفاده می‌شود، اتریوم یک پلتفرم است که امکان ایجاد قراردادهای هوشمند و برنامه‌های غیرمتمرکز (DApps) را فراهم می‌کند.</p>
              <h2>چگونه شروع کنیم؟</h2>
              <ol>
                <li><strong>آموزش:</strong> قبل از هر اقدامی، درباره ارزهای دیجیتال و فناوری بلاکچین مطالعه کنید.</li>
                <li><strong>کیف پول:</strong> یک کیف پول دیجیتال ایجاد کنید. کیف پول‌ها می‌توانند سخت‌افزاری، نرم‌افزاری یا کاغذی باشند.</li>
                <li><strong>صرافی:</strong> در یک صرافی معتبر ارزهای دیجیتال ثبت‌نام کنید تا بتوانید ارزهای دیجیتال را خرید و فروش کنید.</li>
                <li><strong>امنیت:</strong> از روش‌های امنیتی مانند احراز هویت دو عاملی استفاده کنید و کلیدهای خصوصی خود را در مکانی امن نگهداری کنید.</li>
              </ol>
              <h2>خطرات و ملاحظات</h2>
              <ul>
                <li><strong>نوسانات قیمت:</strong> بازار ارزهای دیجیتال بسیار نوسان‌پذیر است.</li>
                <li><strong>کلاهبرداری:</strong> مراقب طرح‌های کلاهبرداری و پروژه‌های جعلی باشید.</li>
                <li><strong>مسائل قانونی:</strong> از وضعیت قانونی ارزهای دیجیتال در کشور خود آگاه باشید.</li>
                <li><strong>مدیریت ریسک:</strong> فقط مقداری سرمایه‌گذاری کنید که توان از دست دادن آن را دارید.</li>
              </ul>`,
    category: "tutorial",
    image: "https://source.unsplash.com/random/600x400/?bitcoin,cryptocurrency",
    date: "۲۵ تیر ۱۴۰۲",
    author: "رضا جعفری"
  }
];

const downloads = [
  {
    id: 1,
    title: "راهنمای امنیت اینترنت",
    description: "یک راهنمای جامع برای حفظ امنیت در فضای مجازی",
    type: "pdf",
    size: "2.5 MB",
    date: "۱۰ خرداد ۱۴۰۴",
    icon: "description",
    url: "#"
  },
  {
    id: 2,
    title: "نرم‌افزار مدیریت پسوردها",
    description: "اپلیکیشن امن برای ذخیره‌سازی و مدیریت رمزهای عبور",
    type: "app",
    size: "15 MB",
    date: "۵ تیر ۱۴۰۴",
    icon: "lock",
    url: "#"
  },
  {
    id: 3,
    title: "آموزش نصب فیلترشکن",
    description: "راهنمای قدم به قدم تصویری نصب و راه‌اندازی فیلترشکن",
    type: "pdf",
    size: "4.2 MB",
    date: "۲۰ اردیبهشت ۱۴۰۴",
    icon: "import_contacts",
    url: "#"
  },
  {
    id: 4,
    title: "کلاینت VPN مولتی پلتفرم",
    description: "نرم‌افزار VPN سازگار با ویندوز، مک و لینوکس",
    type: "app",
    size: "25 MB",
    date: "۲ تیر ۱۴۰۴",
    icon: "public",
    url: "#"
  },
  {
    id: 5,
    title: "راهنمای ناشناس ماندن در اینترنت",
    description: "تکنیک‌های حرفه‌ای برای حفظ حریم خصوصی آنلاین",
    type: "guide",
    size: "1.8 MB",
    date: "۱۵ خرداد ۱۴۰۴",
    icon: "visibility_off",
    url: "#"
  },
  {
    id: 6,
    title: "ابزار بررسی امنیت شبکه",
    description: "نرم‌افزار تست نفوذ و بررسی آسیب‌پذیری‌های شبکه",
    type: "app",
    size: "35 MB",
    date: "۸ فروردین ۱۴۰۴",
    icon: "security",
    url: "#"
  },
  {
    id: 7,
    title: "مقاله علمی درباره رمزنگاری",
    description: "پژوهش درباره روش‌های نوین رمزنگاری و کاربردهای آن",
    type: "pdf",
    size: "3.1 MB",
    date: "۲۲ اردیبهشت ۱۴۰۴",
    icon: "article",
    url: "#"
  },
  {
    id: 8,
    title: "راهنمای استفاده از تور",
    description: "آموزش استفاده از شبکه Tor برای دسترسی ناشناس به اینترنت",
    type: "guide",
    size: "2.2 MB",
    date: "۷ تیر ۱۴۰۴",
    icon: "travel_explore",
    url: "#"
  }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // اضافه کردن شماره ترتیب به آیتم‌های منو برای انیمیشن
    const menuItems = document.querySelectorAll('.nav-menu li');
    menuItems.forEach((item, index) => {
      item.style.setProperty('--item-index', index);
    });
  // ===== مقادیر ثابت و داده‌ها برای صفحات =====
  // دسته‌بندی‌های برنامه‌ها
  const appCategories = ['all', 'security', 'vpn', 'utility', 'productivity', 'multimedia'];
  // سیستم‌عامل‌ها برای فیلتر برنامه‌ها
  const operatingSystems = ['all', 'windows', 'mac', 'android', 'ios', 'linux'];

  // ===== عملکردهای عمومی =====
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }

  // Articles Section
  const articlesContainer = document.getElementById('articles-container');
  const categories = document.querySelectorAll('.category');

  // Load Articles
  function loadArticles(category = 'all') {
    if (!articlesContainer) return;

    articlesContainer.innerHTML = '';

    const filteredArticles = category === 'all' 
      ? articles 
      : articles.filter(article => article.category === category);

    filteredArticles.forEach((article, index) => {
      const articleCard = document.createElement('div');
      articleCard.className = 'article-card';
      articleCard.setAttribute('data-id', article.id);
      articleCard.style.animationDelay = `${index * 0.1}s`;
      articleCard.classList.add('slide-up');

      articleCard.innerHTML = `
        <div class="article-image">
          <img src="${article.image}" alt="${article.title}">
        </div>
        <div class="article-content">
          <span class="article-category">${getCategoryName(article.category)}</span>
          <h3 class="article-title">${article.title}</h3>
          <p class="article-excerpt">${article.excerpt}</p>
          <div class="article-meta">
            <span><span class="material-icons" style="font-size: 14px; margin-left: 5px;">person</span>${article.author}</span>
            <span><span class="material-icons" style="font-size: 14px; margin-left: 5px;">calendar_today</span>${article.date}</span>
          </div>
        </div>
      `;

      articlesContainer.appendChild(articleCard);

      // Add click event to open article
      articleCard.addEventListener('click', function() {
        openArticleModal(article);
      });
    });
  }

  // Helper function to get category name in Persian
  function getCategoryName(category) {
    const categoryNames = {
      'tech': 'تکنولوژی',
      'security': 'امنیت',
      'tutorial': 'آموزشی'
    };

    return categoryNames[category] || category;
  }

  // Category Filters
  if (categories) {
    categories.forEach(category => {
      category.addEventListener('click', function() {
        // Remove active class from all categories
        categories.forEach(c => c.classList.remove('active'));

        // Add active class to clicked category
        this.classList.add('active');

        // Get category data and load articles
        const categoryData = this.getAttribute('data-category');
        loadArticles(categoryData);
      });
    });
  }

  // Downloads Section
  const downloadsContainer = document.getElementById('downloads-container');
  const filters = document.querySelectorAll('.filter');

  // Load Downloads
  function loadDownloads(filter = 'all', customList = null) {
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

  // Article Modal
  const modal = document.getElementById('article-modal');
  const modalContent = document.getElementById('modal-article-content');
  const closeModal = document.querySelector('.close-modal');

  function openArticleModal(article) {
    if (!modal || !modalContent) return;

    modalContent.innerHTML = article.content;
    modal.style.display = 'block';

    // Handle share buttons
    const shareButtons = document.querySelectorAll('.share-btn');

    if (shareButtons) {
      const shareUrl = window.location.href;
      const shareTitle = article.title;

      shareButtons.forEach(button => {
        button.addEventListener('click', function() {
          if (this.classList.contains('telegram')) {
            window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, '_blank');
          } else if (this.classList.contains('twitter')) {
            window.open(`https://x.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, '_blank');
          } else if (this.classList.contains('whatsapp')) {
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`, '_blank');
          } else if (this.classList.contains('copy-link')) {
            navigator.clipboard.writeText(shareUrl).then(() => {
              alert('لینک مقاله کپی شد!');
            });
          }
        });
      });
    }
  }

  // Close modal
  if (closeModal) {
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }

  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Search Functionality
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const searchResults = document.getElementById('search-results');

  function performSearch() {
    if (!searchInput) return;

    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm === '') {
      if (searchResults) searchResults.innerHTML = '';
      return;
    }

    // Search in articles
    const matchedArticles = articles.filter(article => 
      article.title.toLowerCase().includes(searchTerm) || 
      article.excerpt.toLowerCase().includes(searchTerm) || 
      article.content.toLowerCase().includes(searchTerm)
    ).slice(0, 3); // محدود کردن به 3 نتیجه برای نمایش

    // Search in downloads
    const matchedDownloads = downloads.filter(download => 
      download.title.toLowerCase().includes(searchTerm) || 
      download.description.toLowerCase().includes(searchTerm)
    ).slice(0, 2); // محدود کردن به 2 نتیجه برای نمایش

    // نمایش نتایج سرچ به صورت پیشنمایش
    if (searchResults) {
      searchResults.innerHTML = '';

      if (matchedArticles.length === 0 && matchedDownloads.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item">نتیجه‌ای یافت نشد!</div>';
        return;
      }

      // نمایش مقالات یافت شده
      matchedArticles.forEach(article => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.innerHTML = `
          <span class="search-result-icon material-icons">article</span>
          <span>${article.title}</span>
        `;

        resultItem.addEventListener('click', function() {
          openArticleModal(article);
          searchInput.value = '';
          searchResults.innerHTML = '';
        });

        searchResults.appendChild(resultItem);
      });

      // نمایش دانلودهای یافت شده
      matchedDownloads.forEach(download => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.innerHTML = `
          <span class="search-result-icon material-icons">${download.icon}</span>
          <span>${download.title}</span>
        `;

        resultItem.addEventListener('click', function() {
          document.getElementById('downloads').scrollIntoView({ behavior: 'smooth' });
          // نمایش محتوا برای دانلود
          searchInput.value = '';
          searchResults.innerHTML = '';
        });

        searchResults.appendChild(resultItem);
      });

      // افزودن دکمه نمایش همه نتایج
      if (matchedArticles.length > 0 || matchedDownloads.length > 0) {
        const viewAllItem = document.createElement('div');
        viewAllItem.className = 'search-result-item';
        viewAllItem.style.textAlign = 'center';
        viewAllItem.style.fontWeight = 'bold';
        viewAllItem.style.color = 'var(--accent-color)';
        viewAllItem.innerHTML = 'نمایش همه نتایج <span class="material-icons" style="margin-right: 8px;">arrow_back</span>';

        viewAllItem.addEventListener('click', function() {
          displayAllSearchResults(searchTerm);
          searchResults.innerHTML = '';
        });

        searchResults.appendChild(viewAllItem);
      }
    }
  }

  // نمایش همه نتایج جستجو
  function displayAllSearchResults(searchTerm) {
    // جستجو در مقالات
    const matchedArticles = articles.filter(article => 
      article.title.toLowerCase().includes(searchTerm) || 
      article.excerpt.toLowerCase().includes(searchTerm) || 
      article.content.toLowerCase().includes(searchTerm)
    );

    // جستجو در دانلودها
    const matchedDownloads = downloads.filter(download => 
      download.title.toLowerCase().includes(searchTerm) || 
      download.description.toLowerCase().includes(searchTerm)
    );

    // Scroll to articles section
    document.getElementById('articles').scrollIntoView({ behavior: 'smooth' });

    // Load matched articles
    if (articlesContainer) {
      articlesContainer.innerHTML = '';

      if (matchedArticles.length === 0) {
        const noResults = document.createElement('div');
        noResults.style.textAlign = 'center';
        noResults.style.padding = '50px 0';
        noResults.innerHTML = `
          <span class="material-icons" style="font-size: 3rem; color: var(--secondary-text); margin-bottom: 20px;">search_off</span>
          <h3>نتیجه‌ای برای "${searchTerm}" یافت نشد</h3>
          <p style="margin-top: 15px;">لطفاً عبارت دیگری را جستجو کنید</p>
        `;
        articlesContainer.appendChild(noResults);
      } else {
        // نمایش عنوان نتایج جستجو
        const searchTitle = document.createElement('div');
        searchTitle.style.width = '100%';
        searchTitle.style.textAlign = 'right';
        searchTitle.style.marginBottom = '30px';
        searchTitle.innerHTML = `<h3>نتایج جستجو برای: "${searchTerm}"</h3>`;
        articlesContainer.appendChild(searchTitle);

        // نمایش مقالات
        matchedArticles.forEach(article => {
          const articleCard = document.createElement('div');
          articleCard.className = 'article-card slide-up';
          articleCard.setAttribute('data-id', article.id);

          articleCard.innerHTML = `
            <div class="article-image">
              <img src="${article.image}" alt="${article.title}">
            </div>
            <div class="article-content">
              <span class="article-category">${getCategoryName(article.category)}</span>
              <h3 class="article-title">${article.title}</h3>
              <p class="article-excerpt">${article.excerpt}</p>
              <div class="article-meta">
                <span><span class="material-icons" style="font-size: 14px; margin-left: 5px;">person</span>${article.author}</span>
                <span><span class="material-icons" style="font-size: 14px; margin-left: 5px;">calendar_today</span>${article.date}</span>
              </div>
            </div>
          `;

          articlesContainer.appendChild(articleCard);

          // Add click event to open article
          articleCard.addEventListener('click', function() {
            openArticleModal(article);
          });
        });
      }
    }

    // اگر دانلودها هم هستند، به آن بخش اسکرول کنیم
    if (matchedDownloads.length > 0 && downloadsContainer) {
      // فلش راهنما برای اسکرول به بخش دانلودها
      const scrollIndicator = document.createElement('div');
      scrollIndicator.style.textAlign = 'center';
      scrollIndicator.style.margin = '50px 0';
      scrollIndicator.style.cursor = 'pointer';
      scrollIndicator.style.opacity = '0.7';
      scrollIndicator.innerHTML = `
        <p>فایل‌های قابل دانلود مرتبط با "${searchTerm}" هم یافت شد</p>
        <span class="material-icons" style="font-size: 2rem; animation: bounce 2s infinite;">arrow_downward</span>
      `;

      scrollIndicator.addEventListener('click', function() {
        document.getElementById('downloads').scrollIntoView({ behavior: 'smooth' });
      });

      articlesContainer.appendChild(scrollIndicator);

      // نمایش دانلودهای یافت شده
      loadDownloads('all', matchedDownloads);
    }
  }

  // جستجوی زنده هنگام تایپ
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      performSearch();
    });

    searchInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm !== '') {
          displayAllSearchResults(searchTerm);
          if (searchResults) searchResults.innerHTML = '';
        }
      }
    });

    // بستن نتایج جستجو هنگام کلیک بیرون از آن
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.search-container') && searchResults) {
        searchResults.innerHTML = '';
      }
    });
  }

  if (searchButton) {
    searchButton.addEventListener('click', function() {
      const searchTerm = searchInput.value.trim().toLowerCase();
      if (searchTerm !== '') {
        displayAllSearchResults(searchTerm);
        if (searchResults) searchResults.innerHTML = '';
      }
    });
  }

  // ===== مختص صفحه برنامه‌ها =====
  // فیلتر برنامه‌ها بر اساس سیستم‌عامل
  const osFilters = document.querySelectorAll('.os-filter');

  if (osFilters.length > 0) {
    osFilters.forEach(filter => {
      filter.addEventListener('click', function() {
        // حذف کلاس active از همه فیلترها
        osFilters.forEach(f => f.classList.remove('active'));

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
  const categoryTabs = document.querySelectorAll('.tab');

  if (categoryTabs.length > 0) {
    categoryTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        // حذف کلاس active از همه تب‌ها
        categoryTabs.forEach(t => t.classList.remove('active'));

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

  // Load initial data
  loadArticles();
  loadDownloads();
});