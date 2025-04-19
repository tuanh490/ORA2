let pages = localStorage.getItem('pages')

if (!pages) {
    pages = ['Trang chủ', 'Thông tin môn học', 'Các công nghệ web', 'Thông tin sinh viên'];

    localStorage.setItem('pages', JSON.stringify(pages))
} else {
    pages = JSON.parse(pages);
}

console.log(pages)

updatePages()

function addPage(index) {
    pages.splice(Number(index) + 1, 0, 'Trang mới')
    localStorage.setItem('pages', JSON.stringify(pages))
    updatePages()
}

function removePage(index) {
    pages.splice(Number(index), 1)
    localStorage.setItem('pages', JSON.stringify(pages))
    updatePages()
}

function editPage(indexStr) {
    const i = Number(indexStr);
    const topTable = document.getElementById('top-menu-table');
    const pageSection = topTable.children[i];
    const oldName = pages[i];

    // clear and rebuild the row
    pageSection.innerHTML = '';

    const nameCell = document.createElement('div');
    nameCell.className = 'w-1/2 flex items-center space-x-2 p-2';

    const input = document.createElement('input');
    input.type = 'text';
    input.value = oldName;
    input.className = 'p-1 flex-1';

    // Save & Cancel buttons
    const saveBtn = document.createElement('button');
    saveBtn.innerText = 'Lưu';
    saveBtn.className = 'text-xl w-1/2 border-solid border-1 border-gray-300 px-2 rounded cursor-pointer hover:text-green-600 saveBtn';
    saveBtn.onclick = () => {
        const v = input.value.trim();
        if (v) {
            pages[i] = v;
            localStorage.setItem('pages', JSON.stringify(pages));
            updatePages();
        }
    };

    const cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'Hủy';
    cancelBtn.className = 'text-xl w-1/2 border-solid border-1 border-gray-300 px-2 rounded cursor-pointer hover:text-red-600';
    cancelBtn.onclick = () => updatePages();

    nameCell.append(input)
    const btnCell = document.createElement('div');
    btnCell.className = 'w-1/2 p-2 flex justify-end';
    btnCell.append(saveBtn, cancelBtn);
    pageSection.append(nameCell, btnCell);

    // **New: focus and select text right away**
    input.focus();
}



function updatePages() {
    const topTable = document.getElementById('top-menu-table')
    topTable.innerHTML = '';

    for (let i = 0; i < pages.length; i++) {
        const page = pages[i]
        const pageSection = document.createElement('div')
        const pageName = document.createElement('div')
        const pageButtons = document.createElement('div')

        pageSection.classList += 'flex border-solid border-b-2 border-gray-300'

        pageName.innerText = page
        pageName.classList += 'w-1/2'

        if (i == 0) {
            pageButtons.innerHTML = `
            <div class="menu-functions">
                <button onclick="showPage('${i}')">
                    <i class="fa-solid fa-eye"></i>
                </button>
                <button onclick="addPage('${i}')">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
            `
        } else {
            pageButtons.innerHTML = `
            <div class="menu-functions">
                <button onclick="showPage('${i}')">
                    <i class="fa-solid fa-eye"></i>
                </button>
                <button onclick="editPage('${i}')">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button onclick="removePage('${i}')">
                    <i class="fa-solid fa-remove"></i>
                </button>
                <button onclick="addPage('${i}')">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
            `
        }

        pageButtons.classList += 'w-1/2'

        pageSection.appendChild(pageName)
        pageSection.appendChild(pageButtons)
        topTable.appendChild(pageSection)
    }

    updateTopMenu()
}

function updateTopMenu() {
    const topMenu = document.getElementById('top-menu')

    topMenu.innerHTML = `
    <a class="w3-bar-item w3-button w3-right w3-hide-large w3-hover-white w3-large w3-theme-l1"
        href="javascript:void(0)" onclick="w3_open()"><i class="fa fa-bars"></i></a>
    <a href="#" onclick="showContent('courseInfo')" class="w3-bar-item w3-button">
        <i class="fas fa-home"></i>
    </a>
    `

    for (let i = 1; i < pages.length; i++) {
        const el = document.createElement('a')
        el.href = 'javascript:void(0)'
        el.classList = 'w3-bar-item w3-button w3-hide-small w3-hide-medium'
        el.innerText = pages[i]

        topMenu.appendChild(el)
    }

    const adminPage = document.createElement('a')
    adminPage.href = 'javascript:void(0)'
    adminPage.classList = 'w3-bar-item w3-button w3-hide-small w3-hide-medium'
    adminPage.onclick = () => showContent('admin-page')
    adminPage.innerText = 'Admin Page'

    topMenu.appendChild(adminPage)
}

// Function to show content and update button style
function showContent(sectionId, event) {
    // Hide all sections
    const sections = document.querySelectorAll('.w3-container');
    sections.forEach(section => section.classList.add('hidden'));

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.w3-bar-item');
    buttons.forEach(button => button.classList.remove('active'));

    // Show selected section
    document.getElementById(sectionId).classList.remove('hidden');

    const sidebar = document.getElementById("mySidebar");
    sidebar.innerHTML = ``;

    sidebar.innerHTML += `
    <a href="javascript:void(0)" onclick="w3_close()" class="w3-right w3-xlarge w3-padding-large w3-hide-large" title="Close Menu">
      <i class="fa fa-remove"></i>
    </a>
    <a href="javascript:void(0)" onclick="showContent('info', event)" class="w3-bar-item w3-button w3-hide-large">Thông tin môn học</a>
    <a href="javascript:void(0)" onclick="showContent('web-tech', event)" class="w3-bar-item w3-button w3-hide-large">Các công nghệ web</a>
    <a href="javascript:void(0)" onclick="showContent('student-info', event)" class="w3-bar-item w3-button w3-hide-large">Thông tin sinh viên</a>
  `;

    if (sectionId === 'courseInfo') {
        sidebar.innerHTML += `
      <h4 class="w3-bar-item"><b>Menu</b></h4>
      <a class="w3-bar-item w3-button w3-hover-black" href="#classInfo">Thông tin khai giảng</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#seminar">Thông tin Seminar</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#company">Thông tin công ty quan tâm</a>
    `;
    } else if (sectionId === 'info') {
        sidebar.innerHTML += `
      <h4 class="w3-bar-item"><b>Thông tin môn học</b></h4>
      <a class="w3-bar-item w3-button w3-hover-black" href="#summaryVN">Mô tả tóm tắt học phần (tiếng Việt) (*)</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#summaryEN">Mô tả tóm tắt học phần (tiếng Anh) (*)</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#contentVN">Nội dung tóm tắt học phần (tiếng Việt) (*)</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#contentEN">Nội dung tóm tắt học phần (tiếng Anh) (*)</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#reference">Sách tham khảo</a>
    `;
    } else if (sectionId === 'web-tech') {
        sidebar.innerHTML += `
      <h4 class="w3-bar-item"><b>Công nghệ Web</b></h4>
      <a class="w3-bar-item w3-button w3-hover-black" href="#frontend">1. Frontend (Giao diện người dùng)</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#backend">2. Backend (Máy chủ và xử lý dữ liệu)</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#database">3. Cơ sở dữ liệu</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#api">4. API và Tích hợp dịch vụ</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#devops">5. DevOps và Triển khai</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#security">6. Bảo mật</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#testing">7. Testing và Debugging</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#optimization">8. Performance Optimization</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#authentication">9. User Authentication & Authorization</a>
    `;
    } else if (sectionId === 'student-info') {
        sidebar.innerHTML += `
      <h4 class="w3-bar-item"><b>Thông tin sinh viên</b></h4>
      <a class="w3-bar-item w3-button w3-hover-black" href="#skills-info">Kĩ năng</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#projects-info">Dự án</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#hobbies-info">Sở thích</a>
    `;
    } else if (sectionId === 'admin-page') {
        sidebar.innerHTML += `
      <h4 class="w3-bar-item"><b>Admin Page</b></h4>
    `;
    }

    // Add active class to clicked button
    if (event) {
        event.target.classList.add('active');
    }
}

window.onload = () => {
    showContent('courseInfo')
}