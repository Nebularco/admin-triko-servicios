export type DataServices = {
  type: string;
  id: string;
  attributes: {
    workflow_transition_id: number;
    workflow_id: number;
    address: string;
    duration: number;
    client: {
      id_number: string;
      first_name: string;
      last_name: string;
    };
    triko: [
      {
        id_number: string;
        first_name: string;
        last_name: string;
      }
    ];
    application_date: string;
  };
};
