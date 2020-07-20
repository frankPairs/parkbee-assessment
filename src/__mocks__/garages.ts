import { FullGarageAPI } from '../store/garages';

const garagesMock = [
  {
    id: '6db25388-697d-4b6d-9d9b-8372c374b408',
    garageName: 'ParkBee(26801): Zeeheld',
    name: 'Zeeheld',
    zoneNumber: 26801,
    countryCode: 'nl',
  },
  {
    id: 'd14bc3e8-93ff-4e6e-be15-c7574252c5be',
    garageName: 'ParkBee(26802): Botersloot',
    name: 'Botersloot',
    zoneNumber: 26802,
    countryCode: 'nl',
  },
];

const fullGaragesMock: { [garageId: string]: FullGarageAPI } = {
  'd14bc3e8-93ff-4e6e-be15-c7574252c5be': {
    garageId: 'd14bc3e8-93ff-4e6e-be15-c7574252c5be',
    garageName: 'ParkBee(26802): Botersloot',
    name: 'Botersloot',
    latitude: 51.922474,
    longitude: 4.486856,
    streetAddress: 'Librijesteeg',
    postalCode: '3011NH    ',
    city: 'Rotterdam',
    countryCode: 'nl',
    hasBarrier: true,
    zoneNumber: 26802,
    isSuspended: false,
    garageSuspensions: [],
    garageInformation: [
      {
        id: 'cc80e93c-fbee-4f3b-b5cd-0a25676ecb7c',
        countryCode: 'nl',
        message: 'Sensor: bij inchecken auto dichtbij ingang zetten',
      },
      {
        id: 'da5ea4d0-21da-461a-ac8a-9c0f12707fd9',
        countryCode: 'en',
        message: 'Sensor: stop car closely in front of entry',
      },
      {
        id: 'e10c5bb7-596a-4d11-8f4e-209f7d0e27c1',
        countryCode: 'de',
        message: 'Sensor: Beim Check-in Auto in der Nähe vom Eingang',
      },
    ],
    doors: [
      {
        doorType: 'Entry',
        description: 'The entry door',
        doorId: '2d0c6f00-c520-46a1-9a13-3f1a1fc5cbf4',
      },
      {
        doorType: 'Exit',
        description: 'The exit door',
        doorId: '981bc76e-3932-4c1f-a28c-0bbce8aecff4',
      },
      {
        doorType: 'Human',
        description: 'The pedestrian door',
        doorId: 'a25ef938-82e9-42fa-ab2f-82395007d5e7',
      },
    ],
    isPayPerMinute: false,
    isPrepaid: false,
    isReservable: false,
    active: true,
    region: 'North Holland',
    timezone: 'Europe/Amsterdam',
    capacity: 59,
    photos: [
      {
        description: 'Entry door',
        urls: [
          {
            name: 'Small',
            size: '300x225',
            url:
              'https://ddp49kz334y0n.cloudfront.net/9afdd073-1684-4d12-9189-3e79f5ed8854/300x225/29e48488-62f6-4507-9c7a-2b3c4e920fee.jpg',
          },
          {
            name: 'Large',
            size: '1200x900',
            url:
              'https://ddp49kz334y0n.cloudfront.net/9afdd073-1684-4d12-9189-3e79f5ed8854/1200x900/29e48488-62f6-4507-9c7a-2b3c4e920fee.jpg',
          },
        ],
        extension: '.jpg',
      },
      {
        description: 'Interior',
        urls: [
          {
            name: 'Small',
            size: '300x225',
            url:
              'https://ddp49kz334y0n.cloudfront.net/9afdd073-1684-4d12-9189-3e79f5ed8854/300x225/6192159d-0d32-44be-a183-306c7e8e22fb.jpg',
          },
          {
            name: 'Large',
            size: '1200x900',
            url:
              'https://ddp49kz334y0n.cloudfront.net/9afdd073-1684-4d12-9189-3e79f5ed8854/1200x900/6192159d-0d32-44be-a183-306c7e8e22fb.jpg',
          },
        ],
        extension: '.jpg',
      },
    ],
  },
  '6db25388-697d-4b6d-9d9b-8372c374b408': {
    garageId: 'd14bc3e8-93ff-4e6e-be15-c7574252c5be',
    garageName: 'ParkBee(26801): Zeeheld',
    name: 'Zeeheld',
    latitude: 51.922474,
    longitude: 4.486856,
    streetAddress: 'Librijesteeg',
    postalCode: '3011NH    ',
    city: 'Rotterdam',
    countryCode: 'nl',
    hasBarrier: true,
    zoneNumber: 26802,
    isSuspended: false,
    garageSuspensions: [],
    garageInformation: [
      {
        id: 'cc80e93c-fbee-4f3b-b5cd-0a25676ecb7c',
        countryCode: 'nl',
        message: 'Sensor: bij inchecken auto dichtbij ingang zetten',
      },
      {
        id: 'da5ea4d0-21da-461a-ac8a-9c0f12707fd9',
        countryCode: 'en',
        message: 'Sensor: stop car closely in front of entry',
      },
      {
        id: 'e10c5bb7-596a-4d11-8f4e-209f7d0e27c1',
        countryCode: 'de',
        message: 'Sensor: Beim Check-in Auto in der Nähe vom Eingang',
      },
    ],
    doors: [
      {
        doorType: 'Entry',
        description: 'The entry door',
        doorId: '2d0c6f00-c520-46a1-9a13-3f1a1fc5cbf4',
      },
      {
        doorType: 'Exit',
        description: 'The exit door',
        doorId: '981bc76e-3932-4c1f-a28c-0bbce8aecff4',
      },
      {
        doorType: 'Human',
        description: 'The pedestrian door',
        doorId: 'a25ef938-82e9-42fa-ab2f-82395007d5e7',
      },
    ],
    isPayPerMinute: false,
    isPrepaid: false,
    isReservable: false,
    active: true,
    region: 'North Holland',
    timezone: 'Europe/Amsterdam',
    capacity: 59,
    photos: [
      {
        description: 'Entry door',
        urls: [
          {
            name: 'Small',
            size: '300x225',
            url:
              'https://ddp49kz334y0n.cloudfront.net/9afdd073-1684-4d12-9189-3e79f5ed8854/300x225/29e48488-62f6-4507-9c7a-2b3c4e920fee.jpg',
          },
          {
            name: 'Large',
            size: '1200x900',
            url:
              'https://ddp49kz334y0n.cloudfront.net/9afdd073-1684-4d12-9189-3e79f5ed8854/1200x900/29e48488-62f6-4507-9c7a-2b3c4e920fee.jpg',
          },
        ],
        extension: '.jpg',
      },
      {
        description: 'Interior',
        urls: [
          {
            name: 'Small',
            size: '300x225',
            url:
              'https://ddp49kz334y0n.cloudfront.net/9afdd073-1684-4d12-9189-3e79f5ed8854/300x225/6192159d-0d32-44be-a183-306c7e8e22fb.jpg',
          },
          {
            name: 'Large',
            size: '1200x900',
            url:
              'https://ddp49kz334y0n.cloudfront.net/9afdd073-1684-4d12-9189-3e79f5ed8854/1200x900/6192159d-0d32-44be-a183-306c7e8e22fb.jpg',
          },
        ],
        extension: '.jpg',
      },
    ],
  },
};

export { garagesMock, fullGaragesMock };
