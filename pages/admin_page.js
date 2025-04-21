const admin_page = `
<div id="admin-page" class="w3-container w3-padding-64">
    <div class="container">
        <div>
            <div class="header">Admin Page</div>
            <div class="info-section min-w-[300px] max-w-[800px]">
                <div class="section-header">Admin Menu</div>
                <div>
                    <div id="menu-table">
                    </div>
                </div>
            </div>
            <div id="goBackBtn" class="mt-4 hidden">
                <button class="px-3 py-1 border border-blue-500 rounded hover:bg-blue-50 cursor-pointer hover:text-blue-600">
                    Trở lại
                </button>
            </div>
        </div>
        <div id="gridHelp" class="mt-4 mb-16">
            <button class="cursor-pointer hover:text-sky-500 transition duration-200" onclick="toggleGuide()">
                <i class="fa-solid fa-circle-info text-3xl"></i>
            </button>
            <div id="gridGuide" class="hidden">
                Layout sử dụng grid để sắp xếp các mục content.
                <br/>
                Dưới bảng là thông số cho mỗi content riêng. Mỗi content sẽ có tổng số hàng và cột tương ứng.
                <br/>
                Mỗi mục của một content sẽ có số dòng và cột có thể thay đổi qua <i class="fa-solid fa-pen-to-square"></i>.
                <br/>
                <strong>Lưu ý:</strong> Tổng số hàng và tổng số cột không nên vượt quá số cột hay số hàng cao nhất
                <br/> của mỗi mục của content vì có thể gây ra lỗi reponsive.
            </div>
        </div>
        <div id="gridPreview" class="box-border hidden">
            <h4>Preview</h4>
            <div id="gridNamePreview" class="section-header rounded-t-xl mb-1" style="border-radius: 0"></div>
            <div id="gridTable" class="grid grid-rows-4 grid-cols-4 p-[2px] gap-[2px] bg-black">
            </div>
        </div>
    </div>
</div>
`