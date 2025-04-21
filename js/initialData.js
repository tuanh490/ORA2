const initialData = [
    {
        name: 'Trang chủ',
        id: crypto.randomUUID(),
        sidebarMenuItems: [
            {
                name: 'Thông tin khai giảng',
                id: crypto.randomUUID(),
                contents: [

                ]
            },
            {
                name: 'Thông tin Seminar',
                id: crypto.randomUUID(),
                totalRows: 4,
                totalCols: 4,
                contents: [
                    {
                        name: 'Seminar hôm nay',
                        rows: 1,
                        cols: 2
                    },
                    {
                        name: 'Nội dung Seminar hôm nay',
                        rows: 2,
                        cols: 2
                    }, {
                        name: 'Ảnh Seminar hôm nay',
                        rows: 3,
                        cols: 1
                    }
                ]
            },
            {
                name: 'Thông tin công ty quan tâm',
                id: crypto.randomUUID(),
                contents: [

                ]
            },
        ]
    },
    {
        name: 'Thông tin môn học',
        id: crypto.randomUUID(),
        sidebarMenuItems: [
            {
                name: 'Mô tả tóm tắt học phần (tiếng Việt) (*)',
                id: crypto.randomUUID(),
                contents: [

                ]
            },
            {
                name: 'Mô tả tóm tắt học phần (tiếng Anh) (*)',
                id: crypto.randomUUID(),
                contents: [

                ]
            },
            {
                name: 'Nội dung tóm tắt học phần (tiếng Việt) (*)',
                id: crypto.randomUUID(),
                contents: [

                ]
            },
            {
                name: 'Nội dung tóm tắt học phần (tiếng Anh) (*)',
                id: crypto.randomUUID(),
                contents: [

                ]
            },
            {
                name: 'Sách tham khảo',
                id: crypto.randomUUID(),
                contents: [

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
                contents: [

                ]
            },
            {
                name: '2. Backend (Máy chủ và xử lý dữ liệu)',
                id: crypto.randomUUID(),
                contents: [

                ]
            },
            {
                name: '3. Cơ sở dữ liệu',
                id: crypto.randomUUID(),
                contents: [

                ]
            },
            {
                name: '4. API và Tích hợp dịch vụ',
                id: crypto.randomUUID(),
                contents: [

                ]
            },
            {
                name: '5. DevOps và Triển khai',
                id: crypto.randomUUID(),
                contents: [

                ]
            },
            {
                name: '6. Bảo mật',
                id: crypto.randomUUID(),
                contents: [

                ]
            },
            {
                name: '7. Testing và Debugging',
                id: crypto.randomUUID(),
                contents: [

                ]
            },
            {
                name: '8. Performance Optimization',
                id: crypto.randomUUID(),
                contents: [

                ]
            },
            {
                name: '9. User Authentication & Authorization',
                id: crypto.randomUUID(),
                contents: [

                ]
            },
        ]
    },
    {
        name: 'Thông tin sinh viên',
        id: crypto.randomUUID(),
        sidebarMenuItems: [
            {
                name: 'Kĩ năng',
                id: crypto.randomUUID(),
                contents: [

                ]
            },
            {
                name: 'Dự án',
                id: crypto.randomUUID(),
                contents: [

                ]
            },
            {
                name: 'Sở thích',
                id: crypto.randomUUID(),
                contents: [

                ]
            },
        ]
    }
];