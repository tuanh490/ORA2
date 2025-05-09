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
    editRow(
        index,
        pages[i].name,
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
    saveBtn.className = 'text-xl w-1/2 border-solid border-1 border-gray-300 px-2 rounded cursor-pointer hover:bg-green-50 hover:text-green-600 saveBtn';
    saveBtn.onclick = () => saveBtnFunction(input.value.trim())

    const cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'Hủy';
    cancelBtn.className = 'text-xl w-1/2 border-solid border-1 border-gray-300 px-2 rounded cursor-pointer hover:bg-red-50 hover:text-red-600';
    cancelBtn.onclick = () => cancelBtnFunction();

    nameCell.append(input)
    const btnCell = document.createElement('div');
    btnCell.className = 'w-1/2 p-2 flex justify-end';
    btnCell.append(saveBtn, cancelBtn);
    pageSection.append(nameCell, btnCell);

    // Focus and select text right away
    input.focus();
}

/**
 * indexStr: index in menu-table
 * oldName:       current content.name
 * oldRows:       current content.rows
 * oldCols:       current content.cols
 * saveFn(name, rows, cols): on‑save callback
 * cancelFn():                on‑cancel callback
**/
function editContentRow(indexStr, oldName, oldRows, oldCols, saveFn, cancelFn) {
    const i = Number(indexStr);
    const menuTable = document.getElementById('menu-table');
    const rowDiv = menuTable.children[i];

    // wipe out current row
    rowDiv.innerHTML = '';

    // --- NAME cell ---
    const nameCell = document.createElement('div');
    nameCell.className = 'w-2/5 flex items-center p-2';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = oldName;
    nameInput.className = 'flex-1 p-1 border border-gray-300 rounded';
    nameCell.appendChild(nameInput);
    rowDiv.appendChild(nameCell);

    // --- ROWS cell ---
    const rowsCell = document.createElement('div');
    rowsCell.className = 'w-1/5 flex items-center p-2';
    const rowsInput = document.createElement('input');
    rowsInput.type = 'number';
    rowsInput.min = '1';
    rowsInput.value = oldRows;
    rowsInput.className = 'w-full p-1 border border-gray-300 rounded text-center';
    rowsCell.appendChild(rowsInput);
    rowDiv.appendChild(rowsCell);

    // --- COLS cell ---
    const colsCell = document.createElement('div');
    colsCell.className = 'w-1/5 flex items-center p-2';
    const colsInput = document.createElement('input');
    colsInput.type = 'number';
    colsInput.min = '1';
    colsInput.value = oldCols;
    colsInput.className = 'w-full p-1 border border-gray-300 rounded text-center';
    colsCell.appendChild(colsInput);
    rowDiv.appendChild(colsCell);

    // --- BUTTONS cell ---
    const btnCell = document.createElement('div');
    btnCell.className = 'w-1/5 flex justify-end items-center space-x-2 p-2';

    const saveBtn = document.createElement('button');
    saveBtn.innerText = 'Lưu';
    saveBtn.className = 'px-3 py-1 border border-green-500 rounded hover:bg-green-50 cursor-pointer hover:text-green-600 saveBtn';
    saveBtn.onclick = () => {
        const newName = nameInput.value.trim();
        const newRows = parseInt(rowsInput.value, 10);
        const newCols = parseInt(colsInput.value, 10);
        saveFn(newName, newRows, newCols);
    };

    const cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'Hủy';
    cancelBtn.className = 'px-3 py-1 border border-red-500 rounded hover:bg-red-50 cursor-pointer hover:text-red-600';
    cancelBtn.onclick = () => cancelFn();

    btnCell.append(saveBtn, cancelBtn);
    rowDiv.appendChild(btnCell);

    // focus the first field
    nameInput.focus();
}

function showPage(index) {
    const page = pages[Number(index)]

    const sidebar = document.getElementById("mySidebar");
    sidebar.innerHTML = `
    <a href="javascript:void(0)" onclick="w3_close()" class="w3-right w3-xlarge w3-padding-large w3-hide-large" title="Close Menu">
      <i class="fa fa-remove"></i>
    </a>
    `

    // Tạo link tới các items trong page
    const title = document.createElement('h4')
    title.classList = 'w3-bar-item'
    const bold = document.createElement('b')
    bold.innerText = page.name
    title.appendChild(bold)
    sidebar.append(title)

    if (page.sidebarMenuItems)
        page.sidebarMenuItems.forEach(item => {
            const anchor = createSidebarElement(item.name, item.id)
            sidebar.appendChild(anchor);
        })
    else {
        page.sidebarMenuItems = []
        localStorage.setItem('pages', JSON.stringify(pages))
    }

    createSidebarMenuTable(page.sidebarMenuItems, index)
}

function showContentLayout(itemIndex, pageIndex) {
    const page = pages[Number(pageIndex)]
    const currentItem = page.sidebarMenuItems[Number(itemIndex)]

    const sidebar = document.getElementById("mySidebar");
    sidebar.innerHTML = `
    <a href="javascript:void(0)" onclick="w3_close()" class="w3-right w3-xlarge w3-padding-large w3-hide-large" title="Close Menu">
      <i class="fa fa-remove"></i>
    </a>
    `

    // Tạo link tới các items trong page
    const title = document.createElement('h4')
    title.classList = 'w3-bar-item'
    const bold = document.createElement('b')
    bold.innerText = page.name
    title.appendChild(bold)
    sidebar.append(title)

    page.sidebarMenuItems.forEach(item => {
        const anchor = createSidebarElement(item.name, item.id)

        if (currentItem.id == item.id) {
            anchor.classList.add('active')
        }

        sidebar.appendChild(anchor);
    })

    if (!currentItem.contents) {
        currentItem.contents = []
        localStorage.setItem('pages', JSON.stringify(pages))
    }

    createContentTable(currentItem.contents, itemIndex, pageIndex)
}

function addFirstSidebarItem(itemIndex, pageIndex) {
    pages[Number(pageIndex)].sidebarMenuItems.splice(Number(itemIndex), 0, {
        name: 'Mục mới',
        id: crypto.randomUUID(),
        totalRows: 1,
        totalCols: 1
    })
    localStorage.setItem('pages', JSON.stringify(pages))
    showPage(pageIndex)
    editRow(
        Number(itemIndex) + 1,
        pages[Number(pageIndex)].sidebarMenuItems[Number(itemIndex)].name,
        (v) => {
            if (v) {
                if (v) {
                    pages[Number(pageIndex)].sidebarMenuItems[Number(itemIndex)].name = v;
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

function addSidebarMenuItem(itemIndex, pageIndex) {
    pages[Number(pageIndex)].sidebarMenuItems.splice(Number(itemIndex) + 1, 0, {
        name: 'Mục mới',
        id: crypto.randomUUID(),
        totalRows: 1,
        totalCols: 1
    })
    localStorage.setItem('pages', JSON.stringify(pages))
    showPage(pageIndex)
    editSidebarMenuItemName(Number(itemIndex) + 1, pageIndex)
}

function removeSidebarMenuItem(itemIndex, pageIndex) {
    pages[Number(pageIndex)].sidebarMenuItems.splice(Number(itemIndex), 1)
    localStorage.setItem('pages', JSON.stringify(pages))
    showPage(pageIndex)
}

function editSidebarMenuItemName(itemIndex, pageIndex) {
    editRow(
        Number(itemIndex) + 1,
        pages[Number(pageIndex)].sidebarMenuItems[Number(itemIndex)].name,
        (v) => {
            if (v) {
                if (v) {
                    pages[Number(pageIndex)].sidebarMenuItems[Number(itemIndex)].name = v;
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

function displayContent(contentIndex, itemIndex, pageIndex) {
    const page = pages[Number(pageIndex)];
    const section = page.sidebarMenuItems[Number(itemIndex)];
    const currentContent = section.contents[Number(contentIndex)];
    const adminContainer = document.getElementById('adminContainer');

    resetAdminPage()
    const menuTable = document.getElementById('menu-table')
    menuTable.classList.add('hidden')

    const goBackBtn = document.getElementById('goBackBtn')
    goBackBtn.classList.remove('hidden')
    goBackBtn.onclick = () => showContentLayout(itemIndex, pageIndex)

    // Title of this content cell
    const title = document.getElementById('quillTitle')
    title.innerText = `${page.name}/${section.name}/${currentContent.name}`;

    const quillContainer = document.getElementById('quillContainer')
    quillContainer.classList.remove('hidden')

    // load any previously saved HTML
    if (currentContent.html) {
        // quill.clipboard.dangerouslyPasteHTML(currentContent.html, 'user')
        // const delta = {
        //     'ops': [
        //         {
        //             'attributes': {
        //                 'code-block': true
        //             },
        //             'insert': currentContent.html
        //         },
        //     ]
        // }
        // quill.setContents(delta, 'user')
        quill.root.innerHTML = currentContent.html
    } else {
        quill.setText('')
    }

    // Save button
    const saveEditorBtn = document.getElementById('saveEditorBtn')
    saveEditorBtn.onclick = () => {
        currentContent.html = quill.root.innerHTML;
        console.log(quill.root.innerHTML)
        localStorage.setItem('pages', JSON.stringify(pages));

        renderGridTable(section.name, section.contents, section.totalRows, section.totalCols)
    };

    // Display Preview
    renderGridTable(section.name, section.contents, section.totalRows, section.totalCols)
}


function addFirstContent(index, itemIndex, pageIndex) {
    pages[Number(pageIndex)].sidebarMenuItems[Number(itemIndex)].contents.splice(Number(index), 0, {
        name: 'Content mới',
        id: crypto.randomUUID(),
        rows: 1,
        cols: 1
    })
    localStorage.setItem('pages', JSON.stringify(pages))
    showContentLayout(itemIndex, pageIndex)
    editContentRow(
        Number(index) + 1,
        pages[Number(pageIndex)].sidebarMenuItems[Number(itemIndex)].contents[Number(index)].name,
        pages[Number(pageIndex)].sidebarMenuItems[Number(itemIndex)].contents[Number(index)].rows,
        pages[Number(pageIndex)].sidebarMenuItems[Number(itemIndex)].contents[Number(index)].cols,
        (n, r, c) => {
            const ctn = pages[Number(pageIndex)].sidebarMenuItems[Number(itemIndex)].contents[Number(index)];
            ctn.name = n;
            ctn.rows = r;
            ctn.cols = c;
            localStorage.setItem('pages', JSON.stringify(pages));
            showContentLayout(itemIndex, pageIndex);
        },
        () => {
            showContentLayout(itemIndex, pageIndex)
        }
    )
}

function addContent(index, itemIndex, pageIndex) {
    pages[Number(pageIndex)].sidebarMenuItems[Number(itemIndex)].contents.splice(Number(index) + 1, 0, {
        name: 'Content mới',
        id: crypto.randomUUID(),
        rows: 1,
        cols: 1
    })
    localStorage.setItem('pages', JSON.stringify(pages))
    showContentLayout(itemIndex, pageIndex);
    editContentLayout(Number(index) + 1, Number(itemIndex), pageIndex)
}

function removeContent(index, itemIndex, pageIndex) {
    pages[Number(pageIndex)].sidebarMenuItems[Number(itemIndex)].contents.splice(Number(index), 1)
    localStorage.setItem('pages', JSON.stringify(pages))
    showContentLayout(itemIndex, pageIndex);
}

function editContentLayout(index, itemIndex, pageIndex) {
    editContentRow(
        Number(index) + 1,
        pages[Number(pageIndex)].sidebarMenuItems[Number(itemIndex)].contents[Number(index)].name,
        pages[Number(pageIndex)].sidebarMenuItems[Number(itemIndex)].contents[Number(index)].rows,
        pages[Number(pageIndex)].sidebarMenuItems[Number(itemIndex)].contents[Number(index)].cols,
        (n, r, c) => {
            const ctn = pages[Number(pageIndex)].sidebarMenuItems[Number(itemIndex)].contents[Number(index)];
            ctn.name = n;
            ctn.rows = r;
            ctn.cols = c;
            localStorage.setItem('pages', JSON.stringify(pages));
            showContentLayout(itemIndex, pageIndex);
        },
        () => {
            showContentLayout(itemIndex, pageIndex)
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
    const mainContainer = document.getElementById('mainContainer')
    const contentContainer = document.getElementById('content-container')

    contentContainer.classList.remove('hidden')

    const adminMain = document.getElementById('adminMain')
    adminMain.classList.add('hidden')

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

    const anchor = createSidebarPageLink('Admin Page', 'admin-page')
    sidebar.appendChild(anchor)

    // Tạo link tới các sidebar item trong page
    pages.forEach(page => {
        if (page.id == sectionId) {
            const title = document.createElement('h4')
            title.classList = 'w3-bar-item'
            const bold = document.createElement('b')
            bold.innerText = page.name
            title.appendChild(bold)
            sidebar.append(title)

            if (page.sidebarMenuItems)
                page.sidebarMenuItems.forEach(sidebarItem => {
                    const anchor = createSidebarElement(sidebarItem.name, sidebarItem.id)
                    sidebar.appendChild(anchor);
                })

            mainContainer.innerHTML = generatePageMain(page.id)

            return;
        }
    });

    if (sectionId == 'admin-page') {
        contentContainer.classList.add('hidden')
        adminMain.classList.remove('hidden')
        updatePages()
        sidebar.innerHTML += `
        <h4 class="w3-bar-item"><b>Admin Page</b></h4>
        `;
    }

    updateTopMenu();
}

function createTopMenuTable(arr) {
    const menuTable = document.getElementById('menu-table')
    resetAdminPage()

    for (let i = 0; i < arr.length; i++) {
        const name = arr[i].name
        const section = document.createElement('div')
        const nameRow = document.createElement('div')
        const rowButtons = document.createElement('div')

        section.classList += 'flex border-solid border-b-2 border-gray-300'

        nameRow.innerText = name
        nameRow.classList += 'w-1/2 flex align-center'

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

    const goBackBtn = document.getElementById('goBackBtn')
    goBackBtn.classList.add('hidden')

    return menuTable
}

function createSidebarMenuTable(arr, pageIndex) {
    const index = Number(pageIndex)
    const menuTable = document.getElementById('menu-table')
    resetAdminPage()

    const firstSection = document.createElement('div')
    firstSection.classList += 'flex border-solid border-b-2 border-gray-300'


    if (pages[index].name == 'Thông tin sinh viên') {
        const nameCell = document.createElement('div')
        nameCell.classList = 'w-1/2'
        nameCell.innerText = pages[index].name

        const buttonCell = document.createElement('div')
        buttonCell.classList = 'w-1/2'

        const buttonContainer = document.createElement('div')
        buttonContainer.classList = 'menu-functions'

        const addFirstBtn = document.createElement('button')
        addFirstBtn.onclick = () => addFirstSidebarItem(0, pageIndex)
        addFirstBtn.innerHTML = '<i class="fa-solid fa-plus"></i>'

        const resetBtn = createResetButton(index)

        firstSection.appendChild(nameCell)
        buttonContainer.appendChild(resetBtn)
        buttonContainer.appendChild(addFirstBtn)
        buttonCell.appendChild(buttonContainer)
        firstSection.appendChild(buttonCell)
    } else {
        firstSection.innerHTML = `
        <div class="w-1/2"><b>${pages[index].name}</b></div>
        <div class="w-1/2 flex justify-end align-center">
            <div class="menu-functions">
                <button onclick="addFirstSidebarItem('${0}', '${pageIndex}')">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>
         `
    }

    menuTable.appendChild(firstSection)

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
            <button onclick="editSidebarMenuItemName('${i}', '${pageIndex}')">
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button onclick="removeSidebarMenuItem('${i}', '${pageIndex}')">
                <i class="fa-solid fa-remove"></i>
            </button>
            <button onclick="addSidebarMenuItem('${i}', '${pageIndex}')">
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
        `

        rowButtons.classList += 'w-1/2'

        section.appendChild(nameRow)
        section.appendChild(rowButtons)
        menuTable.appendChild(section)
    }

    const goBackBtn = document.getElementById('goBackBtn')
    goBackBtn.classList.remove('hidden')
    goBackBtn.onclick = () => showContent('admin-page')

    return menuTable
}

function createContentTable(arr, itemIndex, pageIndex) {
    const index = Number(pageIndex)
    const menuTable = document.getElementById('menu-table')

    resetAdminPage()
    const gridHelp = document.getElementById('gridHelp')
    gridHelp.classList.remove('hidden')

    const firstSection = document.createElement('div')
    firstSection.classList += 'flex border-solid border-b-2 border-gray-300'
    firstSection.innerHTML = `
    <div class="w-3/4 grid grid-cols-3 place-items-center">
        <div class="col-span-1">
            <b>${pages[index].name}/${pages[index].sidebarMenuItems[Number(itemIndex)].name}</b>
        </div>
        <div class="col-span-1">
            <b>Hàng</b>
        </div>
        <div class="col-span-1">
            <b>Cột</b>
        </div>
    </div>
    <div class="w-1/4 flex justify-end align-center">
        <div class="menu-functions">
            <button onclick="addFirstContent('${0}', '${itemIndex}', '${pageIndex}')">
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
    </div>
    `

    menuTable.appendChild(firstSection)

    for (let i = 0; i < arr.length; i++) {
        const name = arr[i].name
        const section = document.createElement('div')
        const nameRow = document.createElement('div')
        const rowButtons = document.createElement('div')

        section.classList += 'flex border-solid border-b-2 border-gray-300'

        nameRow.classList += 'w-3/4 grid grid-cols-3'
        nameRow.innerHTML = `
        <div class="col-span-1 w-full text-left">
            <b>${name}</b>
        </div>
        <div class="col-span-1 w-full text-center">
            ${arr[i].rows}
        </div>
        <div class="col-span-1 w-full text-center">
            ${arr[i].cols}
        </div>    
        `

        rowButtons.innerHTML = `
        <div class="menu-functions">
            <button onclick="displayContent('${i}', '${itemIndex}', '${pageIndex}')">
                <i class="fa-solid fa-eye"></i>
            </button>
            <button onclick="editContentLayout('${i}', '${itemIndex}', '${pageIndex}')">
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button onclick="removeContent('${i}', '${itemIndex}', '${pageIndex}')">
                <i class="fa-solid fa-remove"></i>
            </button>
            <button onclick="addContent('${i}', '${itemIndex}', '${pageIndex}')">
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
        `

        rowButtons.classList += 'w-1/4'

        section.appendChild(nameRow)
        section.appendChild(rowButtons)
        menuTable.appendChild(section)
    }

    const goBackBtn = document.getElementById('goBackBtn')
    goBackBtn.classList.remove('hidden')
    goBackBtn.onclick = () => showPage(pageIndex)


    menuTable.after(createTotalRowColForm(itemIndex, pageIndex))

    renderGridTable(
        pages[Number(pageIndex)].sidebarMenuItems[Number(itemIndex)].name,
        pages[Number(pageIndex)].sidebarMenuItems[Number(itemIndex)].contents,
        pages[Number(pageIndex)].sidebarMenuItems[Number(itemIndex)].totalRows,
        pages[Number(pageIndex)].sidebarMenuItems[Number(itemIndex)].totalCols
    );

    return menuTable
}

function createTotalRowColForm(itemIndex, pageIndex) {
    const form = document.createElement('div')
    const current = pages[Number(pageIndex)].sidebarMenuItems[Number(itemIndex)]
    form.className = 'flex items-center space-x-4 mt-4 mb-4';
    form.id = 'totalRowColForm'

    const layoutCfg = {
        totalRows: current.totalRows || 4,
        totalCols: current.totalCols || 4,
    };

    form.innerHTML = `
    <label class="flex items-center space-x-2">
      <span>Tổng số hàng:</span>
      <input id="totalRowsInput" type="number" min="1" value="${layoutCfg.totalRows}" class="w-20 p-1 border rounded" />
    </label>
    <label class="flex items-center space-x-2">
      <span>Tổng số cột:</span>
      <input id="totalColsInput" type="number" min="1" value="${layoutCfg.totalCols}" class="w-20 p-1 border rounded" />
    </label>
    `;

    const saveBtn = document.createElement('button')
    saveBtn.classList = 'px-4 py-1 bg-green-500 cursor-pointer text-white rounded hover:bg-green-600'
    saveBtn.innerText = 'Lưu'
    saveBtn.onclick = () => {
        const tr = parseInt(document.getElementById('totalRowsInput').value, 10);
        const tc = parseInt(document.getElementById('totalColsInput').value, 10);
        current.totalRows = tr;
        current.totalCols = tc;
        localStorage.setItem('pages', JSON.stringify(pages));

        renderGridTable(current.name, current.contents, tr, tc)
    }

    form.appendChild(saveBtn)

    return form
}

function resetAdminPage() {
    const menuTable = document.getElementById('menu-table')
    menuTable.innerHTML = '';
    menuTable.classList.remove('hidden')

    const form = document.getElementById('totalRowColForm')
    if (form)
        form.remove()

    const gridPreview = document.getElementById('gridPreview')
    if (gridPreview)
        gridPreview.classList.add('hidden')

    const gridHelp = document.getElementById('gridHelp')
    if (gridHelp)
        gridHelp.classList.add('hidden')

    const quillContainer = document.getElementById('quillContainer')
    if (quillContainer)
        quillContainer.classList.add('hidden')
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
    anchor.href = `#${href}`
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

function renderGridTable(name, contents, totalRows, totalCols) {
    const gridPreview = document.getElementById('gridPreview')
    gridPreview.classList.remove('hidden')

    const gridNamePreview = document.getElementById('gridNamePreview')
    gridNamePreview.innerText = name

    const container = document.getElementById('gridTable');
    container.innerHTML = '';

    // Tailwind dynamic class cleanup and apply new grid size
    container.className = container.className
        .split(' ')
        .filter(cls => !cls.startsWith('grid-rows-') && !cls.startsWith('grid-cols-'))
        .join(' ');

    container.classList.add(`grid-rows-${totalRows}`, `grid-cols-${totalCols}`);

    contents.forEach(item => {
        const cell = document.createElement('div');
        cell.className = `p-2 row-span-${item.rows} col-span-${item.cols} bg-white`;
        cell.innerHTML = item.html ? createQuillContentElement(item.html).innerHTML : item.name
        container.appendChild(cell);
    });
}

function generatePageMain(pageId) {
    const page = pages.find(page => page.id === pageId)
    const main = document.createElement('div')

    if (page.sidebarMenuItems) {
        page.sidebarMenuItems.forEach(item => {
            const section = document.createElement('div')
            section.classList = 'mt-8'
            section.id = item.id

            const header = document.createElement('div')
            header.classList = 'section-header rounded-t-xl mb-1'
            header.style.borderRadius = 0;
            header.innerText = item.name

            const grid = document.createElement('div')
            grid.classList = 'grid p-[2px] gap-[2px] bg-black'
            grid.classList.add(`grid-rows-${item.totalRows}`, `grid-cols-${item.totalCols}`);

            item.contents.forEach(content => {
                const cell = document.createElement('div');
                cell.className = `p-2 row-span-${content.rows} col-span-${content.cols} bg-white`;
                cell.innerHTML = content.html ? createQuillContentElement(content.html).innerHTML : content.name
                grid.appendChild(cell);
            })

            section.appendChild(header)
            section.appendChild(grid)
            main.appendChild(section)
        })
    }

    return main.innerHTML
}

function createResetButton(index) {
    const btn = document.createElement('button')
    btn.classList = 'cursor-pointer hover:text-blue-500'
    btn.innerHTML = '<i class="fa-solid fa-arrow-rotate-left"></i>'
    btn.onclick = () => {
        const original = initialData.find(el => el.name == 'Thông tin sinh viên')
        pages[index] = JSON.parse(JSON.stringify(original));
        localStorage.setItem('pages', JSON.stringify(pages))

        showPage(index)
    }
    return btn
}

/**
 * Render Quill’s content into `previewEl`, but:
 * - Any <div class="ql-code-block-container"> … </div>
 *   → take each inner .ql-code-block’s text and render it via innerHTML
 * - Everything else → clone the node (so all classes/styles stay intact)
 */
function createQuillContentElement(html) {
    // 1) Parse html in a temporary container
    const container = document.createElement('div')
    const temp = document.createElement('div');
    temp.innerHTML = html;

    // 2) Walk its *direct* children in order
    Array.from(temp.childNodes).forEach(node => {
        // 4) Is this the code-block container?
        if (
            node.nodeType === 1 && // element
            node.classList.contains('ql-code-block-container')
        ) {
            // 5) Collect all the innerText of each .ql-code-block
            let codeHTML = '';
            node.querySelectorAll('.ql-code-block').forEach(div => {
                codeHTML += div.innerText + '\n';
            });

            // 6) Dump that as real HTML
            const wrapper = document.createElement('div');
            wrapper.innerHTML = codeHTML;
            container.appendChild(wrapper);

        } else {
            // 7) Not code-block: clone it verbatim (classes, tags, inline formats)
            container.appendChild(node.cloneNode(true));
        }
    });

    return container
}
