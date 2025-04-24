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
                        <div class="ql-code-block-container" spellcheck="false">
  <div class="ql-code-block"><br></div>
  <div class="ql-code-block">                        &lt;div&gt;</div>
  <div class="ql-code-block">                            &lt;table class="table-info"&gt;</div>
  <div class="ql-code-block">                                &lt;tr&gt;</div>
  <div class="ql-code-block">                                    &lt;th&gt;Thứ&lt;/th&gt;</div>
  <div class="ql-code-block">                                    &lt;td&gt;Thứ 4 &lt;/td&gt;</div>
  <div class="ql-code-block">                                &lt;/tr&gt;</div>
  <div class="ql-code-block">                                &lt;tr&gt;</div>
  <div class="ql-code-block">                                    &lt;th&gt;Thời gian/Tiết&lt;/th&gt;</div>
  <div class="ql-code-block">                                    &lt;td&gt;Từ 3 đến 6&lt;/td&gt;</div>
  <div class="ql-code-block">                                &lt;/tr&gt;</div>
  <div class="ql-code-block">                                &lt;tr&gt;</div>
  <div class="ql-code-block">                                    &lt;th&gt;Ngày/Tuần&lt;/th&gt;</div>
  <div class="ql-code-block">                                    &lt;td&gt;24-31,33-41&lt;/td&gt;</div>
  <div class="ql-code-block">                                &lt;/tr&gt;</div>
  <div class="ql-code-block">                                &lt;tr&gt;</div>
  <div class="ql-code-block">                                    &lt;th&gt;Tại địa điểm&lt;/th&gt;</div>
  <div class="ql-code-block">                                    &lt;td&gt;TC-312&lt;/td&gt;</div>
  <div class="ql-code-block">                                &lt;/tr&gt;</div>
  <div class="ql-code-block">                            &lt;/table&gt;</div>
  <div class="ql-code-block">                        &lt;/div&gt;</div>
</div>
<p>                        </p>

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
                        <div class="ql-code-block-container" spellcheck="false">
  <div class="ql-code-block"><br></div>
  <div class="ql-code-block">                        &lt;table class="table-info"&gt;</div>
  <div class="ql-code-block">                            &lt;tr&gt;</div>
  <div class="ql-code-block">                                &lt;th&gt;Mã lớp&lt;/th&gt;</div>
  <div class="ql-code-block">                                &lt;td&gt;157533&lt;/td&gt;</div>
  <div class="ql-code-block">                            &lt;/tr&gt;</div>
  <div class="ql-code-block">                            &lt;tr&gt;</div>
  <div class="ql-code-block">                                &lt;th&gt;Loại hình&lt;/th&gt;</div>
  <div class="ql-code-block">                                &lt;td&gt;LT+BT&lt;/td&gt;</div>
  <div class="ql-code-block">                            &lt;/tr&gt;</div>
  <div class="ql-code-block">                            &lt;tr&gt;</div>
  <div class="ql-code-block">                                &lt;th&gt;Hệ&lt;/th&gt;</div>
  <div class="ql-code-block">                                &lt;td&gt;CN&lt;/td&gt;</div>
  <div class="ql-code-block">                            &lt;/tr&gt;</div>
  <div class="ql-code-block">                            &lt;tr&gt;</div>
  <div class="ql-code-block">                                &lt;th&gt;GVHD&lt;/th&gt;</div>
  <div class="ql-code-block">                                &lt;td&gt;Phạm Huy Hoàng&lt;/td&gt;</div>
  <div class="ql-code-block">                            &lt;/tr&gt;</div>
  <div class="ql-code-block">                            &lt;tr&gt;</div>
  <div class="ql-code-block">                                &lt;th&gt;Số lần vắng&lt;/th&gt;</div>
  <div class="ql-code-block">                                &lt;td&gt;0&lt;/td&gt;</div>
  <div class="ql-code-block">                            &lt;/tr&gt;</div>
  <div class="ql-code-block">                            &lt;tr&gt;</div>
  <div class="ql-code-block">                                &lt;th&gt;Số sinh viên&lt;/th&gt;</div>
  <div class="ql-code-block">                                &lt;td&gt;151&lt;/td&gt;</div>
  <div class="ql-code-block">                            &lt;/tr&gt;</div>
  <div class="ql-code-block">                            &lt;tr&gt;</div>
  <div class="ql-code-block">                                &lt;th&gt;Hình thức GD&lt;/th&gt;</div>
  <div class="ql-code-block">                                &lt;td&gt;Offline&lt;/td&gt;</div>
  <div class="ql-code-block">                            &lt;/tr&gt;</div>
  <div class="ql-code-block">                        &lt;/table&gt;</div>
</div>
<p>                        </p>

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
                        <div class="ql-code-block-container" spellcheck="false">
  <div class="ql-code-block"><br></div>
  <div class="ql-code-block">                        &lt;div style="flex: 2; margin-right: 30px;"&gt;</div>
  <div class="ql-code-block">                            &lt;ul&gt;</div>
  <div class="ql-code-block">                                &lt;li&gt;&lt;strong&gt;Công ty:&lt;/strong&gt; FPT Software&lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;/ul&gt;</div>
  <div class="ql-code-block">                            &lt;p&gt;</div>
  <div class="ql-code-block">                                FPT Software là tên gọi khác của công ty TNHH Phần Mềm FPT với nhiệm vụ chính là gia công phần</div>
  <div class="ql-code-block">                                mềm tại</div>
  <div class="ql-code-block">                                Việt Nam và nước ngoài. Thành lập từ năm 1988 đến nay với 3 Trụ sở chính FPT Software đặt tại</div>
  <div class="ql-code-block">                                Việt Nam</div>
  <div class="ql-code-block">                                và</div>
  <div class="ql-code-block">                                một số nước trên toàn thế giới như Hoa Kỳ, Nhật Bản, Malaysia, Đức, Úc, Singapore, Malaysia,</div>
  <div class="ql-code-block">                                Thái Lan</div>
  <div class="ql-code-block">                                và</div>
  <div class="ql-code-block">                                Philipines hiện FPT Software đáp ứng nhu cầu gia công phần mềm lớn cho hơn 150 công ty hàng đầu</div>
  <div class="ql-code-block">                                tại 20</div>
  <div class="ql-code-block">                                quốc gia lớn nhất trên thế giới hiện nay với các hợp đồng lớn có khi đạt cả 1 triệu USD dành cho</div>
  <div class="ql-code-block">                                một</div>
  <div class="ql-code-block">                                số</div>
  <div class="ql-code-block">                                đối tác lớn như Hitachi, NEOPOST, Petronas, Deutsche Bank, và Unilever với hơn 4000 nhân viên</div>
  <div class="ql-code-block">                                trên</div>
  <div class="ql-code-block">                                toàn</div>
  <div class="ql-code-block">                                thế giới. &lt;/p&gt;</div>
  <div class="ql-code-block">                            &lt;p&gt;FPT Software theo đuổi mục tiêu gia công phần mềm để đáp ứng cho nhu cầu phát triển CNTT của các</div>
  <div class="ql-code-block">                                hãng</div>
  <div class="ql-code-block">                                phần</div>
  <div class="ql-code-block">                                mềm trong nước, các công ty lớn trong nước và tham vọng hơn là xuất khẩu phần mềm trên toàn thế</div>
  <div class="ql-code-block">                                giới</div>
  <div class="ql-code-block">                                cho</div>
  <div class="ql-code-block">                                các công ty nước ngoài biết đến tập đoàn FPT, mục đích chính là vươn đến tầm cao mới thông qua</div>
  <div class="ql-code-block">                                công</div>
  <div class="ql-code-block">                                nghệ</div>
  <div class="ql-code-block">                                nhằm nâng cao năng suất lao động.&lt;/p&gt;</div>
  <div class="ql-code-block">                            &lt;p&gt;Kinh doanh của FPT Software xuất phát từ Công nghệ thông tin và Viễn Thông FPT là cốt lõi để đáp</div>
  <div class="ql-code-block">                                ứng</div>
  <div class="ql-code-block">                                cho</div>
  <div class="ql-code-block">                                khách hàng trên 63 tỉnh thành trên toàn lãnh thổ Việt Nam và mở rộng đến khách hàng toàn cầu. Từ</div>
  <div class="ql-code-block">                                khi</div>
  <div class="ql-code-block">                                được</div>
  <div class="ql-code-block">                                thành lập cho đến nay, FPT Software đã là công ty phần mềm số 1 tại Việt Nam trong lĩnh vực tích</div>
  <div class="ql-code-block">                                hợp</div>
  <div class="ql-code-block">                                hệ</div>
  <div class="ql-code-block">                                thống, phân phối và bán lẻ, dịch vụ Công Nghệ Thông tin, xuất khẩu gia công phần mềm, bán lẻ sản</div>
  <div class="ql-code-block">                                phẩm</div>
  <div class="ql-code-block">                                CNTT. Ở lĩnh vực Viễn Thông FPT là một trong 3 nhà cung cấp dịch vụ internet cáp quang FPT hàng</div>
  <div class="ql-code-block">                                đầu</div>
  <div class="ql-code-block">                                tại</div>
  <div class="ql-code-block">                                Việt Nam. Về lĩnh vực quảng cáo, FPT là đơn vị quảng cáo trực tuyến số 1 tại Việt Nam với trang</div>
  <div class="ql-code-block">                                báo</div>
  <div class="ql-code-block">                                điện</div>
  <div class="ql-code-block">                                tử VNexpress với hơn 42 triệu lượt truy cập mỗi ngày.&lt;/p&gt;</div>
  <div class="ql-code-block">                        &lt;/div&gt;</div>
</div>
<p>                        </p>

                        `
                    },
                    {
                        name: 'Quảng cáo',
                        rows: 1,
                        cols: 1,
                        html: `
                        <div class="ql-code-block-container" spellcheck="false">
   <div class="ql-code-block"><br></div>
   <div class="ql-code-block">                        &lt;a href="https://fptsoftware.com/" target="_blank" style="flex: 1; margin-top: 20px;"&gt;</div>
   <div class="ql-code-block">                            &lt;div class="FRB" style="width: 100%;"&gt;</div>
   <div class="ql-code-block">                                &lt;img class="DRB"</div>
   <div class="ql-code-block">                                    src="http://itde.hvnh.edu.vn/public/img/news/files/FPT%20tuy%E1%BB%83n%20d%E1%BB%A5ng%20(2).jpg"</div>
   <div class="ql-code-block">                                    style="width: 100%;"&gt;</div>
   <div class="ql-code-block">                                &lt;div class="ERB" style="width: 100%;color: blue" title=""&gt;FPT SOFTWARE TUYỂN DỤNG&lt;/div&gt;</div>
   <div class="ql-code-block">                            &lt;/div&gt;</div>
   <div class="ql-code-block">                        &lt;/a&gt;</div>
</div>
<p>                        </p>

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
                        <div class="ql-code-block-container" spellcheck="false">
   <div class="ql-code-block"><br></div>
   <div class="ql-code-block">                        &lt;div style="display: flex; flex-wrap: wrap; gap: 20px;"&gt;</div>
   <div class="ql-code-block">                            &lt;!-- Cột 1 --&gt;</div>
   <div class="ql-code-block">                            &lt;div style="flex: 1; min-width: 300px;"&gt;</div>
   <div class="ql-code-block">                                &lt;label&gt;Đơn vị (*)&lt;/label&gt;</div>
   <div class="ql-code-block">                                &lt;select id="dropdown" disabled style="width: 100%;"&gt;</div>
   <div class="ql-code-block">                                    &lt;option&gt;Trường Công nghệ Thông tin và Truyền thông&lt;/option&gt;</div>
   <div class="ql-code-block">                                &lt;/select&gt;</div>
   <div class="ql-code-block">                            &lt;/div&gt;</div>
   <div class="ql-code-block"><br></div>
   <div class="ql-code-block">                            &lt;div style="flex: 1; min-width: 300px;"&gt;</div>
   <div class="ql-code-block">                                &lt;label&gt;Đơn vị con&lt;/label&gt;</div>
   <div class="ql-code-block">                                &lt;select id="dropdown" disabled style="width: 100%;"&gt;</div>
   <div class="ql-code-block">                                    &lt;option&gt;Nothing selected&lt;/option&gt;</div>
   <div class="ql-code-block">                                &lt;/select&gt;</div>
   <div class="ql-code-block">                            &lt;/div&gt;</div>
   <div class="ql-code-block"><br></div>
   <div class="ql-code-block">                            &lt;div style="flex: 1; min-width: 300px;"&gt;</div>
   <div class="ql-code-block">                                &lt;label&gt;Mã học phần (*)&lt;/label&gt;</div>
   <div class="ql-code-block">                                &lt;input type="text" value="IT4409" dir="ltr" readonly="" disabled style="width: 100%;"&gt;</div>
   <div class="ql-code-block">                            &lt;/div&gt;</div>
   <div class="ql-code-block"><br></div>
   <div class="ql-code-block">                            &lt;div style="flex: 1; min-width: 300px;"&gt;</div>
   <div class="ql-code-block">                                &lt;label&gt;Tên học phần&lt;/label&gt;</div>
   <div class="ql-code-block">                                &lt;input type="text" value="Công nghệ web và dịch vụ trực tuyến" dir="ltr" readonly="" disabled</div>
   <div class="ql-code-block">                                    style="width: 100%; white-space: nowrap; overflow: hidden;"&gt;</div>
   <div class="ql-code-block">                            &lt;/div&gt;</div>
   <div class="ql-code-block"><br></div>
   <div class="ql-code-block">                            &lt;div style="flex: 1; min-width: 300px;"&gt;</div>
   <div class="ql-code-block">                                &lt;label&gt;Tên tiếng Anh&lt;/label&gt;</div>
   <div class="ql-code-block">                                &lt;input type="text" value="Web technologies and e-Services"</div>
   <div class="ql-code-block">                                    class="form-control IBC form-control-readonly" dir="ltr" readonly="" disabled</div>
   <div class="ql-code-block">                                    style="width: 100%;"&gt;</div>
   <div class="ql-code-block">                            &lt;/div&gt;</div>
   <div class="ql-code-block"><br></div>
   <div class="ql-code-block">                            &lt;div style="flex: 1; min-width: 300px;"&gt;</div>
   <div class="ql-code-block">                                &lt;label&gt;Hệ đào tạo&lt;/label&gt;</div>
   <div class="ql-code-block">                                &lt;select id="dropdown" disabled style="width: 100%;"&gt;</div>
   <div class="ql-code-block">                                    &lt;option&gt;4 items selected&lt;/option&gt;</div>
   <div class="ql-code-block">                                &lt;/select&gt;</div>
   <div class="ql-code-block">                                &lt;div style="width: 100%;"&gt;</div>
   <div class="ql-code-block">                                    &lt;a&gt;Thạc sỹ Khoa học&amp;nbsp;[X]&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;/a&gt;</div>
   <div class="ql-code-block">                                    &lt;a&gt;Kỹ sư chính quy&amp;nbsp;[X]&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;/a&gt;</div>
   <div class="ql-code-block">                                    &lt;a&gt;Cử nhân&amp;nbsp;[X]&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;/a&gt;</div>
   <div class="ql-code-block">                                    &lt;a&gt;Việt-Nhật&amp;nbsp;[X]&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;/a&gt;</div>
   <div class="ql-code-block">                                &lt;/div&gt;</div>
   <div class="ql-code-block">                            &lt;/div&gt;</div>
   <div class="ql-code-block"><br></div>
   <div class="ql-code-block">                            &lt;div style="flex: 1; min-width: 300px;"&gt;</div>
   <div class="ql-code-block">                                &lt;label&gt;Ngành đào tạo&lt;/label&gt;</div>
   <div class="ql-code-block">                                &lt;select id="dropdown" disabled style="width: 100%;"&gt;</div>
   <div class="ql-code-block">                                    &lt;option&gt;Trường Công nghệ Thông tin và Truyền thông&lt;/option&gt;</div>
   <div class="ql-code-block">                                &lt;/select&gt;</div>
   <div class="ql-code-block">                            &lt;/div&gt;</div>
   <div class="ql-code-block"><br></div>
   <div class="ql-code-block">                            &lt;div style="flex: 1; min-width: 300px;"&gt;</div>
   <div class="ql-code-block">                                &lt;label&gt;Loại hình (*)&lt;/label&gt;</div>
   <div class="ql-code-block">                                &lt;select id="dropdown" disabled style="width: 100%;"&gt;</div>
   <div class="ql-code-block">                                    &lt;option&gt;Lớp&lt;/option&gt;</div>
   <div class="ql-code-block">                                &lt;/select&gt;</div>
   <div class="ql-code-block">                            &lt;/div&gt;</div>
   <div class="ql-code-block"><br></div>
   <div class="ql-code-block">                            &lt;div style="flex: 1; min-width: 300px;"&gt;</div>
   <div class="ql-code-block">                                &lt;label&gt;Điều phối viên&lt;/label&gt;</div>
   <div class="ql-code-block">                                &lt;select id="dropdown" disabled style="width: 100%;"&gt;</div>
   <div class="ql-code-block">                                    &lt;option&gt;Phạm Huy Hoàng&lt;/option&gt;</div>
   <div class="ql-code-block">                                &lt;/select&gt;</div>
   <div class="ql-code-block">                            &lt;/div&gt;</div>
   <div class="ql-code-block"><br></div>
   <div class="ql-code-block">                            &lt;div style="flex: 1; min-width: 300px;"&gt;</div>
   <div class="ql-code-block">                                &lt;label&gt;Nhóm chuyên môn&lt;/label&gt;</div>
   <div class="ql-code-block">                                &lt;select id="dropdown" disabled style="width: 100%;"&gt;</div>
   <div class="ql-code-block">                                    &lt;option&gt;Phạm Huy Hoàng&lt;/option&gt;</div>
   <div class="ql-code-block">                                &lt;/select&gt;</div>
   <div class="ql-code-block">                            &lt;/div&gt;</div>
   <div class="ql-code-block">                        &lt;/div&gt;</div>
   <div class="ql-code-block"><br></div>
   <div class="ql-code-block">                        &lt;!-- Cột 2 --&gt;</div>
   <div class="ql-code-block">                        &lt;div style="display: flex; flex-wrap: wrap; gap: 20px;"&gt;</div>
   <div class="ql-code-block">                            &lt;div style="flex: 1; min-width: 300px;"&gt;</div>
   <div class="ql-code-block">                                &lt;label&gt;HP liên quan&lt;/label&gt;</div>
   <div class="ql-code-block">                                &lt;input type="text" placeholder="Nhập mã HP" disabled style="width: 100%;"&gt;</div>
   <div class="ql-code-block">                            &lt;/div&gt;</div>
   <div class="ql-code-block"><br></div>
   <div class="ql-code-block">                            &lt;div style="flex: 1; min-width: 300px;"&gt;</div>
   <div class="ql-code-block">                                &lt;label&gt;Hệ số điểm thực hành&lt;/label&gt;</div>
   <div class="ql-code-block">                                &lt;input type="text" value="0" class="form-control IBC" dir="ltr" disabled=""</div>
   <div class="ql-code-block">                                    style="width: 100%;"&gt;</div>
   <div class="ql-code-block">                            &lt;/div&gt;</div>
   <div class="ql-code-block"><br></div>
   <div class="ql-code-block">                            &lt;div style="flex: 1; min-width: 300px;"&gt;</div>
   <div class="ql-code-block">                                &lt;label&gt;Số tín chỉ&lt;/label&gt;</div>
   <div class="ql-code-block">                                &lt;input type="text" value="3" class="form-control IBC" dir="ltr" disabled=""</div>
   <div class="ql-code-block">                                    style="width: 100%;"&gt;</div>
   <div class="ql-code-block">                            &lt;/div&gt;</div>
   <div class="ql-code-block"><br></div>
   <div class="ql-code-block">                            &lt;div style="flex: 1; min-width: 300px;"&gt;</div>
   <div class="ql-code-block">                                &lt;label&gt;Số giờ LT&lt;/label&gt;</div>
   <div class="ql-code-block">                                &lt;input type="text" value="2" class="form-control IBC" dir="ltr" disabled=""</div>
   <div class="ql-code-block">                                    style="width: 100%;"&gt;</div>
   <div class="ql-code-block">                            &lt;/div&gt;</div>
   <div class="ql-code-block"><br></div>
   <div class="ql-code-block">                            &lt;div style="flex: 1; min-width: 300px;"&gt;</div>
   <div class="ql-code-block">                                &lt;label&gt;Số giờ BT&lt;/label&gt;</div>
   <div class="ql-code-block">                                &lt;input type="text" value="2" class="form-control IBC" dir="ltr" disabled=""</div>
   <div class="ql-code-block">                                    style="width: 100%;"&gt;</div>
   <div class="ql-code-block">                            &lt;/div&gt;</div>
   <div class="ql-code-block"><br></div>
   <div class="ql-code-block">                            &lt;div style="flex: 1; min-width: 300px;"&gt;</div>
   <div class="ql-code-block">                                &lt;label&gt;Số giờ TN/TH&lt;/label&gt;</div>
   <div class="ql-code-block">                                &lt;input type="text" value="0" class="form-control IBC" dir="ltr" disabled=""</div>
   <div class="ql-code-block">                                    style="width: 100%;"&gt;</div>
   <div class="ql-code-block">                            &lt;/div&gt;</div>
   <div class="ql-code-block"><br></div>
   <div class="ql-code-block">                            &lt;div style="flex: 1; min-width: 300px;"&gt;</div>
   <div class="ql-code-block">                                &lt;label&gt;Số giờ tự học&lt;/label&gt;</div>
   <div class="ql-code-block">                                &lt;input type="text" value="6" class="form-control IBC" dir="ltr" disabled=""</div>
   <div class="ql-code-block">                                    style="width: 100%;"&gt;</div>
   <div class="ql-code-block">                            &lt;/div&gt;</div>
   <div class="ql-code-block"><br></div>
   <div class="ql-code-block">                            &lt;div style="flex: 1; min-width: 300px;"&gt;</div>
   <div class="ql-code-block">                                &lt;label&gt;Số giờ thực tập&lt;/label&gt;</div>
   <div class="ql-code-block">                                &lt;input type="text" value="0" class="form-control IBC" dir="ltr" disabled=""</div>
   <div class="ql-code-block">                                    style="width: 100%;"&gt;</div>
   <div class="ql-code-block">                            &lt;/div&gt;</div>
   <div class="ql-code-block"><br></div>
   <div class="ql-code-block">                            &lt;div style="flex: 1; min-width: 300px;"&gt;</div>
   <div class="ql-code-block">                                &lt;label&gt;kHD thực tập&lt;/label&gt;</div>
   <div class="ql-code-block">                                &lt;input type="text" value="0" class="form-control IBC" dir="ltr" disabled=""</div>
   <div class="ql-code-block">                                    style="width: 100%;"&gt;</div>
   <div class="ql-code-block">                            &lt;/div&gt;</div>
   <div class="ql-code-block"><br></div>
   <div class="ql-code-block">                            &lt;div style="flex: 1; min-width: 300px;"&gt;</div>
   <div class="ql-code-block">                                &lt;label&gt;kHD đồ án&lt;/label&gt;</div>
   <div class="ql-code-block">                                &lt;input type="text" value="0" class="form-control IBC" dir="ltr" disabled=""</div>
   <div class="ql-code-block">                                    style="width: 100%;"&gt;</div>
   <div class="ql-code-block">                            &lt;/div&gt;</div>
   <div class="ql-code-block"><br></div>
   <div class="ql-code-block">                            &lt;div style="flex: 1; min-width: 300px;"&gt;</div>
   <div class="ql-code-block">                                &lt;label&gt;Phân bố&lt;/label&gt;</div>
   <div class="ql-code-block">                                &lt;input type="text" value="3(2-2-0-6)" class="form-control IBC" dir="ltr" disabled=""</div>
   <div class="ql-code-block">                                    style="width: 100%;"&gt;</div>
   <div class="ql-code-block">                            &lt;/div&gt;</div>
   <div class="ql-code-block"><br></div>
   <div class="ql-code-block">                            &lt;div style="flex: 1; min-width: 300px;"&gt;</div>
   <div class="ql-code-block">                                &lt;label&gt;Hình thức thi cuối kỳ&lt;/label&gt;</div>
   <div class="ql-code-block">                                &lt;select id="dropdown" disabled style="width: 100%;"&gt;</div>
   <div class="ql-code-block">                                    &lt;option&gt;[Chọn hình thức thi cuối kỳ]&lt;/option&gt;</div>
   <div class="ql-code-block">                                &lt;/select&gt;</div>
   <div class="ql-code-block">                            &lt;/div&gt;</div>
   <div class="ql-code-block">                        &lt;/div&gt;</div>
</div>
<p>                        </p>
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
                        <div class="ql-code-block-container" spellcheck="false">
  <div class="ql-code-block"><br></div>
  <div class="ql-code-block">                        &lt;div&gt;</div>
  <div class="ql-code-block">                            &lt;div&gt; </div>
  <div class="ql-code-block">                            &lt;label&gt;</div>
  <div class="ql-code-block">                                &lt;strong&gt;Mô tả tóm tắt học phần (tiếng Việt)&lt;/strong&gt;(*)</div>
  <div class="ql-code-block">                            &lt;/label&gt;</div>
  <div class="ql-code-block">                            &lt;/div&gt;</div>
  <div class="ql-code-block">                            &lt;p&gt;&lt;strong&gt;Mục tiêu: &lt;/strong&gt;Học phần cung cấp các kiến thức cần thiết để xây dựng và phát</div>
  <div class="ql-code-block">                                triển</div>
  <div class="ql-code-block">                                các ứng dụng, dịch vụ trực</div>
  <div class="ql-code-block">                                tuyến trên môi trường web. Sau khi học xong học phần này, sinh viên có khả năng:</div>
  <div class="ql-code-block">                                &lt;ul&gt;</div>
  <div class="ql-code-block">                                    &lt;li&gt;Có thể sử dụng một ngôn ngữ lập trình như JSP, PHP để phát triển ứng dụng web cho các</div>
  <div class="ql-code-block">                                        lĩnh</div>
  <div class="ql-code-block">                                        vực khác nhau như: hệ quản trị nội dung (CMS), cổng thông tin (Portal), hay các ứng dụng</div>
  <div class="ql-code-block">                                        điện</div>
  <div class="ql-code-block">                                        tử (eCommerce, eLearning, eGoverment,…)&lt;/li&gt;</div>
  <div class="ql-code-block">                                    &lt;li&gt;Nắm vững được các công nghệ web, các platform, framework hiện đang thịnh hành.&lt;/li&gt;</div>
  <div class="ql-code-block">                                &lt;/ul&gt;</div>
  <div class="ql-code-block">                                Ngoài ra học phần cũng cung cấp cho sinh viên các kỹ năng làm việc nhóm, thuyết trình và thái</div>
  <div class="ql-code-block">                                độ</div>
  <div class="ql-code-block">                                cần thiết để làm việc và ứng dụng các kỹ thuật trong các dự án, công ty về phần mềm sau này.</div>
  <div class="ql-code-block">                            &lt;/p&gt;</div>
  <div class="ql-code-block">                        &lt;/div&gt;</div>
</div>
<p>                        </p>
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
                        <div class="ql-code-block-container" spellcheck="false">
  <div class="ql-code-block"><br></div>
  <div class="ql-code-block">                        &lt;div&gt;</div>
  <div class="ql-code-block">                            &lt;div&gt; &lt;label&gt;&lt;strong&gt;Mô tả tóm tắt học phần (tiếng</div>
  <div class="ql-code-block">                                Anh)&lt;/strong&gt;</div>
  <div class="ql-code-block">                                (*)&lt;/label&gt;</div>
  <div class="ql-code-block">                            &lt;/div&gt;</div>
  <div class="ql-code-block">                            &lt;p&gt;&lt;strong&gt;Objectives:&lt;/strong&gt;</div>
  <div class="ql-code-block">                                The course provides students with the necessary knowledge to build and develop online</div>
  <div class="ql-code-block">                                applications and services on the web environment. After completing this couse, students are</div>
  <div class="ql-code-block">                                able</div>
  <div class="ql-code-block">                                to:</div>
  <div class="ql-code-block">                                &lt;ul&gt;</div>
  <div class="ql-code-block">                                    &lt;li&gt;Use a programming language such as JSP, PHP to develop web applications for different</div>
  <div class="ql-code-block">                                        areas</div>
  <div class="ql-code-block">                                        such as content management system (CMS), portal, or online applications (eCommerce,</div>
  <div class="ql-code-block">                                        eLearning,</div>
  <div class="ql-code-block">                                        eGoverment, ...)&lt;/li&gt;</div>
  <div class="ql-code-block">                                    &lt;li&gt;Understand the popular web technologies, platforms, frameworks.&lt;/li&gt;</div>
  <div class="ql-code-block">                                &lt;/ul&gt;</div>
  <div class="ql-code-block">                                In addition, the course also provides students with skills of teamwork and presentation, and</div>
  <div class="ql-code-block">                                attitudes needed to work and apply the techniques in software projects and companies in the</div>
  <div class="ql-code-block">                                future.&lt;/p&gt;</div>
  <div class="ql-code-block">                        &lt;/div&gt;</div>
</div>
<p>                        </p>

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
                        <div class="ql-code-block-container" spellcheck="false">
  <div class="ql-code-block"><br></div>
  <div class="ql-code-block">                        &lt;div&gt;</div>
  <div class="ql-code-block">                            &lt;div&gt; &lt;label&gt;&lt;strong&gt;Nội dung tóm tắt của học phần (tiếng</div>
  <div class="ql-code-block">                                Việt)&lt;/strong&gt;</div>
  <div class="ql-code-block">                                (*)&lt;/label&gt; &lt;/div&gt;</div>
  <div class="ql-code-block">                            &lt;div&gt;</div>
  <div class="ql-code-block">                                &lt;p&gt;Internet, web, kiến trúc ứng dụng web,&amp;nbsp; HTML, CSS, Javascript, PHP, JSP, Ajax,</div>
  <div class="ql-code-block">                                    DOM, XML,</div>
  <div class="ql-code-block">                                    SOA, An toàn bảo mật web, v.v.&lt;/p&gt;</div>
  <div class="ql-code-block">                            &lt;/div&gt;</div>
  <div class="ql-code-block">                        &lt;/div&gt;</div>
</div>
<p>                        </p>

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
                        <div class="ql-code-block-container" spellcheck="false">
  <div class="ql-code-block"><br></div>
  <div class="ql-code-block">                        &lt;div&gt;</div>
  <div class="ql-code-block">                            &lt;div&gt; &lt;label&gt;&lt;strong&gt;Nội dung tóm tắt của học phần (tiếng</div>
  <div class="ql-code-block">                                Anh)&lt;/strong&gt;</div>
  <div class="ql-code-block">                                (*)&lt;/label&gt; &lt;/div&gt;</div>
  <div class="ql-code-block">                            &lt;div&gt;</div>
  <div class="ql-code-block">                                &lt;p&gt;Internet, web, architecture of web</div>
  <div class="ql-code-block">                                    application,&amp;nbsp; HTML, CSS, Javascript, PHP, JSP, Ajax, DOM, XML, SOA,&amp;nbsp;website</div>
  <div class="ql-code-block">                                    security&lt;/a&gt;,</div>
  <div class="ql-code-block">                                etc.&lt;/p&gt;</div>
  <div class="ql-code-block">                        &lt;/div&gt;</div>
</div>
<p>                        </p>

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
                        <div class="ql-code-block-container" spellcheck="false">
  <div class="ql-code-block"><br></div>
  <div class="ql-code-block">                        &lt;div style="flex: 2; margin-right: 30px;"&gt;</div>
  <div class="ql-code-block">                            &lt;p&gt;Sách Web Technologies: HTML, Javascript, PHP, Java, Jsp, XML and Ajax, Black Book&lt;/p&gt;</div>
  <div class="ql-code-block">                        &lt;/div&gt;</div>
</div>
<p>                        </p>

                        `
                    },
                    {
                        name: 'Quảng cáo',
                        rows: 1,
                        cols: 1,
                        html: `
                        <div class="ql-code-block-container" spellcheck="false">
  <div class="ql-code-block"><br></div>
  <div class="ql-code-block">                        &lt;a href="https://www.amazon.com/Web-Technologies-HTML-Javascript-Black/dp/8177229974"</div>
  <div class="ql-code-block">                            target="_blank" style="flex: 1;margin-top: 20px;"&gt;</div>
  <div class="ql-code-block">                            &lt;div class="FRB" style="width: 100%;"&gt;</div>
  <div class="ql-code-block">                                &lt;img class="DRB" src="https://m.media-amazon.com/images/I/71t58FV+qFL._SY466_.jpg"</div>
  <div class="ql-code-block">                                    style="width: 100%;"&gt;</div>
  <div class="ql-code-block">                                    &lt;div class="ERB" style="width: 100%;color: blue" title=""&gt;Web Technologies: HTML,</div>
  <div class="ql-code-block">                                        Javascript, PHP, Java, Jsp, XML and Ajax, Black Book&lt;/div&gt;</div>
  <div class="ql-code-block">                            &lt;/div&gt;</div>
  <div class="ql-code-block">                        &lt;/a&gt;</div>
</div>
<p>                        </p>

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
                        <div class="ql-code-block-container" spellcheck="false">
  <div class="ql-code-block"><br></div>
  <div class="ql-code-block">                        &lt;ul&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;HTML, CSS, JavaScript&lt;/strong&gt;: Các công nghệ cơ bản để xây dựng cấu trúc và giao diện người</div>
  <div class="ql-code-block">                                dùng.</div>
  <div class="ql-code-block">                            &lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;ReactJS&lt;/strong&gt;: Thư viện JavaScript để xây dựng giao diện người dùng động.&lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;Angular&lt;/strong&gt;: Framework JavaScript mạnh mẽ cho các ứng dụng Web quy mô lớn.&lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;Vue.js&lt;/strong&gt;: Framework linh hoạt giúp phát triển giao diện người dùng hiệu quả.&lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;CSS Preprocessors (SASS, LESS)&lt;/strong&gt;: Giúp cải thiện mã CSS với các tính năng như biến và</div>
  <div class="ql-code-block">                                hàm.</div>
  <div class="ql-code-block">                            &lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;Responsive Design&lt;/strong&gt;: Thiết kế giao diện phù hợp với mọi kích thước màn hình (sử dụng</div>
  <div class="ql-code-block">                                Bootstrap, Tailwind CSS).&lt;/li&gt;</div>
  <div class="ql-code-block">                        &lt;/ul&gt;</div>
</div>
<p>                        </p>

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
                        <div class="ql-code-block-container" spellcheck="false">
  <div class="ql-code-block"><br></div>
  <div class="ql-code-block">                        &lt;ul&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;Node.js&lt;/strong&gt;: Môi trường runtime JavaScript hiệu quả cho ứng dụng Web.&lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;Express.js&lt;/strong&gt;: Framework giúp xây dựng API và xử lý các yêu cầu HTTP nhanh chóng.&lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;Django (Python)&lt;/strong&gt;: Framework Python phù hợp cho các ứng dụng Web cần bảo mật cao.&lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;Ruby on Rails&lt;/strong&gt;: Framework giúp phát triển ứng dụng Web nhanh chóng và dễ dàng bảo trì.</div>
  <div class="ql-code-block">                            &lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;Java Spring Boot&lt;/strong&gt;: Framework mạnh mẽ cho ứng dụng Web Java với khả năng mở rộng cao.</div>
  <div class="ql-code-block">                            &lt;/li&gt;</div>
  <div class="ql-code-block">                        &lt;/ul&gt;</div>
</div>
<p>                        </p>

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
                        <div class="ql-code-block-container" spellcheck="false">
  <div class="ql-code-block"><br></div>
  <div class="ql-code-block">                        &lt;ul&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;MySQL&lt;/strong&gt;: Cơ sở dữ liệu quan hệ phổ biến.&lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;PostgreSQL&lt;/strong&gt;: Cơ sở dữ liệu mạnh mẽ hỗ trợ truy vấn phức tạp.&lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;MongoDB&lt;/strong&gt;: Cơ sở dữ liệu NoSQL linh hoạt cho dữ liệu phi cấu trúc.&lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;Cassandra&lt;/strong&gt;: Cơ sở dữ liệu NoSQL phân tán phù hợp cho dữ liệu lớn.&lt;/li&gt;</div>
  <div class="ql-code-block">                        &lt;/ul&gt;</div>
</div>
<p>                        </p>

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
                        <div class="ql-code-block-container" spellcheck="false">
  <div class="ql-code-block"><br></div>
  <div class="ql-code-block">                        &lt;ul&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;RESTful APIs&lt;/strong&gt;: Phương thức phổ biến để giao tiếp giữa các hệ thống qua HTTP.&lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;GraphQL&lt;/strong&gt;: Công nghệ API mạnh mẽ giúp lấy dữ liệu theo yêu cầu.&lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;WebSockets&lt;/strong&gt;: Giải pháp cho các ứng dụng thời gian thực.&lt;/li&gt;</div>
  <div class="ql-code-block">                        &lt;/ul&gt;</div>
</div>
<p>                        </p>

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
                        <div class="ql-code-block-container" spellcheck="false">
  <div class="ql-code-block"><br></div>
  <div class="ql-code-block">                        &lt;ul&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;Docker&lt;/strong&gt;: Giải pháp đóng gói ứng dụng và môi trường vào container.&lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;CI/CD&lt;/strong&gt;: Tự động hóa quy trình kiểm thử và triển khai (Jenkins, GitLab CI, GitHub</div>
  <div class="ql-code-block">                                Actions).</div>
  <div class="ql-code-block">                            &lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;AWS, Azure, Google Cloud&lt;/strong&gt;: Các dịch vụ đám mây linh hoạt cho phát triển và triển khai</div>
  <div class="ql-code-block">                                ứng</div>
  <div class="ql-code-block">                                dụng Web.&lt;/li&gt;</div>
  <div class="ql-code-block">                        &lt;/ul&gt;</div>
</div>
<p>                        </p>

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
                        <div class="ql-code-block-container" spellcheck="false">
  <div class="ql-code-block"><br></div>
  <div class="ql-code-block">                        &lt;ul&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;OAuth2 &amp; JWT&lt;/strong&gt;: Cơ chế xác thực và phân quyền người dùng an toàn.&lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;HTTPS&lt;/strong&gt;: Đảm bảo giao tiếp an toàn qua mã hóa SSL/TLS.&lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;Helmet.js&lt;/strong&gt;: Thư viện Node.js tăng cường bảo mật HTTP header.&lt;/li&gt;</div>
  <div class="ql-code-block">                        &lt;/ul&gt;</div>
</div>
<p>                        </p>

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
                        <div class="ql-code-block-container" spellcheck="false">
  <div class="ql-code-block"><br></div>
  <div class="ql-code-block">                        &lt;ul&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;Jest&lt;/strong&gt;: Công cụ kiểm thử JavaScript, thường dùng với React và Node.js.&lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;Mocha &amp; Chai&lt;/strong&gt;: Framework kiểm thử cho Node.js.&lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;Cypress&lt;/strong&gt;: Công cụ kiểm thử tích hợp mạnh mẽ cho các ứng dụng Web.&lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;Postman&lt;/strong&gt;: Công cụ kiểm thử API và làm việc với RESTful API.&lt;/li&gt;</div>
  <div class="ql-code-block">                        &lt;/ul&gt;</div>
</div>
<p>                        </p>

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
                        <div class="ql-code-block-container" spellcheck="false">
  <div class="ql-code-block"><br></div>
  <div class="ql-code-block">                        &lt;ul&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;Lazy Loading&lt;/strong&gt;: Tải tài nguyên theo yêu cầu để cải thiện tốc độ tải trang.&lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;CDN (Content Delivery Network)&lt;/strong&gt;: Mạng phân phối nội dung giúp giảm độ trễ và cải thiện</div>
  <div class="ql-code-block">                                tốc</div>
  <div class="ql-code-block">                                độ.&lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;Caching&lt;/strong&gt;: Sử dụng Redis hoặc Memcached để lưu trữ dữ liệu tạm thời và giảm tải cho</div>
  <div class="ql-code-block">                                server.</div>
  <div class="ql-code-block">                            &lt;/li&gt;</div>
  <div class="ql-code-block">                        &lt;/ul&gt;</div>
</div>
<p>                        </p>

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
                        <div class="ql-code-block-container" spellcheck="false">
  <div class="ql-code-block"><br></div>
  <div class="ql-code-block">                        &lt;ul&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;Firebase Authentication&lt;/strong&gt;: Dịch vụ đăng nhập thông qua Google, Facebook,</div>
  <div class="ql-code-block">                                email/password.</div>
  <div class="ql-code-block">                            &lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;&lt;strong&gt;Auth0&lt;/strong&gt;: Dịch vụ bảo mật giúp quản lý xác thực và phân quyền người dùng dễ dàng.&lt;/li&gt;</div>
  <div class="ql-code-block">                        &lt;/ul&gt;</div>
</div>
<p>                        </p>

                        `
                    },
                    {
                        name: 'Quảng cáo',
                        rows: 1,
                        cols: 1,
                        html: `
                        <div class="ql-code-block-container" spellcheck="false">
  <div class="ql-code-block"><br></div>
  <div class="ql-code-block">                        &lt;a href="https://developer.mozilla.org/en-US/docs/Web" target="_blank"&gt;</div>
  <div class="ql-code-block">                            &lt;img width="100%"</div>
  <div class="ql-code-block">                            src="https://www.shutterstock.com/shutterstock/photos/1854050815/display_1500/stock-vector-abstract-technology-horizontal-motion-style-concept-particle-connection-background-design-with-red-1854050815.jpg"</div>
  <div class="ql-code-block">                            alt=""&gt;</div>
  <div class="ql-code-block">                            &lt;p style="color: blue;"&gt;</div>
  <div class="ql-code-block">                            Các công nghệ web&lt;/p&gt;</div>
  <div class="ql-code-block">                        &lt;/a&gt;</div>
</div>
<p>                        </p>

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
                       <div class="ql-code-block-container" spellcheck="false">
  <div class="ql-code-block"><br></div>
  <div class="ql-code-block">                        &lt;div class="flex justify-center"&gt;</div>
  <div class="ql-code-block">                            &lt;img src="./assets/ava.jpg" alt="Student Photo" class="profile-photo"&gt;</div>
  <div class="ql-code-block">                        &lt;/div&gt;</div>
</div>
<p>                        </p>

                        `
                    },
                    {
                        name: 'Thông tin',
                        rows: 1,
                        cols: 1,
                        html: `
                       <div class="ql-code-block-container" spellcheck="false">
  <div class="ql-code-block"><br></div>
  <div class="ql-code-block">                        &lt;div&gt;</div>
  <div class="ql-code-block">                            &lt;div class="details"&gt;&lt;span&gt;Họ và tên:&lt;/span&gt; Nguyễn Tú Anh&lt;/div&gt;</div>
  <div class="ql-code-block">                            &lt;div class="details"&gt;&lt;span&gt;Năm vào trường:&lt;/span&gt; 2022&lt;/div&gt;</div>
  <div class="ql-code-block">                            &lt;div class="details"&gt;&lt;span&gt;Chương trình:&lt;/span&gt; Kỹ thuật máy tính&lt;/div&gt;</div>
  <div class="ql-code-block">                            &lt;div class="details"&gt;&lt;span&gt;MSSV:&lt;/span&gt; 20225119&lt;/div&gt;</div>
  <div class="ql-code-block">                            &lt;div class="details"&gt;&lt;span&gt;Giới tính:&lt;/span&gt; Nam&lt;/div&gt;</div>
  <div class="ql-code-block">                            &lt;div class="details"&gt;&lt;span&gt;Lớp:&lt;/span&gt; Kỹ thuật máy tính - 07&lt;/div&gt;</div>
  <div class="ql-code-block">                            &lt;div class="details"&gt;&lt;span&gt;Khóa học:&lt;/span&gt; 67&lt;/div&gt;</div>
  <div class="ql-code-block">                            &lt;div class="details"&gt;&lt;span&gt;Email:&lt;/span&gt; Anh.nt225119@sis.hust.edu.vn&lt;/div&gt;</div>
  <div class="ql-code-block">                        &lt;/div&gt;</div>
</div>
<p>                        </p>

                        `
                    },
                    {
                        name: 'Kỹ năng',
                        rows: 1,
                        cols: 2,
                        html: `
                        <div class="ql-code-block-container" spellcheck="false">
  <div class="ql-code-block"><br></div>
  <div class="ql-code-block">                        &lt;h5&gt;Kỹ năng&lt;/h5&gt;</div>
  <div class="ql-code-block">                        &lt;table class="table-info"&gt;</div>
  <div class="ql-code-block">                            &lt;tr&gt;</div>
  <div class="ql-code-block">                                &lt;th&gt;Ngôn ngữ&lt;/th&gt;</div>
  <div class="ql-code-block">                                &lt;td&gt;HTML, CSS, JavaScript, Java, Python&lt;/td&gt;</div>
  <div class="ql-code-block">                            &lt;/tr&gt;</div>
  <div class="ql-code-block">                            &lt;tr&gt;</div>
  <div class="ql-code-block">                                &lt;th&gt;Frameworks&lt;/th&gt;</div>
  <div class="ql-code-block">                                &lt;td&gt;ReactJS, NodeJS, ExpressJS&lt;/td&gt;</div>
  <div class="ql-code-block">                            &lt;/tr&gt;</div>
  <div class="ql-code-block">                            &lt;tr&gt;</div>
  <div class="ql-code-block">                                &lt;th&gt;Cơ sở dữ liệu&lt;/th&gt;</div>
  <div class="ql-code-block">                                &lt;td&gt;MySQL, SQL Server, MongoDB&lt;/td&gt;</div>
  <div class="ql-code-block">                            &lt;/tr&gt;</div>
  <div class="ql-code-block">                        &lt;/table&gt;</div>
</div>
<p>                        </p>

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
                        <div class="ql-code-block-container" spellcheck="false">
  <div class="ql-code-block"><br></div>
  <div class="ql-code-block">                        &lt;h5&gt;Tool gợi ý Deck cho Deck-Building game&lt;/h5&gt;</div>
  <div class="ql-code-block">                        &lt;ul&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;Sử dụng ReactJS để phát triển Frontend và ExpressJS để phát triển Backend&lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;Sử dụng Pandas và Numpy để xây dựng hệ gợi ý bộ bài.&lt;/li&gt;</div>
  <div class="ql-code-block">                            &lt;li&gt;Xây dựng Python APIs với FastAPI.&lt;/li&gt;</div>
  <div class="ql-code-block">                        &lt;/ul&gt;</div>
</div>
<p>                        </p>

                        `
                    },
                    {
                        name: 'Ứng dụng quản lý chung cư',
                        rows: 1,
                        cols: 1,
                        html: `
                        <div class="ql-code-block-container" spellcheck="false">
  <div class="ql-code-block"><br></div>
  <div class="ql-code-block">                        &lt;h5&gt;Ứng dụng quản lý chung cư&lt;/h5&gt;</div>
  <div class="ql-code-block">                        &lt;p&gt;Phát triển Backend với REST APIs sử dụng MySQL, ExpressJS và NodeJS&lt;/p&gt;</div>
</div>
<p>                        </p>

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