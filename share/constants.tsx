import { Shop } from './model/shop';

export const AUTH_LOGIN = 'auth/login';
export const AUTH_PROFILE = 'auth/profile';
export const REFRESH_TOKEN = 'auth/refresh';

export const DATA_PRODUCTS: Shop[] = [
  {
    id: 2,
    title: 'TocoToco Bubble Tea',
    quantityPurchased: '999+',
    distance: '0.3km',
    image: 'https://images.foody.vn/res/g78/773964/prof/s280x175/foody-upload-api-foody-mobile-16-190624150335.jpg',
    menu: [
      {
        title: 'Black Diamond Okinawa Milk Tea',
        image: 'https://images.foody.vn/res/g73/725302/s120x120/caaccfb4-fe89-4890-af65-292dfc833cf5.jpeg',
        price: '10',
      },
      {
        title: 'Crystal Noodle Milk Tea',
        image: 'https://images.foody.vn/res/g73/725302/s120x120/d3c6864f-873d-4321-b478-1eacc460631e.jpeg',
        price: '10',
      },
      {
        title: 'Cream Cheese Green Tea',
        image: 'https://images.foody.vn/res/g73/725302/s120x120/1078d4f4-a32e-4d83-b985-949e4cf31149.jpeg',
        price: '10',
      },
      {
        title: 'Royal Pearl Milk Tea',
        image: 'https://images.foody.vn/res/g73/725302/s120x120/825005e4-c52b-45c4-b750-ac2d5f7c375b.jpeg',
        price: '11',
      },
      {
        title: 'Toco Milk Tea',
        image: 'https://images.foody.vn/res/g73/725302/s120x120/dbde17c1-280a-458d-b190-73a022463999.jpeg',
        price: '10',
      },
      {
        title: 'Mint Milk Tea',
        image: 'https://images.foody.vn/res/g73/725302/s120x120/dda77f5d-c276-49ac-b200-1fb6256ef10a.jpeg',
        price: '10',
      },
      {
        title: 'Trà sữa',
        image: 'https://images.foody.vn/res/g73/725302/s120x120/b6799e95-73ec-4e34-90bb-952428930a9b.jpeg',
        price: '7',
      },
    ],
  },
  {
    id: 1,
    title: 'Street Food - Pizza, Hamburger',
    quantityPurchased: '999+',
    distance: '0.3km',
    image:
      'https://images.foody.vn/res/g109/1084035/prof/s640x400/foody-upload-api-foody-mobile-fo-b5bcf538-210628170118.jpeg',
    menu: [
      {
        title: 'Fried chicken combo',
        image:
          'https://images.foody.vn/res/g79/789740/s120x120/5034c277-acf7-4248-86c4-ceff731e-116eceec-210701153738.jpeg',
        price: '14',
      },
      {
        title: 'Cheese shake chicken combo',
        image:
          'https://images.foody.vn/res/g79/789740/s120x120/bcb3e96e-84a9-4409-9e51-24c8091b-a8951201-210712161120.jpeg',
        price: '14',
      },
      {
        title: 'Friend 1',
        image:
          'https://images.foody.vn/res/g79/789740/s120x120/73a2fa61-f5e4-4889-be32-25cbfda4-6218639b-210701113035.jpeg',
        price: '12',
      },
      {
        title: 'Friend 2',
        image:
          'https://images.foody.vn/res/g79/789740/s120x120/59aea499-109e-4391-b468-965eb062-41b96def-210712092916.jpeg',
        price: '12',
      },
      {
        title: 'Combo chicken with sauce',
        image:
          'https://images.foody.vn/res/g79/789740/s120x120/43d53b34-1a48-458c-b0d8-cbfcf2f1-7fda2b96-210712161026.jpeg',
        price: '12',
      },

      {
        title: 'Combo boneless chicken thighs',
        image:
          'https://images.foody.vn/res/g79/789740/s120x120/d219c6fd-84eb-491c-8ad7-69a7ad37-2c5bf340-220221091542.jpeg',
        price: '12',
      },
    ],
  },
  {
    id: 9,
    title: 'broken rice',
    quantityPurchased: '999+',
    distance: '2km',
    image:
      'https://images.foody.vn/res/g13/126552/prof/s280x175/foody-upload-api-foody-mobile-8af8cb23-df69-4645-b-191022091826.jpg',
    menu: [
      {
        title: 'braised fish rice',
        subTitle: '',
        image: 'https://images.foody.vn/res/g13/126552/s120x120/da923b02-0c8b-4862-a5f6-ab964edd7544.jpg',
        price: '8',
      },

      {
        title: 'Braised pork and pepper rice',
        image: 'https://images.foody.vn/res/g13/126552/s120x120/d71d932c-8b24-41d9-9492-4e3a36f279fe.jpg',
        price: '7',
      },
      {
        title: 'salt-roasted ribs',
        image: 'https://images.foody.vn/res/g13/126552/s120x120/2f5cf43a-c0ae-45b6-bbd7-c070447d5e0f.jpg',
        price: '7',
      },
      {
        title: 'Braised egg rice with meat',
        image: 'https://images.foody.vn/res/g13/126552/s120x120/c8deb356-75c0-428e-bfa1-0c45967f9409.jpg',
        price: '7',
      },
      {
        title: 'Meat tofu rice',
        image: 'https://images.foody.vn/res/g13/126552/s120x120/b26fe43c-7642-4c47-ab5e-7aa30aaec7af.jpg',
        price: '7',
      },
      {
        title: 'Roasted pork rice',
        image: 'https://images.foody.vn/res/g13/126552/s120x120/341ffb0d-4a35-4dd5-9937-adb32b299160.jpg',
        price: '7',
      },
      {
        title: 'Grilled ribs rice',
        subTitle: '',
        image:
          'https://images.foody.vn/res/g13/126552/s120x120/41ab60a2-eece-4c2f-b576-003f33ea-260a0330-220927134633.jpeg',
        price: '47,000',
      },
    ],
  },
  {
    id: 13,
    title: 'Phuc Loc Tho broken rice',
    quantityPurchased: '999+',
    distance: '0.1km',
    image:
      'https://images.foody.vn/res/g20/192640/prof/s280x175/foody-upload-api-foody-mobile-co-527369b1-221216141300.jpg',
    menu: [
      {
        title: 'Phuc Loc Tho Rib Rice',
        image:
          'https://images.foody.vn/res/g98/972468/s120x120/faf23e23-580c-4f62-971a-9b805c88-eb58c57c-230516154246.jpeg',
        price: '5',
      },
      {
        title: 'Combo Coke 1 Person',
        image:
          'https://images.foody.vn/res/g98/972468/s120x120/173b7834-3e17-4d06-ae1c-51ef14e0-55582286-230516113231.jpeg',
        price: '8',
      },
      {
        title: 'Combo Phuc Loc Tho Ribs + 1 buffet dish',
        image:
          'https://images.foody.vn/res/g98/972468/s120x120/42360fa0-2ee7-4f75-aafa-f8a77f1f-4ee1dad4-230516154811.jpeg',
        price: '6',
      },
      {
        title: 'Combo Phuc Loc Tho Ribs + 2 buffet dishes',
        image:
          'https://images.foody.vn/res/g98/972468/s120x120/ead6305a-ea6d-4589-bc09-3a5ce3e1-67a98731-230516154313.jpeg',
        price: '7',
      },
      {
        title: 'Combo Phuc Loc Tho Ribs + 3 buffet dishes',
        image:
          'https://images.foody.vn/res/g98/972468/s120x120/dacd84b7-a70b-49aa-a859-6ccd6ca3-8d0057d2-230516154823.jpeg',
        price: '8',
      },
      {
        title: 'Combo Chicken thighs + 1 buffet dish',
        image:
          'https://images.foody.vn/res/g98/972468/s120x120/ccaba59f-d5e4-4b36-9589-2f954d8e-83330bba-230512155921.jpeg',
        price: '6',
      },
      {
        title: 'Combo Chicken thighs + 2 buffet dishes',
        image:
          'https://images.foody.vn/res/g98/972468/s120x120/77b804bc-ebd7-436f-a70c-f97532bf-fa237289-230510172801.jpeg',
        price: '7',
      },
    ],
  },
];
