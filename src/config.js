const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

export default {
  style: 'mapbox://styles/mongabay/cmemu5xlk000o01r641mc0xbx',
  accessToken: REACT_APP_MAPBOX_ACCESS_TOKEN,
  showMarkers: false,
  theme: 'mongabay',
  intro: {
    title: 'Through the Safety Net',
    subtitle:
      'Oil pipeline expansion is putting the planet’s last biodiversity strongholds—and many Indigenous lands—at risk.',
    date: 'Sept. 05 2025',
    social: [
      {
        name: 'twitter',
        src: 'twitter.svg',
        href: 'https://x.com/Mongabay',
      },
      {
        name: 'facebook',
        src: 'facebook.svg',
        href: 'https://www.facebook.com/Mongabay/',
      },
    ],
  },
  logos: [
    {
      name: 'mongabay',
      src: 'mongabaylogo.png',
      width: '140',
      href: 'https://news.mongabay.com',
    },
    {
      name: 'vizzuality',
      src: 'vizzualitylogo.png',
      width: '100',
      href: 'https://vizzuality.com',
    },
  ],
  alignment: 'left',
  footer: 'Cartography by Andrés Alegría for Mongabay.',
  
  
  
  chapters: [
    {
     
     
      id: 'first chapter',
      alignment: 'left',
      hidden: false,
      title: 'Global network of gas and oil infrastructure',
      description:
        'Gas and oil pipeline routes, including proposed projects and existing infrastructure.',
      legend: [
        {
          title: 'Gas/Oil Pipelines',
          icon: 'pipeline',
        },
      ],
      sources:
        "Global Energy Monitor (GEM 2025)",
      location: {
        center: [0, 0],
        zoom: 1.25,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
                {
          layer: 'Pipelines-Mayor',
          opacity: 1,
        },
        {
          layer: 'Pipelines-All',
          opacity: 1,
        },
      ],
      onChapterExit: [
           {
          layer: 'Pipelines-Mayor',
          opacity: 1,
        },
        {
          layer: 'Pipelines-All',
          opacity: 1,
        },
      ],
    },
    {
     
     
      id: 'second-chapter',
      alignment: 'right',
      hidden: false,
      title: 'Mayor oil pipelines under consideration',
      images: [
        {
          src: 'Photo1.jpg',
          position: 'top',
          title: 'Geesthacht, Germany',
          author: 'Photo by w. Weiser on Unsplash',
        },
      ],
      description:
        "Selected routes of some of the longest oil pipeline projects in development across the world.",
      legend: [
        {
          title: 'Gas/Oil Pipelines',
          icon: 'pipeline',
        },
      ],
      sources: "Global Energy Monitor (GEM 2025)",
      location: {
        center: [0, 0],
        zoom: 2.0,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'Pipelines-Mayor',
          opacity: 1,
        },
        {
          layer: 'Pipelines-All',
          opacity: 0,
        },
      ],
      onChapterExit: [
      ],
    },
    {
     
     
      id: 'third-chapter',
      alignment: 'right',
      hidden: false,
      title: 'Araucária-Cuiabá Oil Pipeline',
      description:
          "Also known by its initials OLAC, this 1568 km pipeline was proposed in Brazil's 2021-2022 Indicative Oil Pipelines Plan as a means to transport oil from the coastal region of Paraná state to the states of Mato Grosso and Mato Grosso do Sul in Brazil's Central West region. The pipeline would be divided into five sections as outlined above, and would have an estimated cost of R$ 12,209 million (12.2 billion Brazilian reais).",
      legend: [
        {
          title: 'Gas/Oil Pipelines',
          icon: 'pipeline',
        },
        {
          title: 'Global Safety Net',
          color: '#006a54',
          pattern: 'LINEPATTERN',
        },
      ],
      sources: 'Placeholder text',
      location: {
        center: [-48.25,-21.45],
        zoom: 4.25,
        pitch: 0.0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'GSN-climate-stabilization_color',
           opacity: 0,
        },
        {
           layer: 'GSN-potential-corridors_color',
            opacity: 0,
        },
        {
          layer: 'WDPA-SA_color',
          opacity: 0,
        },
        {
          layer: 'GSN-intact-wilderness-areas_color',
          opacity: 0,
        },
        {
          layer: 'GSN-high-biodiversity_color',
         opacity: 0,
        },
        {
          layer: 'GSN-large-mammals_color',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'GSN-climate-stabilization_color',
           opacity: 0,
        },
        {
           layer: 'GSN-potential-corridors_color',
            opacity: 0,
        },
        {
          layer: 'WDPA-SA_color',
          opacity: 0,
        },
        {
          layer: 'GSN-intact-wilderness-areas_color',
          opacity: 0,
        },
        {
          layer: 'GSN-high-biodiversity_color',
         opacity: 0,
        },
        {
          layer: 'GSN-large-mammals_color',
          opacity: 0,
        },
      ],
    },
    {
     
     
      id: 'fourth-chapter',
      alignment: 'right',
      hidden: false,
      title: 'Where pipelines meet critical ecosystems',
      description:
        'Overlaying oil infrastructure with critical habitats and Indigenous homelands reveals risks of cascading fragmentation.',
      legend: [
        {
          title: 'Gas/Oil Pipelines',
          icon: 'pipeline',
        },
        {
          title: 'Indigenous Territories',
          color: '#fbe75f',
          pattern: 'LINEPATTERN',
        },
        {
          title: 'Global Safety Net',
          color: '#006a54',
          pattern: 'LINEPATTERN',
        },
      ],
      sources: 'Placeholder text',
      location: {
        center: [-47.0, -19],
        zoom: 5.25,
        pitch: 50.0,
        bearing: -40,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'GSN-climate-stabilization_color',
           opacity: 0,
        },
        {
           layer: 'GSN-potential-corridors_color',
            opacity: 0,
        },
        {
          layer: 'WDPA-SA_color',
          opacity: 0,
        },
        {
          layer: 'GSN-intact-wilderness-areas_color',
          opacity: 0,
        },
        {
          layer: 'GSN-high-biodiversity_color',
         opacity: 0,
        },
        {
          layer: 'GSN-large-mammals_color',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'GSN-climate-stabilization_color',
           opacity: 0,
        },
        {
           layer: 'GSN-potential-corridors_color',
            opacity: 0,
        },
        {
          layer: 'WDPA-SA_color',
          opacity: 0,
        },
        {
          layer: 'GSN-intact-wilderness-areas_color',
          opacity: 0,
        },
        {
          layer: 'GSN-high-biodiversity_color',
         opacity: 0,
        },
        {
          layer: 'GSN-large-mammals_color',
          opacity: 0,
        },
      ],
    },
    {
   id: 'fith-chapter',
      alignment: 'right',
      hidden: false,
      title: '1/6 Network of Protected Areas',
      description:
        'Placeholder description of this layer.',
      sources: 'Protected Planet/WDPA (2025)',
      location: {
        center: [-50.1,-24.6],
        zoom: 8,
        pitch: 50,
        bearing: -20,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'GSN-climate-stabilization_color',
           opacity: 0,
        },
        {
           layer: 'GSN-potential-corridors_color',
            opacity: 0,
        },
        {
          layer: 'WDPA-SA_color',
          opacity: 1,
        },
        {
          layer: 'GSN-intact-wilderness-areas_color',
          opacity: 0,
        },
        {
          layer: 'GSN-high-biodiversity_color',
         opacity: 0,
        },
        {
          layer: 'GSN-large-mammals_color',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'GSN-climate-stabilization_color',
           opacity: 0,
        },
        {
           layer: 'GSN-potential-corridors_color',
            opacity: 0,
        },
        {
          layer: 'WDPA-SA_color',
          opacity: 0,
        },
        {
          layer: 'GSN-intact-wilderness-areas_color',
          opacity: 0,
        },
        {
          layer: 'GSN-high-biodiversity_color',
         opacity: 0,
        },
        {
          layer: 'GSN-large-mammals_color',
          opacity: 0,
        },
      ],
    },
     {
   id: 'sixth-chapter',
      alignment: 'right',
      hidden: false,
      title: '2/6 Potential Wildlife Corridors',
      description:
        'Placeholder description of this layer.',
      sources: 'Protected Planet/WDPA (2025)',
      location: {
        center: [-50.1,-24.6],
        zoom: 8,
        pitch: 50,
        bearing: -20,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'GSN-climate-stabilization_color',
           opacity: 0,
        },
        {
           layer: 'GSN-potential-corridors_color',
            opacity: 1,
        },
        {
          layer: 'WDPA-SA_color',
          opacity: 0,
        },
        {
          layer: 'GSN-intact-wilderness-areas_color',
          opacity: 0,
        },
        {
          layer: 'GSN-high-biodiversity_color',
         opacity: 0,
        },
        {
          layer: 'GSN-large-mammals_color',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'GSN-climate-stabilization_color',
           opacity: 0,
        },
        {
           layer: 'GSN-potential-corridors_color',
            opacity: 0,
        },
        {
          layer: 'WDPA-SA_color',
          opacity: 0,
        },
        {
          layer: 'GSN-intact-wilderness-areas_color',
          opacity: 0,
        },
        {
          layer: 'GSN-high-biodiversity_color',
         opacity: 0,
        },
        {
          layer: 'GSN-large-mammals_color',
          opacity: 0,
        },
      ],
    },
    
       {
   id: 'seventh-chapter',
      alignment: 'right',
      hidden: false,
      title: '3/6 Intact Wilderness Areas',
      description:
        'Placeholder description of this layer.',
      sources: 'Protected Planet/WDPA (2025)',
      location: {
        center: [-50.1,-24.6],
        zoom: 8,
        pitch: 50,
        bearing: -20,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'GSN-climate-stabilization_color',
           opacity: 0,
        },
        {
           layer: 'GSN-potential-corridors_color',
            opacity: 0,
        },
        {
          layer: 'WDPA-SA_color',
          opacity: 0,
        },
        {
          layer: 'GSN-intact-wilderness-areas_color',
          opacity: 1,
        },
        {
          layer: 'GSN-high-biodiversity_color',
         opacity: 0,
        },
        {
          layer: 'GSN-large-mammals_color',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'GSN-climate-stabilization_color',
           opacity: 0,
        },
        {
           layer: 'GSN-potential-corridors_color',
            opacity: 0,
        },
        {
          layer: 'WDPA-SA_color',
          opacity: 0,
        },
        {
          layer: 'GSN-intact-wilderness-areas_color',
          opacity: 0,
        },
        {
          layer: 'GSN-high-biodiversity_color',
         opacity: 0,
        },
        {
          layer: 'GSN-large-mammals_color',
          opacity: 0,
        },
      ],
    },
    
    
       {
   id: 'eigthth-chapter',
      alignment: 'right',
      hidden: false,
      title: '4/6 High Biodiversity Areas',
      description:
        'Placeholder description of this layer.',
      sources: 'Protected Planet/WDPA (2025)',
      location: {
        center: [-50.1,-24.6],
        zoom: 8,
        pitch: 50,
        bearing: -20,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'GSN-climate-stabilization_color',
           opacity: 0,
        },
        {
           layer: 'GSN-potential-corridors_color',
            opacity: 0,
        },
        {
          layer: 'WDPA-SA_color',
          opacity: 0,
        },
        {
          layer: 'GSN-intact-wilderness-areas_color',
          opacity: 0,
        },
        {
          layer: 'GSN-high-biodiversity_color',
         opacity: 1,
        },
        {
          layer: 'GSN-large-mammals_color',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'GSN-climate-stabilization_color',
           opacity: 0,
        },
        {
           layer: 'GSN-potential-corridors_color',
            opacity: 0,
        },
        {
          layer: 'WDPA-SA_color',
          opacity: 0,
        },
        {
          layer: 'GSN-intact-wilderness-areas_color',
          opacity: 0,
        },
        {
          layer: 'GSN-high-biodiversity_color',
         opacity: 0,
        },
        {
          layer: 'GSN-large-mammals_color',
          opacity: 0,
        },
      ],
    },
    
    
       {
   id: 'ninth-chapter',
      alignment: 'right',
      hidden: false,
      title: '5/6 Large Mammal Landscapes',
      description:
        'Placeholder description of this layer.',
      sources: 'Protected Planet/WDPA (2025)',
      location: {
        center: [-50.1,-24.6],
        zoom: 8,
        pitch: 50,
        bearing: -20,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'GSN-climate-stabilization_color',
           opacity: 0,
        },
        {
           layer: 'GSN-potential-corridors_color',
            opacity: 0,
        },
        {
          layer: 'WDPA-SA_color',
          opacity: 0,
        },
        {
          layer: 'GSN-intact-wilderness-areas_color',
          opacity: 0,
        },
        {
          layer: 'GSN-high-biodiversity_color',
         opacity: 0,
        },
        {
          layer: 'GSN-large-mammals_color',
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: 'GSN-climate-stabilization_color',
           opacity: 0,
        },
        {
           layer: 'GSN-potential-corridors_color',
            opacity: 0,
        },
        {
          layer: 'WDPA-SA_color',
          opacity: 0,
        },
        {
          layer: 'GSN-intact-wilderness-areas_color',
          opacity: 0,
        },
        {
          layer: 'GSN-high-biodiversity_color',
         opacity: 0,
        },
        {
          layer: 'GSN-large-mammals_color',
          opacity: 0,
        },
      ],
    },
    
    
       {
   id: 'tenth-chapter',
      alignment: 'right',
      hidden: false,
      title: '6/6 Climate-Stabilization Areas',
      description:
        'Placeholder description of this layer.',
      sources: 'Protected Planet/WDPA (2025)',
      location: {
        center: [-50.1,-24.6],
        zoom: 8,
        pitch: 50,
        bearing: -20,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'GSN-climate-stabilization_color',
           opacity: 1,
        },
        {
           layer: 'GSN-potential-corridors_color',
            opacity: 0,
        },
        {
          layer: 'WDPA-SA_color',
          opacity: 0,
        },
        {
          layer: 'GSN-intact-wilderness-areas_color',
          opacity: 0,
        },
        {
          layer: 'GSN-high-biodiversity_color',
         opacity: 0,
        },
        {
          layer: 'GSN-large-mammals_color',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'GSN-climate-stabilization_color',
           opacity: 0,
        },
        {
           layer: 'GSN-potential-corridors_color',
            opacity: 0,
        },
        {
          layer: 'WDPA-SA_color',
          opacity: 0,
        },
        {
          layer: 'GSN-intact-wilderness-areas_color',
          opacity: 0,
        },
        {
          layer: 'GSN-high-biodiversity_color',
         opacity: 0,
        },
        {
          layer: 'GSN-large-mammals_color',
          opacity: 0,
        },
      ],
    },
    
    
      {
   id: 'eleventh-chapter',
      alignment: 'right',
      hidden: false,
      title: 'Example of focus area',
      description:
        'Placeholder description of this layer.',
      sources: 'Source xy',
      location: {
        center: [-49.680,-25.515],
        zoom: 10.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'GSN-climate-stabilization_color',
           opacity: 0,
        },
        {
           layer: 'GSN-potential-corridors_color',
            opacity: 0,
        },
        {
          layer: 'WDPA-SA_color',
          opacity: 0,
        },
        {
          layer: 'GSN-intact-wilderness-areas_color',
          opacity: 0,
        },
        {
          layer: 'GSN-high-biodiversity_color',
         opacity: 0,
        },
        {
          layer: 'GSN-large-mammals_color',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'GSN-climate-stabilization_color',
           opacity: 0,
        },
        {
           layer: 'GSN-potential-corridors_color',
            opacity: 0,
        },
        {
          layer: 'WDPA-SA_color',
          opacity: 0,
        },
        {
          layer: 'GSN-intact-wilderness-areas_color',
          opacity: 0,
        },
        {
          layer: 'GSN-high-biodiversity_color',
         opacity: 0,
        },
        {
          layer: 'GSN-large-mammals_color',
          opacity: 0,
        },
      ],
    },

  ],
};
