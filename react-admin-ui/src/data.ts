export const menu = [
    {
      id: 1,
      title: "MAIN",
      listItems: [
        {
          id: 1,
          title: "Home",
          url: "/",
          icon: "home.svg",
        },
        // {
        //   id: 2,
        //   title: "Profile",
        //   url: "/profile",
        //   icon: "user.svg",
        // },
      ],
    },
    {
      id: 2,
      title: "LIST",
      listItems: [
        {
          id: 1,
          title: "Users",
          url: "/users",
          icon: "user.svg",
        },
        {
          id: 2,
          title: "Products",
          url: "/products",
          icon: "product.svg",
        },
        {
          id: 3,
          title: "Login",
          url: "/login",
          icon: "backup.svg",
        },
        // {
        //   id: 3,
        //   title: "Orders",
        //   url: "/orders",
        //   icon: "order.svg",
        // },
        // {
        //   id: 4,
        //   title: "Posts",
        //   url: "/posts",
        //   icon: "post2.svg",
        // },
      ],
    },
    // {
    //   id: 3,
    //   title: "OFFICE",
    //   listItems: [
    //     {
    //       id: 1,
    //       title: "Elements",
    //       url: "/",
    //       icon: "element.svg",
    //     },
    //     {
    //       id: 2,
    //       title: "Notes",
    //       url: "/",
    //       icon: "note.svg",
    //     },
    //     {
    //       id: 3,
    //       title: "Forms",
    //       url: "/",
    //       icon: "form.svg",
    //     },
    //     {
    //       id: 4,
    //       title: "Calendar",
    //       url: "/",
    //       icon: "calendar.svg",
    //     },
    //   ],
    // },
    // {
    //   id: 4,
    //   title: "ADVANCED",
    //   listItems: [
    //     {
    //       id: 1,
    //       title: "Settings",
    //       url: "/",
    //       icon: "setting.svg",
    //     },
    //     {
    //       id: 2,
    //       title: "Backup",
    //       url: "/",
    //       icon: "backup.svg",
    //     },
    //   ],
    // },
    // {
    //   id: 5,
    //   title: "DATA",
    //   listItems: [
    //     {
    //       id: 1,
    //       title: "Charts",
    //       url: "/",
    //       icon: "chart.svg",
    //     },
        // {
        //   id: 2,
        //   title: "Login",
        //   url: "/login",
        //   icon: "log.svg",
        // },
    //   ],
    // },
  ];

  export const topDealUsers = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      username: "Elva McDonald",
      email: "elva@gmail.com",
      amount: "3.668",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Linnie Nelson",
      email: "linnie@gmail.com",
      amount: "3.256",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Brent Reeves",
      email: "brent@gmail.com",
      amount: "2.998",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Adeline Watson",
      email: "adeline@gmail.com",
      amount: "2.512",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Juan Harrington",
      email: "juan@gmail.com",
      amount: "2.134",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Augusta McGee",
      email: "augusta@gmail.com",
      amount: "1.932",
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Angel Thomas",
      email: "angel@gmail.com",
      amount: "1.560",
    },
  ];
  
  export const chartBoxUser = {
    color: "#5682fb",
    icon: "/userIcon.svg",
    title: "Month Users",
    number: "9.253",
    dataKey: "users",
    percentage: "+52",
    chartData: [
      { name: "Sun", users: 1250 },
      { name: "Mon", users: 1200 },
      { name: "Tue", users: 900 },
      { name: "Wed", users: 300 },
      { name: "Thu", users: 920 },
      { name: "Fri", users: 1400 },
      { name: "Sat", users: 3850 },
    ],
  };
  
  export const chartBoxProduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Products",
    number: "+11.015",
    dataKey: "products",
    percentage: "+41",
    chartData: [
      { name: "Sun", products: 1520 },
      { name: "Mon", products: 1334 },
      { name: "Tue", products: 810 },
      { name: "Wed", products: 913 },
      { name: "Thu", products: 2185 },
      { name: "Fri", products: 1122 },
      { name: "Sat", products: 3250 },
    ],
  };
  export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Revenue",
    number: "$16.432",
    dataKey: "revenue",
    percentage: "-14",
    chartData: [
      { name: "Sun", revenue: 3400 },
      { name: "Mon", revenue: 2200 },
      { name: "Tue", revenue: 2500 },
      { name: "Wed", revenue: 1500 },
      { name: "Thu", revenue: 1900 },
      { name: "Fri", revenue: 3200 },
      { name: "Sat", revenue: 4150 },
    ],
  };
  export const chartBoxConversion = {
    color: "hsl(270, 100%, 59%)",
    icon: "/conversionIcon.svg",
    title: "Statistics",
    number: "up +2.6",
    dataKey: "ratio",
    percentage: "26",
    chartData: [
      { name: "Sun", ratio: 820 },
      { name: "Tue", ratio: 613 },
      { name: "Fri", ratio: 1500 },
      { name: "Sat", ratio: 950 },
      { name: "Wed", ratio: 650 },
    ],
  };
  
  export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
      {
        name: "Sun",
        profit: 3300,
      },
      {
        name: "Mon",
        profit: 2400,
      },
      {
        name: "Tue",
        profit:2500,
      },
      {
        name: "Wed",
        profit: 1580,
      },
      {
        name: "Thu",
        profit: 1890,
      },
      {
        name: "Fri",
        profit: 3190,
      },
      {
        name: "Sat",
        profit: 3860,
      },
    ],
  };
  
  export const barChartBoxVisit = {
    title: "Total Visit",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
      {
        name: "Sun",
        visit: 3000,
      },
      {
        name: "Mon",
        visit: 2000,
      },
      {
        name: "Tue",
        visit: 2200,
      },
      {
        name: "Wed",
        visit: 980,
      },
      {
        name: "Thu",
        visit: 1390,
      },
      {
        name: "Fri",
        visit: 2590,
      },
      {
        name: "Sat",
        visit: 3490,
      },
    ],
  };

  export const bigChartBoxRevenue = {  
      title: "Profit Earned",
      color: "#8884d8",
      dataKey: "profit",
      chartData: [
    {
      name: 'week 1',
      artworks: 4000,
      stickers: 2400,
      posters: 2400,
    },
    {
      name: 'week 2',
      artworks: 3000,
      stickers: 1398,
      posters: 2210,
    },
    {
      name: 'week 3',
      artworks: 2000,
      stickers: 9800,
      posters: 2290,
    },
    {
      name: 'week 4',
      artworks: 2780,
      stickers: 3908,
      posters: 2900,
    },
    {
      name: 'week 5',
      artworks: 2890,
      stickers: 2800,
      posters: 3181,
    },
    {
      name: 'week 6',
      artworks: 2390,
      stickers: 3800,
      posters: 2500,
    },
    {
      name: 'week 7',
      artworks: 3490,
      stickers: 4300,
      posters: 2100,
    },
  ],
};
  
  export const userRows = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Hubbard",
      firstName: "Eula",
      email: "kewez@@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Manning",
      firstName: "Stella",
      email: "comhuhmit@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Greer",
      firstName: "Mary",
      email: "ujudokon@hottmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Williamson",
      firstName: "Mildred",
      email: "tinhavabe@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Gross",
      firstName: "Jose",
      email: "gobtagbes@yahoo.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Sharp",
      firstName: "Jeremy",
      email: "vulca.eder@mail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Lowe",
      firstName: "Christina",
      email: "reso.bilic@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dean",
      firstName: "Garrett",
      email: "codaic@mail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 9,
      img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Parsons",
      firstName: "Leah",
      email: "uzozor@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 10,
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Reid",
      firstName: "Elnora",
      email: "tuhkabapu@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 11,
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dunn",
      firstName: "Gertrude",
      email: "gibo@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 12,
      img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Williams",
      firstName: "Mark",
      email: "tic.harvey@hotmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 13,
      img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Cruz",
      firstName: "Charlotte",
      email: "ceuc@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 14,
      img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Harper",
      firstName: "Sara",
      email: "bafuv@hotmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 15,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Griffin",
      firstName: "Eric",
      email: "ubi@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 16,
      img: "https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Smith",
      firstName: "John",
      email: "john.smith@example.com",
      phone: "987 654 321",
      createdAt: "15.03.2023",
      verified: false,
    },
    {
      id: 17,
      img: "https://images.pexels.com/photos/9876543/pexels-photo-9876543.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Taylor",
      firstName: "Emma",
      email: "emma.taylor@example.com",
      phone: "555 123 456",
      createdAt: "10.04.2023",
      verified: true,
    },
    {
      id: 18,
      img: "https://images.pexels.com/photos/2345678/pexels-photo-2345678.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Brown",
      firstName: "Michael",
      email: "michael.brown@gmail.com",
      phone: "777 888 999",
      createdAt: "05.05.2023",
      verified: false,
    },
  ];
  
  export const products = [
    {
      id: 1,
      img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
      title: "Playstation 5 Digital Edition",
      color: "white",
      producer: "Sony",
      price: "$250.99",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 2,
      img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
      title: "Dell Laptop KR211822",
      color: "black",
      producer: "Dell",
      price: "$499.99",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 3,
      img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
      title: "Samsung TV 4K SmartTV",
      color: "gray",
      producer: "Samsung",
      price: "$999.49",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 4,
      img: "https://raylo.imgix.net/iphone-14-blue.png",
      title: "Apple Iphone 14 Pro Max",
      color: "white",
      producer: "Apple",
      price: "$799.49",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 5,
      img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
      title: "Philips Hue Play Gradient",
      color: "rainbow",
      producer: "Philips",
      price: "$39.99",
      createdAt: "01.02.2023",
    },
    {
      id: 6,
      img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
      title: "Logitech MX Master 3",
      color: "black",
      producer: "Logitech",
      price: "$59.49",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 7,
      img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
      title: "Rode Podcast Microphone",
      color: "gray",
      producer: "Rode",
      price: "$119.49",
      createdAt: "01.02.2023",
    },
    {
      id: 8,
      img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
      title: "Toshiba Split AC 2",
      color: "white",
      producer: "Toshiba",
      price: "$899.99",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 9,
      img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
      title: "Sony Bravia KDL-47W805A",
      color: "black",
      producer: "Sony",
      price: "$970.49",
      createdAt: "01.02.2023",
    },
    {
      id: 10,
      img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
      title: "Acer Laptop 16 KL-4804",
      color: "black",
      producer: "Acer",
      price: "$599.99",
      createdAt: "01.02.2023",
      inStock: true,
    },
  ];
  
  
  
  export const singleUser = {
    id: 1,
    title: "John Doe",
    img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    info: {
      username: "Johndoe99",
      fullname: "John Doe",
      email: "johndoe@gmail.com",
      phone: "123 456 789",
      status: "verified",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "clicks", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          clicks: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          clicks: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          clicks: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          clicks: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          clicks: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          clicks: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          clicks: 4300,
        },
      ],
    },
    activities: [
      {
        text: "John Doe purchased Playstation 5 Digital Edition",
        time: "3 day ago",
      },
      {
        text: "John Doe added 3 items into their wishlist",
        time: "1 week ago",
      },
      {
        text: "John Doe purchased Sony Bravia KD-32w800",
        time: "2 weeks ago",
      },
      {
        text: "John Doe reviewed a product",
        time: "1 month ago",
      },
      {
        text: "John Doe added 1 items into their wishlist",
        time: "1 month ago",
      },
      {
        text: "John Doe reviewed a product",
        time: "2 months ago",
      },
    ],
  };
  export const singleProduct = {
    id: 1,
    title: "Playstation 5 Digital Edition",
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    info: {
      productId: "Ps5SDF1156d",
      color: "white",
      price: "$250.99",
      producer: "Sony",
      export: "Japan",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "orders", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          orders: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          orders: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          orders: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          orders: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          orders: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          orders: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          orders: 4300,
        },
      ],
    },
    activities: [
      {
        text: "John Doe purchased Playstation 5 Digital Edition",
        time: "3 day ago",
      },
      {
        text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
        time: "1 week ago",
      },
      {
        text: "Mike Doe purchased Playstation 5 Digital Edition",
        time: "2 weeks ago",
      },
      {
        text: "Anna Doe reviewed the product",
        time: "1 month ago",
      },
      {
        text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
        time: "1 month ago",
      },
      {
        text: "Helen Doe reviewed the product",
        time: "2 months ago",
      },
    ],
  };



  export const adminPage = {
    id: 1,
    title: "Admin",
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    info: {
      username: " Admin",
      fullname: " Admin",
      email: " corpoemail@organization.com",
      phone: " 123 456 789",
      status: " verified",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#70eeff" },
        { name: "clicks", color: "#47fa95" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          clicks: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          clicks: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          clicks: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          clicks: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          clicks: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          clicks: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          clicks: 4300,
        },
      ],
    },
    activities: [
      {
        text: "John Doe purchased Playstation 5 Digital Edition",
        time: "3 day ago",
      },
      {
        text: "Catherin Amber added 3 items into their wishlist",
        time: "1 week ago",
      },
      {
        text: "Mike Duke purchased Sony Bravia KD-32w800",
        time: "2 weeks ago",
      },
      {
        text: "John Winchester reviewed a product",
        time: "1 month ago",
      },
      {
        text: "Melissa Hermitage added 1 items into their wishlist",
        time: "1 month ago",
      },
      {
        text: "Admin reviewed a feedback left on item #3394-5988-77795-32",
        time: "2 months ago",
      },
    ],
  };