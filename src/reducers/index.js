const initialState = {
  notes: [
    {
      id: 1,
      title: 'React router dom',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    },
    {
      id: 2,
      title: 'Redux',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    },
    {
      id: 3,
      title: 'React',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    },
    {
      id: 4,
      title: 'Vue',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(item => item.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
