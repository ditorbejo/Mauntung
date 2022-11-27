const laundreeMembership = {
  id: 1,
  name: "Laundree Membership",
  img: "https://via.placeholder.com/36",
  type: "stamp",
  point: null,
  stamp: {
    balance: 10,
    willVoidSoon: {
      amount: 1,
      voidAt: "2022-12-20T16:59:59Z",
    },
    capacity: 15,
  },
  featuredRewards: [
    {
      id: 1,
      name: "Cuci Mobil Gratis",
      point: null,
      stamp: 15,
      img: "https://via.placeholder.com/126",
    },
    {
      id: 2,
      name: "Cuci Motor Gratis",
      point: null,
      stamp: 10,
      img: "https://via.placeholder.com/126",
    },
    {
      id: 3,
      name: "Potongan 10 Ribu",
      point: null,
      stamp: 5,
      img: "https://via.placeholder.com/126",
    },
    {
      id: 4,
      name: "Potongan 20 Ribu",
      point: null,
      stamp: 10,
      img: "https://via.placeholder.com/126",
    },
  ],
  featuredRedeems: [
    {
      id: 1,
      name: "1 Kali Cuci Gratis",
      isRedeemed: false,
      expiredAt: "2022-12-20T10:30:00Z",
    },
  ],
};

const kopiQueMembership = {
  id: 2,
  name: "KopiQue Membership",
  img: "https://via.placeholder.com/36",
  type: "point",
  point: {
    balance: 100,
    willVoidSoon: {
      amount: 10,
      voidAt: "2022-12-20T16:59:59Z",
    },
    tiers: [
      {
        id: 1,
        name: "Bronze",
        pointsRequired: 0,
      },
      {
        id: 2,
        name: "Silver",
        pointsRequired: 100,
      },
      {
        id: 3,
        name: "Gold",
        pointsRequired: 300,
      },
    ],
    currentTier: {
      id: 2,
      name: "Silver",
      pointsToUpclass: 200,
      progress: 100 / 300,
      upclassDeadline: "2022-12-31T17:00:00Z",
    },
  },
  stamp: null,
  featuredRewards: [
    {
      id: 6,
      name: "Cappucino",
      point: 10,
      stamp: null,
      img: "https://via.placeholder.com/126",
    },
    {
      id: 7,
      name: "Diskon 10% All Items",
      point: 10,
      stamp: null,
      img: "https://via.placeholder.com/126",
    },
    {
      id: 8,
      name: "Moccachino",
      point: 10,
      stamp: null,
      img: "https://via.placeholder.com/126",
    },
    {
      id: 9,
      name: "Americano",
      point: 10,
      stamp: null,
      img: "https://via.placeholder.com/126",
    },
  ],
  featuredRedeems: [
    {
      id: 2,
      name: "Cappucino",
      isRedeemed: false,
      expiredAt: "2022-12-20T10:30:00Z",
    },
    {
      id: 3,
      name: "Diskon 10% All Items",
      isRedeemed: false,
      expiredAt: "2022-12-15T10:30:00Z",
    },
    {
      id: 6,
      name: "Moccachino",
      isRedeemed: false,
      expiredAt: "2022-12-11T10:30:00Z",
    },
  ],
};

const supermaretMembership = {
  id: 3,
  name: "Supermaret Membership",
  img: "https://via.placeholder.com/36",
  type: "point",
  point: {
    balance: 50,
    willVoidSoon: {
      amount: 10,
      voidAt: "2022-12-20T16:59:59Z",
    },
    tiers: [
      {
        id: 1,
        name: "Bronze",
        pointsRequired: 0,
      },
      {
        id: 2,
        name: "Silver",
        pointsRequired: 100,
      },
      {
        id: 3,
        name: "Gold",
        pointsRequired: 300,
      },
    ],
    currentTier: {
      id: 2,
      pointsToUpclass: 200,
      upclassDeadline: "2022-12-31T17:00:00Z",
    },
  },
  stamp: null,
  featuredRewards: [
    {
      id: 11,
      name: "Tebus Murah Serba 5 Ribu",
      point: 5,
      stamp: null,
      img: "https://via.placeholder.com/126",
    },
    {
      id: 12,
      name: "Tebus Murah Serba 10 Ribu",
      point: 8,
      stamp: null,
      img: "https://via.placeholder.com/126",
    },
    {
      id: 13,
      name: "Piring Cantik",
      point: 5,
      stamp: null,
      img: "https://via.placeholder.com/126",
    },
    {
      id: 14,
      name: "Tumblr Supermaret",
      point: 30,
      stamp: null,
      img: "https://via.placeholder.com/126",
    },
  ],
  featuredRedeems: [
    {
      id: 4,
      name: "Tebus Murah 5k",
      isRedeemed: false,
      expiredAt: "2022-12-14T10:30:00Z",
    },
    {
      id: 5,
      name: "Tebus Murah 10k",
      isRedeemed: false,
      expiredAt: "2022-12-14T10:30:00Z",
    },
  ],
};

const iceKukiMembership = {
  id: 4,
  name: "IceKuki Membership",
  img: "https://via.placeholder.com/36",
  type: "stamp",
  point: null,
  stamp: {
    balance: 4,
    willVoidSoon: {
      amount: 1,
      voidAt: "2022-12-20T16:59:59Z",
    },
    capacity: 10,
  },
  featuredRewards: [
    {
      id: 16,
      name: "Diskon 10% All Items",
      point: null,
      stamp: 5,
      img: "https://via.placeholder.com/126",
    },
    {
      id: 17,
      name: "Diskon 10% All Items",
      point: null,
      stamp: 5,
      img: "https://via.placeholder.com/126",
    },
    {
      id: 18,
      name: "Diskon 10% All Items",
      point: null,
      stamp: 5,
      img: "https://via.placeholder.com/126",
    },
    {
      id: 19,
      name: "Diskon 10% All Items",
      point: null,
      stamp: 5,
      img: "https://via.placeholder.com/126",
    },
  ],
  featuredRedeems: [],
};

const bebekCarokMembership = {
  id: 5,
  name: "Bebek Carok Membership",
  img: "https://via.placeholder.com/36",
  type: "point",
  point: {
    balance: 10,
    willVoidSoon: {
      amount: 2,
      voidAt: "2022-12-20T16:59:59Z",
    },
    tiers: [
      {
        id: 1,
        name: "Bronze",
        pointsRequired: 0,
      },
      {
        id: 2,
        name: "Silver",
        pointsRequired: 100,
      },
      {
        id: 3,
        name: "Gold",
        pointsRequired: 300,
      },
    ],
    currentTier: {
      id: 2,
      pointsToUpclass: 200,
      upclassDeadline: "2022-12-31T17:00:00Z",
    },
  },
  stamp: null,
  featuredRewards: [
    {
      id: 21,
      name: "Es Teh / Teh Hangat",
      point: 5,
      stamp: null,
      img: "https://via.placeholder.com/126",
    },
    {
      id: 22,
      name: "Diskon 10% All Items",
      point: 5,
      stamp: null,
      img: "https://via.placeholder.com/126",
    },
    {
      id: 23,
      name: "Bebek Carok Bumbu Hitam",
      point: 10,
      stamp: null,
      img: "https://via.placeholder.com/126",
    },
    {
      id: 24,
      name: "Bebek Madura Laos",
      point: 10,
      stamp: null,
      img: "https://via.placeholder.com/126",
    },
  ],
  featuredRedeems: [],
};

export default [
  laundreeMembership,
  kopiQueMembership,
  supermaretMembership,
  iceKukiMembership,
  bebekCarokMembership,
];
