/* main.js */

// ==========================================
// CENTRALIZED DATA STORE (Source of Truth)
// ==========================================
const SiteData = {
    images: {
        default: "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        heroBg: "https://cdn-i.doisongphapluat.com.vn/resize/th/upload/2024/12/30/top-nhung-hon-dao-dep-o-viet-nam-nhat-dinh-phai-kham-pha-12411174.jpg",
        payment: {
            vcb: "https://cdn.haitrieu.com/wp-content/uploads/2022/02/Logo-Vietcombank.png",
            onepay: "https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-OnePay.png",
            visa: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
            mastercard: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
            jcb: "https://upload.wikimedia.org/wikipedia/commons/4/40/JCB_logo.svg"
        }
    },
    tours: {
        // --- DỮ LIỆU CŨ ---
        "phu-quoc": {
            shortTitle: "Phú Quốc - Đảo Ngọc",
            shortDesc: "Khám phá Bãi Sao, Hòn Thơm và thưởng thức hải sản tươi sống.",
            rating: "4.9",
            title: "Phú Quốc - Đảo Ngọc Thiên Đường",
            duration: "4 Ngày 3 Đêm",
            transport: "Máy bay + Ô tô + Cano",
            price: "5.990.000₫",
            location: "Kiên Giang, Việt Nam",
            image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            intro: "Khám phá thiên đường nhiệt đới Phú Quốc, nơi sở hữu những bãi biển cát trắng mịn màng, làn nước trong xanh ngọc bích và hệ sinh thái biển đa dạng bậc nhất Việt Nam.",
            itinerary: [
                { day: "Ngày 1", title: "Đón sân bay - Sunset Sanato", desc: "Xe đón quý khách. Chiều tham quan Sunset Sanato Beach Club ngắm hoàng hôn." },
                { day: "Ngày 2", title: "Cano 3 Đảo - Cáp treo", desc: "Khám phá Hòn Móng Tay, Gầm Ghì. Trải nghiệm cáp treo Hòn Thơm." },
                { day: "Ngày 3", title: "VinWonders - Safari", desc: "Tham quan vườn thú Safari và vui chơi tại VinWonders." },
                { day: "Ngày 4", title: "Mua sắm - Tiễn bay", desc: "Tham quan nhà thùng nước mắm, vườn tiêu. Tiễn sân bay." }
            ]
        },
        "con-dao": {
            shortTitle: "Côn Đảo - Tâm Linh",
            shortDesc: "Viếng mộ Cô Sáu, khám phá nhà tù lịch sử và bãi Đầm Trầu hoang sơ.",
            rating: "5.0",
            title: "Côn Đảo - Vùng Đất Tâm Linh & Huyền Thoại",
            duration: "3 Ngày 2 Đêm",
            transport: "Máy bay + Xe du lịch",
            price: "4.500.000₫",
            location: "Bà Rịa - Vũng Tàu, Việt Nam",
            image: "https://image.vietnam.travel/sites/default/files/styles/top_banner/public/2021-05/Con%20Dao%20Travel%20Guide%20Vietnam%20Tourism.jpg?itok=bA-K4l5k",
            intro: "Hành trình về nguồn kết hợp nghỉ dưỡng tại Côn Đảo. Quý khách sẽ được viếng mộ Cô Sáu linh thiêng, tìm hiểu lịch sử hào hùng.",
            itinerary: [
                { day: "Ngày 1", title: "Đón sân bay - Trại Giam", desc: "Tham quan hệ thống nhà tù Côn Đảo, Bảo tàng Côn Đảo." },
                { day: "Ngày 2", title: "Viếng Mộ Cô Sáu - Bãi Đầm Trầu", desc: "Viếng nghĩa trang Hàng Dương. Tắm biển Bãi Đầm Trầu." },
                { day: "Ngày 3", title: "Tự do - Tiễn khách", desc: "Mua sắm đặc sản hạt bàng. Ra sân bay Cỏ Ống." }
            ]
        },
        "quy-nhon": {
            shortTitle: "Quy Nhơn - Kỳ Co",
            shortDesc: "Check-in Eo Gió, lặn ngắm san hô tại Kỳ Co và thưởng thức hải sản.",
            rating: "4.8",
            title: "Quy Nhơn - Kỳ Co - Eo Gió - Maldives Việt Nam",
            duration: "3 Ngày 2 Đêm",
            transport: "Xe du lịch + Cano",
            price: "3.800.000₫",
            location: "Bình Định, Việt Nam",
            image: "https://ik.imagekit.io/tvlk/blog/2024/02/ky-co-cover.jpg",
            intro: "Quy Nhơn chào đón bạn với vẻ đẹp hoang sơ. Tour khám phá Kỳ Co với làn nước 2 màu xanh ngọc bích và Eo Gió hùng vĩ.",
            itinerary: [
                { day: "Ngày 1", title: "Đón sân bay - Bảo tàng Quang Trung", desc: "Tham quan đất võ Tây Sơn. Thưởng thức bánh xèo tôm nhảy." },
                { day: "Ngày 2", title: "Kỳ Co - Eo Gió", desc: "Đi cano ra Kỳ Co lặn san hô. Chiều tham quan Eo Gió ngắm hoàng hôn." },
                { day: "Ngày 3", title: "Ghềnh Ráng - Tiễn bay", desc: "Viếng mộ Hàn Mặc Tử tại Ghềnh Ráng Tiên Sa. Ra sân bay Phù Cát." }
            ]
        },

        // --- DỮ LIỆU MỚI BỔ SUNG ---
        "son-tra-cu-lao-cham": {
            shortTitle: "Sơn Trà - Cù Lao Chàm",
            shortDesc: "Bản giao hưởng rừng & biển. Ngắm voọc chà vá và lặn ngắm san hô khu dự trữ sinh quyển.",
            rating: "4.7",
            title: "Sơn Trà - Cù Lao Chàm: Bản Giao Hưởng Rừng & Biển",
            duration: "2 Ngày 1 Đêm",
            transport: "Xe du lịch + Cano cao tốc",
            price: "1.750.000₫",
            location: "Đà Nẵng - Quảng Nam",
            image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            intro: "Hành trình kết nối hai viên ngọc quý của miền Trung. Bán đảo Sơn Trà được ví như 'viên ngọc quý' của Đà Nẵng với hệ sinh thái rừng già nguyên sinh giáp biển. Cù Lao Chàm - Khu dự trữ sinh quyển thế giới nổi tiếng với vẻ đẹp hoang sơ và rạn san hô đa dạng.",
            itinerary: [
                { day: "Ngày 1", title: "Sơn Trà - Hội An", desc: "Sáng check-in đỉnh Bàn Cờ, ngắm voọc chà vá chân nâu tại Sơn Trà. Chiều tham quan Phố cổ Hội An lung linh sắc đèn lồng." },
                { day: "Ngày 2", title: "Cù Lao Chàm - Tiễn khách", desc: "Đi cano cao tốc ra đảo Cù Lao Chàm. Lặn ngắm san hô tại Bãi Chồng, tham quan giếng cổ Chăm và thưởng thức cua đá đặc sản." }
            ]
        },
        "ly-son": {
            shortTitle: "Lý Sơn - Vương Quốc Tỏi",
            shortDesc: "Khám phá đảo núi lửa triệu năm, cổng Tò Vò và thiên đường Đảo Bé.",
            rating: "4.8",
            title: "Lý Sơn - Vương Quốc Núi Lửa Giữa Biển Khơi",
            duration: "2 Ngày 1 Đêm",
            transport: "Tàu cao tốc + Xe du lịch",
            price: "2.500.000₫",
            location: "Quảng Ngãi, Việt Nam",
            image: "https://vcdn-dulich.vnecdn.net/2020/06/25/Ly-Son-1-1593077673.jpg",
            intro: "Lý Sơn là huyện đảo duy nhất của Quảng Ngãi, hình thành từ tàn tích núi lửa tạo nên những thắng cảnh hùng vĩ như Cổng Tò Vò, Hang Câu. Đây còn là 'vương quốc tỏi' và nơi lưu giữ bằng chứng chủ quyền Hoàng Sa.",
            itinerary: [
                { day: "Ngày 1", title: "Đón cảng Sa Kỳ - Đảo Lớn", desc: "Đi tàu cao tốc ra đảo. Đón hoàng hôn tuyệt đẹp tại Cổng Tò Vò, thăm chùa Hang linh thiêng và chinh phục đỉnh Thới Lới." },
                { day: "Ngày 2", title: "Đảo Bé - Maldives Việt Nam", desc: "Sang Đảo Bé tắm biển và chèo thuyền thúng ngắm san hô. Thưởng thức đặc sản gỏi tỏi trước khi về đất liền." }
            ]
        },
        "quy-nhon-1day": {
            shortTitle: "Quy Nhơn 1 Ngày",
            shortDesc: "Tour ghép đi trong ngày khám phá Kỳ Co - Eo Gió, ăn hải sản làng chài.",
            rating: "4.6",
            title: "Quy Nhơn - Thiên Đường Biển Đảo Kỳ Co (Trong ngày)",
            duration: "1 Ngày (Daily Tour)",
            transport: "Cano + Xe điện",
            price: "750.000₫",
            location: "Quy Nhơn, Bình Định",
            image: "https://ik.imagekit.io/tvlk/blog/2022/09/eo-gio-quy-nhon-1.jpg",
            intro: "Lựa chọn hoàn hảo cho du khách có ít thời gian nhưng muốn trải nghiệm trọn vẹn vẻ đẹp của Quy Nhơn. Kỳ Co được mệnh danh là 'Maldives của Việt Nam' với bãi cát trắng mịn, còn Eo Gió là nơi ngắm hoàng hôn đẹp nhất Việt Nam.",
            itinerary: [
                { day: "Sáng", title: "Nhơn Lý - Kỳ Co", desc: "Di chuyển đến Nhơn Lý, đi cano sang bãi tắm Kỳ Co. Tự do tắm biển, check-in hồ suối và xem show hải cẩu (nếu có)." },
                { day: "Trưa", title: "Hải sản làng chài", desc: "Thưởng thức bữa trưa hải sản tươi sống 7 món tại nhà hàng địa phương." },
                { day: "Chiều", title: "Eo Gió - Tịnh Xá Ngọc Hòa", desc: "Đi bộ trên cung đường ven biển tại Eo Gió. Thăm Tịnh Xá Ngọc Hòa với tượng Phật Đôi cao nhất Việt Nam." }
            ]
        },
        "cu-lao-xanh": {
            shortTitle: "Cù Lao Xanh - Đảo Ngọc",
            shortDesc: "Trốn khỏi ồn ào đô thị, chinh phục hải đăng trăm tuổi và cắm trại đêm.",
            rating: "4.7",
            title: "Hành Trình Đảo Xanh: Cù Lao Xanh Vẫy Gọi",
            duration: "2 Ngày 1 Đêm",
            transport: "Tàu gỗ / Cano",
            price: "1.450.000₫",
            location: "Nhơn Châu, Quy Nhơn",
            image: "https://images.unsplash.com/photo-1544955431-15f9397669d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            intro: "Cù Lao Xanh là hòn đảo còn khá nguyên sơ với ngọn hải đăng hơn 100 năm tuổi. Không gian ở đây yên bình, phù hợp cho những ai muốn 'trốn' khỏi sự ồn ào của đô thị và trải nghiệm cuộc sống ngư dân.",
            itinerary: [
                { day: "Ngày 1", title: "Chinh phục Hải Đăng - BBQ", desc: "Đón tại cảng Hàm Tử ra đảo. Leo núi chinh phục hải đăng, ngắm toàn cảnh. Tối thưởng thức tiệc BBQ hải sản và đốt lửa trại." },
                { day: "Ngày 2", title: "Bãi đá Thảo Nguyên - Lặn san hô", desc: "Ngắm bình minh tại bãi đá Thảo Nguyên. Lặn ngắm san hô cực đẹp tại Bãi Nhỏ trước khi về lại đất liền." }
            ]
        },
        "con-duong-di-san": {
            shortTitle: "Di Sản Miền Trung",
            shortDesc: "Tour Signature 5N4Đ: Sơn Trà - Cù Lao Chàm - Lý Sơn - Kỳ Co.",
            rating: "5.0",
            title: "Con Đường Di Sản & Biển Đảo Miền Trung",
            duration: "5 Ngày 4 Đêm",
            transport: "Xe Limousine + Tàu cao tốc",
            price: "6.850.000₫",
            location: "Đà Nẵng - Quảng Ngãi - Bình Định",
            image: "https://images.unsplash.com/photo-1552353617-3bfd679b3bdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            intro: "Đây là tour 'Signature' của SeaSunTravel, kết nối tất cả các điểm nổi bật nhất trên cung đường ven biển miền Trung cực đẹp. Từ rừng già Sơn Trà, đảo chàm cổ kính, vương quốc tỏi Lý Sơn đến thiên đường biển Quy Nhơn.",
            itinerary: [
                { day: "Ngày 1", title: "Đà Nẵng - Sơn Trà", desc: "Đón khách, check-in bán đảo Sơn Trà. Nghỉ đêm tại Resort đẳng cấp." },
                { day: "Ngày 2", title: "Hội An - Cù Lao Chàm", desc: "Tham quan phố cổ, ra đảo Cù Lao Chàm lặn biển." },
                { day: "Ngày 3", title: "Quảng Ngãi - Lý Sơn", desc: "Di chuyển đi Quảng Ngãi, tàu ra Lý Sơn. Đón hoàng hôn cổng Tò Vò." },
                { day: "Ngày 4", title: "Lý Sơn - Quy Nhơn", desc: "Thăm Đảo Bé. Chiều tàu về đất liền, di chuyển đi Quy Nhơn." },
                { day: "Ngày 5", title: "Kỳ Co - Eo Gió - Tiễn bay", desc: "Khám phá Kỳ Co, Eo Gió. Xe đưa ra sân bay Phù Cát kết thúc hành trình." }
            ]
        }
    },
    accommodation: {
        // --- DỮ LIỆU CŨ ---
        "intercontinental-phu-quoc": {
            shortTitle: "InterContinental Long Beach",
            shortDesc: "Sự kết hợp hoàn hảo giữa sự sang trọng hiện đại và vẻ đẹp hoang sơ của Bãi Trường.",
            starHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',
            price: "Từ 4.500.000₫/đêm",
            badgeText: "Luxury",
            badgeClass: "bg-success",
            title: "InterContinental Phu Quoc Long Beach Resort",
            location: "Bãi Trường, Phú Quốc",
            locationCard: "Phú Quốc, Kiên Giang",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            intro: "Khu nghỉ dưỡng sang trọng bậc nhất tại Đảo Ngọc. Với bãi biển riêng tư, hồ bơi vô cực và dịch vụ spa đẳng cấp.",
            nearby: ["Cách sân bay Phú Quốc 15 phút", "Gần Sunset Sanato", "Công viên nước Aquatopia"],
            roomTypes: ["Classic Room", "Residence", "Villa sát biển"],
            relatedTourId: "phu-quoc"
        },
        "poulo-condor": {
            shortTitle: "Poulo Condor Resort & Spa",
            shortDesc: "Phong cách thuộc địa Pháp cổ điển ẩn mình dưới tán rừng nhiệt đới yên bình.",
            starHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>',
            price: "Từ 3.800.000₫/đêm",
            badgeText: "Boutique",
            badgeClass: "bg-warning text-dark",
            title: "Poulo Condor Boutique Resort & Spa",
            location: "Bãi Vông, Côn Đảo",
            locationCard: "Côn Đảo, Vũng Tàu",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            intro: "Lấy cảm hứng từ kiến trúc thuộc địa Pháp cổ điển. Không gian yên tĩnh tuyệt đối, thích hợp cho những ai tìm kiếm sự bình yên.",
            nearby: ["Sát bên bãi biển Vông", "Cách sân bay Cỏ Ống 5 phút", "Gần Miếu Bà Phi Yến"],
            roomTypes: ["Junior Suite", "Colonial Villa Suite", "Pool Villa"],
            relatedTourId: "con-dao"
        },
        "crown-retreat": {
            shortTitle: "Crown Retreat Quy Nhơn",
            shortDesc: "Khu nghỉ dưỡng biệt lập với các bungalow hướng biển tuyệt đẹp và riêng tư.",
            starHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',
            price: "Từ 2.900.000₫/đêm",
            badgeText: "Beachfront",
            badgeClass: "bg-info text-dark",
            title: "Crown Retreat Quy Nhơn Resort",
            location: "Trung Lương, Bình Định",
            locationCard: "Trung Lương, Bình Định",
            image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            intro: "Khu nghỉ dưỡng biệt lập nằm bên bãi biển Trung Lương. Các căn bungalow được thiết kế hiện đại, hài hòa với thiên nhiên.",
            nearby: ["Khu dã ngoại Trung Lương", "Chùa Ông Núi", "Cách Eo Gió 15 phút"],
            roomTypes: ["Bungalow Pine Hill", "Bungalow Sea View", "Bungalow Beach Front"],
            relatedTourId: "quy-nhon"
        },

        // --- DỮ LIỆU MỚI BỔ SUNG ---
        "sunbay-homestay": {
            shortTitle: "SunBay Homestay",
            shortDesc: "Không gian lưu trú hiện đại ngay mặt tiền Bãi Làng, Cù Lao Chàm.",
            starHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',
            price: "Từ 500.000₫/đêm",
            badgeText: "Homestay",
            badgeClass: "bg-primary",
            title: "SunBay Homestay & Restaurant (Cù Lao Chàm)",
            location: "Bãi Làng, Cù Lao Chàm",
            locationCard: "Tân Hiệp, Hội An",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/242509536.jpg?k=3f4c6e9c9c8e1e7e4e1e4e1e4e1e4e1e4e1e4e1e4e1e4e1e4e1e4e1e4e1e4e1e&o=&hp=1",
            intro: "Sở hữu vị trí đắc địa ngay mặt tiền Bãi Làng, Sunbay mang đến không gian lưu trú hiện đại với đầy đủ máy lạnh và nhà hàng view biển, lý tưởng cho những ai muốn tận hưởng đảo xa mà không mất đi sự tiện lợi.",
            nearby: ["Cầu Cảng Bãi Làng", "Chợ Tân Hiệp", "Giếng Cổ Chăm", "Khu bảo tồn biển"],
            roomTypes: ["Phòng Đôi View Biển", "Phòng Gia Đình", "Dorm (Giường tầng)"],
            relatedTourId: "son-tra-cu-lao-cham"
        },
        "son-tra-resort": {
            shortTitle: "Sơn Trà Resort & Spa",
            shortDesc: "Biệt thự Pháp cổ biệt lập, tựa sơn hướng thủy tại bán đảo Sơn Trà.",
            starHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',
            price: "Từ 3.000.000₫/đêm",
            badgeText: "Resort",
            badgeClass: "bg-success",
            title: "Sơn Trà Resort & Spa (Đà Nẵng)",
            location: "Bãi Trẹm, Bán đảo Sơn Trà",
            locationCard: "Sơn Trà, Đà Nẵng",
            image: "https://pix10.agoda.net/hotelImages/287/287847/287847_15062510340030887309.jpg?s=1024x768",
            intro: "Nằm tại Vịnh Bãi Trẹm biệt lập. Resort được xây dựng phong cách biệt thự Pháp cổ và bãi biển riêng. Sơn Trà Resort & Spa mang đến trải nghiệm nghỉ dưỡng yên tĩnh, tựa sơn hướng thủy, tách biệt hoàn toàn với phố thị.",
            nearby: ["Chùa Linh Ứng (2km)", "Đỉnh Bàn Cờ", "Cây Đa Ngàn Năm", "Bãi Bụt"],
            roomTypes: ["Garden Villa", "Ocean View Villa", "Beach Front Villa 2 Bedroom"],
            relatedTourId: "con-duong-di-san"
        },
        "ly-son-pearl": {
            shortTitle: "Ly Son Pearl Island",
            shortDesc: "Khách sạn lớn nhất đảo Lý Sơn với hồ bơi vô cực sát biển.",
            starHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',
            price: "Từ 1.400.000₫/đêm",
            badgeText: "Hotel",
            badgeClass: "bg-info text-dark",
            title: "Ly Son Pearl Island Hotel & Resort",
            location: "Thôn Đông, An Vĩnh, Lý Sơn",
            locationCard: "Huyện đảo Lý Sơn",
            image: "https://ik.imagekit.io/tvlk/blog/2023/01/khach-san-ly-son-1.jpg",
            intro: "Là khách sạn lớn nhất đảo với hồ bơi vô cực sát biển, Ly Son Pearl cung cấp dịch vụ nghỉ dưỡng chuyên nghiệp và là vị trí tuyệt vời nhất để đón hoàng hôn bên bờ biển núi lửa. Tiện nghi hiện đại giữa biển khơi.",
            nearby: ["Cảng Sa Kỳ (đối diện)", "Cổng Tò Vò (3km)", "Hang Câu", "Nhà trưng bày Hải đội Hoàng Sa"],
            roomTypes: ["Deluxe Ocean View", "Suite Sea View", "Family Room"],
            relatedTourId: "ly-son"
        },
        "ohana-village": {
            shortTitle: "Ohana Village Quy Nhon",
            shortDesc: "Thiết kế tối giản sát Eo Gió, hồ bơi vô cực hướng thẳng ra vịnh Nhơn Lý.",
            starHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',
            price: "Từ 1.200.000₫/đêm",
            badgeText: "Resort",
            badgeClass: "bg-warning text-dark",
            title: "Ohana Village Quy Nhon (Kỳ Co - Eo Gió)",
            location: "Nhơn Lý, Quy Nhơn",
            locationCard: "Nhơn Lý, Bình Định",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/254415842.jpg?k=3e33f37373737373737373737373737373737373737373737373737373737373&o=&hp=1",
            intro: "Nằm ngay sát quần thể Eo Gió hùng vĩ, Ohana Village Quy Nhon nổi bật với thiết kế tối giản, hiện đại và không gian mở tràn ngập hơi thở biển cả. Khu nghỉ dưỡng mang đến cảm giác thư thái tuyệt vời với hồ bơi vô cực hướng thẳng ra vịnh Nhơn Lý.",
            nearby: ["Ngay cạnh Eo Gió (đi bộ 2 phút)", "Bến cano đi Kỳ Co (5 phút)", "Tịnh Xá Ngọc Hòa", "Làng chài Nhơn Lý"],
            roomTypes: ["Bungalow Garden", "Bungalow Ocean View", "Hilltop Villa"],
            relatedTourId: "quy-nhon-1day"
        },
        "cu-lao-xanh-travel": {
            shortTitle: "Cù Lao Xanh Travel",
            shortDesc: "Homestay tiện nghi trên đảo Cù Lao Xanh, tổ chức tour lặn san hô bài bản.",
            starHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',
            price: "Từ 400.000₫/người",
            badgeText: "Homestay",
            badgeClass: "bg-primary",
            title: "Cù Lao Xanh Travel Homestay",
            location: "Đảo Cù Lao Xanh, Quy Nhơn",
            locationCard: "Nhơn Châu, Bình Định",
            image: "https://halotravel.vn/wp-content/uploads/2020/07/cu-lao-xanh-travel-homestay-1.jpg",
            intro: "Đơn vị lưu trú và lữ hành hàng đầu tại đảo, cung cấp phòng nghỉ tiện nghi, sạch sẽ cùng các tour khám phá (lặn san hô, BBQ) bài bản, an toàn. View biển trực diện, thích hợp cho các nhóm bạn trẻ và gia đình.",
            nearby: ["Cầu cảng Cù Lao Xanh", "Hải đăng Cù Lao Xanh", "Bãi đá Thảo Nguyên", "Bãi Nhỏ"],
            roomTypes: ["Phòng Đơn", "Phòng Đôi", "Phòng Tập Thể (Dorm)"],
            relatedTourId: "cu-lao-xanh"
        }
    },
    cuisine: {
        // --- DỮ LIỆU CŨ ---
        "goi-ca-trich": {
            shortTitle: "Gỏi Cá Trích",
            shortDesc: "Món ăn trứ danh kết hợp cá trích tươi sống, dừa nạo và rau rừng.",
            title: "Gỏi Cá Trích Phú Quốc",
            location: "Phú Quốc",
            image: "https://www.tasteatlas.com/images/dishes/16744689f0b04ba69efe8f23b2bd5edc.jpg?mw=1300",
            intro: "Gỏi cá trích là món ăn mang đậm hương vị biển cả, là sự kết hợp tinh tế giữa thịt cá trích tươi sống ngọt lịm với các loại rau rừng đặc trưng.",
            ingredients: ["Cá trích tươi", "Dừa nạo", "Hành tây, ớt", "Đậu phộng", "Rau rừng"],
            taste: "Vị ngọt thanh của cá tươi, vị béo ngậy của dừa và đậu phộng, chút hăng nhẹ của hành tây.",
            relatedTourId: "phu-quoc" 
        },
        "chao-hau": {
            shortTitle: "Cháo Hàu",
            shortDesc: "Hàu Côn Đảo nổi tiếng với vị ngọt đậm và kích thước lớn, nấu cháo với tiêu sọ.",
            title: "Cháo Hàu Côn Đảo",
            location: "Côn Đảo",
            image: "https://visitvungtau.travel/VisitVungTau/POINT/%C4%82n%20u%E1%BB%91ng/%E1%BA%A8m%20th%E1%BB%B1c%20%C4%91%E1%BB%8Ba%20ph%C6%B0%C6%A1ng/4627/image-thumb__4627__720_jpg/chao-hau-nguyen-con01-1527300509.3c858966.jpg",
            intro: "Cháo hàu là món ăn bổ dưỡng nổi tiếng tại Côn Đảo. Hàu ở đây được thiên nhiên ưu đãi nên con to, thịt dày và rất ngọt.",
            ingredients: ["Hàu sữa tươi", "Gạo dẻo thơm", "Hành tím, hành lá", "Tiêu sọ Côn Đảo"],
            taste: "Cháo sánh, thịt hàu béo ngọt, điểm nhấn là vị cay nồng của hạt tiêu sọ Côn Đảo.",
            relatedTourId: "con-dao" 
        },
        "bun-cha-ca": {
            shortTitle: "Bún Chả Cá",
            shortDesc: "Chả cá dai giòn từ cá thu, nước dùng ngọt thanh ninh từ xương cá.",
            title: "Bún Chả Cá Quy Nhơn",
            location: "Quy Nhơn",
            image: "https://gcs.tripi.vn/public-tripi/tripi-feed/img/473524mLL/image-nhung-dac-san-khong-the-bo-qua-khi-den-quy-nhon-165391213162671.jpg",
            intro: "Bún chả cá là niềm tự hào của người dân Quy Nhơn. Nước dùng ngọt thanh được ninh hoàn toàn từ xương cá tươi.",
            ingredients: ["Chả cá hấp/chiên", "Bún tươi", "Đầu cá, xương cá thu", "Tương ớt rim"],
            taste: "Nước lèo trong vắt, ngọt thanh. Miếng chả cá dai sần sật, ăn kèm tương ớt rim cay nồng.",
            relatedTourId: "quy-nhon" 
        },

        // --- DỮ LIỆU MỚI BỔ SUNG ---
        "cua-da": {
            shortTitle: "Cua Đá Cù Lao",
            shortDesc: "Loại cua sống trên núi, thịt thơm mùi lá rừng và có vị thuốc dân gian.",
            title: "Cua Đá Cù Lao Chàm",
            location: "Cù Lao Chàm, Quảng Nam",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gecarcoidea_lalandii_1.jpg/1200px-Gecarcoidea_lalandii_1.jpg",
            intro: "Đây là món 'vua' ở Cù Lao Chàm. Cua sống trên núi, trong các hốc đá, ăn lá cây rừng và uống nước suối nên thịt cực kỳ thơm, chắc và được người dân tin là có vị thuốc dân gian, rất tốt cho sức khỏe.",
            ingredients: ["Cua đá tự nhiên (chỉ được khai thác con lớn)", "Sả, gừng, ớt", "Muối tiêu chanh"],
            taste: "Thịt cua không tanh mà thơm mùi thảo dược, gạch cua béo ngậy nhưng không ngán. Thường được hấp bia hoặc nướng mọi để giữ trọn hương vị.",
            relatedTourId: "son-tra-cu-lao-cham"
        },
        "goi-ca-nam-o": {
            shortTitle: "Gỏi Cá Nam Ô",
            shortDesc: "Cá trích tươi sống ăn kèm với lá rừng đặc hữu vùng bán đảo Sơn Trà.",
            title: "Đặc Sản Gỏi Cá Nam Ô",
            location: "Nam Ô, Đà Nẵng",
            image: "https://image.thanhnien.vn/w1024/Uploaded/2021/aybun/2021_04_25/3_dpaa.jpg",
            intro: "Món ăn trứ danh làm từ cá trích tươi sống vừa đánh bắt tại làng chài Nam Ô dưới chân đèo Hải Vân. Điểm đặc biệt là món này ăn kèm với rất nhiều loại lá rừng chỉ có ở vùng bán đảo Sơn Trà và đèo Hải Vân.",
            ingredients: ["Cá trích tươi (lọc xương)", "Thính bắp, mè rang", "Nước chấm mè đậu phộng", "Lá rừng (trâm, dừng, cóc rừng...)"],
            taste: "Vị ngọt của cá tươi quyện với vị bùi của thính, vị chát của chuối xanh và hương thơm nồng nàn của các loại lá rừng tạo nên trải nghiệm bùng nổ vị giác.",
            relatedTourId: "son-tra-cu-lao-cham" // Liên kết tour có ghé Sơn Trà
        },
        "oc-cu": {
            shortTitle: "Ốc Cừ Lý Sơn",
            shortDesc: "Loại ốc có miếng vảy cứng như đá, thịt giòn sần sật và béo ngậy.",
            title: "Ốc Cừ (Ốc Xà Cừ) Lý Sơn",
            location: "Lý Sơn, Quảng Ngãi",
            image: "https://danviet.mediacdn.vn/upload/2-2016/images/2016-06-03/1464923236-oc-cu-1.jpg",
            intro: "Loại ốc đặc sản của vùng biển Lý Sơn, có miếng vảy che miệng tròn và cứng như đá (nên gọi là ốc cừ). Thịt ốc cực kỳ giòn và béo, là món ăn không thể thiếu trên bàn nhậu của du khách khi đến đảo.",
            ingredients: ["Ốc cừ tươi", "Sả, ớt, tỏi Lý Sơn", "Dầu ăn, gia vị"],
            taste: "Thịt ốc giòn sần sật, ngọt và béo. Khi xào sả ớt, hương thơm của tỏi Lý Sơn và sả làm dậy lên vị ngon khó cưỡng. Vảy ốc rất cứng, khi ăn phải đập vỡ hoặc khều khéo léo.",
            relatedTourId: "ly-son"
        },
        "banh-xeo-tom-nhay": {
            shortTitle: "Bánh Xèo Tôm Nhảy",
            shortDesc: "Tôm đất đỏ au còn nhảy đành đạch trên khuôn bánh giòn rụm.",
            title: "Bánh Xèo Tôm Nhảy Rau Mầm",
            location: "Quy Nhơn, Bình Định",
            image: "https://statics.vinpearl.com/banh-xeo-tom-nhay-quy-nhon-1.jpg",
            intro: "Món ăn dân dã nhưng nức tiếng đất Võ. Tên gọi xuất phát từ nguyên liệu chính là những con tôm đất đỏ au, tươi rói còn nhảy đành đạch khi bỏ vào khuôn. Bánh không dùng nhiều bột mà mỏng, giòn tan.",
            ingredients: ["Bột gạo xay nước cốt dừa", "Tôm đất tươi sống", "Giá đỗ, hành tây", "Rau mầm, xoài chua, bánh tráng"],
            taste: "Vỏ bánh giòn rụm tan trong miệng, tôm ngọt lịm chắc thịt. Cuốn với bánh tráng, rau mầm và chấm nước mắm chua ngọt Bình Định thì ngon quên lối về.",
            relatedTourId: "quy-nhon-1day"
        },
        "cha-ram-tom-dat": {
            shortTitle: "Chả Ram Tôm Đất",
            shortDesc: "Cuốn chả nhỏ bằng ngón tay, giòn tan, nhân tôm đất ngọt lịm.",
            title: "Chả Ram Tôm Đất Bình Định",
            location: "Bình Định",
            image: "https://cdn.tgdd.vn/Files/2018/06/20/1096570/cach-lam-cha-ram-tom-dat-binh-dinh-gion-rum-an-la-kho-quen-202201101438202562.jpg",
            intro: "Những cuốn chả ram nhỏ xinh chỉ bằng ngón tay út, lớp bánh tráng bên ngoài chiên lên giòn tan, bên trong là con tôm đất và chút thịt ba chỉ tẩm ướp đậm đà. Là món ăn chơi hoặc khai vị rất bắt khách.",
            ingredients: ["Tôm đất", "Thịt ba chỉ", "Bánh tráng phơi sương Bình Định", "Hành tím, gia vị"],
            taste: "Cắn một miếng nghe tiếng rộp vui tai. Vị béo của thịt, vị ngọt của tôm hòa quyện trong lớp vỏ giòn tan. Món này ăn kèm rau sống hoặc bún đều tuyệt vời.",
            relatedTourId: "cu-lao-xanh"
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
    const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');
    
    const html = `
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
            <a class="navbar-brand" href="index.html"><i class="fa-solid fa-umbrella-beach me-2"></i>Sea Sun Travel</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item"><a class="nav-link" href="index.html#home">Trang chủ</a></li>
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
                &copy; 2026 Sea Sun Travel. All Rights Reserved. Designed by Cookie.
            </div>
        </div>
    </footer>`;

    footerPlaceholder.innerHTML = html;
}

// ==========================================
// BACK TO TOP BUTTON LOGIC
// ==========================================
function setupBackToTop() {
    const btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    btn.setAttribute('aria-label', 'Lên đầu trang');
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    });

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
    setupBackToTop();
});