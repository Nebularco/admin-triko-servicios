export type DataServices = {
    id: string;
    type: string;
    attributes: {
      address: string;
      duration: number;
      application_date: string;
      client: { id_number: string; first_name: string; last_name: string };
      triko: { id_number: string; first_name: string; last_name: string };
    };
  };