const laundreeMembership = {
  id: 1,
  redeems: [
    {
      id: 1,
      reward: {
        id: 1,
        name: "Cuci Mobil Gratis",
        point: null,
        stamp: 15,
        img: "https://via.placeholder.com/126",
      },
      redeemCode: "abc-123-def-456",
      expiredAt: "2022-12-20T10:30:00Z",
      redeemedAt: null,
      isRedeemed: false,
      createdAt: "2022-10-11T10:30:00Z",
    },
  ],
};

const kopiQueMembership = {
  id: 2,
  redeems: [
    {
      id: 2,
      reward: {
        id: 6,
        name: "Cappucino",
        point: 10,
        stamp: null,
        img: "https://via.placeholder.com/126",
      },
      redeemCode: "abc-123-def-456",
      expiredAt: "2022-12-20T10:30:00Z",
      redeemedAt: null,
      isRedeemed: false,
      createdAt: "2022-10-11T10:30:00Z",
    },
    {
      id: 3,
      reward: {
        id: 7,
        name: "Diskon 10% All Items",
        point: 10,
        stamp: null,
        img: "https://via.placeholder.com/126",
      },
      redeemCode: "abc-123-def-456",
      expiredAt: "2022-12-15T10:30:00Z",
      redeemedAt: null,
      isRedeemed: false,
      createdAt: "2022-10-11T10:30:00Z",
    },
    {
      id: 6,
      reward: {
        id: 8,
        name: "Moccachino",
        point: 10,
        stamp: null,
        img: "https://via.placeholder.com/126",
      },
      redeemCode: "abc-123-def-456",
      expiredAt: "2022-12-11T10:30:00Z",
      redeemedAt: null,
      isRedeemed: false,
      createdAt: "2022-10-11T10:30:00Z",
    },
  ],
};

const supermaretMembership = {
  id: 3,
  redeems: [
    {
      id: 4,
      reward: {
        id: 11,
        name: "Tebus Murah Serba 5 Ribu",
        point: 5,
        stamp: null,
        img: "https://via.placeholder.com/126",
      },
      redeemCode: "abc-123-def-456",
      expiredAt: "2022-12-14T10:30:00Z",
      redeemedAt: null,
      isRedeemed: false,
      createdAt: "2022-10-11T10:30:00Z",
    },
    {
      id: 5,
      reward: {
        id: 12,
        name: "Tebus Murah Serba 10 Ribu",
        point: 8,
        stamp: null,
        img: "https://via.placeholder.com/126",
      },
      redeemCode: "abc-123-def-456",
      expiredAt: "2022-12-14T10:30:00Z",
      redeemedAt: null,
      isRedeemed: false,
      createdAt: "2022-10-11T10:30:00Z",
    },
  ],
};

const iceKukiMembership = {
  id: 4,
  redeems: [],
};

const bebekCarokMembership = {
  id: 5,
  redeems: [],
};

export default [
  laundreeMembership,
  kopiQueMembership,
  supermaretMembership,
  iceKukiMembership,
  bebekCarokMembership,
];
