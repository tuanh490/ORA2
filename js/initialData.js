const initialData = [
    {
        name: 'Trang chủ',
        id: crypto.randomUUID(),
        sidebarMenuItems: [
            {
                name: 'Thông tin khai giảng',
                id: crypto.randomUUID(),
                totalRows: 1,
                totalCols: 1,
                contents: [
                    {
                        name: 'Thông tin khai giảng',
                        rows: 1,
                        cols: 1,
                        html: `
                        <div>
                            <table class="table-info">
                                <tr>
                                    <th>Thứ</th>
                                    <td>Thứ 4 </td>
                                </tr>
                                <tr>
                                    <th>Thời gian/Tiết</th>
                                    <td>Từ 3 đến 6</td>
                                </tr>
                                <tr>
                                    <th>Ngày/Tuần</th>
                                    <td>24-31,33-41</td>
                                </tr>
                                <tr>
                                    <th>Tại địa điểm</th>
                                    <td>TC-312</td>
                                </tr>
                            </table>
                        </div>
                        `
                    }
                ]
            },
            {
                name: 'Thông tin Seminar',
                id: crypto.randomUUID(),
                totalRows: 1,
                totalCols: 1,
                contents: [
                    {
                        name: 'Seminar hôm nay',
                        rows: 1,
                        cols: 1,
                        html: `
                        <table class="table-info">
                            <tr>
                                <th>Mã lớp</th>
                                <td>157533</td>
                            </tr>
                            <tr>
                                <th>Loại hình</th>
                                <td>LT+BT</td>
                            </tr>
                            <tr>
                                <th>Hệ</th>
                                <td>CN</td>
                            </tr>
                            <tr>
                                <th>GVHD</th>
                                <td>Phạm Huy Hoàng</td>
                            </tr>
                            <tr>
                                <th>Số lần vắng</th>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th>Số sinh viên</th>
                                <td>151</td>
                            </tr>
                            <tr>
                                <th>Hình thức GD</th>
                                <td>Offline</td>
                            </tr>
                        </table>
                        `
                    }
                ]
            },
            {
                name: 'Thông tin công ty quan tâm',
                id: crypto.randomUUID(),
                totalRows: 1,
                totalCols: 3,
                contents: [
                    {
                        name: 'Thông tin công ty quan tâm',
                        rows: 1,
                        cols: 2,
                        html: `
                        <div style="flex: 2; margin-right: 30px;">
                            <ul>
                                <li><strong>Công ty:</strong> FPT Software</li>
                            </ul>
                            <p>
                                FPT Software là tên gọi khác của công ty TNHH Phần Mềm FPT với nhiệm vụ chính là gia công phần
                                mềm tại
                                Việt Nam và nước ngoài. Thành lập từ năm 1988 đến nay với 3 Trụ sở chính FPT Software đặt tại
                                Việt Nam
                                và
                                một số nước trên toàn thế giới như Hoa Kỳ, Nhật Bản, Malaysia, Đức, Úc, Singapore, Malaysia,
                                Thái Lan
                                và
                                Philipines hiện FPT Software đáp ứng nhu cầu gia công phần mềm lớn cho hơn 150 công ty hàng đầu
                                tại 20
                                quốc gia lớn nhất trên thế giới hiện nay với các hợp đồng lớn có khi đạt cả 1 triệu USD dành cho
                                một
                                số
                                đối tác lớn như Hitachi, NEOPOST, Petronas, Deutsche Bank, và Unilever với hơn 4000 nhân viên
                                trên
                                toàn
                                thế giới. </p>
                            <p>FPT Software theo đuổi mục tiêu gia công phần mềm để đáp ứng cho nhu cầu phát triển CNTT của các
                                hãng
                                phần
                                mềm trong nước, các công ty lớn trong nước và tham vọng hơn là xuất khẩu phần mềm trên toàn thế
                                giới
                                cho
                                các công ty nước ngoài biết đến tập đoàn FPT, mục đích chính là vươn đến tầm cao mới thông qua
                                công
                                nghệ
                                nhằm nâng cao năng suất lao động.</p>
                            <p>Kinh doanh của FPT Software xuất phát từ Công nghệ thông tin và Viễn Thông FPT là cốt lõi để đáp
                                ứng
                                cho
                                khách hàng trên 63 tỉnh thành trên toàn lãnh thổ Việt Nam và mở rộng đến khách hàng toàn cầu. Từ
                                khi
                                được
                                thành lập cho đến nay, FPT Software đã là công ty phần mềm số 1 tại Việt Nam trong lĩnh vực tích
                                hợp
                                hệ
                                thống, phân phối và bán lẻ, dịch vụ Công Nghệ Thông tin, xuất khẩu gia công phần mềm, bán lẻ sản
                                phẩm
                                CNTT. Ở lĩnh vực Viễn Thông FPT là một trong 3 nhà cung cấp dịch vụ internet cáp quang FPT hàng
                                đầu
                                tại
                                Việt Nam. Về lĩnh vực quảng cáo, FPT là đơn vị quảng cáo trực tuyến số 1 tại Việt Nam với trang
                                báo
                                điện
                                tử VNexpress với hơn 42 triệu lượt truy cập mỗi ngày.</p>
                        </div>
                        `
                    },
                    {
                        name: 'Quảng cáo',
                        rows: 1,
                        cols: 1,
                        html: `
                        <a href="https://fptsoftware.com/" target="_blank" style="flex: 1; margin-top: 20px;">
                            <div class="FRB" style="width: 100%;">
                                <img class="DRB"
                                    src="http://itde.hvnh.edu.vn/public/img/news/files/FPT%20tuy%E1%BB%83n%20d%E1%BB%A5ng%20(2).jpg"
                                    style="width: 100%;">
                                <div class="ERB" style="width: 100%;color: blue" title="">FPT SOFTWARE TUYỂN DỤNG</div>
                            </div>
                        </a>
                        `
                    }
                ]
            },
        ]
    },
    {
        name: 'Thông tin môn học',
        id: crypto.randomUUID(),
        sidebarMenuItems: [
            {
                name: 'Thông tin chung',
                id: crypto.randomUUID(),
                totalRows: 1,
                totalCols: 1,
                contents: [
                    {
                        name: 'Thông tin chung',
                        rows: 1,
                        cols: 1,
                        html: `
                        <div style="display: flex; flex-wrap: wrap; gap: 20px;">
                            <!-- Cột 1 -->
                            <div style="flex: 1; min-width: 300px;">
                                <label>Đơn vị (*)</label>
                                <select id="dropdown" disabled style="width: 100%;">
                                    <option>Trường Công nghệ Thông tin và Truyền thông</option>
                                </select>
                            </div>

                            <div style="flex: 1; min-width: 300px;">
                                <label>Đơn vị con</label>
                                <select id="dropdown" disabled style="width: 100%;">
                                    <option>Nothing selected</option>
                                </select>
                            </div>

                            <div style="flex: 1; min-width: 300px;">
                                <label>Mã học phần (*)</label>
                                <input type="text" value="IT4409" dir="ltr" readonly="" disabled style="width: 100%;">
                            </div>

                            <div style="flex: 1; min-width: 300px;">
                                <label>Tên học phần</label>
                                <input type="text" value="Công nghệ web và dịch vụ trực tuyến" dir="ltr" readonly="" disabled
                                    style="width: 100%; white-space: nowrap; overflow: hidden;">
                            </div>

                            <div style="flex: 1; min-width: 300px;">
                                <label>Tên tiếng Anh</label>
                                <input type="text" value="Web technologies and e-Services"
                                    class="form-control IBC form-control-readonly" dir="ltr" readonly="" disabled
                                    style="width: 100%;">
                            </div>

                            <div style="flex: 1; min-width: 300px;">
                                <label>Hệ đào tạo</label>
                                <select id="dropdown" disabled style="width: 100%;">
                                    <option>4 items selected</option>
                                </select>
                                <div style="width: 100%;">
                                    <a>Thạc sỹ Khoa học&nbsp;[X]&nbsp;&nbsp;&nbsp;</a>
                                    <a>Kỹ sư chính quy&nbsp;[X]&nbsp;&nbsp;&nbsp;</a>
                                    <a>Cử nhân&nbsp;[X]&nbsp;&nbsp;&nbsp;</a>
                                    <a>Việt-Nhật&nbsp;[X]&nbsp;&nbsp;&nbsp;</a>
                                </div>
                            </div>

                            <div style="flex: 1; min-width: 300px;">
                                <label>Ngành đào tạo</label>
                                <select id="dropdown" disabled style="width: 100%;">
                                    <option>Trường Công nghệ Thông tin và Truyền thông</option>
                                </select>
                            </div>

                            <div style="flex: 1; min-width: 300px;">
                                <label>Loại hình (*)</label>
                                <select id="dropdown" disabled style="width: 100%;">
                                    <option>Lớp</option>
                                </select>
                            </div>

                            <div style="flex: 1; min-width: 300px;">
                                <label>Điều phối viên</label>
                                <select id="dropdown" disabled style="width: 100%;">
                                    <option>Phạm Huy Hoàng</option>
                                </select>
                            </div>

                            <div style="flex: 1; min-width: 300px;">
                                <label>Nhóm chuyên môn</label>
                                <select id="dropdown" disabled style="width: 100%;">
                                    <option>Phạm Huy Hoàng</option>
                                </select>
                            </div>
                        </div>

                        <!-- Cột 2 -->
                        <div style="display: flex; flex-wrap: wrap; gap: 20px;">
                            <div style="flex: 1; min-width: 300px;">
                                <label>HP liên quan</label>
                                <input type="text" placeholder="Nhập mã HP" disabled style="width: 100%;">
                            </div>

                            <div style="flex: 1; min-width: 300px;">
                                <label>Hệ số điểm thực hành</label>
                                <input type="text" value="0" class="form-control IBC" dir="ltr" disabled=""
                                    style="width: 100%;">
                            </div>

                            <div style="flex: 1; min-width: 300px;">
                                <label>Số tín chỉ</label>
                                <input type="text" value="3" class="form-control IBC" dir="ltr" disabled=""
                                    style="width: 100%;">
                            </div>

                            <div style="flex: 1; min-width: 300px;">
                                <label>Số giờ LT</label>
                                <input type="text" value="2" class="form-control IBC" dir="ltr" disabled=""
                                    style="width: 100%;">
                            </div>

                            <div style="flex: 1; min-width: 300px;">
                                <label>Số giờ BT</label>
                                <input type="text" value="2" class="form-control IBC" dir="ltr" disabled=""
                                    style="width: 100%;">
                            </div>

                            <div style="flex: 1; min-width: 300px;">
                                <label>Số giờ TN/TH</label>
                                <input type="text" value="0" class="form-control IBC" dir="ltr" disabled=""
                                    style="width: 100%;">
                            </div>

                            <div style="flex: 1; min-width: 300px;">
                                <label>Số giờ tự học</label>
                                <input type="text" value="6" class="form-control IBC" dir="ltr" disabled=""
                                    style="width: 100%;">
                            </div>

                            <div style="flex: 1; min-width: 300px;">
                                <label>Số giờ thực tập</label>
                                <input type="text" value="0" class="form-control IBC" dir="ltr" disabled=""
                                    style="width: 100%;">
                            </div>

                            <div style="flex: 1; min-width: 300px;">
                                <label>kHD thực tập</label>
                                <input type="text" value="0" class="form-control IBC" dir="ltr" disabled=""
                                    style="width: 100%;">
                            </div>

                            <div style="flex: 1; min-width: 300px;">
                                <label>kHD đồ án</label>
                                <input type="text" value="0" class="form-control IBC" dir="ltr" disabled=""
                                    style="width: 100%;">
                            </div>

                            <div style="flex: 1; min-width: 300px;">
                                <label>Phân bố</label>
                                <input type="text" value="3(2-2-0-6)" class="form-control IBC" dir="ltr" disabled=""
                                    style="width: 100%;">
                            </div>

                            <div style="flex: 1; min-width: 300px;">
                                <label>Hình thức thi cuối kỳ</label>
                                <select id="dropdown" disabled style="width: 100%;">
                                    <option>[Chọn hình thức thi cuối kỳ]</option>
                                </select>
                            </div>
                        </div>
                        `
                    }
                ]
            },
            {
                name: 'Mô tả tóm tắt học phần (tiếng Việt) (*)',
                id: crypto.randomUUID(),
                totalRows: 1,
                totalCols: 1,
                contents: [
                    {
                        name: 'Mô tả tóm tắt học phần (tiếng Việt) (*)',
                        rows: 1,
                        cols: 1,
                        html: `
                        <div>
                            <div> 
                            <label>
                                <strong>Mô tả tóm tắt học phần (tiếng Việt)</strong>(*)
                            </label>
                            </div>
                            <p><strong>Mục tiêu: </strong>Học phần cung cấp các kiến thức cần thiết để xây dựng và phát
                                triển
                                các ứng dụng, dịch vụ trực
                                tuyến trên môi trường web. Sau khi học xong học phần này, sinh viên có khả năng:
                                <ul>
                                    <li>Có thể sử dụng một ngôn ngữ lập trình như JSP, PHP để phát triển ứng dụng web cho các
                                        lĩnh
                                        vực khác nhau như: hệ quản trị nội dung (CMS), cổng thông tin (Portal), hay các ứng dụng
                                        điện
                                        tử (eCommerce, eLearning, eGoverment,…)</li>
                                    <li>Nắm vững được các công nghệ web, các platform, framework hiện đang thịnh hành.</li>
                                </ul>
                                Ngoài ra học phần cũng cung cấp cho sinh viên các kỹ năng làm việc nhóm, thuyết trình và thái
                                độ
                                cần thiết để làm việc và ứng dụng các kỹ thuật trong các dự án, công ty về phần mềm sau này.
                            </p>
                        </div>
                        `
                    }
                ]
            },
            {
                name: 'Mô tả tóm tắt học phần (tiếng Anh) (*)',
                id: crypto.randomUUID(),
                totalRows: 1,
                totalCols: 1,
                contents: [
                    {
                        name: 'Mô tả tóm tắt học phần (tiếng Anh) (*)',
                        rows: 1,
                        cols: 1,
                        html: `
                        <div>
                            <div> <label><strong>Mô tả tóm tắt học phần (tiếng
                                Anh)</strong>
                                (*)</label>
                            </div>
                            <p><strong>Objectives:</strong>
                                The course provides students with the necessary knowledge to build and develop online
                                applications and services on the web environment. After completing this couse, students are
                                able
                                to:
                                <ul>
                                    <li>Use a programming language such as JSP, PHP to develop web applications for different
                                        areas
                                        such as content management system (CMS), portal, or online applications (eCommerce,
                                        eLearning,
                                        eGoverment, ...)</li>
                                    <li>Understand the popular web technologies, platforms, frameworks.</li>
                                </ul>
                                In addition, the course also provides students with skills of teamwork and presentation, and
                                attitudes needed to work and apply the techniques in software projects and companies in the
                                future.</p>
                        </div>
                        `
                    }
                ]
            },
            {
                name: 'Nội dung tóm tắt học phần (tiếng Việt) (*)',
                id: crypto.randomUUID(),
                totalRows: 1,
                totalCols: 1,
                contents: [
                    {
                        name: 'Nội dung tóm tắt học phần (tiếng Việt) (*)',
                        rows: 1,
                        cols: 1,
                        html: `
                        <div>
                            <div> <label><strong>Nội dung tóm tắt của học phần (tiếng
                                Việt)</strong>
                                (*)</label> </div>
                            <div>
                                <p>Internet, web, kiến trúc ứng dụng web,&nbsp; HTML, CSS, Javascript, PHP, JSP, Ajax,
                                    DOM, XML,
                                    SOA, An toàn bảo mật web, v.v.</p>
                            </div>
                        </div>
                        `
                    }
                ]
            },
            {
                name: 'Nội dung tóm tắt học phần (tiếng Anh) (*)',
                id: crypto.randomUUID(),
                totalRows: 1,
                totalCols: 1,
                contents: [
                    {
                        name: 'Nội dung tóm tắt học phần (tiếng Anh) (*)',
                        rows: 1,
                        cols: 1,
                        html: `
                        <div>
                            <div> <label><strong>Nội dung tóm tắt của học phần (tiếng
                                Anh)</strong>
                                (*)</label> </div>
                            <div>
                                <p>Internet, web, architecture of web
                                    application,&nbsp; HTML, CSS, Javascript, PHP, JSP, Ajax, DOM, XML, SOA,&nbsp;website
                                    security</a>,
                                etc.</p>
                        </div>
                        `
                    }
                ]
            },
            {
                name: 'Sách tham khảo',
                id: crypto.randomUUID(),
                totalRows: 1,
                totalCols: 2,
                contents: [
                    {
                        name: 'Sách tham khảo',
                        rows: 1,
                        cols: 1,
                        html: `
                        <div style="flex: 2; margin-right: 30px;">
                            <p>Sách Web Technologies: HTML, Javascript, PHP, Java, Jsp, XML and Ajax, Black Book</p>
                        </div>
                        `
                    },
                    {
                        name: 'Quảng cáo',
                        rows: 1,
                        cols: 1,
                        html: `
                        <a href="https://www.amazon.com/Web-Technologies-HTML-Javascript-Black/dp/8177229974"
                            target="_blank" style="flex: 1;margin-top: 20px;">
                            <div class="FRB" style="width: 100%;">
                                <img class="DRB" src="https://m.media-amazon.com/images/I/71t58FV+qFL._SY466_.jpg"
                                    style="width: 100%;">
                                    <div class="ERB" style="width: 100%;color: blue" title="">Web Technologies: HTML,
                                        Javascript, PHP, Java, Jsp, XML and Ajax, Black Book</div>
                            </div>
                        </a>
                        `
                    }
                ]
            },
        ]
    },
    {
        name: 'Các công nghệ web',
        id: crypto.randomUUID(),
        sidebarMenuItems: [
            {
                name: '1. Frontend (Giao diện người dùng)',
                id: crypto.randomUUID(),
                totalRows: 1,
                totalCols: 1,
                contents: [
                    {
                        name: '1. Frontend (Giao diện người dùng)',
                        rows: 1,
                        cols: 1,
                        html: `
                        <ul>
                            <li><strong>HTML, CSS, JavaScript</strong>: Các công nghệ cơ bản để xây dựng cấu trúc và giao diện người
                                dùng.
                            </li>
                            <li><strong>ReactJS</strong>: Thư viện JavaScript để xây dựng giao diện người dùng động.</li>
                            <li><strong>Angular</strong>: Framework JavaScript mạnh mẽ cho các ứng dụng Web quy mô lớn.</li>
                            <li><strong>Vue.js</strong>: Framework linh hoạt giúp phát triển giao diện người dùng hiệu quả.</li>
                            <li><strong>CSS Preprocessors (SASS, LESS)</strong>: Giúp cải thiện mã CSS với các tính năng như biến và
                                hàm.
                            </li>
                            <li><strong>Responsive Design</strong>: Thiết kế giao diện phù hợp với mọi kích thước màn hình (sử dụng
                                Bootstrap, Tailwind CSS).</li>
                        </ul>
                        `
                    }
                ]
            },
            {
                name: '2. Backend (Máy chủ và xử lý dữ liệu)',
                id: crypto.randomUUID(),
                totalRows: 1,
                totalCols: 1,
                contents: [
                    {
                        name: 'Nội dung',
                        rows: 1,
                        cols: 1,
                        html: `
                        <ul>
                            <li><strong>Node.js</strong>: Môi trường runtime JavaScript hiệu quả cho ứng dụng Web.</li>
                            <li><strong>Express.js</strong>: Framework giúp xây dựng API và xử lý các yêu cầu HTTP nhanh chóng.</li>
                            <li><strong>Django (Python)</strong>: Framework Python phù hợp cho các ứng dụng Web cần bảo mật cao.</li>
                            <li><strong>Ruby on Rails</strong>: Framework giúp phát triển ứng dụng Web nhanh chóng và dễ dàng bảo trì.
                            </li>
                            <li><strong>Java Spring Boot</strong>: Framework mạnh mẽ cho ứng dụng Web Java với khả năng mở rộng cao.
                            </li>
                        </ul>
                        `
                    }
                ]
            },
            {
                name: '3. Cơ sở dữ liệu',
                id: crypto.randomUUID(),
                totalRows: 1,
                totalCols: 1,
                contents: [
                    {
                        name: 'Nội dung',
                        rows: 1,
                        cols: 1,
                        html: `
                        <ul>
                            <li><strong>MySQL</strong>: Cơ sở dữ liệu quan hệ phổ biến.</li>
                            <li><strong>PostgreSQL</strong>: Cơ sở dữ liệu mạnh mẽ hỗ trợ truy vấn phức tạp.</li>
                            <li><strong>MongoDB</strong>: Cơ sở dữ liệu NoSQL linh hoạt cho dữ liệu phi cấu trúc.</li>
                            <li><strong>Cassandra</strong>: Cơ sở dữ liệu NoSQL phân tán phù hợp cho dữ liệu lớn.</li>
                        </ul>
                        `
                    }
                ]
            },
            {
                name: '4. API và Tích hợp dịch vụ',
                id: crypto.randomUUID(),
                totalRows: 1,
                totalCols: 1,
                contents: [
                    {
                        name: 'Nội dung',
                        rows: 1,
                        cols: 1,
                        html: `
                        <ul>
                            <li><strong>RESTful APIs</strong>: Phương thức phổ biến để giao tiếp giữa các hệ thống qua HTTP.</li>
                            <li><strong>GraphQL</strong>: Công nghệ API mạnh mẽ giúp lấy dữ liệu theo yêu cầu.</li>
                            <li><strong>WebSockets</strong>: Giải pháp cho các ứng dụng thời gian thực.</li>
                        </ul>
                        `
                    }
                ]
            },
            {
                name: '5. DevOps và Triển khai',
                id: crypto.randomUUID(),
                totalRows: 1,
                totalCols: 1,
                contents: [
                    {
                        name: 'Nội dung',
                        rows: 1,
                        cols: 1,
                        html: `
                        <ul>
                            <li><strong>Docker</strong>: Giải pháp đóng gói ứng dụng và môi trường vào container.</li>
                            <li><strong>CI/CD</strong>: Tự động hóa quy trình kiểm thử và triển khai (Jenkins, GitLab CI, GitHub
                                Actions).
                            </li>
                            <li><strong>AWS, Azure, Google Cloud</strong>: Các dịch vụ đám mây linh hoạt cho phát triển và triển khai
                                ứng
                                dụng Web.</li>
                        </ul>
                        `
                    }
                ]
            },
            {
                name: '6. Bảo mật',
                id: crypto.randomUUID(),
                totalRows: 1,
                totalCols: 1,
                contents: [
                    {
                        name: 'Nội dung',
                        rows: 1,
                        cols: 1,
                        html: `
                        <ul>
                            <li><strong>OAuth2 & JWT</strong>: Cơ chế xác thực và phân quyền người dùng an toàn.</li>
                            <li><strong>HTTPS</strong>: Đảm bảo giao tiếp an toàn qua mã hóa SSL/TLS.</li>
                            <li><strong>Helmet.js</strong>: Thư viện Node.js tăng cường bảo mật HTTP header.</li>
                        </ul>
                        `
                    }
                ]
            },
            {
                name: '7. Testing và Debugging',
                id: crypto.randomUUID(),
                totalRows: 1,
                totalCols: 1,
                contents: [
                    {
                        name: 'Nội dung',
                        rows: 1,
                        cols: 1,
                        html: `
                        <ul>
                            <li><strong>Jest</strong>: Công cụ kiểm thử JavaScript, thường dùng với React và Node.js.</li>
                            <li><strong>Mocha & Chai</strong>: Framework kiểm thử cho Node.js.</li>
                            <li><strong>Cypress</strong>: Công cụ kiểm thử tích hợp mạnh mẽ cho các ứng dụng Web.</li>
                            <li><strong>Postman</strong>: Công cụ kiểm thử API và làm việc với RESTful API.</li>
                        </ul>
                        `
                    }
                ]
            },
            {
                name: '8. Performance Optimization',
                id: crypto.randomUUID(),
                totalRows: 1,
                totalCols: 1,
                contents: [
                    {
                        name: 'Nội dung',
                        rows: 1,
                        cols: 1,
                        html: `
                        <ul>
                            <li><strong>Lazy Loading</strong>: Tải tài nguyên theo yêu cầu để cải thiện tốc độ tải trang.</li>
                            <li><strong>CDN (Content Delivery Network)</strong>: Mạng phân phối nội dung giúp giảm độ trễ và cải thiện
                                tốc
                                độ.</li>
                            <li><strong>Caching</strong>: Sử dụng Redis hoặc Memcached để lưu trữ dữ liệu tạm thời và giảm tải cho
                                server.
                            </li>
                        </ul>
                        `
                    }
                ]
            },
            {
                name: '9. User Authentication & Authorization',
                id: crypto.randomUUID(),
                totalRows: 1,
                totalCols: 2,
                contents: [
                    {
                        name: 'Nội dung',
                        rows: 1,
                        cols: 1,
                        html: `
                        <ul>
                            <li><strong>Firebase Authentication</strong>: Dịch vụ đăng nhập thông qua Google, Facebook,
                                email/password.
                            </li>
                            <li><strong>Auth0</strong>: Dịch vụ bảo mật giúp quản lý xác thực và phân quyền người dùng dễ dàng.</li>
                        </ul>
                        `
                    },
                    {
                        name: 'Quảng cáo',
                        rows: 1,
                        cols: 1,
                        html: `
                        <a href="https://developer.mozilla.org/en-US/docs/Web" target="_blank">
                            <img width="100%"
                            src="https://www.shutterstock.com/shutterstock/photos/1854050815/display_1500/stock-vector-abstract-technology-horizontal-motion-style-concept-particle-connection-background-design-with-red-1854050815.jpg"
                            alt="">
                            <p style="color: blue;">
                            Các công nghệ web</p>
                        </a>
                        `
                    }
                ]
            },
        ]
    },
    {
        name: 'Thông tin sinh viên',
        id: crypto.randomUUID(),
        sidebarMenuItems: [
            {
                name: 'Curriculum Vitae (CV)',
                id: crypto.randomUUID(),
                totalRows: 2,
                totalCols: 2,
                contents: [
                    {
                        name: 'Ảnh',
                        rows: 1,
                        cols: 1,
                        html: `
                        <div class="flex justify-center">
                            <img src="./assets/ava.jpg" alt="Student Photo" class="profile-photo">
                        </div>
                        `
                    },
                    {
                        name: 'Thông tin',
                        rows: 1,
                        cols: 1,
                        html: `
                        <div>
                            <div class="details"><span>Họ và tên:</span> Nguyễn Tú Anh</div>
                            <div class="details"><span>Năm vào trường:</span> 2022</div>
                            <div class="details"><span>Chương trình:</span> Kỹ thuật máy tính</div>
                            <div class="details"><span>MSSV:</span> 20225119</div>
                            <div class="details"><span>Giới tính:</span> Nam</div>
                            <div class="details"><span>Lớp:</span> Kỹ thuật máy tính - 07</div>
                            <div class="details"><span>Khóa học:</span> 67</div>
                            <div class="details"><span>Email:</span> Anh.nt225119@sis.hust.edu.vn</div>
                        </div>
                        `
                    },
                    {
                        name: 'Kỹ năng',
                        rows: 1,
                        cols: 2,
                        html: `
                        <h5>Kỹ năng</h5>
                        <table class="table-info">
                            <tr>
                                <th>Ngôn ngữ</th>
                                <td>HTML, CSS, JavaScript, Java, Python</td>
                            </tr>
                            <tr>
                                <th>Frameworks</th>
                                <td>ReactJS, NodeJS, ExpressJS</td>
                            </tr>
                            <tr>
                                <th>Cơ sở dữ liệu</th>
                                <td>MySQL, SQL Server, MongoDB</td>
                            </tr>
                        </table>
                        `
                    }
                ]
            },
            {
                name: 'Các dự án đã tham gia',
                id: crypto.randomUUID(),
                totalRows: 2,
                totalCols: 1,
                contents: [
                    {
                        name: 'Tool gợi ý Deck cho Deck-Building game',
                        rows: 1,
                        cols: 1,
                        html: `
                        <h5>Tool gợi ý Deck cho Deck-Building game</h5>
                        <ul>
                            <li>Sử dụng ReactJS để phát triển Frontend và ExpressJS để phát triển Backend</li>
                            <li>Sử dụng Pandas và Numpy để xây dựng hệ gợi ý bộ bài.</li>
                            <li>Xây dựng Python APIs với FastAPI.</li>
                        </ul>
                        `
                    },
                    {
                        name: 'Ứng dụng quản lý chung cư',
                        rows: 1,
                        cols: 1,
                        html: `
                        <h5>Ứng dụng quản lý chung cư</h5>
                        <p>Phát triển Backend với REST APIs sử dụng MySQL, ExpressJS và NodeJS</p>
                        `
                    }
                ]
            },
            {
                name: 'Sinh hoạt động cộng đồng',
                id: crypto.randomUUID(),
                totalRows: 3,
                totalCols: 1,
                contents: [
                    {
                        name: 'Sinh hoạt công dân 2023',
                        rows: 1,
                        cols: 1,
                        html: `
                        <p>Sinh hoạt công dân năm 2023</p>
                        `
                    },
                    {
                        name: 'Sinh hoạt công dân 2024',
                        rows: 1,
                        cols: 1,
                        html: `
                        <p>Sinh hoạt công dân năm 2024</p>
                        `
                    },
                    {
                        name: 'Sinh hoạt công dân 2022',
                        rows: 1,
                        cols: 1,
                        html: `
                        <p>Sinh hoạt công dân năm 2022</p>
                        `
                    }
                ]
            },
        ]
    }
];