import { Shop } from './model/shop';

export const AUTH_LOGIN = 'auth/login';
export const AUTH_PROFILE = 'auth/profile';
export const REFRESH_TOKEN = 'auth/refresh';

export const DATA_PRODUCTS: Shop[] = [
  {
    id: 1,
    title: 'Street Food - Gà Rán Pizza, Hamburger',
    subTitle: 'Gà Rán, Hamburger & Sushi',
    quantityPurchased: '999+',
    distance: '0.3km',
    image:
      'https://images.foody.vn/res/g109/1084035/prof/s640x400/foody-upload-api-foody-mobile-fo-b5bcf538-210628170118.jpeg',
    menu: [
      {
        title: 'Combo gà rán truyền thống',
        subTitle: '1 miếng gà + khoai + coca',
        image:
          'https://images.foody.vn/res/g79/789740/s120x120/5034c277-acf7-4248-86c4-ceff731e-116eceec-210701153738.jpeg',
        price: '50,000',
      },
      {
        title: 'Combo gà viên lắc phô mai',
        subTitle: '1 phần gà viên + khoai + coca',
        image:
          'https://images.foody.vn/res/g79/789740/s120x120/bcb3e96e-84a9-4409-9e51-24c8091b-a8951201-210712161120.jpeg',
        price: '52,000',
      },
      {
        title: 'Friend 1',
        subTitle: '1 Pizza thịt xông khói, 1 burger gà, 2 xúc xích chiên, 2 coca M, 1 trà sữa M',
        image:
          'https://images.foody.vn/res/g79/789740/s120x120/73a2fa61-f5e4-4889-be32-25cbfda4-6218639b-210701113035.jpeg',
        price: '183,000',
      },
      {
        title: 'Friend 2',
        subTitle: '1 burger tôm, 1 khoai lang lắc, 2 xúc xích chiên, 1 trà đào M, 1 trà sữa M',
        image:
          'https://images.foody.vn/res/g79/789740/s120x120/59aea499-109e-4391-b468-965eb062-41b96def-210712092916.jpeg',
        price: '50,000',
      },
      {
        title: 'Combo gà sốt',
        subTitle: '1 miếng gà sốt + khoai + coca',
        image:
          'https://images.foody.vn/res/g79/789740/s120x120/43d53b34-1a48-458c-b0d8-cbfcf2f1-7fda2b96-210712161026.jpeg',
        price: '54,000',
      },
      {
        title: 'Combo gà viên lắc phô mai',
        subTitle: '1 phần gà viên + khoai + coca',
        image:
          'https://images.foody.vn/res/g79/789740/s120x120/bcb3e96e-84a9-4409-9e51-24c8091b-a8951201-210712161120.jpeg',
        price: '50,000',
      },
      {
        title: 'Combo 2 gà sốt',
        subTitle: '2 gà sốt, 1 khoai S, 1 coca M',
        image:
          'https://images.foody.vn/res/g109/1084035/s120x120/0450def8-2e32-4624-a830-d6ff7f4a-fa30bd36-221006152730.jpeg',
        price: '50,000',
      },
      {
        title: 'Combo đùi gà không xương',
        subTitle: '1 phần đùi gà không xương, 1 khoai tây, 1 coca',
        image:
          'https://images.foody.vn/res/g79/789740/s120x120/d219c6fd-84eb-491c-8ad7-69a7ad37-2c5bf340-220221091542.jpeg',
        price: '50,000',
      },
    ],
  },
  {
    id: 2,
    title: 'TocoToco Bubble Tea',
    subTitle: 'Trà sữa trân châu hoàng gia',
    quantityPurchased: '999+',
    distance: '0.3km',
    image: 'https://images.foody.vn/res/g78/773964/prof/s280x175/foody-upload-api-foody-mobile-16-190624150335.jpg',
    menu: [
      {
        title: 'Trà sữa kim cương đen Okinawa',
        subTitle: 'Black Diamond Okinawa Milk Tea',
        image: 'https://images.foody.vn/res/g73/725302/s120x120/caaccfb4-fe89-4890-af65-292dfc833cf5.jpeg',
        price: '46,000',
      },
      {
        title: 'Trà sữa trân châu sợi',
        subTitle: 'Crystal Noodle Milk Tea',
        image: 'https://images.foody.vn/res/g73/725302/s120x120/d3c6864f-873d-4321-b478-1eacc460631e.jpeg',
        price: '46,000',
      },
      {
        title: 'Matcha kem phô mai',
        subTitle: 'Cream Cheese Green Tea',
        image: 'https://images.foody.vn/res/g73/725302/s120x120/1078d4f4-a32e-4d83-b985-949e4cf31149.jpeg',
        price: '46,000',
      },
      {
        title: 'Trà xanh kem phô mai',
        subTitle: 'Cream Cheese Green Tea',
        image: 'https://images.foody.vn/res/g73/725302/s120x120/1078d4f4-a32e-4d83-b985-949e4cf31149.jpeg',
        price: '46,000',
      },
      {
        title: 'Trà sữa trân châu hoàng gia',
        subTitle: 'Royal Pearl Milk Tea',
        image: 'https://images.foody.vn/res/g73/725302/s120x120/825005e4-c52b-45c4-b750-ac2d5f7c375b.jpeg',
        price: '48,000',
      },
      {
        title: 'Trà sữa Hạnh Phúc',
        subTitle: 'Trà sữa Toco',
        image: 'https://images.foody.vn/res/g73/725302/s120x120/dbde17c1-280a-458d-b190-73a022463999.jpeg',
        price: '46,000',
      },
      {
        title: 'Trà sữa bạc hà',
        subTitle: 'Mint Milk Tea',
        image: 'https://images.foody.vn/res/g73/725302/s120x120/dda77f5d-c276-49ac-b200-1fb6256ef10a.jpeg',
        price: '46,000',
      },
      {
        title: 'Trà sữa',
        subTitle: 'Milk Tea',
        image: 'https://images.foody.vn/res/g73/725302/s120x120/b6799e95-73ec-4e34-90bb-952428930a9b.jpeg',
        price: '38,000',
      },
    ],
  },
  {
    id: 3,
    title: 'Quán Chay KVegetarian',
    subTitle: 'Bánh bao chay/Vegetarian dumpling',
    quantityPurchased: '999+',
    distance: '2km',
    image:
      'https://images.foody.vn/res/g73/726458/prof/s280x175/foody-upload-api-foody-mobile-2--a6d744e9-230224132709.jpeg',
    menu: [
      {
        title: 'Bì cuốn chay - vegetarian summer rolls',
        subTitle: 'Món best seller. Dùng cùng xốt tương đen đặc biệt.',
        image:
          'https://images.foody.vn/res/g109/1080653/s120x120/677a3f5b-60da-43d3-8bbe-5e0f6706-f3c91cb0-230224190050.jpeg',
        price: '60,000',
      },
      {
        title: 'Gỏi cuốn chay - vegetarian fresh spring rolls',
        subTitle: 'Món best seller. Dùng cùng xốt tương đen đặc biệt.',
        image:
          'https://images.foody.vn/res/g109/1080653/s120x120/2574a28e-1c01-4c67-9b47-c08bbf7e-3fdaee95-230219094652.jpeg',
        price: '60,000',
      },
      {
        title: 'Gỏi cuốn chay - vegetarian fresh spring rolls',
        subTitle: 'Dùng kèm tương đậu hương vị đậm đà.',
        image:
          'https://images.foody.vn/res/g109/1080653/s120x120/2574a28e-1c01-4c67-9b47-c08bbf7e-3fdaee95-230219094652.jpeg',
        price: '60,000',
      },
      {
        title: 'Đậu hủ Hoàng Kim - Hoang Kim tofu',
        subTitle: 'Món best seller. Dùng kèm chà bông chay hấp dẫn. Đã bao gồm tiền tô giấy kraft.',
        image:
          'https://images.foody.vn/res/g109/1080653/s120x120/18e383f4-7f63-4377-9853-c207bb9e-7862c32b-230318145341.jpeg',
        price: '68,000',
      },
      {
        title: 'Bánh hỏi heo quay chay - soft thin vermicelli noodles with roasted pork',
        subTitle: 'Món best seller. Dùng kèm rau sống và nước mắm chay sạch. Đã bao gồm tiền tô giấy kraft.',
        image:
          'https://images.foody.vn/res/g109/1080653/s120x120/f6da81d9-be22-4316-ba02-ba6902a7-1dd5b82f-230105105944.jpeg',
        price: '68,000',
      },
      {
        title: 'Kimbap chay - vegetarian kimbap',
        subTitle: 'Món best seller. Phần nhân có trứng gà công nghiệp. Đã bao gồm tiền tô giấy kraft.',
        image:
          'https://images.foody.vn/res/g109/1080653/s120x120/23d58353-5127-464e-9d68-b7cadff0-8c2eed1f-230117000114.jpeg',
        price: '68,000',
      },
      {
        title: 'Chả giò chay - vegetarian spring rolls',
        subTitle: 'Đã bao gồm tiền tô giấy kraft.',
        image:
          'https://images.foody.vn/res/g109/1080653/s120x120/6ac900aa-d3f3-4256-bb6b-14f5c805-f1ba838d-230109112048.jpeg',
        price: '63,000',
      },
      {
        title: 'Đậu hủ chiên giòn chà bông - crispy fried tofu',
        subTitle:
          'Đậu hủ tươi được chiên vàng giòn có vị thơm béo tự nhiên dùng cùng chà bông chay hấp dẫn. Đã bao gồm tiền tô giấy kraft.',
        image:
          'https://images.foody.vn/res/g109/1080653/s120x120/61384ba7-da01-4477-9d9e-09509591-124a6391-230219094217.jpeg',
        price: '58,000',
      },
      {
        title: 'Đùi gà chay sả chiên xù - vegetarian lemongrass chicken thighs tempura',
        subTitle: 'Đã bao gồm tiền tô giấy kraft.',
        image:
          'https://images.foody.vn/res/g109/1080653/s120x120/5de1f029-be2b-4c0a-9ac4-48a3c5e4-659ad3a8-230109112059.jpeg',
        price: '58,000',
      },
    ],
  },
  {
    id: 4,
    title: 'Trà Sữa',
    subTitle: 'Trà sữa đường đen',
    quantityPurchased: '999+',
    distance: '1km',
    image: '/assets/images/tra_sua.jpg',
    menu: [{}],
  },
  {
    id: 5,
    title: 'Nước Cốt Mix',
    subTitle: 'Nước Mía & Rau Má Mix',
    quantityPurchased: '999+',
    distance: '0.3km',
    image: 'https://images.foody.vn/res/g102/1019255/prof/s280x175/foody-upload-api-foody-mobile-25a-200429094713.jpg',

    menu: [{}],
  },
  {
    id: 6,
    title: 'Yoko Sushi',
    subTitle: 'Sushi',
    quantityPurchased: '999+',
    distance: '0.5km',
    image: 'https://images.foody.vn/res/g79/781513/prof/s280x175/foody-upload-api-foody-mobile-2-190611091841.jpg',
    menu: [{}],
  },
  {
    id: 7,
    title: 'Milano Coffee',
    subTitle: 'Nước Cốt - Cà Phê Đá Truyền Thống',
    quantityPurchased: '999+',
    distance: '0.3km',
    image:
      'https://images.foody.vn/res/g70/692723/prof/s280x175/file_restaurant_photo_9crv_16379-b337f388-211126184753.jpg',
    menu: [{}],
  },
  {
    id: 8,
    title: 'Cơm Gà Xối Mỡ 142 - Ba Đình',
    subTitle: 'Cơm Gà Xối Mỡ',
    quantityPurchased: '999+',
    distance: '4km',
    image: 'https://images.foody.vn/res/g2/11349/prof/s280x175/image-3111762a-200910114155.jpeg',
    menu: [{}],
  },
  {
    id: 9,
    title: 'Cơm Tấm Cây Khế 3',
    subTitle: 'Cơm Tấm',
    quantityPurchased: '999+',
    distance: '2km',
    image:
      'https://images.foody.vn/res/g13/126552/prof/s280x175/foody-upload-api-foody-mobile-8af8cb23-df69-4645-b-191022091826.jpg',
    menu: [
      {
        title: 'Cơm Cá hú kho',
        subTitle: '',
        image: 'https://images.foody.vn/res/g13/126552/s120x120/da923b02-0c8b-4862-a5f6-ab964edd7544.jpg',
        price: '39,000',
      },
      {
        title: 'Cơm Cá ngừ kho',
        subTitle: '',
        image: 'https://images.foody.vn/res/g13/126552/s120x120/66ea7fdc-6545-4b57-935c-3fdb2a71dcce.jpg',
        price: '39,000',
      },
      {
        title: 'Cơm Thịt kho tiêu',
        subTitle: '',
        image: 'https://images.foody.vn/res/g13/126552/s120x120/d71d932c-8b24-41d9-9492-4e3a36f279fe.jpg',
        price: '39,000',
      },
      {
        title: 'Cơm Thịt ba rọi muối sả chiên',
        subTitle: '',
        image: 'https://images.foody.vn/res/g13/126552/s120x120/98441fb3-e979-403f-9cd3-0f269db58a2f.jpg',
        price: '39,000',
      },
      {
        title: 'Cơm Sườn ram mặn',
        subTitle: '',
        image: 'https://images.foody.vn/res/g13/126552/s120x120/2f5cf43a-c0ae-45b6-bbd7-c070447d5e0f.jpg',
        price: '39,000',
      },
      {
        title: 'Cơm Thịt kho trứng',
        subTitle: '',
        image: 'https://images.foody.vn/res/g13/126552/s120x120/c8deb356-75c0-428e-bfa1-0c45967f9409.jpg',
        price: '39,000',
      },
      {
        title: 'Cơm Đậu hũ dồn thịt',
        subTitle: '',
        image: 'https://images.foody.vn/res/g13/126552/s120x120/b26fe43c-7642-4c47-ab5e-7aa30aaec7af.jpg',
        price: '39,000',
      },
      {
        title: 'Cơm Thịt heo quay',
        subTitle: '',
        image: 'https://images.foody.vn/res/g13/126552/s120x120/341ffb0d-4a35-4dd5-9937-adb32b299160.jpg',
        price: '39,000',
      },
      {
        title: 'Cơm Sườn non nướng',
        subTitle: '',
        image:
          'https://images.foody.vn/res/g13/126552/s120x120/41ab60a2-eece-4c2f-b576-003f33ea-260a0330-220927134633.jpeg',
        price: '47,000',
      },
      {
        title: 'Cơm Sườn nướng',
        subTitle: '',
        image: 'https://images.foody.vn/res/g13/126552/s120x120/fda5196b-a570-4042-97bd-8d7883e2d884.jpg',
        price: '25,000',
      },
    ],
  },
  {
    id: 10,
    title: 'Cơm Gà Đông Nguyên - Nguyễn Trãi',
    subTitle: 'Cơm Gà',
    quantityPurchased: '999+',
    distance: '6km',
    image:
      'https://images.foody.vn/res/g1/5160/prof/s280x175/file_restaurant_photo_9b3y_16221-4d690c33-210528091635.jpg',
    menu: [{}],
  },
  {
    id: 11,
    title: 'Cơm Gà Xối Mỡ 142 - Lê Văn Duyệt',
    subTitle: 'Cơm Gà Xối Mỡ',
    quantityPurchased: '999+',
    distance: '4km',
    image:
      'https://images.foody.vn/res/g107/1061349/prof/s640x400/foody-upload-api-foody-mobile-file_restaurant_phot-201223150242.jpeg',
    menu: [{}],
  },
  {
    id: 12,
    title: 'Cơm Chiên Chảo Lửa - Nguyễn Sơn',
    subTitle: 'Cơm Chiên',
    quantityPurchased: '999+',
    distance: '0.1km',
    image:
      'https://images.foody.vn/res/g117/1161357/prof/s640x400/foody-upload-api-foody-mobile-fo-056e7e9f-230208164734.jpeg',
    menu: [{}],
  },
  {
    id: 13,
    title: 'Cơm Tấm Phúc Lộc Thọ - Lê Văn Việt',
    subTitle: 'Cơm Tấm',
    quantityPurchased: '999+',
    distance: '0.1km',
    image:
      'https://images.foody.vn/res/g20/192640/prof/s280x175/foody-upload-api-foody-mobile-co-527369b1-221216141300.jpg',
    menu: [
      {
        title: 'Cơm Sườn Phúc Lộc Thọ',
        subTitle: 'Bán chạy nhất',
        image:
          'https://images.foody.vn/res/g98/972468/s120x120/faf23e23-580c-4f62-971a-9b805c88-eb58c57c-230516154246.jpeg',
        price: '25,000',
      },
      {
        title: 'Combo Coca 1 Người - A',
        subTitle:
          'Giá gốc: 57,000.  Bao gồm: 1 Cơm sườn(size nhỏ) + 1 Coca Cola.Giảm 25K khi đặt combo có 01 Coca-Cola. Số lượng ưu đãi có hạn. Áp dụng từ 16/05/2023 - 22/05/2023',
        image:
          'https://images.foody.vn/res/g98/972468/s120x120/173b7834-3e17-4d06-ae1c-51ef14e0-55582286-230516113231.jpeg',
        price: '48,000',
      },
      {
        title: 'Combo Sườn Phúc Lộc Thọ + 1 món tùy chọn',
        subTitle: 'Giá gốc: 65.000đ. Cơm Sườn Phúc Lộc Thọ + Khăn lạnh + 1 món trong danh sách Món kèm tùy chọn',
        image:
          'https://images.foody.vn/res/g98/972468/s120x120/42360fa0-2ee7-4f75-aafa-f8a77f1f-4ee1dad4-230516154811.jpeg',
        price: '50,000',
      },
      {
        title: 'Combo Sườn Phúc Lộc Thọ + 2 món tùy chọn',
        subTitle: 'Giá gốc: 83.000đ. Cơm Sườn Phúc Lộc Thọ + Khăn lạnh + 2 món trong danh sách Món kèm tùy chọn',
        image:
          'https://images.foody.vn/res/g98/972468/s120x120/ead6305a-ea6d-4589-bc09-3a5ce3e1-67a98731-230516154313.jpeg',
        price: '65,000',
      },
      {
        title: 'Combo Sườn Phúc Lộc Thọ + 3 món tùy chọn',
        subTitle: 'Giá gốc: 101.000đ.. Cơm Sườn Phúc Lộc Thọ + Khăn lạnh + 3 món trong danh sách Món kèm tùy chọn',
        image:
          'https://images.foody.vn/res/g98/972468/s120x120/dacd84b7-a70b-49aa-a859-6ccd6ca3-8d0057d2-230516154823.jpeg',
        price: '70,000',
      },
      {
        title: 'Combo Đùi Gà tháo khớp + 1 món tùy chọn',
        subTitle:
          'Giá gốc: 75.000đ. Cơm Đùi Gà Quay Mắm (Gà Tháo Khớp) Thêm+ Khăn lạnh + 1 món trong danh sách Món kèm tùy chọn',
        image:
          'https://images.foody.vn/res/g98/972468/s120x120/ccaba59f-d5e4-4b36-9589-2f954d8e-83330bba-230512155921.jpeg',
        price: '68,000',
      },
      {
        title: 'Combo Đùi Gà tháo khớp + 2 món tùy chọn',
        subTitle: 'Giá gốc: 93.000đ. Cơm Đùi Gà tháo khớp + Khăn lạnh + 2 món trong danh sách Món kèm tùy chọn',
        image:
          'https://images.foody.vn/res/g98/972468/s120x120/77b804bc-ebd7-436f-a70c-f97532bf-fa237289-230510172801.jpeg',
        price: '81,000',
      },
    ],
  },
  {
    id: 14,
    title: 'Phở Phú Vương - Lê Văn Sỹ',
    subTitle: 'Phở Bắp Đặc Biệt',
    quantityPurchased: '999+',
    distance: '0.1km',
    image:
      'https://images.foody.vn/res/g1/1724/prof/s640x400/foody-mobile-pho-phu-vuong-mb-jpg-901-635664153224079588.jpg',
    menu: [
      {
        title: 'Phở Thập Cẩm (đặc biệt)',
        subTitle: 'Đã bao gồm tiền hộp mang về',
        image: 'https://images.foody.vn/res/g1/1724/s120x120/c35d31fa-fc53-4332-bd7d-0d7e52181335.jpeg',
        price: '105,000',
      },
      {
        title: 'Phở bò tái',
        subTitle: 'Đã bao gồm 2.000 tiền hộp mang về',
        image: 'https://images.foody.vn/res/g1/1724/s120x120/e014d506-9cf7-4c7d-87df-b5e2c432940f.jpeg',
        price: '80,000',
      },
      {
        title: 'Phở bò nạm',
        subTitle: 'Đã bao gồm 2000 tiền hộp mang về',
        image: 'https://images.foody.vn/res/g1/1724/s120x120/812f0d4d-6ffd-4438-8826-83bff34a4bdc.jpeg',
        price: '80,000',
      },
      {
        title: 'Phở gầu bò',
        subTitle: 'Đã bao gồm 2000 tiền hộp mang về',
        image: 'https://images.foody.vn/res/g1/1724/s120x120/dff4026b-68a1-4b40-ba79-114e23fe088f.jpeg',
        price: '80,000',
      },
      {
        title: 'Phở tái gân',
        subTitle: 'Đã bao gồm tiền hộp mang về',
        image: 'https://images.foody.vn/res/g1/1724/s120x120/e7ae7f54-8b56-487a-8fec-10e967e7807a.jpeg',
        price: '80,000',
      },
      {
        title: 'Phở Tái Nạm Gầu (đặc biệt)',
        subTitle: 'Đã bao gồm tiền hộp mang về',
        image: 'https://images.foody.vn/res/g1/1724/s120x120/6f1e0958-e7b3-495e-a9bd-7c9427191603.jpeg',
        price: '105,000',
      },
      {
        title: 'Phở lá sách',
        subTitle: 'Đã bao gồm 2,000 tiền hộp mang về',
        image: 'https://images.foody.vn/res/g1/1724/s120x120/27151e0c-d0f6-408f-957c-3b968ef30f3a.jpeg',
        price: '80,000',
      },
      {
        title: 'Phở Tái Gân Viên (đặc biệt)',
        subTitle: 'Đã bao gồm tiền hộp mang về',
        image: 'https://images.foody.vn/res/g1/1724/s120x120/04bc5fee-9375-4ce5-aca5-ed08d2690696.jpeg',
        price: '105,000',
      },
    ],
  },
  {
    id: 15,
    title: 'Dì Bảy - Bún Mắm Nêm Đà Nẵng',
    subTitle: 'Bún Mắm Nêm Thập Cẩm',
    quantityPurchased: '999+',
    distance: '1km',
    image: 'https://images.foody.vn/res/g4/37793/prof/s640x400/foody-mobile-mg8ungmp-jpg-416-636173332310026800.jpg',
    menu: [
      {
        title: 'Bún Mắm Nêm Thập Cẩm',
        subTitle: '',
        image:
          'https://images.foody.vn/res/g4/37793/s120x120/d6bc91f8-30f3-420e-abb3-fef0235a-380bfcf7-211229113316.jpeg',
        price: '50,000',
      },
      {
        title: 'Bún mắm nêm thịt luộc',
        subTitle: '',
        image: 'https://images.foody.vn/res/g4/37793/s120x120/20177617149-bun-mam-nem-thit-luoc.jpg',
        price: '40,000',
      },
      {
        title: 'Bún mắm nêm thịt quay',
        subTitle: '',
        image:
          'https://images.foody.vn/res/g4/37793/s120x120/9058fbd9-1c32-473c-b83e-206adf7b-b2868430-211229113340.jpeg',
        price: '45,000',
      },
      {
        title: 'Bún mắm nêm chả bò',
        subTitle: '',
        image: 'https://images.foody.vn/res/g4/37793/s120x120/396e6b56-2fb7-4f9b-89a1-56954991b278.jpg',
        price: '40,000',
      },
      {
        title: 'Bún mắm nêm chả cá',
        subTitle: '',
        image: 'https://images.foody.vn/res/g4/37793/s120x120/274054c5-af22-467c-a899-db261ce5d72a.jpg',
        price: '40,000',
      },
      {
        title: 'Bún cá ngừ đại dương',
        subTitle: '',
        image: 'https://images.foody.vn/res/g4/37793/s120x120/01f5eb5e-c16b-46ef-8f9d-5dcc537b74d9.jpg',
        price: '40,000',
      },
      {
        title: 'Mì Quảng Tôm Sườn',
        subTitle: '',
        image:
          'https://images.foody.vn/res/g4/37793/s120x120/042c6cec-8b50-4bea-9e28-da3db060-984855f6-210430235018.jpeg',
        price: '40,000',
      },
      {
        title: 'Mỳ Quảng Bò',
        subTitle: '',
        image:
          'https://images.foody.vn/res/g4/37793/s120x120/16f6be39-15a5-44e6-86c4-f6940fd7-5d05264f-220608171345.jpeg',
        price: '40,000',
      },
    ],
  },
];
