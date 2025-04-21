const info = `
    <div id="info" class="w3-container w3-padding-64">
        <div class="container">
            <div class="header">Thông tin môn học</div>
            <div style="width: 100%;">
                <table cellspacing="0" cellpadding="0" style="width: 100%;">
                    <tbody>
                        <tr>
                            <td style="vertical-align: top;">
                                <div class="GBC">
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

                                    <div id="summaryVN">
                                        <div style="width: 100%;">&nbsp;
                                            <hr>
                                        </div>
                                        <div> <label><strong>Mô tả tóm tắt học phần (tiếng Việt)</strong>
                                            (*)</label>
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
                                    <div id="summaryEN">
                                        <div style="width: 100%;">&nbsp;
                                            <hr>
                                        </div>
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

                                    <div id="contentVN">
                                        <div style="width: 100%;">&nbsp;
                                            <hr>
                                        </div>
                                        <div> <label><strong>Nội dung tóm tắt của học phần (tiếng
                                            Việt)</strong>
                                            (*)</label> </div>
                                        <div>
                                            <p>Internet, web, kiến trúc ứng dụng web,&nbsp; HTML, CSS, Javascript, PHP, JSP, Ajax,
                                                DOM, XML,
                                                SOA, An toàn bảo mật web, v.v.</p>
                                        </div>
                                    </div>
                                    <div id="contentEN">
                                        <div style="width: 100%;">&nbsp;
                                            <hr>
                                        </div>
                                        <div> <label><strong>Nội dung tóm tắt của học phần (tiếng
                                            Anh)</strong>
                                            (*)</label> </div>
                                        <div>
                                            <p>Internet, web, architecture of web
                                                application,&nbsp; HTML, CSS, Javascript, PHP, JSP, Ajax, DOM, XML, SOA,&nbsp;website
                                                security</a>,
                                            etc.</p>
                                    </div>
                                </div>
                            </div>

                            <div id="reference">
                                <div style="width: 100%;">&nbsp;
                                    <hr>
                                </div>
                                <div> <label><strong>Sách tham khảo</strong></label> </div>
                                <div style="display: flex; justify-content: space-between;">
                                    <div style="flex: 2; margin-right: 30px;">
                                        <p>Sách Web Technologies: HTML, Javascript, PHP, Java, Jsp, XML and Ajax, Black Book</p>
                                    </div>
                                    <a href="https://www.amazon.com/Web-Technologies-HTML-Javascript-Black/dp/8177229974"
                                        target="_blank" style="flex: 1;margin-top: 20px;">
                                        <div class="FRB" style="width: 100%;">
                                            <img class="DRB" src="https://m.media-amazon.com/images/I/71t58FV+qFL._SY466_.jpg"
                                                style="width: 100%;">
                                                <div class="ERB" style="width: 100%;color: blue" title="">Web Technologies: HTML,
                                                    Javascript, PHP, Java, Jsp, XML and Ajax, Black Book</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div >
`