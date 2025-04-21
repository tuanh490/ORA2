const web_tech = `
<div id="web-tech" class="w3-container w3-padding-64">
        <div class="container">
          <div class="header">Các công nghệ web</div>
          <p>Dưới đây là các công nghệ phổ biến được sử dụng trong xây dựng ứng dụng Web:</p>
          <div id="frontend">
            <h3>1. Frontend (Giao diện người dùng)</h3>
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
          </div>

          <div id="backend">
            <h3>2. Backend (Máy chủ và xử lý dữ liệu)</h3>
            <ul>
              <li><strong>Node.js</strong>: Môi trường runtime JavaScript hiệu quả cho ứng dụng Web.</li>
              <li><strong>Express.js</strong>: Framework giúp xây dựng API và xử lý các yêu cầu HTTP nhanh chóng.</li>
              <li><strong>Django (Python)</strong>: Framework Python phù hợp cho các ứng dụng Web cần bảo mật cao.</li>
              <li><strong>Ruby on Rails</strong>: Framework giúp phát triển ứng dụng Web nhanh chóng và dễ dàng bảo trì.
              </li>
              <li><strong>Java Spring Boot</strong>: Framework mạnh mẽ cho ứng dụng Web Java với khả năng mở rộng cao.
              </li>
            </ul>
          </div>

          <div id="database">
            <h3>3. Cơ sở dữ liệu</h3>
            <ul>
              <li><strong>MySQL</strong>: Cơ sở dữ liệu quan hệ phổ biến.</li>
              <li><strong>PostgreSQL</strong>: Cơ sở dữ liệu mạnh mẽ hỗ trợ truy vấn phức tạp.</li>
              <li><strong>MongoDB</strong>: Cơ sở dữ liệu NoSQL linh hoạt cho dữ liệu phi cấu trúc.</li>
              <li><strong>Cassandra</strong>: Cơ sở dữ liệu NoSQL phân tán phù hợp cho dữ liệu lớn.</li>
            </ul>
          </div>

          <div id="api">
            <h3>4. API và Tích hợp dịch vụ</h3>
            <ul>
              <li><strong>RESTful APIs</strong>: Phương thức phổ biến để giao tiếp giữa các hệ thống qua HTTP.</li>
              <li><strong>GraphQL</strong>: Công nghệ API mạnh mẽ giúp lấy dữ liệu theo yêu cầu.</li>
              <li><strong>WebSockets</strong>: Giải pháp cho các ứng dụng thời gian thực.</li>
            </ul>
          </div>

          <div id="devops">
            <h3>5. DevOps và Triển khai</h3>
            <ul>
              <li><strong>Docker</strong>: Giải pháp đóng gói ứng dụng và môi trường vào container.</li>
              <li><strong>CI/CD</strong>: Tự động hóa quy trình kiểm thử và triển khai (Jenkins, GitLab CI, GitHub
                Actions).
              </li>
              <li><strong>AWS, Azure, Google Cloud</strong>: Các dịch vụ đám mây linh hoạt cho phát triển và triển khai
                ứng
                dụng Web.</li>
            </ul>
          </div>

          <div id="security"></div>
          <h3>6. Bảo mật</h3>
          <ul>
            <li><strong>OAuth2 & JWT</strong>: Cơ chế xác thực và phân quyền người dùng an toàn.</li>
            <li><strong>HTTPS</strong>: Đảm bảo giao tiếp an toàn qua mã hóa SSL/TLS.</li>
            <li><strong>Helmet.js</strong>: Thư viện Node.js tăng cường bảo mật HTTP header.</li>
          </ul>

          <div id="testing">
            <h3>7. Testing và Debugging</h3>
            <ul>
              <li><strong>Jest</strong>: Công cụ kiểm thử JavaScript, thường dùng với React và Node.js.</li>
              <li><strong>Mocha & Chai</strong>: Framework kiểm thử cho Node.js.</li>
              <li><strong>Cypress</strong>: Công cụ kiểm thử tích hợp mạnh mẽ cho các ứng dụng Web.</li>
              <li><strong>Postman</strong>: Công cụ kiểm thử API và làm việc với RESTful API.</li>
            </ul>
          </div>

          <div id="optimization">
            <h3>8. Performance Optimization</h3>
            <ul>
              <li><strong>Lazy Loading</strong>: Tải tài nguyên theo yêu cầu để cải thiện tốc độ tải trang.</li>
              <li><strong>CDN (Content Delivery Network)</strong>: Mạng phân phối nội dung giúp giảm độ trễ và cải thiện
                tốc
                độ.</li>
              <li><strong>Caching</strong>: Sử dụng Redis hoặc Memcached để lưu trữ dữ liệu tạm thời và giảm tải cho
                server.
              </li>
            </ul>
          </div>

          <div id="authentication">
            <h3>9. User Authentication & Authorization</h3>
            <ul>
              <li><strong>Firebase Authentication</strong>: Dịch vụ đăng nhập thông qua Google, Facebook,
                email/password.
              </li>
              <li><strong>Auth0</strong>: Dịch vụ bảo mật giúp quản lý xác thực và phân quyền người dùng dễ dàng.</li>
            </ul>
          </div>
          <a href="https://developer.mozilla.org/en-US/docs/Web" target="_blank">
            <img width="100%"
              src="https://www.shutterstock.com/shutterstock/photos/1854050815/display_1500/stock-vector-abstract-technology-horizontal-motion-style-concept-particle-connection-background-design-with-red-1854050815.jpg"
              alt="">
            <p style="color: blue;">
              Các công nghệ web</p>
          </a>

        </div>
      </div>
`