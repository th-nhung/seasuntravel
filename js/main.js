/* js/main.js */

// ==========================================
// CENTRALIZED DATA STORE (Source of Truth)
// ==========================================
const SiteData = {
    images: {
        default: "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        heroBg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        payment: {
            vcb: "https://cdn.haitrieu.com/wp-content/uploads/2022/02/Logo-Vietcombank.png",
            onepay: "https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-OnePay.png",
            visa: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
            mastercard: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
            jcb: "https://upload.wikimedia.org/wikipedia/commons/4/40/JCB_logo.svg"
        }
    },
    tours: {
        "phu-quoc": {
            title: "Phú Quốc - Đảo Ngọc Thiên Đường",
            duration: "4 Ngày 3 Đêm",
            transport: "Máy bay + Ô tô + Cano",
            price: "5.990.000₫",
            location: "Kiên Giang, Việt Nam",
            image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            intro: "Khám phá thiên đường nhiệt đới Phú Quốc, nơi sở hữu những bãi biển cát trắng mịn màng, làn nước trong xanh ngọc bích và hệ sinh thái biển đa dạng bậc nhất Việt Nam. Tour du lịch trọn gói đưa bạn đến những địa điểm hot nhất như Hòn Thơm, Grand World và Safari.",
            itinerary: [
                { day: "Ngày 1", title: "Đón sân bay - Sunset Sanato - Ẩm thực đêm", desc: "Xe đón quý khách tại sân bay Phú Quốc. Nhận phòng khách sạn nghỉ ngơi. Chiều tham quan Sunset Sanato Beach Club ngắm hoàng hôn đẹp nhất đảo. Tối thưởng thức đặc sản Bún Quậy Kiến Xây." },
                { day: "Ngày 2", title: "Cano 3 Đảo - Lặn ngắm san hô - Cáp treo", desc: "Khám phá Hòn Móng Tay, Gầm Ghì và Mây Rút bằng cano cao tốc. Trải nghiệm lặn ngắm san hô tự nhiên. Chiều trải nghiệm cáp treo vượt biển dài nhất thế giới tại Hòn Thơm." },
                { day: "Ngày 3", title: "VinWonders - Safari - Grand World", desc: "Tham quan vườn thú bán hoang dã Vinpearl Safari. Vui chơi không giới hạn tại VinWonders. Tối khám phá 'Thành phố không ngủ' Grand World với show diễn Tinh Hoa Việt Nam." },
                { day: "Ngày 4", title: "Mua sắm đặc sản - Tiễn sân bay", desc: "Tham quan cơ sở nuôi cấy ngọc trai, vườn tiêu và nhà thùng nước mắm. Mua sắm quà lưu niệm. Xe đưa quý khách ra sân bay, kết thúc hành trình." }
            ]
        },
        "con-dao": {
            title: "Côn Đảo - Vùng Đất Tâm Linh & Huyền Thoại",
            duration: "3 Ngày 2 Đêm",
            transport: "Máy bay + Xe du lịch",
            price: "4.500.000₫",
            location: "Bà Rịa - Vũng Tàu, Việt Nam",
            image: "https://image.vietnam.travel/sites/default/files/styles/top_banner/public/2021-05/Con%20Dao%20Travel%20Guide%20Vietnam%20Tourism.jpg?itok=bA-K4l5k",
            intro: "Hành trình về nguồn kết hợp nghỉ dưỡng tại Côn Đảo - nơi từng được mệnh danh là 'Địa ngục trần gian' nay đã trở thành thiên đường du lịch. Quý khách sẽ được viếng mộ Cô Sáu linh thiêng, tìm hiểu lịch sử hào hùng và đắm mình trong làn nước trong vắt của bãi Đầm Trầu.",
            itinerary: [
                { day: "Ngày 1", title: "Đón sân bay Cỏ Ống - Trại Giam - Dinh Chúa Đảo", desc: "Xe đón đoàn tại sân bay. Dùng cơm trưa, nhận phòng. Chiều tham quan Dinh Chúa Đảo, Hệ thống Chuồng Cọp Pháp/Mỹ, Bảo tàng Côn Đảo. Tối tự do dạo biển." },
                { day: "Ngày 2", title: "Viếng Nghĩa Trang Hàng Dương - Bãi Đầm Trầu", desc: "Sáng sớm viếng mộ Cô Sáu tại Nghĩa trang Hàng Dương. Sau đó tham quan Miếu Bà Phi Yến, Chùa Núi Một. Chiều tắm biển tại Bãi Đầm Trầu - bãi biển đẹp nhất Côn Đảo cạnh sân bay." },
                { day: "Ngày 3", title: "Mua sắm chợ Côn Đảo - Tiễn khách", desc: "Tự do đi chợ Côn Đảo mua sắm đặc sản hạt bàng, hải sản khô. Xe đưa đoàn ra sân bay Cỏ Ống, làm thủ tục bay về đất liền." }
            ]
        },
        "quy-nhon": {
            title: "Quy Nhơn - Kỳ Co - Eo Gió - Maldives Việt Nam",
            duration: "3 Ngày 2 Đêm",
            transport: "Xe du lịch đời mới + Cano",
            price: "3.800.000₫",
            location: "Bình Định, Việt Nam",
            image: "https://ik.imagekit.io/tvlk/blog/2024/02/ky-co-cover.jpg",
            intro: "Quy Nhơn chào đón bạn với vẻ đẹp hoang sơ đầy quyến rũ. Tour sẽ đưa bạn khám phá Kỳ Co với làn nước 2 màu xanh ngọc bích, check-in Eo Gió hùng vĩ nơi ngắm bình minh đẹp nhất Việt Nam và thưởng thức ẩm thực đất Võ trứ danh.",
            itinerary: [
                { day: "Ngày 1", title: "Đón sân bay Phù Cát - Bảo tàng Quang Trung", desc: "Xe đón quý khách, tham quan Bảo tàng Quang Trung, xem biểu diễn Nhạc Võ Tây Sơn. Về khách sạn nhận phòng nghỉ ngơi. Tối thưởng thức bánh xèo tôm nhảy." },
                { day: "Ngày 2", title: "Kỳ Co - Eo Gió - Tịnh Xá Ngọc Hòa", desc: "Đi cano ra bãi tắm Kỳ Co, lặn ngắm san hô tại Bãi Dứa. Ăn trưa hải sản. Chiều tham quan Eo Gió - con đường đi bộ ven biển tuyệt đẹp và Tịnh Xá Ngọc Hòa với tượng Phật Đôi cao nhất Việt Nam." },
                { day: "Ngày 3", title: "Khu dã ngoại Trung Lương - Ghềnh Ráng - Tiễn bay", desc: "Check-in Khu dã ngoại Trung Lương. Tham quan KDL Ghềnh Ráng Tiên Sa, viếng mộ Hàn Mặc Tử. Mua sắm đặc sản bánh ít lá gai. Xe đưa ra sân bay." }
            ]
        }
    },
    accommodation: {
        "intercontinental-phu-quoc": {
            title: "InterContinental Phu Quoc Long Beach Resort",
            location: "Bãi Trường, Phú Quốc",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            intro: "Khu nghỉ dưỡng sang trọng bậc nhất tại Đảo Ngọc, mang đến sự kết hợp hoàn hảo giữa nét đẹp truyền thống và sự tiện nghi hiện đại. Với bãi biển riêng tư, hồ bơi vô cực và dịch vụ spa đẳng cấp, đây là lựa chọn hoàn hảo cho kỳ nghỉ dưỡng trong mơ.",
            nearby: ["Cách sân bay Phú Quốc 15 phút", "Gần Sunset Sanato Beach Club", "Công viên nước Aquatopia (Hòn Thơm)", "Chợ đêm Dương Đông (20 phút)"],
            roomTypes: ["Classic Room (Hướng vườn/biển)", "Residence (1-3 phòng ngủ)", "Villa sát biển (Hồ bơi riêng)"],
            relatedTourId: "phu-quoc"
        },
        "poulo-condor": {
            title: "Poulo Condor Boutique Resort & Spa",
            location: "Bãi Vông, Côn Đảo",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            intro: "Lấy cảm hứng từ kiến trúc thuộc địa Pháp cổ điển pha lẫn nét văn hóa Việt Nam, Poulo Condor nằm ẩn mình dưới tán rừng nhiệt đới và hướng ra bãi biển hoang sơ. Không gian yên tĩnh tuyệt đối, thích hợp cho những ai tìm kiếm sự bình yên.",
            nearby: ["Sát bên bãi biển Vông (Bãi Vông)", "Cách sân bay Cỏ Ống 5 phút", "Gần Miếu Bà Phi Yến", "Cách trung tâm thị trấn 12km"],
            roomTypes: ["Junior Suite", "Colonial Villa Suite", "Poulo Condor Pool Villa"],
            relatedTourId: "con-dao"
        },
        "crown-retreat": {
            title: "Crown Retreat Quy Nhơn Resort",
            location: "Trung Lương, Phù Cát, Bình Định",
            image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            intro: "Khu nghỉ dưỡng biệt lập nằm bên bãi biển Trung Lương tuyệt đẹp. Nổi bật với các căn bungalow được thiết kế hiện đại, hài hòa với thiên nhiên. Nơi đây là điểm dừng chân lý tưởng để khám phá vẻ đẹp hoang sơ của Quy Nhơn.",
            nearby: ["Ngay cạnh Khu dã ngoại Trung Lương", "Cách Chùa Ông Núi (Tượng Phật ngồi) 2km", "Cách Eo Gió - Kỳ Co 15 phút đi xe", "Cách sân bay Phù Cát 25 phút"],
            roomTypes: ["Bungalow Pine Hill", "Bungalow Sea View", "Bungalow Beach Front"],
            relatedTourId: "quy-nhon"
        }
    },
    cuisine: {
        "goi-ca-trich": {
            title: "Gỏi Cá Trích Phú Quốc",
            location: "Phú Quốc",
            image: "https://www.tasteatlas.com/images/dishes/16744689f0b04ba69efe8f23b2bd5edc.jpg?mw=1300",
            intro: "Gỏi cá trích là món ăn mang đậm hương vị biển cả, là sự kết hợp tinh tế giữa thịt cá trích tươi sống ngọt lịm với các loại rau rừng đặc trưng của đảo Ngọc. Món ăn không chỉ ngon miệng mà còn chứa đựng nét văn hóa ẩm thực độc đáo của ngư dân vùng biển đảo.",
            ingredients: [
                "Cá trích tươi (lấy phần lườn hai bên)",
                "Dừa nạo (cơm dừa già)",
                "Hành tây thái mỏng, ớt, tỏi, hành tím phi",
                "Đậu phộng rang giã nhỏ",
                "Rau rừng, bánh tráng cuốn",
                "Nước mắm Phú Quốc chính hiệu"
            ],
            taste: "Khi ăn, bạn sẽ cảm nhận được vị ngọt thanh của cá tươi, vị béo ngậy của dừa nạo và đậu phộng, chút hăng nhẹ của hành tây, hòa quyện cùng nước chấm chua ngọt đậm đà. Đặc biệt, món này ăn kèm rau rừng tạo nên sự cân bằng tuyệt vời, không hề có cảm giác tanh.",
            relatedTourId: "phu-quoc" 
        },
        "chao-hau": {
            title: "Cháo Hàu Côn Đảo",
            location: "Côn Đảo",
            image: "https://visitvungtau.travel/VisitVungTau/POINT/%C4%82n%20u%E1%BB%91ng/%E1%BA%A8m%20th%E1%BB%B1c%20%C4%91%E1%BB%8Ba%20ph%C6%B0%C6%A1ng/4627/image-thumb__4627__720_jpg/chao-hau-nguyen-con01-1527300509.3c858966.jpg",
            intro: "Cháo hàu là món ăn bổ dưỡng nổi tiếng tại Côn Đảo. Hàu ở đây được thiên nhiên ưu đãi nên con to, thịt dày và rất ngọt. Một tô cháo hàu nóng hổi sau những giờ tham quan hay tắm biển sẽ giúp du khách phục hồi năng lượng nhanh chóng.",
            ingredients: [
                "Hàu sữa tươi Côn Đảo",
                "Gạo dẻo thơm (được rang vàng trước khi nấu)",
                "Hành tím, hành lá, ngò rí",
                "Tiêu sọ Côn Đảo (tạo vị cay nồng đặc trưng)",
                "Gia vị: Nước mắm, hạt nêm"
            ],
            taste: "Cháo có độ sánh vừa phải, hạt gạo nở bung thơm mùi gạo rang. Thịt hàu béo, ngọt đậm đà. Điểm nhấn chính là vị cay nồng, thơm lừng của hạt tiêu sọ Côn Đảo rắc bên trên, làm ấm bụng và kích thích vị giác vô cùng.",
            relatedTourId: "con-dao" 
        },
        "bun-cha-ca": {
            title: "Bún Chả Cá Quy Nhơn",
            location: "Quy Nhơn",
            image: "https://gcs.tripi.vn/public-tripi/tripi-feed/img/473524mLL/image-nhung-dac-san-khong-the-bo-qua-khi-den-quy-nhon-165391213162671.jpg",
            intro: "Bún chả cá là niềm tự hào của người dân Quy Nhơn - Bình Định. Sự khác biệt nằm ở miếng chả cá dai giòn được làm từ cá thu, cá mối tươi rói và nồi nước dùng ngọt thanh được ninh hoàn toàn từ xương cá, không dùng nhiều gia vị tạo ngọt.",
            ingredients: [
                "Chả cá hấp và chả cá chiên",
                "Bún tươi sợi nhỏ",
                "Đầu cá, xương cá thu (ninh nước dùng)",
                "Cà chua, thơm (dứa), hành lá",
                "Rau sống ăn kèm: Xà lách, rau muống chẻ, giá đỗ",
                "Tương ớt rim miền Trung"
            ],
            taste: "Nước lèo trong vắt, ngọt thanh tự nhiên, không hề tanh mà rất thơm mùi hành ngò. Miếng chả cá dai sần sật, đậm vị cá biển. Khi ăn thêm chút tương ớt rim cay cay, ngọt ngọt đặc trưng của miền Trung tạo nên hương vị khó quên.",
            relatedTourId: "quy-nhon" 
        }
    }
};

// ==========================================
// COMPONENT RENDERING (Client Side)
// ==========================================

function renderNavbar() {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (!navbarPlaceholder) return;

    // Determine basic active state
    const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';
    
    const html = `
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
            <a class="navbar-brand" href="index.html"><i class="fa-solid fa-umbrella-beach me-2"></i>Sea Sun Travel</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item"><a class="nav-link ${isIndex ? '' : ''}" href="index.html#home">Trang chủ</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.html#about">Giới thiệu</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.html#tours">Tour Nổi Bật</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.html#cuisine">Ẩm thực</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.html#accommodation">Lưu trú</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.html#contact">Liên hệ</a></li>
                    <li class="nav-item ms-lg-3 mt-3 mt-lg-0">
                        <a href="index.html#newsletter" class="btn btn-book">Nhận ưu đãi</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`;
    
    navbarPlaceholder.innerHTML = html;

    // Attach Scroll Listener
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { navbar.classList.add('navbar-scrolled'); } 
        else { navbar.classList.remove('navbar-scrolled'); }
    });

    // Attach Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"], a[href^="index.html#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // If on detail page and clicking anchor, allow default behavior to go to index
            if (!isIndex && href.startsWith('index.html')) return;

            // If on index page or anchor is just #id
            if (isIndex || href.startsWith('#')) {
                const targetId = href.includes('#') ? href.split('#')[1] : null;
                if (!targetId) return;
                
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    window.scrollTo({ top: targetElement.offsetTop - navHeight, behavior: 'smooth' });
                    
                    // Close mobile menu
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                        if (bsCollapse) bsCollapse.hide();
                    }
                }
            }
        });
    });
}

function renderFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) return;

    const html = `
    <footer id="contact">
        <div class="container">
            <div class="row gy-4">
                <div class="col-lg-5 col-md-12">
                    <a href="#" class="footer-logo"><i class="fa-solid fa-umbrella-beach me-2"></i>Sea Sun Travel</a>
                    <p class="text-secondary pe-4">Chuyên cung cấp các tour du lịch biển đảo hàng đầu tại Việt Nam. Cam kết mang lại trải nghiệm đáng nhớ cho mỗi hành trình.</p>
                    <div class="social-icons mt-3">
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                        <a href="#"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="mb-3">Liên Kết Nhanh</h5>
                    <div class="footer-links">
                        <a href="index.html#home">Trang chủ</a>
                        <a href="index.html#about">Về chúng tôi</a>
                        <a href="index.html#tours">Tour du lịch</a>
                        <a href="index.html#cuisine">Ẩm thực</a>
                        <a href="index.html#accommodation">Lưu trú</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="mb-3">Thông Tin Liên Hệ</h5>
                    <div class="footer-links">
                        <p class="text-secondary mb-2"><i class="fa-solid fa-phone me-2"></i>090 123 4567</p>
                        <p class="text-secondary mb-2"><i class="fa-solid fa-envelope me-2"></i>info@seasuntravel.vn</p>
                        <p class="text-secondary"><i class="fa-solid fa-map-location-dot me-2"></i>Nguyễn Văn Cừ Nối Dài, Ninh Kiều, TP. Cần Thơ</p>
                    </div>
                </div>
            </div>

            <div class="row mt-5 mb-3">
                <div class="col-12 text-center">
                    <p class="text-white-50 small text-uppercase mb-2" style="letter-spacing: 1px;">Chấp nhận thanh toán</p>
                    <div class="d-flex justify-content-center flex-wrap">
                        <img src="${SiteData.images.payment.vcb}" onerror="this.style.display='none'" alt="Vietcombank" class="payment-icon">
                        <img src="${SiteData.images.payment.onepay}" onerror="this.style.display='none'" alt="OnePay" class="payment-icon">
                        <img src="${SiteData.images.payment.visa}" onerror="this.style.display='none'" alt="Visa" class="payment-icon">
                        <img src="${SiteData.images.payment.mastercard}" onerror="this.style.display='none'" alt="Mastercard" class="payment-icon">
                        <img src="${SiteData.images.payment.jcb}" onerror="this.style.display='none'" alt="JCB" class="payment-icon">
                    </div>
                </div>
            </div>
            
            <div class="border-top border-secondary pt-4 text-center text-secondary small">
                &copy; 2024 Sea Sun Travel. All Rights Reserved. Designed by You.
            </div>
        </div>
    </footer>`;

    footerPlaceholder.innerHTML = html;
}

// ==========================================
// BACK TO TOP BUTTON LOGIC
// ==========================================
function setupBackToTop() {
    // 1. Create the button dynamically
    const btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    btn.setAttribute('aria-label', 'Lên đầu trang');
    document.body.appendChild(btn);

    // 2. Show/Hide logic based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    });

    // 3. Scroll to top on click
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ==========================================
// UTILITIES
// ==========================================
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function handleNewsletter() {
    const btn = document.getElementById('newsletter-btn');
    if(!btn) return;

    let toastTimeout; 

    btn.addEventListener('click', function() {
        const emailInput = document.getElementById('newsletter-email');
        const toast = document.getElementById('custom-toast');
        const email = emailInput.value.trim();

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (toastTimeout) clearTimeout(toastTimeout);
        emailInput.classList.remove('is-invalid-custom');

        if (emailRegex.test(email)) {
            toast.innerHTML = '<i class="fa-solid fa-circle-check me-2"></i><span>Đã nhận được email đăng ký của bạn</span>';
            toast.className = "show success";
            emailInput.value = "";
        } else {
            toast.innerHTML = '<i class="fa-solid fa-circle-exclamation me-2"></i><span>Email đăng ký của bạn không hợp lệ</span>';
            toast.className = "show error";
            emailInput.classList.add('is-invalid-custom');
            emailInput.value = "";
        }

        toastTimeout = setTimeout(function(){ 
            toast.classList.remove("show");
        }, 3000);
    });
    
    document.getElementById('newsletter-email').addEventListener('input', function() {
        this.classList.remove('is-invalid-custom');
    });
}

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderFooter();
    handleNewsletter();
    setupBackToTop(); // Initialize Back to Top
});
