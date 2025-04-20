let pages = localStorage.getItem('pages')

if (!pages) {
    pages = [
        {
            name: 'Trang chủ',
            id: crypto.randomUUID(),
            contents: [
                {
                    name: 'Thông tin khai giảng',
                    id: crypto.randomUUID(),
                    html: '<div></div>'
                },
                {
                    name: 'Thông tin seminar',
                    id: crypto.randomUUID(),
                    html: '<div></div>'
                },
                {
                    name: 'Thông tin công ty quan tâm',
                    id: crypto.randomUUID(),
                    html: '<div></div>'
                },
            ]
        },
        {
            name: 'Thông tin môn học',
            id: crypto.randomUUID(),
            contents: [
                {
                    name: 'Mô tả tóm tắt học phần (tiếng Việt) (*)',
                    id: crypto.randomUUID(),
                    html: ''
                },
                {
                    name: 'Mô tả tóm tắt học phần (tiếng Anh) (*)',
                    id: crypto.randomUUID(),
                    html: ''
                },
                {
                    name: 'Nội dung tóm tắt học phần (tiếng Việt) (*)',
                    id: crypto.randomUUID(),
                    html: ''
                },
                {
                    name: '>Nội dung tóm tắt học phần (tiếng Anh) (*)',
                    id: crypto.randomUUID(),
                    html: ''
                },
                {
                    name: 'Sách tham khảo',
                    id: crypto.randomUUID(),
                    html: ''
                },
            ]
        },
        {
            name: 'Các công nghệ web',
            id: crypto.randomUUID(),
            contents: [
                {
                    name: '1. Frontend (Giao diện người dùng)',
                    id: crypto.randomUUID(),
                    html: ''
                },
                {
                    name: '2. Backend (Máy chủ và xử lý dữ liệu)',
                    id: crypto.randomUUID(),
                    html: ''
                },
                {
                    name: '3. Cơ sở dữ liệu',
                    id: crypto.randomUUID(),
                    html: ''
                },
                {
                    name: '4. API và Tích hợp dịch vụ',
                    id: crypto.randomUUID(),
                    html: ''
                },
                {
                    name: '5. DevOps và Triển khai',
                    id: crypto.randomUUID(),
                    html: ''
                },
                {
                    name: '6. Bảo mật',
                    id: crypto.randomUUID(),
                    html: ''
                },
                {
                    name: '7. Testing và Debugging',
                    id: crypto.randomUUID(),
                    html: ''
                },
                {
                    name: '8. Performance Optimization',
                    id: crypto.randomUUID(),
                    html: ''
                },
                {
                    name: '9. User Authentication & Authorization',
                    id: crypto.randomUUID(),
                    html: ''
                },
            ]
        },
        {
            name: 'Thông tin sinh viên',
            id: crypto.randomUUID(),
            contents: [
                {
                    name: 'Kĩ năng',
                    id: crypto.randomUUID(),
                    html: ''
                },
                {
                    name: 'Dự án',
                    id: crypto.randomUUID(),
                    html: ''
                },
                {
                    name: 'Sở thích',
                    id: crypto.randomUUID(),
                    html: ''
                },
            ]
        }
    ];

    localStorage.setItem('pages', JSON.stringify(pages))
} else {
    pages = JSON.parse(pages);
}

console.log(pages)

function addPage(index) {
    pages.splice(Number(index) + 1, 0, {
        name: 'Trang mới',
        id: crypto.randomUUID()
    })
    localStorage.setItem('pages', JSON.stringify(pages))
    updatePages()
    editPage(Number(index) + 1)
}

function removePage(index) {
    pages.splice(Number(index), 1)
    localStorage.setItem('pages', JSON.stringify(pages))
    updatePages()
}

function editPage(index) {
    const i = Number(index)
    editRow(index, pages[i].name,
        (v) => {
            if (v) {
                pages[i].name = v;
                localStorage.setItem('pages', JSON.stringify(pages));
                updatePages();
            }
        },
        updatePages
    )
}

function editRow(indexStr, oldName, saveBtnFunction, cancelBtnFunction) {
    const i = Number(indexStr);
    const menuTable = document.getElementById('menu-table');
    const pageSection = menuTable.children[i];

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
    saveBtn.onclick = () => saveBtnFunction(input.value.trim())

    const cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'Hủy';
    cancelBtn.className = 'text-xl w-1/2 border-solid border-1 border-gray-300 px-2 rounded cursor-pointer hover:text-red-600';
    cancelBtn.onclick = () => cancelBtnFunction();

    nameCell.append(input)
    const btnCell = document.createElement('div');
    btnCell.className = 'w-1/2 p-2 flex justify-end';
    btnCell.append(saveBtn, cancelBtn);
    pageSection.append(nameCell, btnCell);

    // **New: focus and select text right away**
    input.focus();
}

function showPage(index) {
    const page = pages[Number(index)]
    const contentContainer = document.getElementById('content-container')

    const sidebar = document.getElementById("mySidebar");
    sidebar.innerHTML = `
    <a href="javascript:void(0)" onclick="w3_close()" class="w3-right w3-xlarge w3-padding-large w3-hide-large" title="Close Menu">
      <i class="fa fa-remove"></i>
    </a>
    `

    // Tạo link tới các content trong page
    const title = document.createElement('h4')
    title.classList = 'w3-bar-item'
    const bold = document.createElement('b')
    bold.innerText = page.name
    title.appendChild(bold)
    sidebar.append(title)

    page.contents.forEach(content => {
        const anchor = createSidebarElement(content.name, content.id)
        sidebar.appendChild(anchor);
    })

    createSidebarMenuTable(page.contents, index)
}

function showContentLayout(contentIndex, pageIndex) {

}

function addContent(contentIndex, pageIndex) {
    pages[Number(pageIndex)].contents.splice(Number(contentIndex) + 1, 0, {
        name: 'Mục mới',
        id: crypto.randomUUID()
    })
    localStorage.setItem('pages', JSON.stringify(pages))
    showPage(pageIndex)
    editContentName(contentIndex + 1, pageIndex)
}

function removeContent(contentIndex, pageIndex) {
    pages[Number(pageIndex)].contents.splice(Number(contentIndex), 1)
    localStorage.setItem('pages', JSON.stringify(pages))
    showPage(pageIndex)
}

function editContentName(contentIndex, pageIndex) {
    editRow(contentIndex, pages[Number(pageIndex)].contents[Number(contentIndex)].name,
        (v) => {
            if (v) {
                if (v) {
                    pages[Number(pageIndex)].contents[Number(contentIndex)].name = v;
                    localStorage.setItem('pages', JSON.stringify(pages));
                    showPage(pageIndex);
                }
            }
        },
        () => {
            showPage(pageIndex)
        }
    )
}

function updatePages() {
    createTopMenuTable(pages)

    updateTopMenu()
}

function updateTopMenu() {
    const topMenu = document.getElementById('top-menu')

    const homePage = document.createElement('a')
    homePage.href = 'javascript:void(0)'
    homePage.classList = 'w3-bar-item w3-button'
    homePage.onclick = () => showContent(pages[0].id)
    homePage.innerHTML = '<i class="fas fa-home"></i>'

    topMenu.innerHTML = `
    <a class="w3-bar-item w3-button w3-right w3-hide-large w3-hover-white w3-large w3-theme-l1"
        href="javascript:void(0)" onclick="w3_open()"><i class="fa fa-bars"></i></a>
    `
    topMenu.appendChild(homePage)

    for (let i = 1; i < pages.length; i++) {
        const el = createTopMenuAnchor(pages[i].id, pages[i].name)

        topMenu.appendChild(el)
    }

    const adminPage = createTopMenuAnchor('admin-page', 'Admin Page')

    topMenu.appendChild(adminPage)
}

// Function to show content and update button style
function showContent(sectionId) {
    const contentContainer = document.getElementById('content-container')

    const sidebar = document.getElementById("mySidebar");
    sidebar.innerHTML = `
    <a href="javascript:void(0)" onclick="w3_close()" class="w3-right w3-xlarge w3-padding-large w3-hide-large" title="Close Menu">
      <i class="fa fa-remove"></i>
    </a>
    `
    // Tạo link tới các trang cho sidebar
    for (let i = 1; i < pages.length; ++i) {
        const page = pages[i]
        const anchor = createSidebarPageLink(page.name, page.id)
        sidebar.appendChild(anchor)
    }

    // Tạo link tới các content trong page
    pages.forEach(page => {
        if (page.id == sectionId) {
            const title = document.createElement('h4')
            title.classList = 'w3-bar-item'
            const bold = document.createElement('b')
            bold.innerText = page.name
            title.appendChild(bold)
            sidebar.append(title)

            page.contents.forEach(content => {
                const anchor = createSidebarElement(content.name, content.id)
                sidebar.appendChild(anchor);
            })


            contentContainer.innerHTML = window.home_page // TODO: fix this


            return;
        }
    });

    if (sectionId == 'admin-page') {
        contentContainer.innerHTML = window.admin_page
        updatePages()
        sidebar.innerHTML += `
        <h4 class="w3-bar-item"><b>Admin Page</b></h4>
        `;
    }


    updateTopMenu();
}

function createTopMenuTable(arr) {
    const menuTable = document.getElementById('menu-table')
    menuTable.innerHTML = '';

    for (let i = 0; i < arr.length; i++) {
        const name = arr[i].name
        const section = document.createElement('div')
        const nameRow = document.createElement('div')
        const rowButtons = document.createElement('div')

        section.classList += 'flex border-solid border-b-2 border-gray-300'

        nameRow.innerText = name
        nameRow.classList += 'w-1/2'

        if (i == 0) {
            rowButtons.innerHTML = `
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
            rowButtons.innerHTML = `
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

        rowButtons.classList += 'w-1/2'

        section.appendChild(nameRow)
        section.appendChild(rowButtons)
        menuTable.appendChild(section)
    }

    return menuTable
}

function createSidebarMenuTable(arr, pageIndex) {
    const index = Number(pageIndex)
    const menuTable = document.getElementById('menu-table')
    menuTable.innerHTML = '';

    for (let i = 0; i < arr.length; i++) {
        const name = arr[i].name
        const section = document.createElement('div')
        const nameRow = document.createElement('div')
        const rowButtons = document.createElement('div')

        section.classList += 'flex border-solid border-b-2 border-gray-300'

        nameRow.innerText = name
        nameRow.classList += 'w-1/2'

        rowButtons.innerHTML = `
        <div class="menu-functions">
            <button onclick="showContentLayout('${i}', '${pageIndex}')">
                <i class="fa-solid fa-eye"></i>
            </button>
            <button onclick="editContentName('${i}', '${pageIndex}')">
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button onclick="removeContent('${i}', '${pageIndex}')">
                <i class="fa-solid fa-remove"></i>
            </button>
            <button onclick="addContent('${i}', '${pageIndex}')">
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
        `

        rowButtons.classList += 'w-1/2'

        section.appendChild(nameRow)
        section.appendChild(rowButtons)
        menuTable.appendChild(section)
    }

    return menuTable
}

function createSidebarPageLink(innerText, id) {
    const anchor = document.createElement('a')
    anchor.classList = 'w3-bar-item w3-button w3-hide-large'
    anchor.innerText = innerText
    anchor.href = 'javascript:void(0)'
    anchor.onclick = () => showContent(id)
    return anchor
}

function createSidebarElement(innerText, href) {
    const anchor = document.createElement('a')
    anchor.classList = 'w3-bar-item w3-button w3-hover-black'
    anchor.innerText = innerText
    anchor.href = href
    return anchor
}

function createTopMenuAnchor(contentText, text) {
    const anchor = document.createElement('a')
    anchor.href = 'javascript:void(0)'
    anchor.classList = 'w3-bar-item w3-button w3-hide-small w3-hide-medium'
    anchor.onclick = () => showContent(contentText)
    anchor.innerHTML = text

    return anchor;
}

window.onload = () => {
    showContent(pages[0].id)
}